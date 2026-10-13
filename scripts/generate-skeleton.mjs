#!/usr/bin/env node
/**
 * 《中华传统婚丧礼俗资料库》骨架生成器
 *
 * 用法：
 *   node scripts/generate-skeleton.mjs            # 生成缺失的条目文档，并重建全部 README 索引
 *   node scripts/generate-skeleton.mjs --force    # 覆盖已存在的条目文档（谨慎使用）
 *
 * 说明：
 *   - 三级条目文档默认「只补不改」，避免覆盖贡献者的撰写成果。
 *   - README.md 属于派生产物（索引），每次运行都会重新生成。
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { BOOK_EN, SECTION_EN, ENTRY_EN, REGION_EN, ETHNIC_EN, NOTE_EN, UI, entrySlug } from './i18n.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DOCS_DIR = path.join(ROOT, 'docs');
/** 英文树根目录：结构镜像 docs/，仅存索引与已英译的条目正文 */
const EN_DIR = path.join(ROOT, 'en');
const UPDATED = '2026-10-10';
const FORCE = process.argv.includes('--force');

/* ------------------------------------------------------------------ *
 * 通用数据
 * ------------------------------------------------------------------ */

const pad = (n) => String(n).padStart(2, '0');

/** 55 个少数民族（按《中国民族统计年鉴》惯用排序） */
const ETHNIC_GROUPS = [
  '蒙古族', '回族', '藏族', '维吾尔族', '苗族', '彝族', '壮族', '布依族', '朝鲜族', '满族',
  '侗族', '瑶族', '白族', '土家族', '哈尼族', '哈萨克族', '傣族', '黎族', '傈僳族', '佤族',
  '畲族', '高山族', '拉祜族', '水族', '东乡族', '纳西族', '景颇族', '柯尔克孜族', '土族', '达斡尔族',
  '仫佬族', '羌族', '布朗族', '撒拉族', '毛南族', '仡佬族', '锡伯族', '阿昌族', '普米族', '塔吉克族',
  '怒族', '乌孜别克族', '俄罗斯族', '鄂温克族', '德昂族', '保安族', '裕固族', '京族', '塔塔尔族', '独龙族',
  '鄂伦春族', '赫哲族', '门巴族', '珞巴族', '基诺族',
];

/** 汉族地域变体：[文件名用简称, 条目标题主体, 备注] */
const HAN_REGIONS = [
  ['北京', '北京', ''],
  ['天津', '天津', ''],
  ['河北', '河北', ''],
  ['山西', '山西', '晋商婚俗'],
  ['内蒙古', '内蒙古汉族', '走西口移民婚俗'],
  ['辽宁', '辽宁', ''],
  ['吉林', '吉林', ''],
  ['黑龙江', '黑龙江', ''],
  ['上海', '上海', ''],
  ['江苏', '江苏', ''],
  ['浙江', '浙江', ''],
  ['安徽', '安徽', '含徽州民系'],
  ['福建', '福建', '含闽南、福州民系'],
  ['江西', '江西', ''],
  ['山东', '山东', ''],
  ['河南', '河南', ''],
  ['湖北', '湖北', ''],
  ['湖南', '湖南', ''],
  ['广东', '广东', '含广府、潮汕、客家民系'],
  ['广西', '广西汉族', ''],
  ['海南', '海南', ''],
  ['重庆', '重庆', ''],
  ['四川', '四川', ''],
  ['贵州', '贵州汉族', ''],
  ['云南', '云南汉族', ''],
  ['陕西', '陕西', ''],
  ['甘肃', '甘肃', ''],
  ['青海', '青海汉族', ''],
  ['宁夏', '宁夏', ''],
  ['新疆', '新疆汉族', '屯垦移民婚俗'],
  ['台湾', '台湾汉人', ''],
  ['港澳', '香港澳门', ''],
];

/* ------------------------------------------------------------------ *
 * 条目清单：一级 → 二级 → 三级（每条 = 一个 markdown 文档）
 * 三级条目写法：[标题, 释义摘要, 文件名主干]
 * ------------------------------------------------------------------ */

const BOOKS = [
  {
    id: '01',
    dir: '01-marriage-rites',
    title: '婚嫁礼俗（嘉礼）',
    desc:
      '婚嫁属于传统五礼中的「嘉礼」。本编按「礼制源流 → 婚前 → 婚日 → 婚后 → 器物 → 称谓 → 择吉 → 地域 → 民族」九个维度，' +
      '整理自先秦六礼至当代中式婚礼的完整仪节链条，兼收汉族各地与各少数民族的婚俗变体。',
    sections: [
      {
        id: '01-01',
        dir: '01-01-six-rites',
        title: '先秦六礼',
        desc: '《仪礼·士昏礼》所载纳采、问名、纳吉、纳征、请期、亲迎六道程序，是传统婚嫁礼制的文本原型。',
        tags: ['嘉礼', '六礼', '聘娶婚'],
        sources: ['《仪礼·士昏礼》', '《礼记·昏义》', '《周礼·地官·媒氏》'],
        region: '全国',
        ethnicity: '汉族',
        entries: [
          ['纳采', '男家遣媒提亲，以雁为贽，六礼之首。', '纳采'],
          ['问名', '问女之名与生辰，以归卜其吉凶。', '问名'],
          ['纳吉', '卜得吉兆，告于女家，婚约遂定。', '纳吉'],
          ['纳征', '纳币定婚，即后世「下聘」「过大礼」之源。', '纳征'],
          ['请期', '男家议定婚期，请女家允准。', '请期'],
          ['亲迎', '新郎亲往迎娶，六礼之成。', '亲迎'],
          ['六礼源流与《仪礼·士昏礼》', '礼经原文、仪节复原与六礼的文本依据。', '六礼源流与士昏礼'],
          ['六礼的简化与后世流变', '三礼、四礼的合并，以及近现代新式婚礼的嬗变。', '六礼的简化与流变'],
          ['同姓不婚与周代婚姻制度', '宗族外婚、媵妾制与一夫一妻多妾的礼制基础。', '同姓不婚与周代婚制'],
          ['媒妁制度与“父母之命，媒妁之言”', '官媒、私媒与媒人职业化的礼俗脉络。', '媒妁制度'],
        ],
      },
      {
        id: '01-02',
        dir: '01-02-pre-wedding-customs',
        title: '婚前习俗',
        desc: '自议婚、定婚到备嫁的整套婚前民俗，包含媒聘、合婚、下定、择期、妆奁等环节。',
        tags: ['嘉礼', '婚前', '议婚'],
        sources: ['《仪礼·士昏礼》', '地方志·风俗志', '民俗田野调查资料'],
        region: '全国',
        ethnicity: '汉族',
        entries: [
          ['提亲与说媒', '媒人牵线、双方探问门户的议婚开端。', '提亲与说媒'],
          ['相亲（相看门户）', '男女两家相看人品、家境与门第的过程。', '相亲'],
          ['合婚与八字相配', '交换庚帖、以生辰八字卜问婚姻吉凶。', '合婚'],
          ['小定（过小礼）', '初步定亲，男家致送小额聘礼。', '小定'],
          ['大定（过大礼、下聘）', '正式纳聘定婚，婚约由此生效。', '大定'],
          ['彩礼与嫁妆议定', '财礼数额、回礼与妆奁的议定及纠纷处理。', '彩礼与嫁妆'],
          ['婚约与定亲文书', '婚约的法律与礼俗效力、立约与退婚程式。', '婚约与定亲文书'],
          ['送日子（择定婚期）', '将择定婚期通报女家并送期单。', '送日子'],
          ['催妆礼', '婚期将近，男家送礼催女家备嫁。', '催妆礼'],
          ['安床与铺床', '婚前安置新床、铺床撒帐与吉祥祝语。', '安床与铺床'],
          ['上头与开脸', '女子改髻加笄、绞面修容的出阁前仪俗。', '上头与开脸'],
          ['嫁妆置办与送嫁妆', '妆奁品类、抬送次序与沿途仪俗。', '嫁妆置办与送嫁妆'],
          ['哭嫁', '哭嫁歌的类型、唱词结构与情感功能。', '哭嫁'],
          ['告庙与婚前祭祖', '婚事前告于祖先、祈请庇佑的家礼。', '告庙与婚前祭祖'],
          ['童养媳、指腹婚与娃娃亲（旧俗考）', '旧式畸形婚俗的成因、形态与批判性考察。', '旧式婚俗考'],
        ],
      },
      {
        id: '01-03',
        dir: '01-03-wedding-day-ceremony',
        title: '婚礼当日仪节',
        desc: '自亲迎出门到洞房花烛的当日仪程，是婚俗中最富仪式感的部分。',
        tags: ['嘉礼', '婚礼当日', '仪节'],
        sources: ['《仪礼·士昏礼》', '《东京梦华录》', '地方志·风俗志'],
        region: '全国',
        ethnicity: '汉族',
        entries: [
          ['亲迎与迎娶仪仗', '迎亲队伍、执事、鼓乐与仪仗的组成与路线。', '亲迎与迎娶仪仗'],
          ['拦门与开门利市', '女家闭门索红包、对歌赛诗的开门口彩。', '拦门与开门利市'],
          ['拜堂（三拜礼）', '一拜天地、二拜高堂、夫妻对拜的礼义。', '拜堂'],
          ['合卺（交杯酒）', '剖瓠为二、夫妇各执一瓢而饮的合体之礼。', '合卺'],
          ['结发与系红绳', '结发为夫妻与系红绳、绾同心结的象征。', '结发'],
          ['撒帐', '撒枣栗、五谷入帐，祝多子多福。', '撒帐'],
          ['挑盖头（喜秤挑盖头）', '以喜秤挑盖头的仪节与吉祥口彩。', '挑盖头'],
          ['坐帐与合床', '新人坐帐受贺、合床安寝的仪俗。', '坐帐与合床'],
          ['庙见（拜舅姑）', '婚后见舅姑、谒家庙，正式取得妇职。', '庙见'],
          ['喜宴与敬酒仪节', '婚宴座次、上菜次序与新人敬酒的规矩。', '喜宴与敬酒'],
          ['闹洞房', '闹房的类型、区域差异与礼俗功能。', '闹洞房'],
          ['见亲戚与分大小', '新妇认亲、行拜见礼与改口称呼。', '见亲戚与分大小'],
          ['回门（归宁）', '婚后同返女家省亲的时间与仪节。', '回门'],
          ['花轿迎娶仪制', '花轿形制、抬轿规制与上轿落轿之礼。', '花轿迎娶仪制'],
          ['喜娘、伴娘与伴郎', '婚礼协助者的角色、职责与吉祥条件。', '喜娘与伴娘伴郎'],
          ['婚庆执事与司仪（礼生）', '司仪、礼生、执事的赞礼程式的口头套语。', '婚庆执事与司仪'],
          ['现代中式婚礼流程整合', '传统仪节在现代婚礼中的保留、简化与再编排。', '现代中式婚礼流程'],
        ],
      },
      {
        id: '01-04',
        dir: '01-04-post-wedding-customs',
        title: '婚后礼俗',
        desc: '婚礼结束后延续的交往、认亲、生育祈愿与成家立户等礼俗。',
        tags: ['嘉礼', '婚后', '往来'],
        sources: ['地方志·风俗志', '民俗田野调查资料'],
        region: '全国',
        ethnicity: '汉族',
        entries: [
          ['三日回门', '婚后三日新妇归省的仪节与礼物。', '三日回门'],
          ['双回门与住对月', '夫妇同回女家、新妇住满一月的两地习俗。', '双回门与住对月'],
          ['谢媒', '婚成之后谢媒的礼物、礼数与俗谚。', '谢媒'],
          ['送灯与添丁祈愿', '娘家送灯、送子等祈嗣习俗。', '送灯与添丁'],
          ['满月、百日与周岁礼', '添丁之后的满月、百日、抓周等育儿礼。', '满月百日与周岁'],
          ['认亲与走亲（新亲往来）', '新亲之间的节令往来与馈赠规则。', '认亲与走亲'],
          ['分家与立户礼俗', '成家立户、分家析产中的礼俗约束。', '分家与立户'],
          ['结婚纪念与周年礼俗', '从传统「归宁」到现代结婚纪念日的演变。', '结婚纪念与周年'],
        ],
      },
      {
        id: '01-05',
        dir: '01-05-wedding-objects',
        title: '婚嫁器物',
        desc: '婚嫁过程中使用的器物、服饰、文书与吉祥纹样谱系。',
        tags: ['嘉礼', '器物', '服饰'],
        sources: ['《事物纪原》', '地方志·风俗志', '博物馆藏品著录'],
        region: '全国',
        ethnicity: '汉族',
        entries: [
          ['六礼器物（雁、玄纁束帛、俪皮）', '礼经所载贽见之物及其礼义。', '六礼器物'],
          ['花轿（喜轿）', '花轿的形制、装饰、抬轿规制与租赁行业。', '花轿'],
          ['盖头', '盖头的形制、材质与其遮蔽象征的源流。', '盖头'],
          ['婚服：凤冠霞帔与裙褂', '历代婚服形制及其等级与地域差异。', '婚服'],
          ['婚鞋（踩堂鞋）', '绣鞋、踩堂鞋与「不落夫家」等鞋俗。', '婚鞋'],
          ['喜被与喜枕', '龙凤被、喜枕的缝制讲究与铺陈规矩。', '喜被与喜枕'],
          ['花烛与龙凤喜烛', '洞房花烛的形制、点烛仪节与相关禁忌。', '花烛'],
          ['合卺杯与交杯酒器', '合卺杯、交杯酒器的器形与用法。', '合卺杯与交杯酒器'],
          ['喜秤与吉祥器物', '喜秤、如意、斗、尺等吉祥器物的用途。', '喜秤与吉祥器物'],
          ['喜帖（龙凤帖）与请柬', '喜帖的形制、行款与投送礼数。', '喜帖与请柬'],
          ['嫁妆箱笼与子孙桶', '妆奁箱笼、子孙桶等妆具的讲究。', '嫁妆箱笼与子孙桶'],
          ['锣鼓唢呐与喜庆乐器', '婚庆鼓乐班子的编制、曲牌与吹打程式。', '喜庆乐器'],
          ['爆竹与礼花', '婚庆爆竹的放法、次序与地域差异。', '爆竹与礼花'],
          ['天地桌与供器', '天地桌的陈列、香案供器与祭告仪节。', '天地桌与供器'],
          ['喜字、婚联与剪纸窗花', '喜字、喜联的书写张贴与剪纸纹样。', '喜字婚联与剪纸'],
          ['婚庆吉祥纹样（龙凤、鸳鸯、石榴、双喜）', '婚庆装饰中吉祥纹样的寓意谱系。', '吉祥纹样'],
        ],
      },
      {
        id: '01-06',
        dir: '01-06-wedding-appellations',
        title: '婚嫁称谓',
        desc: '婚嫁语境中的亲属称谓、媒人称谓、婚龄称谓与相关动词体系。',
        tags: ['嘉礼', '称谓', '亲属'],
        sources: ['《尔雅·释亲》', '《称谓录》', '《释名》'],
        region: '全国',
        ethnicity: '汉族',
        entries: [
          ['婚嫁亲属称谓总览', '婚嫁前后亲属称谓的变化与整体框架。', '婚嫁亲属称谓总览'],
          ['媒人（月老、红娘、冰人）', '媒人各类雅称、俗称的来源与用法。', '媒人称谓'],
          ['新郎与新娘称谓源流', '新郎、新娘、官人、娘子等称谓的源流。', '新郎新娘称谓'],
          ['亲家、亲家公、亲家母', '姻亲长辈称谓的用法与地域变体。', '亲家称谓'],
          ['妯娌、连襟、姑嫂、翁婿', '平辈姻亲与半姻亲关系的称谓体系。', '姻亲互称'],
          ['嫡庶、继室与侧室称谓', '正室、继室、侧室、庶出等相关称谓。', '嫡庶称谓'],
          ['婚龄称谓（及笄、弱冠、待字、出阁）', '各婚龄阶段称谓及其礼制依据。', '婚龄称谓'],
          ['嫁娶动词体系（娶、嫁、适、归、赘）', '表示嫁娶关系的动词群及其语义差别。', '嫁娶动词体系'],
        ],
      },
      {
        id: '01-07',
        dir: '01-07-wedding-auspicious-taboos',
        title: '婚嫁择吉与禁忌',
        desc: '婚嫁择日、合婚的原理，以及婚仪全过程中各类禁忌的民俗解释。',
        tags: ['嘉礼', '择吉', '禁忌'],
        sources: ['《协纪辨方书》', '《玉匣记》', '民俗田野调查资料'],
        region: '全国',
        ethnicity: '汉族',
        entries: [
          ['婚期择吉（黄道吉日与周堂图）', '择日的黄道黑道判定与周堂图的使用。', '婚期择吉'],
          ['八字合婚与命理宜忌', '八字、纳音、神煞在合婚中的判定方法。', '八字合婚'],
          ['属相冲克与六冲', '属相六冲、六合、三合与婚配宜忌。', '属相冲克'],
          ['婚嫁月令禁忌（无春年、寡妇年）', '无春年、本命年等月令禁忌的由来。', '月令禁忌'],
          ['婚礼行为禁忌', '忌打碎器物、忌哭、忌扫地等行为禁忌。', '行为禁忌'],
          ['婚嫁人员禁忌', '忌寡妇、忌属相相冲者、忌服丧者到场。', '人员禁忌'],
          ['婚嫁路线与方位禁忌', '迎亲路线、不走回头路与方位吉凶。', '路线与方位禁忌'],
          ['喜冲喜与冲花轿', '两队花轿相遇、喜冲喜的化解办法。', '喜冲喜与冲花轿'],
        ],
      },
      {
        id: '01-08',
        dir: '01-08-han-regional-variants',
        title: '汉族各地域婚俗变体',
        desc: '以省级行政区为纲，兼及广府、潮汕、客家、徽州、闽南等民系，记录汉族婚俗的地域变体。',
        tags: ['嘉礼', '地域变体', '汉族'],
        sources: ['各省地方志·风俗志', '《中华全国风俗志》', '民俗田野调查资料'],
        generated: 'region-marriage',
      },
      {
        id: '01-09',
        dir: '01-09-ethnic-minority-marriage',
        title: '少数民族婚嫁习俗',
        desc: '以 55 个少数民族为单位，记录择偶、议婚、婚礼仪节与婚后习俗的族别特征。',
        tags: ['嘉礼', '民族', '少数民族'],
        sources: ['《中国少数民族风俗志》', '各民族简史简志', '民俗田野调查资料'],
        generated: 'ethnic-marriage',
      },
    ],
  },

  {
    id: '02',
    dir: '02-funeral-rites',
    title: '丧葬礼俗（凶礼）',
    desc:
      '丧葬属于传统五礼中的「凶礼」。本编按「初丧 → 入殓 → 停灵 → 出殡下葬 → 葬后祭祀 → 五服 → 器物明器 → 丧服 → 称谓 → 择吉 → 地域 → 民族」' +
      '十二个维度，整理自《仪礼·士丧礼》以下直至当代殡葬改革的完整礼俗链条。',
    diagram: {
      src: 'assets/diagrams/丧礼仪程总流程图.svg',
      altZh: '丧礼仪程总流程图',
      altEn: 'Overall flowchart of the funeral rites',
      captionZh: '图 6　丧礼仪程总流程：初丧—入殓—停灵—出殡下葬—葬后祭祀。',
      captionEn: 'Figure 6. Overall flow of the funeral rites: initial mourning, encoffining, lying in state, procession and burial, post-burial sacrifices.',
    },
    sections: [
      {
        id: '02-01',
        dir: '02-01-initial-mourning',
        title: '初丧',
        desc: '自临终、招魂、沐浴、饭含到报丧、立丧主、开吊受吊的最初阶段仪节。',
        tags: ['凶礼', '初丧', '临终'],
        sources: ['《仪礼·士丧礼》', '《礼记·丧大记》', '《朱子家礼·丧礼》'],
        region: '全国',
        ethnicity: '汉族',
        entries: [
          ['属纩（临终与易箦）', '临终移床易箦、属纩候气以验绝。', '属纩'],
          ['复礼（招魂复魄）', '登屋北面呼号，以衣覆尸，冀其复生。', '复礼'],
          ['沐浴', '洗尸、翦爪、束发，为饭含作准备的洁身之礼。', '沐浴'],
          ['饭含', '以米贝、玉珠实于死者口中，示不忍虚其口。', '饭含'],
          ['袭尸与易服', '为死者着新衣、加冒、设幎目与握手。', '袭尸与易服'],
          ['设奠与帷堂', '设灵座供奠、帷堂以别内外。', '设奠与帷堂'],
          ['报丧与讣告', '以讣告通于亲友，报丧方式的地域差异。', '报丧与讣告'],
          ['奔丧', '闻丧奔赴之礼、哭位序列与行程限制。', '奔丧'],
          ['立丧主与治丧班子', '丧主、主妇、护丧及司书、司货的分工。', '立丧主与治丧班子'],
          ['吊唁与开吊受吊', '吊客亲临、赠襚、赙赠与受吊答礼的仪节。', '吊唁与开吊受吊'],
        ],
      },
      {
        id: '02-02',
        dir: '02-02-encoffining',
        title: '入殓',
        desc: '小殓、大殓与遗体入棺的仪节，以及棺椁、装殓用物的规制备要。',
        tags: ['凶礼', '入殓', '棺椁'],
        sources: ['《仪礼·士丧礼》', '《礼记·丧大记》', '地方志·丧葬志'],
        region: '全国',
        ethnicity: '汉族',
        entries: [
          ['小殓', '为死者加衣于床、设奠、亲属哭踊。', '小殓'],
          ['大殓', '举尸入棺、陈衣加饰，生死之大别。', '大殓'],
          ['入殓择时与禁忌', '择吉时入殓、避冲煞及相关禁忌。', '入殓择时与禁忌'],
          ['棺椁形制与选材', '历代棺椁等级、用材、榫卯与髹漆做法。', '棺椁形制与选材'],
          ['装殓仪节与随葬铺陈', '棺内铺陈、垫枕、随葬品的安放次序。', '装殓仪节与铺陈'],
          ['盖棺与钉棺礼俗', '盖棺、楔钉、封漆与家属最后的哭别。', '盖棺与钉棺'],
          ['开光（开眼光）', '开眼光、开耳光等仪式及其吉祥套语。', '开光'],
          ['入殓用物（打狗棒、五谷袋等）', '打狗棒、五谷袋、过桥饼等入殓用物。', '入殓用物'],
          ['哭丧与哭丧歌', '入殓时的哭丧礼俗与哭丧歌的类型。', '哭丧与哭丧歌'],
          ['各地入殓习俗差异', '南北入殓程序、用物与民俗细节的差异。', '各地入殓差异'],
        ],
      },
      {
        id: '02-03',
        dir: '02-03-lying-in-state',
        title: '停灵',
        desc: '灵堂布置、守灵、朝夕奠与超度法事，是丧礼中持续时间最长的阶段。',
        tags: ['凶礼', '停灵', '灵堂'],
        sources: ['《朱子家礼·丧礼》', '《禅门日诵》', '《道藏》度亡科仪'],
        region: '全国',
        ethnicity: '汉族',
        entries: [
          ['灵堂布置', '灵位、遗像、幔帐、纸扎与香烛的陈设规制。', '灵堂布置'],
          ['停灵期限与择日', '停灵三日、五日的择日依据与地域习惯。', '停灵期限与择日'],
          ['守灵（守夜）', '亲属轮值守夜、照看香火与陪灵的礼俗。', '守灵'],
          ['朝夕奠与供饭', '晨昏设奠、供饭上香与哭踊之节。', '朝夕奠与供饭'],
          ['哭丧调与哭灵', '各地哭灵的腔调、哭词与职业哭丧人。', '哭丧调与哭灵'],
          ['佛教超度法事', '接引、瑜伽焰口、蒙山施食等佛事仪轨。', '佛教超度法事'],
          ['道教科仪与破狱', '破狱、炼度、召魂等道门度亡科仪。', '道教科仪与破狱'],
          ['儒礼家奠（三献礼）', '初献、亚献、终献与读祭文的儒家丧礼仪程。', '儒礼家奠三献礼'],
          ['灵前上香与吊唁仪节', '上香、跪拜、慰唁与孝子答礼的规范。', '灵前上香与吊唁'],
          ['祭文、挽联与挽幛', '祭文、挽联、挽幛的文体与陈放位置。', '祭文挽联与挽幛'],
          ['灵堂禁忌', '灵堂内的行为、言语与生肖冲煞禁忌。', '灵堂禁忌'],
        ],
      },
      {
        id: '02-04',
        dir: '02-04-funeral-procession-burial',
        title: '出殡下葬',
        desc: '启灵、送葬、路祭、下葬与封土的完整过程，含葬式类型与墓地堪舆。',
        tags: ['凶礼', '出殡', '下葬'],
        sources: ['《仪礼·既夕礼》', '《礼记·檀弓》', '地方志·丧葬志'],
        region: '全国',
        ethnicity: '汉族',
        entries: [
          ['择日与出殡时辰', '出殡日期、时辰的选择与重丧规避。', '择日与出殡时辰'],
          ['启灵与辞灵', '启灵、辞灵、举哀与移棺出门的仪节。', '启灵与辞灵'],
          ['摔盆', '丧盆摔碎的仪节及其继承权象征的解释。', '摔盆'],
          ['送葬队伍与仪仗', '执绋、铭旌、鼓乐、纸扎与队伍序列。', '送葬队伍与仪仗'],
          ['路祭', '亲友于通衢设奠的路祭之俗。', '路祭'],
          ['引路幡、招魂幡与撒纸钱', '引魂幡、买路钱的形制与撒放方式。', '引路幡与撒纸钱'],
          ['棺罩与抬棺（杠房）', '棺罩、杠绳与杠夫（八抬、十六抬）的行业规制。', '棺罩与抬棺'],
          ['下葬（落葬与封土）', '罗盘定向、落棺、掩土、筑坟的完整流程。', '下葬与封土'],
          ['墓地选择与阴宅堪舆', '形势派与理气派的阴宅选址原则。', '墓地选择与阴宅堪舆'],
          ['点穴定向与罗盘分金', '点穴、立向、分金坐度的操作与讲究。', '点穴定向与分金'],
          ['随葬品与明器摆放', '随葬器物的品类、位置与礼制约束。', '随葬品与明器摆放'],
          ['葬式类型（土、火、水、天、树、悬棺、塔葬）', '主要葬式的地理分布与文化解释。', '葬式类型'],
          ['合葬与迁葬', '夫妻合葬、祔葬与迁葬改葬的礼俗。', '合葬与迁葬'],
          ['回灵与谢孝', '回灵、安灵、谢孝与答谢吊客的仪节。', '回灵与谢孝'],
          ['现代殡仪与火化流程', '遗体接运、告别仪式与火化的现代流程。', '现代殡仪与火化'],
        ],
      },
      {
        id: '02-05',
        dir: '02-05-post-burial-sacrifices',
        title: '葬后系列祭祀',
        desc: '从复三、七七到周年、除服，以及清明、中元等岁时祭祖的完整祭祀序列。',
        tags: ['凶礼', '祭祀', '岁时'],
        sources: ['《朱子家礼·祭礼》', '《荆楚岁时记》', '地方志·祭祀志'],
        region: '全国',
        ethnicity: '汉族',
        entries: [
          ['复三（圆坟）', '葬后三日修坟、哭奠的复三之礼。', '复三与圆坟'],
          ['做七（七七）', '头七至七七的周期祭祀及其地方差异。', '做七'],
          ['百日祭', '卒后百日设祭的仪节与供品。', '百日祭'],
          ['周年祭（小祥、大祥）', '小祥、大祥的日期、服饰与祭仪。', '周年祭'],
          ['除服与禫祭', '禫祭除服的时间、仪式与服制终结。', '除服与禫祭'],
          ['清明扫墓', '扫墓、培土、挂纸与寒食清明合流的由来。', '清明扫墓'],
          ['中元节祭祖', '七月半祭祖、放河灯与盂兰盆会的融合。', '中元节祭祖'],
          ['寒衣节送寒衣', '十月初一焚送寒衣的由来与仪节。', '寒衣节'],
          ['冬至与除夕祭祖', '岁时祭祖的两大节点与家祭仪节。', '冬至与除夕祭祖'],
          ['忌日祭与生辰祭', '忌日、冥诞设祭的家礼规范。', '忌日与生辰祭'],
          ['家庙与祠堂祭祀', '家庙、祠堂的祭祖制度与族祭仪式。', '家庙与祠堂祭祀'],
          ['墓祭与祠祭仪节比较', '墓祭与祠祭在空间、时间与参与者上的差异。', '墓祭与祠祭比较'],
          ['祭祖供品与纸扎冥币', '时令供品、纸扎与烧化的种类与讲究。', '祭祖供品与纸扎冥币'],
          ['现代追思会与网上祭扫', '追思会、网上祭扫与生态安葬等新形态。', '现代追思会与网上祭扫'],
        ],
      },
      {
        id: '02-06',
        dir: '02-06-five-degrees-mourning',
        title: '五服制度',
        desc: '斩衰、齐衰、大功、小功、缌麻五等服制及其与宗法、继承制度的关联。',
        tags: ['凶礼', '五服', '宗法'],
        sources: ['《仪礼·丧服》', '《礼记·服问》', '《大清通礼》'],
        region: '全国',
        ethnicity: '汉族',
        entries: [
          ['五服制度总述', '以亲疏定服等，五服与九族的整体框架。', '五服制度总述'],
          ['斩衰（三年）', '最重之服：子为父、妻为夫、臣为君。', '斩衰'],
          ['齐衰（三年、杖期、不杖期、三月）', '齐衰四等的适用亲属与差别。', '齐衰'],
          ['大功（九月）', '大功九月之服的亲属范围与服制细节。', '大功'],
          ['小功（五月）', '小功五月之服与相应亲属范围。', '小功'],
          ['缌麻（三月）', '五服中最轻之服及其亲属。', '缌麻'],
          ['袒免与无服之亲', '袒免之礼与出了五服之后的人情往来。', '袒免与无服之亲'],
          ['加服、降服与报服', '因宗法、恩义而变动的服制规则。', '加服降服与报服'],
          ['本宗九族五服图', '自高祖至玄孙的本宗服制图表。', '九族五服图'],
          ['外亲服制（母族、妻族、女族）', '母族、妻族与姐妹女族的外亲服等。', '外亲服制'],
          ['五服与宗法制度', '服制、宗族组织与财产继承之间的关联。', '五服与宗法制度'],
          ['五服制度的现代遗存', '当代民间孝服与服丧习惯中残留的五服痕迹。', '五服的现代遗存'],
        ],
      },
      {
        id: '02-07',
        dir: '02-07-funeral-objects-mingqi',
        title: '丧葬器物明器',
        desc: '棺椁、明器、纸扎、墓碑与法器等等丧葬用物，及其礼制规定与考古所见。',
        tags: ['凶礼', '器物', '明器'],
        sources: ['《礼记·檀弓》', '《后汉书·礼仪志》', '考古发掘报告'],
        region: '全国',
        ethnicity: '汉族',
        entries: [
          ['明器源流与礼制规定', '明器「备物而不可用」的礼义与历代形制。', '明器源流与礼制'],
          ['棺椁与棺饰', '棺、椁、棺饰的等级与装饰体系。', '棺椁与棺饰'],
          ['寿衣形制与讲究', '寿衣的件数、颜色、材质与穿戴禁忌。', '寿衣'],
          ['灵位、神主与木主', '灵位与神主的形制、点主礼与奉祀。', '灵位与神主'],
          ['铭旌与招魂幡', '铭旌书谥、招魂幡引路的形制与用途。', '铭旌与招魂幡'],
          ['纸扎（纸人、纸马、纸屋）', '纸扎的品类、扎制工艺与焚烧讲究。', '纸扎'],
          ['冥币与纸钱', '打钱、纸钱、冥币的形制演变与烧化礼俗。', '冥币与纸钱'],
          ['丧盆与哭丧棒', '丧盆、孝棒（哭丧棒）的形制与用途。', '丧盆与哭丧棒'],
          ['丧葬法器（引磬、木鱼、铃铛）', '佛道法事中法器的形制与用法。', '丧葬法器'],
          ['挽联、挽幛与花圈', '挽联、挽幛、花圈的书写格式与陈放位置。', '挽联挽幛与花圈'],
          ['墓碑、墓志与神道碑', '墓碑、墓志铭、神道碑的文体与形制。', '墓碑墓志与神道碑'],
          ['随葬器物（陶俑、玉器、铜器）', '历代随葬器物的品类与考古所见。', '随葬器物'],
          ['镇墓兽与辟邪明器', '镇墓兽、辟邪俑等辟邪类明器的形制。', '镇墓兽与辟邪明器'],
          ['买地券与告地策', '买地券、告地策的文本格式与宗教含义。', '买地券与告地策'],
          ['现代殡葬用品', '骨灰盒、花圈、电子祭品等现代殡葬用品。', '现代殡葬用品'],
        ],
      },
      {
        id: '02-08',
        dir: '02-08-mourning-attire-regulations',
        title: '丧服规制',
        desc: '丧服的形制、材质、首服、丧杖与变除之节，以及现代孝服的形态。',
        tags: ['凶礼', '丧服', '服制'],
        sources: ['《仪礼·丧服》', '《礼记·间传》', '《大唐开元礼》'],
        region: '全国',
        ethnicity: '汉族',
        entries: [
          ['丧服形制', '五等丧服的形制差别与裁剪方式。', '丧服形制'],
          ['丧服材质与规格', '麻布升数、生熟、粗细的等级规定。', '丧服材质与规格'],
          ['首服：冠、绖、带', '丧冠、首绖、腰绖与绞带的形制。', '首服冠绖带'],
          ['丧杖', '苴杖、削杖的材质、长度与执杖之礼。', '丧杖'],
          ['丧服变除（受服、变服、除服）', '受服、变服、除服的时间节点与仪节。', '丧服变除'],
          ['丧服期限与仪节', '各等丧服的服丧月数与服内仪节。', '丧服期限与仪节'],
          ['丧服与身份等级', '天子、诸侯、大夫、士、庶人的服制差异。', '丧服与身份等级'],
          ['女性丧服规制', '女性在室与出嫁之后服制的变化。', '女性丧服规制'],
          ['丧服禁忌与起居限制', '居丧期间的居处、饮食、言语与婚娶限制。', '丧服禁忌与起居'],
          ['现代孝服（孝布、黑纱、白花）', '孝布、孝箍、黑纱白花的现代形态。', '现代孝服'],
        ],
      },
      {
        id: '02-09',
        dir: '02-09-funeral-appellations',
        title: '丧葬称谓',
        desc: '逝者称谓、丧主与孝属自称、讳称体系及丧礼执事称谓。',
        tags: ['凶礼', '称谓', '讳称'],
        sources: ['《尔雅·释亲》', '《礼记·曲礼》', '《称谓录》'],
        region: '全国',
        ethnicity: '汉族',
        entries: [
          ['丧葬称谓总览', '丧葬语境下称谓系统的整体分类与用法。', '丧葬称谓总览'],
          ['逝者称谓（先考、先妣）', '先考、先妣、亡妻等逝者称谓的使用场合。', '逝者称谓'],
          ['丧主、孝子、孝女、孝妇', '主丧者与孝属的身份界定与职责。', '丧主与孝子孝女'],
          ['孤子、哀子、孤哀子', '讣告中守制自称的用字规范与分别。', '孤子哀子孤哀子'],
          ['居丧自称与讣告亲属称谓格式', '讣告中亲属称谓的行文格式与范例。', '居丧自称与讣告格式'],
          ['死之讳称体系（崩、薨、卒、不禄）', '按等级讳称死亡及民间的婉辞体系。', '死之讳称体系'],
          ['丁忧、守制与夺情', '官员丁忧、守制期限与夺情的制度。', '丁忧守制与夺情'],
          ['谥号、庙号与神主称谓', '谥号、庙号、神主题名的书写规则。', '谥号庙号与神主称谓'],
          ['丧礼执事称谓', '大宾、礼生、司仪、杠夫等执事称谓。', '丧礼执事称谓'],
          ['慰唁用语与吊丧称谓', '吊丧、慰唁、赙赠中的称谓与用语。', '慰唁用语与吊丧称谓'],
        ],
      },
      {
        id: '02-10',
        dir: '02-10-funeral-auspicious-taboos',
        title: '丧葬择吉禁忌',
        desc: '丧期择日、重丧规避、墓地风水与服丧期间的各类行为禁忌。',
        tags: ['凶礼', '择吉', '禁忌'],
        sources: ['《协纪辨方书》', '《葬书》', '民俗田野调查资料'],
        region: '全国',
        ethnicity: '汉族',
        entries: [
          ['丧期择日与重丧禁忌', '重丧日、三丧日等择日禁忌与其化解。', '丧期择日与重丧'],
          ['停灵日数与“七”的禁忌', '停灵单双日数与逢七的禁忌讲究。', '停灵日数与七'],
          ['出殡时辰与方位禁忌', '出殡时辰、出门方向与所忌方位。', '出殡时辰与方位'],
          ['墓地风水与十不葬', '十不葬、砂水朝向等阴宅选址禁忌。', '墓地风水与十不葬'],
          ['入殓禁忌', '入殓时忌泪落尸身、忌猫近尸等禁忌。', '入殓禁忌'],
          ['丧期饮食禁忌', '忌荤腥、忌酒、斋饭等丧期饮食规定。', '丧期饮食禁忌'],
          ['丧期行为禁忌', '忌理发、忌娱乐、忌串门等行为限制。', '丧期行为禁忌'],
          ['服丧者交往禁忌', '服丧期间婚娶、赴宴、拜年的禁忌。', '服丧者交往禁忌'],
          ['冲煞与生肖禁忌', '生肖相冲、犯太岁与相关回避安排。', '冲煞与生肖禁忌'],
          ['趋吉辟邪习俗', '桃枝、朱砂、符箓等辟邪习俗及其解释。', '趋吉辟邪习俗'],
        ],
      },
      {
        id: '02-11',
        dir: '02-11-han-regional-variants',
        title: '汉族各地域丧俗变体',
        desc: '以省级行政区为纲，兼及徽州、闽南、客家等民系，记录汉族丧葬习俗的地域变体。',
        tags: ['凶礼', '地域变体', '汉族'],
        sources: ['各省地方志·丧葬志', '《中华全国风俗志》', '民俗田野调查资料'],
        generated: 'region-funeral',
      },
      {
        id: '02-12',
        dir: '02-12-ethnic-minority-funeral',
        title: '少数民族丧葬习俗',
        desc: '以 55 个少数民族为单位，记录临终、治丧、葬式与葬后祭祀的族别特征。',
        tags: ['凶礼', '民族', '少数民族'],
        sources: ['《中国少数民族风俗志》', '各民族简史简志', '民俗田野调查资料'],
        generated: 'ethnic-funeral',
      },
    ],
  },

  {
    id: '03',
    dir: '03-appendix',
    title: '配套附属板块',
    desc: '为婚丧两编提供背景支撑的三大附属板块：亲属称谓体系、婚丧文书范本与礼制基础概念。',
    sections: [
      {
        id: '03-01',
        dir: '03-01-kinship-terms',
        title: '传统亲属称谓',
        desc: '宗亲、外亲、妻亲三大称谓系统，以及称谓的古今演变与方言差异。',
        tags: ['附录', '称谓', '亲属'],
        sources: ['《尔雅·释亲》', '《释名·释亲属》', '《亲属记》'],
        region: '全国',
        ethnicity: '汉族',
        entries: [
          ['亲属称谓体系总述', '宗亲、外亲、妻亲三大系统与层次划分。', '亲属称谓体系总述'],
          ['宗亲称谓（父系九族）', '父系九族（自高祖至玄孙）的称谓表。', '宗亲称谓'],
          ['外亲称谓（母族）', '母族亲属（外祖、舅、姨等）称谓。', '外亲称谓'],
          ['妻亲称谓（姻亲）', '妻族与姻亲称谓及相互称呼方式。', '妻亲称谓'],
          ['直系与旁系称谓对照', '直系与旁系、尊卑两向称谓的对照表。', '直系旁系称谓对照'],
          ['尊称与谦称', '亲属交往中的尊称、谦称与书面用语。', '尊称与谦称'],
          ['亲属称谓的古今演变', '古今称谓的替换、简化与雅化过程。', '亲属称谓古今演变'],
          ['各方言区亲属称谓差异', '官话与各大方言区称谓差异举要。', '方言区亲属称谓差异'],
        ],
      },
      {
        id: '03-02',
        dir: '03-02-document-templates',
        title: '婚丧文书范本',
        desc: '庚帖、婚书、请柬、祭文、讣告、墓碑文等婚丧文书的格式规范与范文。',
        tags: ['附录', '文书', '范本'],
        sources: ['《文公家礼》', '《书仪》', '《尺牍大全》'],
        region: '全国',
        ethnicity: '汉族',
        entries: [
          ['婚丧文书总述与格式规范', '婚丧文书的文体、行款、称谓与用纸规范。', '婚丧文书总述'],
          ['庚帖（八字帖）范本', '庚帖的格式、用语与书写范例。', '庚帖范本'],
          ['婚书（龙凤帖）范本', '婚书的固定程式与男女双方文本范例。', '婚书范本'],
          ['聘书与礼单范本', '聘书、礼单、回帖的格式与用例。', '聘书与礼单范本'],
          ['请柬与婚宴邀请函范本', '传统请柬与现代邀请函的写法对比。', '请柬与邀请函范本'],
          ['婚礼赞礼词范本', '各婚礼环节主持赞礼词的范例。', '婚礼赞礼词范本'],
          ['祭文范本', '家祭、公祭祭文的格式与范文。', '祭文范本'],
          ['讣告范本', '讣告的行文格式、亲属署名与范文。', '讣告范本'],
          ['悼词与哀启范本', '追悼会悼词与哀启的写作范例。', '悼词与哀启范本'],
          ['挽联、挽幛范本', '挽联平仄对仗规则与各类范例。', '挽联挽幛范本'],
          ['墓碑文与墓志铭范本', '墓碑文、墓志铭的体例与范文。', '墓碑文与墓志铭范本'],
          ['谢帖与答谢启范本', '丧事谢帖、答谢启的格式与范例。', '谢帖与答谢启范本'],
          ['祭祖祝文范本', '岁时祭祖祝文的格式与范文。', '祭祖祝文范本'],
          ['现代电子讣告与追思函范本', '微信群讣告、线上追思函的写法范例。', '现代电子讣告与追思函'],
        ],
      },
      {
        id: '03-03',
        dir: '03-03-ritual-concepts',
        title: '礼制基础概念',
        desc: '五礼体系、宗法昭穆、庙制继承等礼制概念，以及择吉、堪舆、历法等背景知识。',
        tags: ['附录', '礼制', '概念'],
        sources: ['《周礼》', '《礼记》', '《白虎通义》'],
        region: '全国',
        ethnicity: '汉族',
        entries: [
          ['五礼体系（吉、凶、军、宾、嘉）', '《周礼》五礼的分类逻辑与内容。', '五礼体系'],
          ['礼与俗的关系', '礼制与民俗之间的互动、上行下效与俗化。', '礼与俗的关系'],
          ['宗法制度', '大宗小宗、嫡长子继承与宗族组织形态。', '宗法制度'],
          ['昭穆制度', '昭穆排列原则及其在庙次、墓次中的体现。', '昭穆制度'],
          ['庙制与祭祖制度', '自天子七庙至士一庙的庙制与祭祖层级。', '庙制与祭祖制度'],
          ['嫡庶与继承制度', '嫡庶之分与立嫡、立长、立贤的规则。', '嫡庶与继承制度'],
          ['吉礼概说', '祭祀之礼的分类与主要仪节。', '吉礼概说'],
          ['嘉礼概说', '冠、婚、飨、射、贺庆等嘉礼内容。', '嘉礼概说'],
          ['凶礼概说', '丧、荒、吊、禬、恤等凶礼内容。', '凶礼概说'],
          ['宾礼与军礼概说', '朝聘、会盟与征伐、田猎之礼。', '宾礼与军礼概说'],
          ['三礼概述（《仪礼》《礼记》《周礼》）', '三礼的内容、相互关系与史料价值。', '三礼概述'],
          ['历代礼制沿革', '汉唐宋明清礼制的修订与婚丧制度变迁。', '历代礼制沿革'],
          ['礼器与礼制等级', '鼎簋、玉帛等礼器与身份等级的对应。', '礼器与礼制等级'],
          ['阴阳五行与择吉文化', '阴阳五行、干支与择吉术的基本原理。', '阴阳五行与择吉'],
          ['堪舆（风水）基础', '形势与理气两派及阳宅阴宅的基本概念。', '堪舆基础'],
          ['传统历法、干支与二十四节气', '农历、干支纪日与婚丧择日之间的关系。', '传统历法与干支'],
          ['命理合婚基础', '八字、纳音、属相合婚的基本方法。', '命理合婚基础'],
          ['婚丧礼俗中的信仰元素（儒、释、道、民间）', '儒释道与民间信仰在婚丧中的叠合形态。', '婚丧中的信仰元素'],
          ['民俗田野调查与记录方法', '访谈、观察、记录与口述史整理的方法。', '田野调查与记录方法'],
          ['婚丧礼俗的当代变迁', '城市化、简办与非遗保护之下的礼俗变迁。', '婚丧礼俗的当代变迁'],
        ],
      },
    ],
  },
];

/* ------------------------------------------------------------------ *
 * 派生条目（地域变体 / 民族）与统一结构
 * ------------------------------------------------------------------ */

function buildEntries(section) {
  const { generated } = section;

  if (generated === 'region-marriage' || generated === 'region-funeral') {
    const kind = generated === 'region-marriage' ? '婚俗' : '丧俗';
    return HAN_REGIONS.map(([file, title, note]) => ({
      title: `${title}${kind}`,
      stem: `${title}${kind}`,
      summary: `${file}地区汉族${kind}的仪节、器物、禁忌与地方变体。${note ? `（${note}）` : ''}`,
      region: file,
      ethnicity: '汉族',
      note,
      tags: ['地域变体', '汉族', ...(note ? [note] : [])],
    }));
  }

  if (generated === 'ethnic-marriage' || generated === 'ethnic-funeral') {
    const kind = generated === 'ethnic-marriage' ? '婚俗' : '丧葬';
    return ETHNIC_GROUPS.map((group) => ({
      title: `${group}${kind}`,
      stem: `${group}${kind}`,
      summary:
        kind === '婚俗'
          ? `${group}的择偶、议婚、婚礼仪节与婚后习俗。`
          : `${group}的临终、治丧、葬式与葬后祭祀习俗。`,
      region: '全国',
      ethnicity: group,
      tags: ['民族', group],
    }));
  }

  return section.entries.map(([title, summary, stem]) => ({
    title,
    summary,
    stem: stem || title,
    region: section.region,
    ethnicity: section.ethnicity,
    tags: section.tags,
  }));
}

function normalizeSection(section) {
  return { ...section, items: buildEntries(section) };
}

const BOOK_DATA = BOOKS.map((book) => ({
  ...book,
  sections: book.sections.map(normalizeSection),
}));

const TOTAL = BOOK_DATA.reduce(
  (sum, book) => sum + book.sections.reduce((s, sec) => s + sec.items.length, 0),
  0,
);

/* ------------------------------------------------------------------ *
 * 渲染
 * ------------------------------------------------------------------ */

const SECTION_TEMPLATE = [
  ['一、释义', '补全条目定义、名实辨析、与相邻条目的界限；说明礼制依据与民间实践的关系。'],
  ['二、历史源流', '上溯礼经与先秦文献，下及汉唐宋明清的沿革，注明主要史料出处。'],
  ['三、仪节流程', '按时序分步记录仪节，标注参与者、器物、用语与地域差异。'],
  ['四、地域与民族变体', '列举代表性地域或民族的做法差异，注明调查地点与资料来源。'],
  ['五、器物与文书', '记录相关器物形制、材料、尺寸及所用文书格式。'],
  ['六、文献与参考', '列出古籍、方志、专著、论文与田野调查记录。'],
];

function yamlList(indent, values) {
  return values.map((v) => `${indent}- ${v}`).join('\n');
}

function renderEntry(book, section, item, index) {
  const id = `${section.id}-${pad(index + 1)}`;
  const file = `${pad(index + 1)}-${item.stem}.md`;
  const front = [
    '---',
    `id: ${id}`,
    `title: ${item.title}`,
    `category: ${book.title}/${section.title}`,
    'tags:',
    yamlList('  ', item.tags),
    'sources:',
    yamlList('  ', section.sources),
    `region: ${item.region || '全国'}`,
    `ethnicity: ${item.ethnicity || '汉族'}`,
    `summary: ${item.summary}`,
    'status: draft',
    `updated: ${UPDATED}`,
    '---',
    '',
    `# ${item.title}`,
    '',
    '',
  ].join('\n');

  const bodySections = SECTION_TEMPLATE.map(([heading, hint], i) => {
    if (i === 0) {
      return `## ${heading}\n\n${item.summary}\n\n<!-- 编写提示：${hint} -->\n`;
    }
    return `## ${heading}\n\n<!-- 编写提示：${hint} -->\n`;
  }).join('\n');

  const footer = [
    '---',
    '',
    `[← 返回 ${section.title}](./README.md) · [返回总目录](../../../README.md)`,
    '',
  ].join('\n');

  return { id, file, content: `${front}${bodySections}\n${footer}` };
}

/** 图表区块（中英双语图注）；relPrefix 为指向仓库根的相对前缀，如 '../../' */
function diagramLines(diagram, relPrefix) {
  if (!diagram) return [];
  return [
    `![${diagram.altZh} / ${diagram.altEn}](${relPrefix}${diagram.src})`,
    '',
    `*${diagram.captionZh}*`,
    '',
    `*${diagram.captionEn}*`,
    '',
  ];
}

function renderSectionReadme(book, section) {
  const rows = section.items
    .map(
      (item, i) =>
        `| ${section.id}-${pad(i + 1)} | [${item.title}](./${pad(i + 1)}-${item.stem}.md) | ${item.summary} |`,
    )
    .join('\n');

  return [
    '<!-- 本文件由 scripts/generate-skeleton.mjs 生成，请勿手工编辑 -->',
    '',
    `# ${section.title}`,
    '',
    `> ${book.title} / ${section.title} · 共 ${section.items.length} 条`,
    '',
    section.desc,
    '',
    ...diagramLines(section.diagram, '../../'),
    '## 条目',
    '',
    '| 编号 | 条目 | 说明 |',
    '| --- | --- | --- |',
    rows,
    '',
    '## 规范',
    '',
    '- 三级条目文档命名：`<两位序号>-<条目名>.md`，序号即本目录内的条目序号。',
    '- 条目首页 frontmatter 必填项：`id`、`title`、`category`、`tags`、`sources`、`region`、`ethnicity`、`summary`、`status`、`updated`。',
    '- 条目正文统一六段式：释义 / 历史源流 / 仪节流程 / 地域与民族变体 / 器物与文书 / 文献与参考。',
    '- 新增或调整条目后，请运行 `node scripts/generate-skeleton.mjs` 与 `node scripts/check-structure.mjs`。',
    '',
    `[← 返回 ${book.title}](../README.md) · [返回总目录](../../README.md)`,
    '',
  ].join('\n');
}

function renderBookReadme(book) {
  const rows = book.sections
    .map((sec) => `| [${sec.id} ${sec.title}](./${sec.dir}/README.md) | ${sec.items.length} | ${sec.desc} |`)
    .join('\n');
  const total = book.sections.reduce((s, sec) => s + sec.items.length, 0);

  return [
    '<!-- 本文件由 scripts/generate-skeleton.mjs 生成，请勿手工编辑 -->',
    '',
    `# ${book.title}`,
    '',
    book.desc,
    '',
    ...diagramLines(book.diagram, '../../'),
    `本编共 ${book.sections.length} 个二级分类、${total} 个三级条目。`,
    '',
    '## 二级分类',
    '',
    '| 分类 | 条目数 | 说明 |',
    '| --- | --- | --- |',
    rows,
    '',
    '## 相关',
    '',
    '- [仓库总目录](../../README.md)',
    '- [全部文档索引](../README.md)',
    '',
  ].join('\n');
}

function renderDocsReadme() {
  const rows = BOOK_DATA.map((book) => {
    const total = book.sections.reduce((s, sec) => s + sec.items.length, 0);
    return `| [${book.id} ${book.title}](./${book.dir}/README.md) | ${book.sections.length} | ${total} |`;
  }).join('\n');

  return [
    '<!-- 本文件由 scripts/generate-skeleton.mjs 生成，请勿手工编辑 -->',
    '',
    '# 文档索引',
    '',
    `本资料库共 3 个一级分类、${BOOK_DATA.reduce((s, b) => s + b.sections.length, 0)} 个二级分类、${TOTAL} 个三级条目。`,
    '',
    '| 一级分类 | 二级分类数 | 三级条目数 |',
    '| --- | --- | --- |',
    rows,
    `| **合计** | **${BOOK_DATA.reduce((s, b) => s + b.sections.length, 0)}** | **${TOTAL}** |`,
    '',
    '编号规则：一级 `NN`、二级 `NN-NN`、三级 `NN-NN-NN`，与目录名、文件名前缀一一对应。',
    '',
    '[← 返回仓库总目录](../README.md)',
    '',
  ].join('\n');
}

function renderRootReadme() {
  const tocRows = BOOK_DATA.map((book) => {
    const total = book.sections.reduce((s, sec) => s + sec.items.length, 0);
    const links = book.sections
      .map((sec) => `[${sec.title}](./docs/${book.dir}/${sec.dir}/README.md)（${sec.items.length}）`)
      .join(' · ');
    return `| **${book.id} ${book.title}** | ${book.sections.length} | ${total} |\n| | ${links} | |`;
  }).join('\n');

  const index = BOOK_DATA.map((book) => {
    const sections = book.sections
      .map((sec) => {
        const items = sec.items
          .map(
            (item, i) =>
              `| ${section_id(sec, i)} | [${item.title}](./docs/${book.dir}/${sec.dir}/${pad(i + 1)}-${item.stem}.md) | ${item.summary} |`,
          )
          .join('\n');
        return [
          `### ${sec.id} ${sec.title}`,
          '',
          `> 目录：[\`docs/${book.dir}/${sec.dir}/\`](./docs/${book.dir}/${sec.dir}/README.md) · 共 ${sec.items.length} 条`,
          '',
          '| 编号 | 条目 | 说明 |',
          '| --- | --- | --- |',
          items,
          '',
        ].join('\n');
      })
      .join('\n');
    return [`## ${book.id} ${book.title}`, '', book.desc, '', sections].join('\n');
  }).join('\n');

  return [
    '# 中华传统婚丧礼俗资料库',
    '',
    '**语言：** **简体中文** · [English](./README.en.md)',
    '',
    '> 一个系统整理中国传统婚嫁（嘉礼）与丧葬（凶礼）礼俗的开源资料库。',
    '> 以「一级分类 → 二级分类 → 三级条目」组织，每个三级条目对应一个独立 markdown 文档。',
    '',
    '## 仓库简介',
    '',
    '本库覆盖三大板块：',
    '',
    '1. **婚嫁礼俗（嘉礼）**：先秦六礼、婚前习俗、婚礼当日仪节、婚后礼俗、婚嫁器物、婚嫁称谓、婚嫁择吉禁忌，以及汉族各地域与各少数民族的婚俗变体。',
    '2. **丧葬礼俗（凶礼）**：初丧、入殓、停灵、出殡下葬、葬后系列祭祀、五服制度、丧葬器物明器、丧服规制、丧葬称谓、丧葬择吉禁忌，以及汉族各地域与各少数民族的丧葬习俗。',
    '3. **配套附属板块**：传统亲属称谓、婚丧文书范本、礼制基础概念。',
    '',
    '## 统计',
    '',
    '| 一级分类 | 二级分类数 | 三级条目数 |',
    '| --- | --- | --- |',
    tocRows,
    `| **合计** | **${BOOK_DATA.reduce((s, b) => s + b.sections.length, 0)}** | **${TOTAL}** |`,
    '',
    `三级条目合计 **${TOTAL}** 个，即 **${TOTAL}** 个独立 markdown 文档。`,
    '',
    '## 目录结构',
    '',
    '```text',
    'china-wedding-funeral-rituals/',
    '├── README.md                # 本文件：中文入口（总目录与全量索引）',
    '├── README.en.md             # 英文入口（English index）',
    '├── LICENSE                  # 文档许可（CC BY-SA 4.0）',
    '├── LICENSE-CODE             # 脚本许可（MIT）',
    '├── CONTRIBUTING.md          # 贡献指南与条目模板',
    '├── CONTRIBUTING.en.md       # 贡献指南（英文）',
    '├── CHANGELOG.md',
    '├── assets/                  # 图片与图表',
    '├── scripts/',
    '│   ├── generate-skeleton.mjs  # 目录骨架与索引生成',
    '│   └── check-structure.mjs    # 结构校验（CI 使用）',
    '├── docs/',
    '│   ├── 01-marriage-rites/   # 婚嫁礼俗（嘉礼）',
    '│   ├── 02-funeral-rites/    # 丧葬礼俗（凶礼）',
    '│   └── 03-appendix/         # 配套附属板块',
    '└── en/',
    '    └── docs/                # 英文索引层与已英译条目正文',
    '```',
    '',
    '命名规则：二级目录 `NN-NN-<english-slug>/`，三级文档 `NN-<条目名>.md`。',
    '英文树 `en/docs/` 与 `docs/` 同构，条目文档名为 `NN-<english-slug>.md`（全 ASCII），以两位序号与中文条目一一对应。',
    '',
    '## 使用方式',
    '',
    '```bash',
    '# 校验目录结构与 frontmatter（CI 同款检查）',
    'node scripts/check-structure.mjs',
    '',
    '# 生成缺失的条目文档并重建全部 README 索引',
    'node scripts/generate-skeleton.mjs',
    '```',
    '',
    '## 全量条目索引',
    '',
    index,
    '## 贡献',
    '',
    '请阅读 [CONTRIBUTING.md](./CONTRIBUTING.md)（English: [CONTRIBUTING.en.md](./CONTRIBUTING.en.md)）。欢迎补充文献出处、地域田野记录、器物图版与校勘意见。',
    '',
    '## 许可',
    '',
    '- 文档内容：CC BY-SA 4.0（见 [LICENSE](./LICENSE)）',
    '- 脚本代码：MIT（见 [LICENSE-CODE](./LICENSE-CODE)）',
    '',
  ].join('\n');
}

function section_id(sec, i) {
  return `${sec.id}-${pad(i + 1)}`;
}

/* ------------------------------------------------------------------ *
 * 英文层：数据派生与索引渲染
 * ------------------------------------------------------------------ */

const TOTAL_SECTIONS = BOOK_DATA.reduce((s, b) => s + b.sections.length, 0);

const entryIdOf = (section, i) => `${section.id}-${pad(i + 1)}`;

/** 英文正文文件名：`NN-<english-slug>.md`（全 ASCII，与中文树以序号一一对应） */
function enFileOf(book, section, item, i) {
  const id = entryIdOf(section, i);
  const en = entryEn(book, section, item, id);
  return `${pad(i + 1)}-${entrySlug(id, en.title)}.md`;
}

/** 英文正文文件绝对路径（存在即视为已英译） */
function enBodyAbs(book, section, i, item) {
  return path.join(EN_DIR, 'docs', book.dir, section.dir, enFileOf(book, section, item, i));
}

/**
 * 某条目的英文标题与摘要。
 * 派生分类（地域变体 / 少数民族）现场生成；已登记条目取 ENTRY_EN；
 * 尚未登记的条目回落为中文原文，并以 zh: true 标记。
 */
function entryEn(book, section, item, id) {
  if (section.generated === 'region-marriage' || section.generated === 'region-funeral') {
    const wedding = section.generated === 'region-marriage';
    const region = REGION_EN[item.region] || item.region;
    const note = item.note ? ` (${NOTE_EN[item.note] || item.note})` : '';
    return {
      title: `${region} ${wedding ? 'Marriage Customs' : 'Funeral Customs'}`,
      summary: `Rituals, objects, taboos and local variants of Han Chinese ${wedding ? 'marriage' : 'funeral'} custom in ${region}.${note}`,
      zh: false,
    };
  }
  if (section.generated === 'ethnic-marriage' || section.generated === 'ethnic-funeral') {
    const wedding = section.generated === 'ethnic-marriage';
    const ethnic = ETHNIC_EN[item.ethnicity] || item.ethnicity;
    return {
      title: `${ethnic} ${wedding ? 'Marriage Customs' : 'Funeral Customs'}`,
      summary: wedding
        ? `Courtship, betrothal negotiation, wedding ceremonies and post-wedding customs of the ${ethnic} people.`
        : `Dying, mourning, modes of burial and post-burial sacrifices among the ${ethnic} people.`,
      zh: false,
    };
  }
  const hit = ENTRY_EN[id];
  return hit ? { title: hit[0], summary: hit[1], zh: false } : { title: item.title, summary: item.summary, zh: true };
}

/** 英文索引表中的条目行；已英译者链英文页，否则链中文原文页 */
function entryRowsEn(book, section, enFilePrefix, zhFilePrefix) {
  return section.items
    .map((item, i) => {
      const id = entryIdOf(section, i);
      const en = entryEn(book, section, item, id);
      const file = `${pad(i + 1)}-${item.stem}.md`;
      const hasEn = fs.existsSync(enBodyAbs(book, section, i, item));
      const target = hasEn
        ? `${enFilePrefix}${enFileOf(book, section, item, i)}`
        : `${zhFilePrefix}${file}`;
      return `| ${id} | [${en.title}](${target}) | ${en.summary} | ${hasEn ? UI.bodyEnglish : UI.bodyChinese} |`;
    })
    .join('\n');
}

function countTranslated() {
  let n = 0;
  for (const book of BOOK_DATA) {
    for (const section of book.sections) {
      section.items.forEach((item, i) => {
        if (fs.existsSync(enBodyAbs(book, section, i, item))) n += 1;
      });
    }
  }
  return n;
}

/** 缺少英文标题/摘要登记的条目 id（派生分类除外） */
function missingEnIds() {
  const missing = [];
  for (const book of BOOK_DATA) {
    for (const section of book.sections) {
      if (section.generated) continue;
      section.items.forEach((item, i) => {
        const id = entryIdOf(section, i);
        if (!ENTRY_EN[id]) missing.push(id);
      });
    }
  }
  return missing;
}

function renderSectionReadmeEn(book, section) {
  const rows = entryRowsEn(book, section, './', `../../../../docs/${book.dir}/${section.dir}/`);
  const translated = section.items.filter((item, i) => fs.existsSync(enBodyAbs(book, section, i, item))).length;

  return [
    '<!-- Generated by scripts/generate-skeleton.mjs. Do not edit manually. -->',
    '',
    `# ${SECTION_EN[section.id].title}`,
    '',
    `> ${BOOK_EN[book.id].title} / ${SECTION_EN[section.id].title} · ${section.items.length} entries`,
    '',
    SECTION_EN[section.id].desc,
    '',
    ...diagramLines(section.diagram, '../../'),
    `> English bodies available: **${translated} / ${section.items.length}**. Entries marked \`${UI.bodyChinese}\` link to the Chinese original.`,
    '',
    `## ${UI.entriesHeading}`,
    '',
    UI.entriesHead,
    '| --- | --- | --- | --- |',
    rows,
    '',
    `## ${UI.conventionsHeading}`,
    '',
    '- Entry files here are named `<two-digit index>-<english-slug>.md`; the index matches the entry\u2019s position in the directory, and the corresponding Chinese original carries the same index under `docs/`.',
    '- The Chinese corpus under `docs/` is the authoritative text; files here are translations of it.',
    '- After adding or changing entries, run `node scripts/generate-skeleton.mjs` and `node scripts/check-structure.mjs`.',
    '',
    `[← Back to ${BOOK_EN[book.id].title}](../README.md) · [Chinese index](../../../../docs/${book.dir}/${section.dir}/README.md) · [Repository home](../../../../README.md)`,
    '',
  ].join('\n');
}

function renderBookReadmeEn(book) {
  const rows = book.sections
    .map(
      (sec) =>
        `| [${sec.id} ${SECTION_EN[sec.id].title}](./${sec.dir}/README.md) | ${sec.items.length} | ${SECTION_EN[sec.id].desc} |`,
    )
    .join('\n');
  const total = book.sections.reduce((s, sec) => s + sec.items.length, 0);

  return [
    '<!-- Generated by scripts/generate-skeleton.mjs. Do not edit manually. -->',
    '',
    `# ${BOOK_EN[book.id].title}`,
    '',
    BOOK_EN[book.id].desc,
    '',
    ...diagramLines(book.diagram, '../../../'),
    `This book contains ${book.sections.length} sub-categories and ${total} entries.`,
    '',
    `## ${UI.sectionsHeading}`,
    '',
    UI.sectionsHead,
    '| --- | --- | --- |',
    rows,
    '',
    `## ${UI.relatedHeading}`,
    '',
    '- [Repository home](../../../README.md)',
    `- [Chinese book index](../../../docs/${book.dir}/README.md)`,
    '- [English document index](../README.md)',
    '',
  ].join('\n');
}

function renderDocsReadmeEn() {
  const rows = BOOK_DATA.map((book) => {
    const total = book.sections.reduce((s, sec) => s + sec.items.length, 0);
    return `| [${book.id} ${BOOK_EN[book.id].title}](./${book.dir}/README.md) | ${book.sections.length} | ${total} |`;
  }).join('\n');

  return [
    '<!-- Generated by scripts/generate-skeleton.mjs. Do not edit manually. -->',
    '',
    `# ${UI.docsIndexHeading}`,
    '',
    `This corpus contains ${BOOK_DATA.length} books, ${TOTAL_SECTIONS} sub-categories and ${TOTAL} entries.`,
    '',
    UI.statisticsHead,
    '| --- | --- | --- |',
    rows,
    `| **Total** | **${TOTAL_SECTIONS}** | **${TOTAL}** |`,
    '',
    'Numbering: books `NN`, sub-categories `NN-NN`, entries `NN-NN-NN`, matching directory and file prefixes.',
    '',
    '[← Back to repository home](../../README.md) · [Chinese index](../../docs/README.md)',
    '',
  ].join('\n');
}

function renderRootReadmeEn() {
  const tocRows = BOOK_DATA.map((book) => {
    const total = book.sections.reduce((s, sec) => s + sec.items.length, 0);
    const links = book.sections
      .map((sec) => `[${SECTION_EN[sec.id].title}](./en/docs/${book.dir}/${sec.dir}/README.md) (${sec.items.length})`)
      .join(' · ');
    return `| **${book.id} ${BOOK_EN[book.id].title}** | ${book.sections.length} | ${total} |\n| | ${links} | |`;
  }).join('\n');

  const index = BOOK_DATA.map((book) => {
    const sections = book.sections
      .map((sec) => {
        const rows = entryRowsEn(book, sec, `./en/docs/${book.dir}/${sec.dir}/`, `./docs/${book.dir}/${sec.dir}/`);
        return [
          `### ${sec.id} ${SECTION_EN[sec.id].title}`,
          '',
          `> Directory: [\`en/docs/${book.dir}/${sec.dir}/\`](./en/docs/${book.dir}/${sec.dir}/README.md) · Chinese original: [\`docs/${book.dir}/${sec.dir}/\`](./docs/${book.dir}/${sec.dir}/README.md) · ${sec.items.length} entries`,
          '',
          UI.entriesHead,
          '| --- | --- | --- | --- |',
          rows,
          '',
        ].join('\n');
      })
      .join('\n');
    return [`## ${book.id} ${BOOK_EN[book.id].title}`, '', BOOK_EN[book.id].desc, '', sections].join('\n');
  }).join('\n');

  return [
    `# ${UI.corpusTitle}`,
    '',
    '**Languages:** [简体中文](./README.md) · **English**',
    '',
    `> ${UI.corpusIntro}`,
    '',
    `## ${UI.aboutHeading}`,
    '',
    'This corpus covers three parts:',
    '',
    ...UI.aboutList.map((line, i) => `${i + 1}. ${line}`),
    '',
    `## ${UI.statisticsHeading}`,
    '',
    UI.statisticsHead,
    '| --- | --- | --- |',
    tocRows,
    `| **Total** | **${TOTAL_SECTIONS}** | **${TOTAL}** |`,
    '',
    `${TOTAL} entries in total, each a standalone Markdown document.`,
    '',
    '## Translation status',
    '',
    `The index and metadata of this corpus are bilingual. Entry bodies are translated progressively: **${countTranslated()} / ${TOTAL}** entries currently have an English body. Entries without one link to the Chinese original and are marked \`${UI.bodyChinese}\` in the index below.`,
    '',
    `## ${UI.layoutHeading}`,
    '',
    '```text',
    ...UI.layoutLines,
    '```',
    '',
    UI.namingNote,
    '',
    `## ${UI.usageHeading}`,
    '',
    '```bash',
    ...UI.usageLines,
    '```',
    '',
    `## ${UI.entryIndexHeading}`,
    '',
    index,
    `## ${UI.contributingHeading}`,
    '',
    UI.contributingText,
    '',
    `## ${UI.licenceHeading}`,
    '',
    ...UI.licenceLines,
    '',
  ].join('\n');
}

/* ------------------------------------------------------------------ *
 * 写入
 * ------------------------------------------------------------------ */

let created = 0;
let skipped = 0;
const readmes = [];
const docs = [];

function writeFile(absPath, content, { overwrite }) {
  if (fs.existsSync(absPath) && !overwrite) {
    skipped += 1;
    return false;
  }
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  fs.writeFileSync(absPath, content, 'utf8');
  created += 1;
  return true;
}

for (const book of BOOK_DATA) {
  const bookDir = path.join(DOCS_DIR, book.dir);
  readmes.push([path.join(bookDir, 'README.md'), renderBookReadme(book)]);

  for (const section of book.sections) {
    const secDir = path.join(bookDir, section.dir);
    readmes.push([path.join(secDir, 'README.md'), renderSectionReadme(book, section)]);

    section.items.forEach((item, i) => {
      const { file, content } = renderEntry(book, section, item, i);
      const abs = path.join(secDir, file);
      docs.push(abs);
      writeFile(abs, content, { overwrite: FORCE });
    });
  }
}

readmes.push([path.join(DOCS_DIR, 'README.md'), renderDocsReadme()]);
readmes.push([path.join(ROOT, 'README.md'), renderRootReadme()]);
for (const [abs, content] of readmes) {
  writeFile(abs, content, { overwrite: true });
}

/* 英文索引层：en/docs/**（结构镜像 docs/，正文仅含已英译条目） */
const enReadmes = [
  [path.join(EN_DIR, 'docs', 'README.md'), renderDocsReadmeEn()],
  [path.join(ROOT, 'README.en.md'), renderRootReadmeEn()],
];
for (const book of BOOK_DATA) {
  const enBookDir = path.join(EN_DIR, 'docs', book.dir);
  enReadmes.push([path.join(enBookDir, 'README.md'), renderBookReadmeEn(book)]);
  for (const section of book.sections) {
    enReadmes.push([path.join(enBookDir, section.dir, 'README.md'), renderSectionReadmeEn(book, section)]);
  }
}
for (const [abs, content] of enReadmes) {
  writeFile(abs, content, { overwrite: true });
}

for (const keep of ['assets/images', 'assets/diagrams']) {
  writeFile(path.join(ROOT, keep, '.gitkeep'), '', { overwrite: false });
}

const totalDocs = BOOK_DATA.flatMap((b) => b.sections).reduce((s, sec) => s + sec.items.length, 0);

console.log('生成完成');
console.log(`  一级分类：${BOOK_DATA.length}`);
console.log(`  二级分类：${BOOK_DATA.reduce((s, b) => s + b.sections.length, 0)}`);
console.log(`  三级条目：${totalDocs}`);
console.log(`  新建/覆盖文件：${created}，跳过已存在文件：${skipped}`);
console.log(`  英文索引层：${enReadmes.length} 个文件（en/docs/** 与 README.en.md）`);
console.log(`  英文正文：${countTranslated()} / ${totalDocs} 条已英译`);
const missingEn = missingEnIds();
if (missingEn.length) {
  console.log(`  待补英文标题/摘要：${missingEn.length} 条（请登记到 scripts/i18n/entries-0*.mjs）`);
  for (const id of missingEn.slice(0, 10)) console.log(`    · ${id}`);
  if (missingEn.length > 10) console.log(`    · …另有 ${missingEn.length - 10} 条`);
}
if (!FORCE) {
  console.log('  提示：默认不覆盖已存在的条目文档，如需覆盖请加 --force');
}
