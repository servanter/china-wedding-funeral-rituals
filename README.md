# 中华传统婚丧礼俗资料库

**语言：** **简体中文** · [English](./README.en.md)

<!-- 实时 CI / 仓库体积徽章：push 到 GitHub 后取消下面两行注释，并把 OWNER/REPO 换成你的用户名/仓库名即可生效 -->
<!-- [![CI](https://img.shields.io/github/actions/workflow/status/OWNER/REPO/check-structure.yml?label=CI&logo=githubactions&style=flat-square)](https://github.com/OWNER/REPO/actions/workflows/check-structure.yml) -->
<!-- [![Repo size](https://img.shields.io/github/repo-size/OWNER/REPO?style=flat-square)](https://github.com/OWNER/REPO) -->

![License](https://img.shields.io/badge/license-CC%20BY--SA%204.0-blue?style=flat-square)
![Entries](https://img.shields.io/badge/条目-415-blueviolet?style=flat-square)
![Categories](https://img.shields.io/badge/分类-3%20大类%20%2F%2024%20二级-orange?style=flat-square)
![Languages](https://img.shields.io/badge/语言-中文%20%2F%20English-green?style=flat-square)
![Format](https://img.shields.io/badge/格式-Markdown-lightgrey?style=flat-square)
![Illustrations](https://img.shields.io/badge/配图-38%20张-pink?style=flat-square)
![Structure CI](https://img.shields.io/badge/CI--check--structure-passing-success?style=flat-square)

> 一个系统整理中国传统婚嫁（嘉礼）与丧葬（凶礼）礼俗的开源资料库。
> 以「一级分类 → 二级分类 → 三级条目」组织，每个三级条目对应一个独立 markdown 文档。

## 仓库简介

本库覆盖三大板块：

1. **婚嫁礼俗（嘉礼）**：先秦六礼、婚前习俗、婚礼当日仪节、婚后礼俗、婚嫁器物、婚嫁称谓、婚嫁择吉禁忌，以及汉族各地域与各少数民族的婚俗变体。
2. **丧葬礼俗（凶礼）**：初丧、入殓、停灵、出殡下葬、葬后系列祭祀、五服制度、丧葬器物明器、丧服规制、丧葬称谓、丧葬择吉禁忌，以及汉族各地域与各少数民族的丧葬习俗。
3. **配套附属板块**：传统亲属称谓、婚丧文书范本、礼制基础概念。

## 统计

| 一级分类 | 二级分类数 | 三级条目数 |
| --- | --- | --- |
| **01 婚嫁礼俗（嘉礼）** | 9 | 169 |
| | [先秦六礼](./docs/01-marriage-rites/01-01-six-rites/README.md)（10） · [婚前习俗](./docs/01-marriage-rites/01-02-pre-wedding-customs/README.md)（15） · [婚礼当日仪节](./docs/01-marriage-rites/01-03-wedding-day-ceremony/README.md)（17） · [婚后礼俗](./docs/01-marriage-rites/01-04-post-wedding-customs/README.md)（8） · [婚嫁器物](./docs/01-marriage-rites/01-05-wedding-objects/README.md)（16） · [婚嫁称谓](./docs/01-marriage-rites/01-06-wedding-appellations/README.md)（8） · [婚嫁择吉与禁忌](./docs/01-marriage-rites/01-07-wedding-auspicious-taboos/README.md)（8） · [汉族各地域婚俗变体](./docs/01-marriage-rites/01-08-han-regional-variants/README.md)（32） · [少数民族婚嫁习俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/README.md)（55） | |
| **02 丧葬礼俗（凶礼）** | 12 | 204 |
| | [初丧](./docs/02-funeral-rites/02-01-initial-mourning/README.md)（10） · [入殓](./docs/02-funeral-rites/02-02-encoffining/README.md)（10） · [停灵](./docs/02-funeral-rites/02-03-lying-in-state/README.md)（11） · [出殡下葬](./docs/02-funeral-rites/02-04-funeral-procession-burial/README.md)（15） · [葬后系列祭祀](./docs/02-funeral-rites/02-05-post-burial-sacrifices/README.md)（14） · [五服制度](./docs/02-funeral-rites/02-06-five-degrees-mourning/README.md)（12） · [丧葬器物明器](./docs/02-funeral-rites/02-07-funeral-objects-mingqi/README.md)（15） · [丧服规制](./docs/02-funeral-rites/02-08-mourning-attire-regulations/README.md)（10） · [丧葬称谓](./docs/02-funeral-rites/02-09-funeral-appellations/README.md)（10） · [丧葬择吉禁忌](./docs/02-funeral-rites/02-10-funeral-auspicious-taboos/README.md)（10） · [汉族各地域丧俗变体](./docs/02-funeral-rites/02-11-han-regional-variants/README.md)（32） · [少数民族丧葬习俗](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/README.md)（55） | |
| **03 配套附属板块** | 3 | 42 |
| | [传统亲属称谓](./docs/03-appendix/03-01-kinship-terms/README.md)（8） · [婚丧文书范本](./docs/03-appendix/03-02-document-templates/README.md)（14） · [礼制基础概念](./docs/03-appendix/03-03-ritual-concepts/README.md)（20） | |
| **合计** | **24** | **415** |

三级条目合计 **415** 个，即 **415** 个独立 markdown 文档。

## 目录结构

```text
china-wedding-funeral-rituals/
├── README.md                # 本文件：中文入口（总目录与全量索引）
├── README.en.md             # 英文入口（English index）
├── LICENSE                  # 文档许可（CC BY-SA 4.0）
├── LICENSE-CODE             # 脚本许可（MIT）
├── CONTRIBUTING.md          # 贡献指南与条目模板
├── CONTRIBUTING.en.md       # 贡献指南（英文）
├── CHANGELOG.md
├── assets/                  # 图片与图表
├── scripts/
│   ├── generate-skeleton.mjs  # 目录骨架与索引生成
│   └── check-structure.mjs    # 结构校验（CI 使用）
├── docs/
│   ├── 01-marriage-rites/   # 婚嫁礼俗（嘉礼）
│   ├── 02-funeral-rites/    # 丧葬礼俗（凶礼）
│   └── 03-appendix/         # 配套附属板块
└── en/
    └── docs/                # 英文索引层与已英译条目正文
```

命名规则：二级目录 `NN-NN-<english-slug>/`，三级文档 `NN-<条目名>.md`。
英文树 `en/docs/` 与 `docs/` 同构，条目文档名为 `NN-<english-slug>.md`（全 ASCII），以两位序号与中文条目一一对应。

## 使用方式

```bash
# 校验目录结构与 frontmatter（CI 同款检查）
node scripts/check-structure.mjs

# 生成缺失的条目文档并重建全部 README 索引
node scripts/generate-skeleton.mjs
```

## 全量条目索引

## 01 婚嫁礼俗（嘉礼）

婚嫁属于传统五礼中的「嘉礼」。本编按「礼制源流 → 婚前 → 婚日 → 婚后 → 器物 → 称谓 → 择吉 → 地域 → 民族」九个维度，整理自先秦六礼至当代中式婚礼的完整仪节链条，兼收汉族各地与各少数民族的婚俗变体。

### 01-01 先秦六礼

> 目录：[`docs/01-marriage-rites/01-01-six-rites/`](./docs/01-marriage-rites/01-01-six-rites/README.md) · 共 10 条

| 编号 | 条目 | 说明 |
| --- | --- | --- |
| 01-01-01 | [纳采](./docs/01-marriage-rites/01-01-six-rites/01-纳采.md) | 男家遣媒提亲，以雁为贽，六礼之首。 |
| 01-01-02 | [问名](./docs/01-marriage-rites/01-01-six-rites/02-问名.md) | 问女之名与生辰，以归卜其吉凶。 |
| 01-01-03 | [纳吉](./docs/01-marriage-rites/01-01-six-rites/03-纳吉.md) | 卜得吉兆，告于女家，婚约遂定。 |
| 01-01-04 | [纳征](./docs/01-marriage-rites/01-01-six-rites/04-纳征.md) | 纳币定婚，即后世「下聘」「过大礼」之源。 |
| 01-01-05 | [请期](./docs/01-marriage-rites/01-01-six-rites/05-请期.md) | 男家议定婚期，请女家允准。 |
| 01-01-06 | [亲迎](./docs/01-marriage-rites/01-01-six-rites/06-亲迎.md) | 新郎亲往迎娶，六礼之成。 |
| 01-01-07 | [六礼源流与《仪礼·士昏礼》](./docs/01-marriage-rites/01-01-six-rites/07-六礼源流与士昏礼.md) | 礼经原文、仪节复原与六礼的文本依据。 |
| 01-01-08 | [六礼的简化与后世流变](./docs/01-marriage-rites/01-01-six-rites/08-六礼的简化与流变.md) | 三礼、四礼的合并，以及近现代新式婚礼的嬗变。 |
| 01-01-09 | [同姓不婚与周代婚姻制度](./docs/01-marriage-rites/01-01-six-rites/09-同姓不婚与周代婚制.md) | 宗族外婚、媵妾制与一夫一妻多妾的礼制基础。 |
| 01-01-10 | [媒妁制度与“父母之命，媒妁之言”](./docs/01-marriage-rites/01-01-six-rites/10-媒妁制度.md) | 官媒、私媒与媒人职业化的礼俗脉络。 |

### 01-02 婚前习俗

> 目录：[`docs/01-marriage-rites/01-02-pre-wedding-customs/`](./docs/01-marriage-rites/01-02-pre-wedding-customs/README.md) · 共 15 条

| 编号 | 条目 | 说明 |
| --- | --- | --- |
| 01-02-01 | [提亲与说媒](./docs/01-marriage-rites/01-02-pre-wedding-customs/01-提亲与说媒.md) | 媒人牵线、双方探问门户的议婚开端。 |
| 01-02-02 | [相亲（相看门户）](./docs/01-marriage-rites/01-02-pre-wedding-customs/02-相亲.md) | 男女两家相看人品、家境与门第的过程。 |
| 01-02-03 | [合婚与八字相配](./docs/01-marriage-rites/01-02-pre-wedding-customs/03-合婚.md) | 交换庚帖、以生辰八字卜问婚姻吉凶。 |
| 01-02-04 | [小定（过小礼）](./docs/01-marriage-rites/01-02-pre-wedding-customs/04-小定.md) | 初步定亲，男家致送小额聘礼。 |
| 01-02-05 | [大定（过大礼、下聘）](./docs/01-marriage-rites/01-02-pre-wedding-customs/05-大定.md) | 正式纳聘定婚，婚约由此生效。 |
| 01-02-06 | [彩礼与嫁妆议定](./docs/01-marriage-rites/01-02-pre-wedding-customs/06-彩礼与嫁妆.md) | 财礼数额、回礼与妆奁的议定及纠纷处理。 |
| 01-02-07 | [婚约与定亲文书](./docs/01-marriage-rites/01-02-pre-wedding-customs/07-婚约与定亲文书.md) | 婚约的法律与礼俗效力、立约与退婚程式。 |
| 01-02-08 | [送日子（择定婚期）](./docs/01-marriage-rites/01-02-pre-wedding-customs/08-送日子.md) | 将择定婚期通报女家并送期单。 |
| 01-02-09 | [催妆礼](./docs/01-marriage-rites/01-02-pre-wedding-customs/09-催妆礼.md) | 婚期将近，男家送礼催女家备嫁。 |
| 01-02-10 | [安床与铺床](./docs/01-marriage-rites/01-02-pre-wedding-customs/10-安床与铺床.md) | 婚前安置新床、铺床撒帐与吉祥祝语。 |
| 01-02-11 | [上头与开脸](./docs/01-marriage-rites/01-02-pre-wedding-customs/11-上头与开脸.md) | 女子改髻加笄、绞面修容的出阁前仪俗。 |
| 01-02-12 | [嫁妆置办与送嫁妆](./docs/01-marriage-rites/01-02-pre-wedding-customs/12-嫁妆置办与送嫁妆.md) | 妆奁品类、抬送次序与沿途仪俗。 |
| 01-02-13 | [哭嫁](./docs/01-marriage-rites/01-02-pre-wedding-customs/13-哭嫁.md) | 哭嫁歌的类型、唱词结构与情感功能。 |
| 01-02-14 | [告庙与婚前祭祖](./docs/01-marriage-rites/01-02-pre-wedding-customs/14-告庙与婚前祭祖.md) | 婚事前告于祖先、祈请庇佑的家礼。 |
| 01-02-15 | [童养媳、指腹婚与娃娃亲（旧俗考）](./docs/01-marriage-rites/01-02-pre-wedding-customs/15-旧式婚俗考.md) | 旧式畸形婚俗的成因、形态与批判性考察。 |

### 01-03 婚礼当日仪节

> 目录：[`docs/01-marriage-rites/01-03-wedding-day-ceremony/`](./docs/01-marriage-rites/01-03-wedding-day-ceremony/README.md) · 共 17 条

| 编号 | 条目 | 说明 |
| --- | --- | --- |
| 01-03-01 | [亲迎与迎娶仪仗](./docs/01-marriage-rites/01-03-wedding-day-ceremony/01-亲迎与迎娶仪仗.md) | 迎亲队伍、执事、鼓乐与仪仗的组成与路线。 |
| 01-03-02 | [拦门与开门利市](./docs/01-marriage-rites/01-03-wedding-day-ceremony/02-拦门与开门利市.md) | 女家闭门索红包、对歌赛诗的开门口彩。 |
| 01-03-03 | [拜堂（三拜礼）](./docs/01-marriage-rites/01-03-wedding-day-ceremony/03-拜堂.md) | 一拜天地、二拜高堂、夫妻对拜的礼义。 |
| 01-03-04 | [合卺（交杯酒）](./docs/01-marriage-rites/01-03-wedding-day-ceremony/04-合卺.md) | 剖瓠为二、夫妇各执一瓢而饮的合体之礼。 |
| 01-03-05 | [结发与系红绳](./docs/01-marriage-rites/01-03-wedding-day-ceremony/05-结发.md) | 结发为夫妻与系红绳、绾同心结的象征。 |
| 01-03-06 | [撒帐](./docs/01-marriage-rites/01-03-wedding-day-ceremony/06-撒帐.md) | 撒枣栗、五谷入帐，祝多子多福。 |
| 01-03-07 | [挑盖头（喜秤挑盖头）](./docs/01-marriage-rites/01-03-wedding-day-ceremony/07-挑盖头.md) | 以喜秤挑盖头的仪节与吉祥口彩。 |
| 01-03-08 | [坐帐与合床](./docs/01-marriage-rites/01-03-wedding-day-ceremony/08-坐帐与合床.md) | 新人坐帐受贺、合床安寝的仪俗。 |
| 01-03-09 | [庙见（拜舅姑）](./docs/01-marriage-rites/01-03-wedding-day-ceremony/09-庙见.md) | 婚后见舅姑、谒家庙，正式取得妇职。 |
| 01-03-10 | [喜宴与敬酒仪节](./docs/01-marriage-rites/01-03-wedding-day-ceremony/10-喜宴与敬酒.md) | 婚宴座次、上菜次序与新人敬酒的规矩。 |
| 01-03-11 | [闹洞房](./docs/01-marriage-rites/01-03-wedding-day-ceremony/11-闹洞房.md) | 闹房的类型、区域差异与礼俗功能。 |
| 01-03-12 | [见亲戚与分大小](./docs/01-marriage-rites/01-03-wedding-day-ceremony/12-见亲戚与分大小.md) | 新妇认亲、行拜见礼与改口称呼。 |
| 01-03-13 | [回门（归宁）](./docs/01-marriage-rites/01-03-wedding-day-ceremony/13-回门.md) | 婚后同返女家省亲的时间与仪节。 |
| 01-03-14 | [花轿迎娶仪制](./docs/01-marriage-rites/01-03-wedding-day-ceremony/14-花轿迎娶仪制.md) | 花轿形制、抬轿规制与上轿落轿之礼。 |
| 01-03-15 | [喜娘、伴娘与伴郎](./docs/01-marriage-rites/01-03-wedding-day-ceremony/15-喜娘与伴娘伴郎.md) | 婚礼协助者的角色、职责与吉祥条件。 |
| 01-03-16 | [婚庆执事与司仪（礼生）](./docs/01-marriage-rites/01-03-wedding-day-ceremony/16-婚庆执事与司仪.md) | 司仪、礼生、执事的赞礼程式的口头套语。 |
| 01-03-17 | [现代中式婚礼流程整合](./docs/01-marriage-rites/01-03-wedding-day-ceremony/17-现代中式婚礼流程.md) | 传统仪节在现代婚礼中的保留、简化与再编排。 |

### 01-04 婚后礼俗

> 目录：[`docs/01-marriage-rites/01-04-post-wedding-customs/`](./docs/01-marriage-rites/01-04-post-wedding-customs/README.md) · 共 8 条

| 编号 | 条目 | 说明 |
| --- | --- | --- |
| 01-04-01 | [三日回门](./docs/01-marriage-rites/01-04-post-wedding-customs/01-三日回门.md) | 婚后三日新妇归省的仪节与礼物。 |
| 01-04-02 | [双回门与住对月](./docs/01-marriage-rites/01-04-post-wedding-customs/02-双回门与住对月.md) | 夫妇同回女家、新妇住满一月的两地习俗。 |
| 01-04-03 | [谢媒](./docs/01-marriage-rites/01-04-post-wedding-customs/03-谢媒.md) | 婚成之后谢媒的礼物、礼数与俗谚。 |
| 01-04-04 | [送灯与添丁祈愿](./docs/01-marriage-rites/01-04-post-wedding-customs/04-送灯与添丁.md) | 娘家送灯、送子等祈嗣习俗。 |
| 01-04-05 | [满月、百日与周岁礼](./docs/01-marriage-rites/01-04-post-wedding-customs/05-满月百日与周岁.md) | 添丁之后的满月、百日、抓周等育儿礼。 |
| 01-04-06 | [认亲与走亲（新亲往来）](./docs/01-marriage-rites/01-04-post-wedding-customs/06-认亲与走亲.md) | 新亲之间的节令往来与馈赠规则。 |
| 01-04-07 | [分家与立户礼俗](./docs/01-marriage-rites/01-04-post-wedding-customs/07-分家与立户.md) | 成家立户、分家析产中的礼俗约束。 |
| 01-04-08 | [结婚纪念与周年礼俗](./docs/01-marriage-rites/01-04-post-wedding-customs/08-结婚纪念与周年.md) | 从传统「归宁」到现代结婚纪念日的演变。 |

### 01-05 婚嫁器物

> 目录：[`docs/01-marriage-rites/01-05-wedding-objects/`](./docs/01-marriage-rites/01-05-wedding-objects/README.md) · 共 16 条

| 编号 | 条目 | 说明 |
| --- | --- | --- |
| 01-05-01 | [六礼器物（雁、玄纁束帛、俪皮）](./docs/01-marriage-rites/01-05-wedding-objects/01-六礼器物.md) | 礼经所载贽见之物及其礼义。 |
| 01-05-02 | [花轿（喜轿）](./docs/01-marriage-rites/01-05-wedding-objects/02-花轿.md) | 花轿的形制、装饰、抬轿规制与租赁行业。 |
| 01-05-03 | [盖头](./docs/01-marriage-rites/01-05-wedding-objects/03-盖头.md) | 盖头的形制、材质与其遮蔽象征的源流。 |
| 01-05-04 | [婚服：凤冠霞帔与裙褂](./docs/01-marriage-rites/01-05-wedding-objects/04-婚服.md) | 历代婚服形制及其等级与地域差异。 |
| 01-05-05 | [婚鞋（踩堂鞋）](./docs/01-marriage-rites/01-05-wedding-objects/05-婚鞋.md) | 绣鞋、踩堂鞋与「不落夫家」等鞋俗。 |
| 01-05-06 | [喜被与喜枕](./docs/01-marriage-rites/01-05-wedding-objects/06-喜被与喜枕.md) | 龙凤被、喜枕的缝制讲究与铺陈规矩。 |
| 01-05-07 | [花烛与龙凤喜烛](./docs/01-marriage-rites/01-05-wedding-objects/07-花烛.md) | 洞房花烛的形制、点烛仪节与相关禁忌。 |
| 01-05-08 | [合卺杯与交杯酒器](./docs/01-marriage-rites/01-05-wedding-objects/08-合卺杯与交杯酒器.md) | 合卺杯、交杯酒器的器形与用法。 |
| 01-05-09 | [喜秤与吉祥器物](./docs/01-marriage-rites/01-05-wedding-objects/09-喜秤与吉祥器物.md) | 喜秤、如意、斗、尺等吉祥器物的用途。 |
| 01-05-10 | [喜帖（龙凤帖）与请柬](./docs/01-marriage-rites/01-05-wedding-objects/10-喜帖与请柬.md) | 喜帖的形制、行款与投送礼数。 |
| 01-05-11 | [嫁妆箱笼与子孙桶](./docs/01-marriage-rites/01-05-wedding-objects/11-嫁妆箱笼与子孙桶.md) | 妆奁箱笼、子孙桶等妆具的讲究。 |
| 01-05-12 | [锣鼓唢呐与喜庆乐器](./docs/01-marriage-rites/01-05-wedding-objects/12-喜庆乐器.md) | 婚庆鼓乐班子的编制、曲牌与吹打程式。 |
| 01-05-13 | [爆竹与礼花](./docs/01-marriage-rites/01-05-wedding-objects/13-爆竹与礼花.md) | 婚庆爆竹的放法、次序与地域差异。 |
| 01-05-14 | [天地桌与供器](./docs/01-marriage-rites/01-05-wedding-objects/14-天地桌与供器.md) | 天地桌的陈列、香案供器与祭告仪节。 |
| 01-05-15 | [喜字、婚联与剪纸窗花](./docs/01-marriage-rites/01-05-wedding-objects/15-喜字婚联与剪纸.md) | 喜字、喜联的书写张贴与剪纸纹样。 |
| 01-05-16 | [婚庆吉祥纹样（龙凤、鸳鸯、石榴、双喜）](./docs/01-marriage-rites/01-05-wedding-objects/16-吉祥纹样.md) | 婚庆装饰中吉祥纹样的寓意谱系。 |

### 01-06 婚嫁称谓

> 目录：[`docs/01-marriage-rites/01-06-wedding-appellations/`](./docs/01-marriage-rites/01-06-wedding-appellations/README.md) · 共 8 条

| 编号 | 条目 | 说明 |
| --- | --- | --- |
| 01-06-01 | [婚嫁亲属称谓总览](./docs/01-marriage-rites/01-06-wedding-appellations/01-婚嫁亲属称谓总览.md) | 婚嫁前后亲属称谓的变化与整体框架。 |
| 01-06-02 | [媒人（月老、红娘、冰人）](./docs/01-marriage-rites/01-06-wedding-appellations/02-媒人称谓.md) | 媒人各类雅称、俗称的来源与用法。 |
| 01-06-03 | [新郎与新娘称谓源流](./docs/01-marriage-rites/01-06-wedding-appellations/03-新郎新娘称谓.md) | 新郎、新娘、官人、娘子等称谓的源流。 |
| 01-06-04 | [亲家、亲家公、亲家母](./docs/01-marriage-rites/01-06-wedding-appellations/04-亲家称谓.md) | 姻亲长辈称谓的用法与地域变体。 |
| 01-06-05 | [妯娌、连襟、姑嫂、翁婿](./docs/01-marriage-rites/01-06-wedding-appellations/05-姻亲互称.md) | 平辈姻亲与半姻亲关系的称谓体系。 |
| 01-06-06 | [嫡庶、继室与侧室称谓](./docs/01-marriage-rites/01-06-wedding-appellations/06-嫡庶称谓.md) | 正室、继室、侧室、庶出等相关称谓。 |
| 01-06-07 | [婚龄称谓（及笄、弱冠、待字、出阁）](./docs/01-marriage-rites/01-06-wedding-appellations/07-婚龄称谓.md) | 各婚龄阶段称谓及其礼制依据。 |
| 01-06-08 | [嫁娶动词体系（娶、嫁、适、归、赘）](./docs/01-marriage-rites/01-06-wedding-appellations/08-嫁娶动词体系.md) | 表示嫁娶关系的动词群及其语义差别。 |

### 01-07 婚嫁择吉与禁忌

> 目录：[`docs/01-marriage-rites/01-07-wedding-auspicious-taboos/`](./docs/01-marriage-rites/01-07-wedding-auspicious-taboos/README.md) · 共 8 条

| 编号 | 条目 | 说明 |
| --- | --- | --- |
| 01-07-01 | [婚期择吉（黄道吉日与周堂图）](./docs/01-marriage-rites/01-07-wedding-auspicious-taboos/01-婚期择吉.md) | 择日的黄道黑道判定与周堂图的使用。 |
| 01-07-02 | [八字合婚与命理宜忌](./docs/01-marriage-rites/01-07-wedding-auspicious-taboos/02-八字合婚.md) | 八字、纳音、神煞在合婚中的判定方法。 |
| 01-07-03 | [属相冲克与六冲](./docs/01-marriage-rites/01-07-wedding-auspicious-taboos/03-属相冲克.md) | 属相六冲、六合、三合与婚配宜忌。 |
| 01-07-04 | [婚嫁月令禁忌（无春年、寡妇年）](./docs/01-marriage-rites/01-07-wedding-auspicious-taboos/04-月令禁忌.md) | 无春年、本命年等月令禁忌的由来。 |
| 01-07-05 | [婚礼行为禁忌](./docs/01-marriage-rites/01-07-wedding-auspicious-taboos/05-行为禁忌.md) | 忌打碎器物、忌哭、忌扫地等行为禁忌。 |
| 01-07-06 | [婚嫁人员禁忌](./docs/01-marriage-rites/01-07-wedding-auspicious-taboos/06-人员禁忌.md) | 忌寡妇、忌属相相冲者、忌服丧者到场。 |
| 01-07-07 | [婚嫁路线与方位禁忌](./docs/01-marriage-rites/01-07-wedding-auspicious-taboos/07-路线与方位禁忌.md) | 迎亲路线、不走回头路与方位吉凶。 |
| 01-07-08 | [喜冲喜与冲花轿](./docs/01-marriage-rites/01-07-wedding-auspicious-taboos/08-喜冲喜与冲花轿.md) | 两队花轿相遇、喜冲喜的化解办法。 |

### 01-08 汉族各地域婚俗变体

> 目录：[`docs/01-marriage-rites/01-08-han-regional-variants/`](./docs/01-marriage-rites/01-08-han-regional-variants/README.md) · 共 32 条

| 编号 | 条目 | 说明 |
| --- | --- | --- |
| 01-08-01 | [北京婚俗](./docs/01-marriage-rites/01-08-han-regional-variants/01-北京婚俗.md) | 北京地区汉族婚俗的仪节、器物、禁忌与地方变体。 |
| 01-08-02 | [天津婚俗](./docs/01-marriage-rites/01-08-han-regional-variants/02-天津婚俗.md) | 天津地区汉族婚俗的仪节、器物、禁忌与地方变体。 |
| 01-08-03 | [河北婚俗](./docs/01-marriage-rites/01-08-han-regional-variants/03-河北婚俗.md) | 河北地区汉族婚俗的仪节、器物、禁忌与地方变体。 |
| 01-08-04 | [山西婚俗](./docs/01-marriage-rites/01-08-han-regional-variants/04-山西婚俗.md) | 山西地区汉族婚俗的仪节、器物、禁忌与地方变体。（晋商婚俗） |
| 01-08-05 | [内蒙古汉族婚俗](./docs/01-marriage-rites/01-08-han-regional-variants/05-内蒙古汉族婚俗.md) | 内蒙古地区汉族婚俗的仪节、器物、禁忌与地方变体。（走西口移民婚俗） |
| 01-08-06 | [辽宁婚俗](./docs/01-marriage-rites/01-08-han-regional-variants/06-辽宁婚俗.md) | 辽宁地区汉族婚俗的仪节、器物、禁忌与地方变体。 |
| 01-08-07 | [吉林婚俗](./docs/01-marriage-rites/01-08-han-regional-variants/07-吉林婚俗.md) | 吉林地区汉族婚俗的仪节、器物、禁忌与地方变体。 |
| 01-08-08 | [黑龙江婚俗](./docs/01-marriage-rites/01-08-han-regional-variants/08-黑龙江婚俗.md) | 黑龙江地区汉族婚俗的仪节、器物、禁忌与地方变体。 |
| 01-08-09 | [上海婚俗](./docs/01-marriage-rites/01-08-han-regional-variants/09-上海婚俗.md) | 上海地区汉族婚俗的仪节、器物、禁忌与地方变体。 |
| 01-08-10 | [江苏婚俗](./docs/01-marriage-rites/01-08-han-regional-variants/10-江苏婚俗.md) | 江苏地区汉族婚俗的仪节、器物、禁忌与地方变体。 |
| 01-08-11 | [浙江婚俗](./docs/01-marriage-rites/01-08-han-regional-variants/11-浙江婚俗.md) | 浙江地区汉族婚俗的仪节、器物、禁忌与地方变体。 |
| 01-08-12 | [安徽婚俗](./docs/01-marriage-rites/01-08-han-regional-variants/12-安徽婚俗.md) | 安徽地区汉族婚俗的仪节、器物、禁忌与地方变体。（含徽州民系） |
| 01-08-13 | [福建婚俗](./docs/01-marriage-rites/01-08-han-regional-variants/13-福建婚俗.md) | 福建地区汉族婚俗的仪节、器物、禁忌与地方变体。（含闽南、福州民系） |
| 01-08-14 | [江西婚俗](./docs/01-marriage-rites/01-08-han-regional-variants/14-江西婚俗.md) | 江西地区汉族婚俗的仪节、器物、禁忌与地方变体。 |
| 01-08-15 | [山东婚俗](./docs/01-marriage-rites/01-08-han-regional-variants/15-山东婚俗.md) | 山东地区汉族婚俗的仪节、器物、禁忌与地方变体。 |
| 01-08-16 | [河南婚俗](./docs/01-marriage-rites/01-08-han-regional-variants/16-河南婚俗.md) | 河南地区汉族婚俗的仪节、器物、禁忌与地方变体。 |
| 01-08-17 | [湖北婚俗](./docs/01-marriage-rites/01-08-han-regional-variants/17-湖北婚俗.md) | 湖北地区汉族婚俗的仪节、器物、禁忌与地方变体。 |
| 01-08-18 | [湖南婚俗](./docs/01-marriage-rites/01-08-han-regional-variants/18-湖南婚俗.md) | 湖南地区汉族婚俗的仪节、器物、禁忌与地方变体。 |
| 01-08-19 | [广东婚俗](./docs/01-marriage-rites/01-08-han-regional-variants/19-广东婚俗.md) | 广东地区汉族婚俗的仪节、器物、禁忌与地方变体。（含广府、潮汕、客家民系） |
| 01-08-20 | [广西汉族婚俗](./docs/01-marriage-rites/01-08-han-regional-variants/20-广西汉族婚俗.md) | 广西地区汉族婚俗的仪节、器物、禁忌与地方变体。 |
| 01-08-21 | [海南婚俗](./docs/01-marriage-rites/01-08-han-regional-variants/21-海南婚俗.md) | 海南地区汉族婚俗的仪节、器物、禁忌与地方变体。 |
| 01-08-22 | [重庆婚俗](./docs/01-marriage-rites/01-08-han-regional-variants/22-重庆婚俗.md) | 重庆地区汉族婚俗的仪节、器物、禁忌与地方变体。 |
| 01-08-23 | [四川婚俗](./docs/01-marriage-rites/01-08-han-regional-variants/23-四川婚俗.md) | 四川地区汉族婚俗的仪节、器物、禁忌与地方变体。 |
| 01-08-24 | [贵州汉族婚俗](./docs/01-marriage-rites/01-08-han-regional-variants/24-贵州汉族婚俗.md) | 贵州地区汉族婚俗的仪节、器物、禁忌与地方变体。 |
| 01-08-25 | [云南汉族婚俗](./docs/01-marriage-rites/01-08-han-regional-variants/25-云南汉族婚俗.md) | 云南地区汉族婚俗的仪节、器物、禁忌与地方变体。 |
| 01-08-26 | [陕西婚俗](./docs/01-marriage-rites/01-08-han-regional-variants/26-陕西婚俗.md) | 陕西地区汉族婚俗的仪节、器物、禁忌与地方变体。 |
| 01-08-27 | [甘肃婚俗](./docs/01-marriage-rites/01-08-han-regional-variants/27-甘肃婚俗.md) | 甘肃地区汉族婚俗的仪节、器物、禁忌与地方变体。 |
| 01-08-28 | [青海汉族婚俗](./docs/01-marriage-rites/01-08-han-regional-variants/28-青海汉族婚俗.md) | 青海地区汉族婚俗的仪节、器物、禁忌与地方变体。 |
| 01-08-29 | [宁夏婚俗](./docs/01-marriage-rites/01-08-han-regional-variants/29-宁夏婚俗.md) | 宁夏地区汉族婚俗的仪节、器物、禁忌与地方变体。 |
| 01-08-30 | [新疆汉族婚俗](./docs/01-marriage-rites/01-08-han-regional-variants/30-新疆汉族婚俗.md) | 新疆地区汉族婚俗的仪节、器物、禁忌与地方变体。（屯垦移民婚俗） |
| 01-08-31 | [台湾汉人婚俗](./docs/01-marriage-rites/01-08-han-regional-variants/31-台湾汉人婚俗.md) | 台湾地区汉族婚俗的仪节、器物、禁忌与地方变体。 |
| 01-08-32 | [香港澳门婚俗](./docs/01-marriage-rites/01-08-han-regional-variants/32-香港澳门婚俗.md) | 港澳地区汉族婚俗的仪节、器物、禁忌与地方变体。 |

### 01-09 少数民族婚嫁习俗

> 目录：[`docs/01-marriage-rites/01-09-ethnic-minority-marriage/`](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/README.md) · 共 55 条

| 编号 | 条目 | 说明 |
| --- | --- | --- |
| 01-09-01 | [蒙古族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/01-蒙古族婚俗.md) | 蒙古族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-02 | [回族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/02-回族婚俗.md) | 回族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-03 | [藏族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/03-藏族婚俗.md) | 藏族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-04 | [维吾尔族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/04-维吾尔族婚俗.md) | 维吾尔族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-05 | [苗族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/05-苗族婚俗.md) | 苗族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-06 | [彝族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/06-彝族婚俗.md) | 彝族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-07 | [壮族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/07-壮族婚俗.md) | 壮族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-08 | [布依族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/08-布依族婚俗.md) | 布依族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-09 | [朝鲜族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/09-朝鲜族婚俗.md) | 朝鲜族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-10 | [满族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/10-满族婚俗.md) | 满族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-11 | [侗族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/11-侗族婚俗.md) | 侗族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-12 | [瑶族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/12-瑶族婚俗.md) | 瑶族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-13 | [白族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/13-白族婚俗.md) | 白族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-14 | [土家族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/14-土家族婚俗.md) | 土家族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-15 | [哈尼族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/15-哈尼族婚俗.md) | 哈尼族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-16 | [哈萨克族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/16-哈萨克族婚俗.md) | 哈萨克族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-17 | [傣族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/17-傣族婚俗.md) | 傣族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-18 | [黎族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/18-黎族婚俗.md) | 黎族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-19 | [傈僳族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/19-傈僳族婚俗.md) | 傈僳族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-20 | [佤族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/20-佤族婚俗.md) | 佤族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-21 | [畲族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/21-畲族婚俗.md) | 畲族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-22 | [高山族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/22-高山族婚俗.md) | 高山族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-23 | [拉祜族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/23-拉祜族婚俗.md) | 拉祜族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-24 | [水族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/24-水族婚俗.md) | 水族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-25 | [东乡族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/25-东乡族婚俗.md) | 东乡族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-26 | [纳西族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/26-纳西族婚俗.md) | 纳西族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-27 | [景颇族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/27-景颇族婚俗.md) | 景颇族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-28 | [柯尔克孜族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/28-柯尔克孜族婚俗.md) | 柯尔克孜族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-29 | [土族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/29-土族婚俗.md) | 土族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-30 | [达斡尔族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/30-达斡尔族婚俗.md) | 达斡尔族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-31 | [仫佬族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/31-仫佬族婚俗.md) | 仫佬族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-32 | [羌族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/32-羌族婚俗.md) | 羌族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-33 | [布朗族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/33-布朗族婚俗.md) | 布朗族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-34 | [撒拉族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/34-撒拉族婚俗.md) | 撒拉族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-35 | [毛南族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/35-毛南族婚俗.md) | 毛南族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-36 | [仡佬族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/36-仡佬族婚俗.md) | 仡佬族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-37 | [锡伯族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/37-锡伯族婚俗.md) | 锡伯族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-38 | [阿昌族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/38-阿昌族婚俗.md) | 阿昌族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-39 | [普米族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/39-普米族婚俗.md) | 普米族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-40 | [塔吉克族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/40-塔吉克族婚俗.md) | 塔吉克族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-41 | [怒族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/41-怒族婚俗.md) | 怒族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-42 | [乌孜别克族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/42-乌孜别克族婚俗.md) | 乌孜别克族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-43 | [俄罗斯族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/43-俄罗斯族婚俗.md) | 俄罗斯族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-44 | [鄂温克族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/44-鄂温克族婚俗.md) | 鄂温克族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-45 | [德昂族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/45-德昂族婚俗.md) | 德昂族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-46 | [保安族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/46-保安族婚俗.md) | 保安族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-47 | [裕固族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/47-裕固族婚俗.md) | 裕固族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-48 | [京族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/48-京族婚俗.md) | 京族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-49 | [塔塔尔族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/49-塔塔尔族婚俗.md) | 塔塔尔族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-50 | [独龙族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/50-独龙族婚俗.md) | 独龙族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-51 | [鄂伦春族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/51-鄂伦春族婚俗.md) | 鄂伦春族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-52 | [赫哲族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/52-赫哲族婚俗.md) | 赫哲族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-53 | [门巴族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/53-门巴族婚俗.md) | 门巴族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-54 | [珞巴族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/54-珞巴族婚俗.md) | 珞巴族的择偶、议婚、婚礼仪节与婚后习俗。 |
| 01-09-55 | [基诺族婚俗](./docs/01-marriage-rites/01-09-ethnic-minority-marriage/55-基诺族婚俗.md) | 基诺族的择偶、议婚、婚礼仪节与婚后习俗。 |

## 02 丧葬礼俗（凶礼）

丧葬属于传统五礼中的「凶礼」。本编按「初丧 → 入殓 → 停灵 → 出殡下葬 → 葬后祭祀 → 五服 → 器物明器 → 丧服 → 称谓 → 择吉 → 地域 → 民族」十二个维度，整理自《仪礼·士丧礼》以下直至当代殡葬改革的完整礼俗链条。

### 02-01 初丧

> 目录：[`docs/02-funeral-rites/02-01-initial-mourning/`](./docs/02-funeral-rites/02-01-initial-mourning/README.md) · 共 10 条

| 编号 | 条目 | 说明 |
| --- | --- | --- |
| 02-01-01 | [属纩（临终与易箦）](./docs/02-funeral-rites/02-01-initial-mourning/01-属纩.md) | 临终移床易箦、属纩候气以验绝。 |
| 02-01-02 | [复礼（招魂复魄）](./docs/02-funeral-rites/02-01-initial-mourning/02-复礼.md) | 登屋北面呼号，以衣覆尸，冀其复生。 |
| 02-01-03 | [沐浴](./docs/02-funeral-rites/02-01-initial-mourning/03-沐浴.md) | 洗尸、翦爪、束发，为饭含作准备的洁身之礼。 |
| 02-01-04 | [饭含](./docs/02-funeral-rites/02-01-initial-mourning/04-饭含.md) | 以米贝、玉珠实于死者口中，示不忍虚其口。 |
| 02-01-05 | [袭尸与易服](./docs/02-funeral-rites/02-01-initial-mourning/05-袭尸与易服.md) | 为死者着新衣、加冒、设幎目与握手。 |
| 02-01-06 | [设奠与帷堂](./docs/02-funeral-rites/02-01-initial-mourning/06-设奠与帷堂.md) | 设灵座供奠、帷堂以别内外。 |
| 02-01-07 | [报丧与讣告](./docs/02-funeral-rites/02-01-initial-mourning/07-报丧与讣告.md) | 以讣告通于亲友，报丧方式的地域差异。 |
| 02-01-08 | [奔丧](./docs/02-funeral-rites/02-01-initial-mourning/08-奔丧.md) | 闻丧奔赴之礼、哭位序列与行程限制。 |
| 02-01-09 | [立丧主与治丧班子](./docs/02-funeral-rites/02-01-initial-mourning/09-立丧主与治丧班子.md) | 丧主、主妇、护丧及司书、司货的分工。 |
| 02-01-10 | [吊唁与开吊受吊](./docs/02-funeral-rites/02-01-initial-mourning/10-吊唁与开吊受吊.md) | 吊客亲临、赠襚、赙赠与受吊答礼的仪节。 |

### 02-02 入殓

> 目录：[`docs/02-funeral-rites/02-02-encoffining/`](./docs/02-funeral-rites/02-02-encoffining/README.md) · 共 10 条

| 编号 | 条目 | 说明 |
| --- | --- | --- |
| 02-02-01 | [小殓](./docs/02-funeral-rites/02-02-encoffining/01-小殓.md) | 为死者加衣于床、设奠、亲属哭踊。 |
| 02-02-02 | [大殓](./docs/02-funeral-rites/02-02-encoffining/02-大殓.md) | 举尸入棺、陈衣加饰，生死之大别。 |
| 02-02-03 | [入殓择时与禁忌](./docs/02-funeral-rites/02-02-encoffining/03-入殓择时与禁忌.md) | 择吉时入殓、避冲煞及相关禁忌。 |
| 02-02-04 | [棺椁形制与选材](./docs/02-funeral-rites/02-02-encoffining/04-棺椁形制与选材.md) | 历代棺椁等级、用材、榫卯与髹漆做法。 |
| 02-02-05 | [装殓仪节与随葬铺陈](./docs/02-funeral-rites/02-02-encoffining/05-装殓仪节与铺陈.md) | 棺内铺陈、垫枕、随葬品的安放次序。 |
| 02-02-06 | [盖棺与钉棺礼俗](./docs/02-funeral-rites/02-02-encoffining/06-盖棺与钉棺.md) | 盖棺、楔钉、封漆与家属最后的哭别。 |
| 02-02-07 | [开光（开眼光）](./docs/02-funeral-rites/02-02-encoffining/07-开光.md) | 开眼光、开耳光等仪式及其吉祥套语。 |
| 02-02-08 | [入殓用物（打狗棒、五谷袋等）](./docs/02-funeral-rites/02-02-encoffining/08-入殓用物.md) | 打狗棒、五谷袋、过桥饼等入殓用物。 |
| 02-02-09 | [哭丧与哭丧歌](./docs/02-funeral-rites/02-02-encoffining/09-哭丧与哭丧歌.md) | 入殓时的哭丧礼俗与哭丧歌的类型。 |
| 02-02-10 | [各地入殓习俗差异](./docs/02-funeral-rites/02-02-encoffining/10-各地入殓差异.md) | 南北入殓程序、用物与民俗细节的差异。 |

### 02-03 停灵

> 目录：[`docs/02-funeral-rites/02-03-lying-in-state/`](./docs/02-funeral-rites/02-03-lying-in-state/README.md) · 共 11 条

| 编号 | 条目 | 说明 |
| --- | --- | --- |
| 02-03-01 | [灵堂布置](./docs/02-funeral-rites/02-03-lying-in-state/01-灵堂布置.md) | 灵位、遗像、幔帐、纸扎与香烛的陈设规制。 |
| 02-03-02 | [停灵期限与择日](./docs/02-funeral-rites/02-03-lying-in-state/02-停灵期限与择日.md) | 停灵三日、五日的择日依据与地域习惯。 |
| 02-03-03 | [守灵（守夜）](./docs/02-funeral-rites/02-03-lying-in-state/03-守灵.md) | 亲属轮值守夜、照看香火与陪灵的礼俗。 |
| 02-03-04 | [朝夕奠与供饭](./docs/02-funeral-rites/02-03-lying-in-state/04-朝夕奠与供饭.md) | 晨昏设奠、供饭上香与哭踊之节。 |
| 02-03-05 | [哭丧调与哭灵](./docs/02-funeral-rites/02-03-lying-in-state/05-哭丧调与哭灵.md) | 各地哭灵的腔调、哭词与职业哭丧人。 |
| 02-03-06 | [佛教超度法事](./docs/02-funeral-rites/02-03-lying-in-state/06-佛教超度法事.md) | 接引、瑜伽焰口、蒙山施食等佛事仪轨。 |
| 02-03-07 | [道教科仪与破狱](./docs/02-funeral-rites/02-03-lying-in-state/07-道教科仪与破狱.md) | 破狱、炼度、召魂等道门度亡科仪。 |
| 02-03-08 | [儒礼家奠（三献礼）](./docs/02-funeral-rites/02-03-lying-in-state/08-儒礼家奠三献礼.md) | 初献、亚献、终献与读祭文的儒家丧礼仪程。 |
| 02-03-09 | [灵前上香与吊唁仪节](./docs/02-funeral-rites/02-03-lying-in-state/09-灵前上香与吊唁.md) | 上香、跪拜、慰唁与孝子答礼的规范。 |
| 02-03-10 | [祭文、挽联与挽幛](./docs/02-funeral-rites/02-03-lying-in-state/10-祭文挽联与挽幛.md) | 祭文、挽联、挽幛的文体与陈放位置。 |
| 02-03-11 | [灵堂禁忌](./docs/02-funeral-rites/02-03-lying-in-state/11-灵堂禁忌.md) | 灵堂内的行为、言语与生肖冲煞禁忌。 |

### 02-04 出殡下葬

> 目录：[`docs/02-funeral-rites/02-04-funeral-procession-burial/`](./docs/02-funeral-rites/02-04-funeral-procession-burial/README.md) · 共 15 条

| 编号 | 条目 | 说明 |
| --- | --- | --- |
| 02-04-01 | [择日与出殡时辰](./docs/02-funeral-rites/02-04-funeral-procession-burial/01-择日与出殡时辰.md) | 出殡日期、时辰的选择与重丧规避。 |
| 02-04-02 | [启灵与辞灵](./docs/02-funeral-rites/02-04-funeral-procession-burial/02-启灵与辞灵.md) | 启灵、辞灵、举哀与移棺出门的仪节。 |
| 02-04-03 | [摔盆](./docs/02-funeral-rites/02-04-funeral-procession-burial/03-摔盆.md) | 丧盆摔碎的仪节及其继承权象征的解释。 |
| 02-04-04 | [送葬队伍与仪仗](./docs/02-funeral-rites/02-04-funeral-procession-burial/04-送葬队伍与仪仗.md) | 执绋、铭旌、鼓乐、纸扎与队伍序列。 |
| 02-04-05 | [路祭](./docs/02-funeral-rites/02-04-funeral-procession-burial/05-路祭.md) | 亲友于通衢设奠的路祭之俗。 |
| 02-04-06 | [引路幡、招魂幡与撒纸钱](./docs/02-funeral-rites/02-04-funeral-procession-burial/06-引路幡与撒纸钱.md) | 引魂幡、买路钱的形制与撒放方式。 |
| 02-04-07 | [棺罩与抬棺（杠房）](./docs/02-funeral-rites/02-04-funeral-procession-burial/07-棺罩与抬棺.md) | 棺罩、杠绳与杠夫（八抬、十六抬）的行业规制。 |
| 02-04-08 | [下葬（落葬与封土）](./docs/02-funeral-rites/02-04-funeral-procession-burial/08-下葬与封土.md) | 罗盘定向、落棺、掩土、筑坟的完整流程。 |
| 02-04-09 | [墓地选择与阴宅堪舆](./docs/02-funeral-rites/02-04-funeral-procession-burial/09-墓地选择与阴宅堪舆.md) | 形势派与理气派的阴宅选址原则。 |
| 02-04-10 | [点穴定向与罗盘分金](./docs/02-funeral-rites/02-04-funeral-procession-burial/10-点穴定向与分金.md) | 点穴、立向、分金坐度的操作与讲究。 |
| 02-04-11 | [随葬品与明器摆放](./docs/02-funeral-rites/02-04-funeral-procession-burial/11-随葬品与明器摆放.md) | 随葬器物的品类、位置与礼制约束。 |
| 02-04-12 | [葬式类型（土、火、水、天、树、悬棺、塔葬）](./docs/02-funeral-rites/02-04-funeral-procession-burial/12-葬式类型.md) | 主要葬式的地理分布与文化解释。 |
| 02-04-13 | [合葬与迁葬](./docs/02-funeral-rites/02-04-funeral-procession-burial/13-合葬与迁葬.md) | 夫妻合葬、祔葬与迁葬改葬的礼俗。 |
| 02-04-14 | [回灵与谢孝](./docs/02-funeral-rites/02-04-funeral-procession-burial/14-回灵与谢孝.md) | 回灵、安灵、谢孝与答谢吊客的仪节。 |
| 02-04-15 | [现代殡仪与火化流程](./docs/02-funeral-rites/02-04-funeral-procession-burial/15-现代殡仪与火化.md) | 遗体接运、告别仪式与火化的现代流程。 |

### 02-05 葬后系列祭祀

> 目录：[`docs/02-funeral-rites/02-05-post-burial-sacrifices/`](./docs/02-funeral-rites/02-05-post-burial-sacrifices/README.md) · 共 14 条

| 编号 | 条目 | 说明 |
| --- | --- | --- |
| 02-05-01 | [复三（圆坟）](./docs/02-funeral-rites/02-05-post-burial-sacrifices/01-复三与圆坟.md) | 葬后三日修坟、哭奠的复三之礼。 |
| 02-05-02 | [做七（七七）](./docs/02-funeral-rites/02-05-post-burial-sacrifices/02-做七.md) | 头七至七七的周期祭祀及其地方差异。 |
| 02-05-03 | [百日祭](./docs/02-funeral-rites/02-05-post-burial-sacrifices/03-百日祭.md) | 卒后百日设祭的仪节与供品。 |
| 02-05-04 | [周年祭（小祥、大祥）](./docs/02-funeral-rites/02-05-post-burial-sacrifices/04-周年祭.md) | 小祥、大祥的日期、服饰与祭仪。 |
| 02-05-05 | [除服与禫祭](./docs/02-funeral-rites/02-05-post-burial-sacrifices/05-除服与禫祭.md) | 禫祭除服的时间、仪式与服制终结。 |
| 02-05-06 | [清明扫墓](./docs/02-funeral-rites/02-05-post-burial-sacrifices/06-清明扫墓.md) | 扫墓、培土、挂纸与寒食清明合流的由来。 |
| 02-05-07 | [中元节祭祖](./docs/02-funeral-rites/02-05-post-burial-sacrifices/07-中元节祭祖.md) | 七月半祭祖、放河灯与盂兰盆会的融合。 |
| 02-05-08 | [寒衣节送寒衣](./docs/02-funeral-rites/02-05-post-burial-sacrifices/08-寒衣节.md) | 十月初一焚送寒衣的由来与仪节。 |
| 02-05-09 | [冬至与除夕祭祖](./docs/02-funeral-rites/02-05-post-burial-sacrifices/09-冬至与除夕祭祖.md) | 岁时祭祖的两大节点与家祭仪节。 |
| 02-05-10 | [忌日祭与生辰祭](./docs/02-funeral-rites/02-05-post-burial-sacrifices/10-忌日与生辰祭.md) | 忌日、冥诞设祭的家礼规范。 |
| 02-05-11 | [家庙与祠堂祭祀](./docs/02-funeral-rites/02-05-post-burial-sacrifices/11-家庙与祠堂祭祀.md) | 家庙、祠堂的祭祖制度与族祭仪式。 |
| 02-05-12 | [墓祭与祠祭仪节比较](./docs/02-funeral-rites/02-05-post-burial-sacrifices/12-墓祭与祠祭比较.md) | 墓祭与祠祭在空间、时间与参与者上的差异。 |
| 02-05-13 | [祭祖供品与纸扎冥币](./docs/02-funeral-rites/02-05-post-burial-sacrifices/13-祭祖供品与纸扎冥币.md) | 时令供品、纸扎与烧化的种类与讲究。 |
| 02-05-14 | [现代追思会与网上祭扫](./docs/02-funeral-rites/02-05-post-burial-sacrifices/14-现代追思会与网上祭扫.md) | 追思会、网上祭扫与生态安葬等新形态。 |

### 02-06 五服制度

> 目录：[`docs/02-funeral-rites/02-06-five-degrees-mourning/`](./docs/02-funeral-rites/02-06-five-degrees-mourning/README.md) · 共 12 条

| 编号 | 条目 | 说明 |
| --- | --- | --- |
| 02-06-01 | [五服制度总述](./docs/02-funeral-rites/02-06-five-degrees-mourning/01-五服制度总述.md) | 以亲疏定服等，五服与九族的整体框架。 |
| 02-06-02 | [斩衰（三年）](./docs/02-funeral-rites/02-06-five-degrees-mourning/02-斩衰.md) | 最重之服：子为父、妻为夫、臣为君。 |
| 02-06-03 | [齐衰（三年、杖期、不杖期、三月）](./docs/02-funeral-rites/02-06-five-degrees-mourning/03-齐衰.md) | 齐衰四等的适用亲属与差别。 |
| 02-06-04 | [大功（九月）](./docs/02-funeral-rites/02-06-five-degrees-mourning/04-大功.md) | 大功九月之服的亲属范围与服制细节。 |
| 02-06-05 | [小功（五月）](./docs/02-funeral-rites/02-06-five-degrees-mourning/05-小功.md) | 小功五月之服与相应亲属范围。 |
| 02-06-06 | [缌麻（三月）](./docs/02-funeral-rites/02-06-five-degrees-mourning/06-缌麻.md) | 五服中最轻之服及其亲属。 |
| 02-06-07 | [袒免与无服之亲](./docs/02-funeral-rites/02-06-five-degrees-mourning/07-袒免与无服之亲.md) | 袒免之礼与出了五服之后的人情往来。 |
| 02-06-08 | [加服、降服与报服](./docs/02-funeral-rites/02-06-five-degrees-mourning/08-加服降服与报服.md) | 因宗法、恩义而变动的服制规则。 |
| 02-06-09 | [本宗九族五服图](./docs/02-funeral-rites/02-06-five-degrees-mourning/09-九族五服图.md) | 自高祖至玄孙的本宗服制图表。 |
| 02-06-10 | [外亲服制（母族、妻族、女族）](./docs/02-funeral-rites/02-06-five-degrees-mourning/10-外亲服制.md) | 母族、妻族与姐妹女族的外亲服等。 |
| 02-06-11 | [五服与宗法制度](./docs/02-funeral-rites/02-06-five-degrees-mourning/11-五服与宗法制度.md) | 服制、宗族组织与财产继承之间的关联。 |
| 02-06-12 | [五服制度的现代遗存](./docs/02-funeral-rites/02-06-five-degrees-mourning/12-五服的现代遗存.md) | 当代民间孝服与服丧习惯中残留的五服痕迹。 |

### 02-07 丧葬器物明器

> 目录：[`docs/02-funeral-rites/02-07-funeral-objects-mingqi/`](./docs/02-funeral-rites/02-07-funeral-objects-mingqi/README.md) · 共 15 条

| 编号 | 条目 | 说明 |
| --- | --- | --- |
| 02-07-01 | [明器源流与礼制规定](./docs/02-funeral-rites/02-07-funeral-objects-mingqi/01-明器源流与礼制.md) | 明器「备物而不可用」的礼义与历代形制。 |
| 02-07-02 | [棺椁与棺饰](./docs/02-funeral-rites/02-07-funeral-objects-mingqi/02-棺椁与棺饰.md) | 棺、椁、棺饰的等级与装饰体系。 |
| 02-07-03 | [寿衣形制与讲究](./docs/02-funeral-rites/02-07-funeral-objects-mingqi/03-寿衣.md) | 寿衣的件数、颜色、材质与穿戴禁忌。 |
| 02-07-04 | [灵位、神主与木主](./docs/02-funeral-rites/02-07-funeral-objects-mingqi/04-灵位与神主.md) | 灵位与神主的形制、点主礼与奉祀。 |
| 02-07-05 | [铭旌与招魂幡](./docs/02-funeral-rites/02-07-funeral-objects-mingqi/05-铭旌与招魂幡.md) | 铭旌书谥、招魂幡引路的形制与用途。 |
| 02-07-06 | [纸扎（纸人、纸马、纸屋）](./docs/02-funeral-rites/02-07-funeral-objects-mingqi/06-纸扎.md) | 纸扎的品类、扎制工艺与焚烧讲究。 |
| 02-07-07 | [冥币与纸钱](./docs/02-funeral-rites/02-07-funeral-objects-mingqi/07-冥币与纸钱.md) | 打钱、纸钱、冥币的形制演变与烧化礼俗。 |
| 02-07-08 | [丧盆与哭丧棒](./docs/02-funeral-rites/02-07-funeral-objects-mingqi/08-丧盆与哭丧棒.md) | 丧盆、孝棒（哭丧棒）的形制与用途。 |
| 02-07-09 | [丧葬法器（引磬、木鱼、铃铛）](./docs/02-funeral-rites/02-07-funeral-objects-mingqi/09-丧葬法器.md) | 佛道法事中法器的形制与用法。 |
| 02-07-10 | [挽联、挽幛与花圈](./docs/02-funeral-rites/02-07-funeral-objects-mingqi/10-挽联挽幛与花圈.md) | 挽联、挽幛、花圈的书写格式与陈放位置。 |
| 02-07-11 | [墓碑、墓志与神道碑](./docs/02-funeral-rites/02-07-funeral-objects-mingqi/11-墓碑墓志与神道碑.md) | 墓碑、墓志铭、神道碑的文体与形制。 |
| 02-07-12 | [随葬器物（陶俑、玉器、铜器）](./docs/02-funeral-rites/02-07-funeral-objects-mingqi/12-随葬器物.md) | 历代随葬器物的品类与考古所见。 |
| 02-07-13 | [镇墓兽与辟邪明器](./docs/02-funeral-rites/02-07-funeral-objects-mingqi/13-镇墓兽与辟邪明器.md) | 镇墓兽、辟邪俑等辟邪类明器的形制。 |
| 02-07-14 | [买地券与告地策](./docs/02-funeral-rites/02-07-funeral-objects-mingqi/14-买地券与告地策.md) | 买地券、告地策的文本格式与宗教含义。 |
| 02-07-15 | [现代殡葬用品](./docs/02-funeral-rites/02-07-funeral-objects-mingqi/15-现代殡葬用品.md) | 骨灰盒、花圈、电子祭品等现代殡葬用品。 |

### 02-08 丧服规制

> 目录：[`docs/02-funeral-rites/02-08-mourning-attire-regulations/`](./docs/02-funeral-rites/02-08-mourning-attire-regulations/README.md) · 共 10 条

| 编号 | 条目 | 说明 |
| --- | --- | --- |
| 02-08-01 | [丧服形制](./docs/02-funeral-rites/02-08-mourning-attire-regulations/01-丧服形制.md) | 五等丧服的形制差别与裁剪方式。 |
| 02-08-02 | [丧服材质与规格](./docs/02-funeral-rites/02-08-mourning-attire-regulations/02-丧服材质与规格.md) | 麻布升数、生熟、粗细的等级规定。 |
| 02-08-03 | [首服：冠、绖、带](./docs/02-funeral-rites/02-08-mourning-attire-regulations/03-首服冠绖带.md) | 丧冠、首绖、腰绖与绞带的形制。 |
| 02-08-04 | [丧杖](./docs/02-funeral-rites/02-08-mourning-attire-regulations/04-丧杖.md) | 苴杖、削杖的材质、长度与执杖之礼。 |
| 02-08-05 | [丧服变除（受服、变服、除服）](./docs/02-funeral-rites/02-08-mourning-attire-regulations/05-丧服变除.md) | 受服、变服、除服的时间节点与仪节。 |
| 02-08-06 | [丧服期限与仪节](./docs/02-funeral-rites/02-08-mourning-attire-regulations/06-丧服期限与仪节.md) | 各等丧服的服丧月数与服内仪节。 |
| 02-08-07 | [丧服与身份等级](./docs/02-funeral-rites/02-08-mourning-attire-regulations/07-丧服与身份等级.md) | 天子、诸侯、大夫、士、庶人的服制差异。 |
| 02-08-08 | [女性丧服规制](./docs/02-funeral-rites/02-08-mourning-attire-regulations/08-女性丧服规制.md) | 女性在室与出嫁之后服制的变化。 |
| 02-08-09 | [丧服禁忌与起居限制](./docs/02-funeral-rites/02-08-mourning-attire-regulations/09-丧服禁忌与起居.md) | 居丧期间的居处、饮食、言语与婚娶限制。 |
| 02-08-10 | [现代孝服（孝布、黑纱、白花）](./docs/02-funeral-rites/02-08-mourning-attire-regulations/10-现代孝服.md) | 孝布、孝箍、黑纱白花的现代形态。 |

### 02-09 丧葬称谓

> 目录：[`docs/02-funeral-rites/02-09-funeral-appellations/`](./docs/02-funeral-rites/02-09-funeral-appellations/README.md) · 共 10 条

| 编号 | 条目 | 说明 |
| --- | --- | --- |
| 02-09-01 | [丧葬称谓总览](./docs/02-funeral-rites/02-09-funeral-appellations/01-丧葬称谓总览.md) | 丧葬语境下称谓系统的整体分类与用法。 |
| 02-09-02 | [逝者称谓（先考、先妣）](./docs/02-funeral-rites/02-09-funeral-appellations/02-逝者称谓.md) | 先考、先妣、亡妻等逝者称谓的使用场合。 |
| 02-09-03 | [丧主、孝子、孝女、孝妇](./docs/02-funeral-rites/02-09-funeral-appellations/03-丧主与孝子孝女.md) | 主丧者与孝属的身份界定与职责。 |
| 02-09-04 | [孤子、哀子、孤哀子](./docs/02-funeral-rites/02-09-funeral-appellations/04-孤子哀子孤哀子.md) | 讣告中守制自称的用字规范与分别。 |
| 02-09-05 | [居丧自称与讣告亲属称谓格式](./docs/02-funeral-rites/02-09-funeral-appellations/05-居丧自称与讣告格式.md) | 讣告中亲属称谓的行文格式与范例。 |
| 02-09-06 | [死之讳称体系（崩、薨、卒、不禄）](./docs/02-funeral-rites/02-09-funeral-appellations/06-死之讳称体系.md) | 按等级讳称死亡及民间的婉辞体系。 |
| 02-09-07 | [丁忧、守制与夺情](./docs/02-funeral-rites/02-09-funeral-appellations/07-丁忧守制与夺情.md) | 官员丁忧、守制期限与夺情的制度。 |
| 02-09-08 | [谥号、庙号与神主称谓](./docs/02-funeral-rites/02-09-funeral-appellations/08-谥号庙号与神主称谓.md) | 谥号、庙号、神主题名的书写规则。 |
| 02-09-09 | [丧礼执事称谓](./docs/02-funeral-rites/02-09-funeral-appellations/09-丧礼执事称谓.md) | 大宾、礼生、司仪、杠夫等执事称谓。 |
| 02-09-10 | [慰唁用语与吊丧称谓](./docs/02-funeral-rites/02-09-funeral-appellations/10-慰唁用语与吊丧称谓.md) | 吊丧、慰唁、赙赠中的称谓与用语。 |

### 02-10 丧葬择吉禁忌

> 目录：[`docs/02-funeral-rites/02-10-funeral-auspicious-taboos/`](./docs/02-funeral-rites/02-10-funeral-auspicious-taboos/README.md) · 共 10 条

| 编号 | 条目 | 说明 |
| --- | --- | --- |
| 02-10-01 | [丧期择日与重丧禁忌](./docs/02-funeral-rites/02-10-funeral-auspicious-taboos/01-丧期择日与重丧.md) | 重丧日、三丧日等择日禁忌与其化解。 |
| 02-10-02 | [停灵日数与“七”的禁忌](./docs/02-funeral-rites/02-10-funeral-auspicious-taboos/02-停灵日数与七.md) | 停灵单双日数与逢七的禁忌讲究。 |
| 02-10-03 | [出殡时辰与方位禁忌](./docs/02-funeral-rites/02-10-funeral-auspicious-taboos/03-出殡时辰与方位.md) | 出殡时辰、出门方向与所忌方位。 |
| 02-10-04 | [墓地风水与十不葬](./docs/02-funeral-rites/02-10-funeral-auspicious-taboos/04-墓地风水与十不葬.md) | 十不葬、砂水朝向等阴宅选址禁忌。 |
| 02-10-05 | [入殓禁忌](./docs/02-funeral-rites/02-10-funeral-auspicious-taboos/05-入殓禁忌.md) | 入殓时忌泪落尸身、忌猫近尸等禁忌。 |
| 02-10-06 | [丧期饮食禁忌](./docs/02-funeral-rites/02-10-funeral-auspicious-taboos/06-丧期饮食禁忌.md) | 忌荤腥、忌酒、斋饭等丧期饮食规定。 |
| 02-10-07 | [丧期行为禁忌](./docs/02-funeral-rites/02-10-funeral-auspicious-taboos/07-丧期行为禁忌.md) | 忌理发、忌娱乐、忌串门等行为限制。 |
| 02-10-08 | [服丧者交往禁忌](./docs/02-funeral-rites/02-10-funeral-auspicious-taboos/08-服丧者交往禁忌.md) | 服丧期间婚娶、赴宴、拜年的禁忌。 |
| 02-10-09 | [冲煞与生肖禁忌](./docs/02-funeral-rites/02-10-funeral-auspicious-taboos/09-冲煞与生肖禁忌.md) | 生肖相冲、犯太岁与相关回避安排。 |
| 02-10-10 | [趋吉辟邪习俗](./docs/02-funeral-rites/02-10-funeral-auspicious-taboos/10-趋吉辟邪习俗.md) | 桃枝、朱砂、符箓等辟邪习俗及其解释。 |

### 02-11 汉族各地域丧俗变体

> 目录：[`docs/02-funeral-rites/02-11-han-regional-variants/`](./docs/02-funeral-rites/02-11-han-regional-variants/README.md) · 共 32 条

| 编号 | 条目 | 说明 |
| --- | --- | --- |
| 02-11-01 | [北京丧俗](./docs/02-funeral-rites/02-11-han-regional-variants/01-北京丧俗.md) | 北京地区汉族丧俗的仪节、器物、禁忌与地方变体。 |
| 02-11-02 | [天津丧俗](./docs/02-funeral-rites/02-11-han-regional-variants/02-天津丧俗.md) | 天津地区汉族丧俗的仪节、器物、禁忌与地方变体。 |
| 02-11-03 | [河北丧俗](./docs/02-funeral-rites/02-11-han-regional-variants/03-河北丧俗.md) | 河北地区汉族丧俗的仪节、器物、禁忌与地方变体。 |
| 02-11-04 | [山西丧俗](./docs/02-funeral-rites/02-11-han-regional-variants/04-山西丧俗.md) | 山西地区汉族丧俗的仪节、器物、禁忌与地方变体。（晋商婚俗） |
| 02-11-05 | [内蒙古汉族丧俗](./docs/02-funeral-rites/02-11-han-regional-variants/05-内蒙古汉族丧俗.md) | 内蒙古地区汉族丧俗的仪节、器物、禁忌与地方变体。（走西口移民婚俗） |
| 02-11-06 | [辽宁丧俗](./docs/02-funeral-rites/02-11-han-regional-variants/06-辽宁丧俗.md) | 辽宁地区汉族丧俗的仪节、器物、禁忌与地方变体。 |
| 02-11-07 | [吉林丧俗](./docs/02-funeral-rites/02-11-han-regional-variants/07-吉林丧俗.md) | 吉林地区汉族丧俗的仪节、器物、禁忌与地方变体。 |
| 02-11-08 | [黑龙江丧俗](./docs/02-funeral-rites/02-11-han-regional-variants/08-黑龙江丧俗.md) | 黑龙江地区汉族丧俗的仪节、器物、禁忌与地方变体。 |
| 02-11-09 | [上海丧俗](./docs/02-funeral-rites/02-11-han-regional-variants/09-上海丧俗.md) | 上海地区汉族丧俗的仪节、器物、禁忌与地方变体。 |
| 02-11-10 | [江苏丧俗](./docs/02-funeral-rites/02-11-han-regional-variants/10-江苏丧俗.md) | 江苏地区汉族丧俗的仪节、器物、禁忌与地方变体。 |
| 02-11-11 | [浙江丧俗](./docs/02-funeral-rites/02-11-han-regional-variants/11-浙江丧俗.md) | 浙江地区汉族丧俗的仪节、器物、禁忌与地方变体。 |
| 02-11-12 | [安徽丧俗](./docs/02-funeral-rites/02-11-han-regional-variants/12-安徽丧俗.md) | 安徽地区汉族丧俗的仪节、器物、禁忌与地方变体。（含徽州民系） |
| 02-11-13 | [福建丧俗](./docs/02-funeral-rites/02-11-han-regional-variants/13-福建丧俗.md) | 福建地区汉族丧俗的仪节、器物、禁忌与地方变体。（含闽南、福州民系） |
| 02-11-14 | [江西丧俗](./docs/02-funeral-rites/02-11-han-regional-variants/14-江西丧俗.md) | 江西地区汉族丧俗的仪节、器物、禁忌与地方变体。 |
| 02-11-15 | [山东丧俗](./docs/02-funeral-rites/02-11-han-regional-variants/15-山东丧俗.md) | 山东地区汉族丧俗的仪节、器物、禁忌与地方变体。 |
| 02-11-16 | [河南丧俗](./docs/02-funeral-rites/02-11-han-regional-variants/16-河南丧俗.md) | 河南地区汉族丧俗的仪节、器物、禁忌与地方变体。 |
| 02-11-17 | [湖北丧俗](./docs/02-funeral-rites/02-11-han-regional-variants/17-湖北丧俗.md) | 湖北地区汉族丧俗的仪节、器物、禁忌与地方变体。 |
| 02-11-18 | [湖南丧俗](./docs/02-funeral-rites/02-11-han-regional-variants/18-湖南丧俗.md) | 湖南地区汉族丧俗的仪节、器物、禁忌与地方变体。 |
| 02-11-19 | [广东丧俗](./docs/02-funeral-rites/02-11-han-regional-variants/19-广东丧俗.md) | 广东地区汉族丧俗的仪节、器物、禁忌与地方变体。（含广府、潮汕、客家民系） |
| 02-11-20 | [广西汉族丧俗](./docs/02-funeral-rites/02-11-han-regional-variants/20-广西汉族丧俗.md) | 广西地区汉族丧俗的仪节、器物、禁忌与地方变体。 |
| 02-11-21 | [海南丧俗](./docs/02-funeral-rites/02-11-han-regional-variants/21-海南丧俗.md) | 海南地区汉族丧俗的仪节、器物、禁忌与地方变体。 |
| 02-11-22 | [重庆丧俗](./docs/02-funeral-rites/02-11-han-regional-variants/22-重庆丧俗.md) | 重庆地区汉族丧俗的仪节、器物、禁忌与地方变体。 |
| 02-11-23 | [四川丧俗](./docs/02-funeral-rites/02-11-han-regional-variants/23-四川丧俗.md) | 四川地区汉族丧俗的仪节、器物、禁忌与地方变体。 |
| 02-11-24 | [贵州汉族丧俗](./docs/02-funeral-rites/02-11-han-regional-variants/24-贵州汉族丧俗.md) | 贵州地区汉族丧俗的仪节、器物、禁忌与地方变体。 |
| 02-11-25 | [云南汉族丧俗](./docs/02-funeral-rites/02-11-han-regional-variants/25-云南汉族丧俗.md) | 云南地区汉族丧俗的仪节、器物、禁忌与地方变体。 |
| 02-11-26 | [陕西丧俗](./docs/02-funeral-rites/02-11-han-regional-variants/26-陕西丧俗.md) | 陕西地区汉族丧俗的仪节、器物、禁忌与地方变体。 |
| 02-11-27 | [甘肃丧俗](./docs/02-funeral-rites/02-11-han-regional-variants/27-甘肃丧俗.md) | 甘肃地区汉族丧俗的仪节、器物、禁忌与地方变体。 |
| 02-11-28 | [青海汉族丧俗](./docs/02-funeral-rites/02-11-han-regional-variants/28-青海汉族丧俗.md) | 青海地区汉族丧俗的仪节、器物、禁忌与地方变体。 |
| 02-11-29 | [宁夏丧俗](./docs/02-funeral-rites/02-11-han-regional-variants/29-宁夏丧俗.md) | 宁夏地区汉族丧俗的仪节、器物、禁忌与地方变体。 |
| 02-11-30 | [新疆汉族丧俗](./docs/02-funeral-rites/02-11-han-regional-variants/30-新疆汉族丧俗.md) | 新疆地区汉族丧俗的仪节、器物、禁忌与地方变体。（屯垦移民婚俗） |
| 02-11-31 | [台湾汉人丧俗](./docs/02-funeral-rites/02-11-han-regional-variants/31-台湾汉人丧俗.md) | 台湾地区汉族丧俗的仪节、器物、禁忌与地方变体。 |
| 02-11-32 | [香港澳门丧俗](./docs/02-funeral-rites/02-11-han-regional-variants/32-香港澳门丧俗.md) | 港澳地区汉族丧俗的仪节、器物、禁忌与地方变体。 |

### 02-12 少数民族丧葬习俗

> 目录：[`docs/02-funeral-rites/02-12-ethnic-minority-funeral/`](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/README.md) · 共 55 条

| 编号 | 条目 | 说明 |
| --- | --- | --- |
| 02-12-01 | [蒙古族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/01-蒙古族丧葬.md) | 蒙古族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-02 | [回族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/02-回族丧葬.md) | 回族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-03 | [藏族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/03-藏族丧葬.md) | 藏族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-04 | [维吾尔族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/04-维吾尔族丧葬.md) | 维吾尔族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-05 | [苗族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/05-苗族丧葬.md) | 苗族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-06 | [彝族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/06-彝族丧葬.md) | 彝族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-07 | [壮族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/07-壮族丧葬.md) | 壮族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-08 | [布依族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/08-布依族丧葬.md) | 布依族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-09 | [朝鲜族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/09-朝鲜族丧葬.md) | 朝鲜族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-10 | [满族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/10-满族丧葬.md) | 满族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-11 | [侗族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/11-侗族丧葬.md) | 侗族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-12 | [瑶族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/12-瑶族丧葬.md) | 瑶族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-13 | [白族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/13-白族丧葬.md) | 白族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-14 | [土家族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/14-土家族丧葬.md) | 土家族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-15 | [哈尼族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/15-哈尼族丧葬.md) | 哈尼族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-16 | [哈萨克族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/16-哈萨克族丧葬.md) | 哈萨克族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-17 | [傣族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/17-傣族丧葬.md) | 傣族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-18 | [黎族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/18-黎族丧葬.md) | 黎族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-19 | [傈僳族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/19-傈僳族丧葬.md) | 傈僳族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-20 | [佤族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/20-佤族丧葬.md) | 佤族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-21 | [畲族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/21-畲族丧葬.md) | 畲族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-22 | [高山族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/22-高山族丧葬.md) | 高山族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-23 | [拉祜族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/23-拉祜族丧葬.md) | 拉祜族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-24 | [水族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/24-水族丧葬.md) | 水族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-25 | [东乡族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/25-东乡族丧葬.md) | 东乡族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-26 | [纳西族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/26-纳西族丧葬.md) | 纳西族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-27 | [景颇族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/27-景颇族丧葬.md) | 景颇族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-28 | [柯尔克孜族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/28-柯尔克孜族丧葬.md) | 柯尔克孜族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-29 | [土族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/29-土族丧葬.md) | 土族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-30 | [达斡尔族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/30-达斡尔族丧葬.md) | 达斡尔族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-31 | [仫佬族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/31-仫佬族丧葬.md) | 仫佬族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-32 | [羌族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/32-羌族丧葬.md) | 羌族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-33 | [布朗族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/33-布朗族丧葬.md) | 布朗族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-34 | [撒拉族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/34-撒拉族丧葬.md) | 撒拉族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-35 | [毛南族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/35-毛南族丧葬.md) | 毛南族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-36 | [仡佬族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/36-仡佬族丧葬.md) | 仡佬族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-37 | [锡伯族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/37-锡伯族丧葬.md) | 锡伯族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-38 | [阿昌族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/38-阿昌族丧葬.md) | 阿昌族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-39 | [普米族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/39-普米族丧葬.md) | 普米族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-40 | [塔吉克族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/40-塔吉克族丧葬.md) | 塔吉克族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-41 | [怒族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/41-怒族丧葬.md) | 怒族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-42 | [乌孜别克族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/42-乌孜别克族丧葬.md) | 乌孜别克族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-43 | [俄罗斯族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/43-俄罗斯族丧葬.md) | 俄罗斯族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-44 | [鄂温克族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/44-鄂温克族丧葬.md) | 鄂温克族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-45 | [德昂族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/45-德昂族丧葬.md) | 德昂族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-46 | [保安族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/46-保安族丧葬.md) | 保安族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-47 | [裕固族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/47-裕固族丧葬.md) | 裕固族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-48 | [京族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/48-京族丧葬.md) | 京族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-49 | [塔塔尔族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/49-塔塔尔族丧葬.md) | 塔塔尔族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-50 | [独龙族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/50-独龙族丧葬.md) | 独龙族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-51 | [鄂伦春族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/51-鄂伦春族丧葬.md) | 鄂伦春族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-52 | [赫哲族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/52-赫哲族丧葬.md) | 赫哲族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-53 | [门巴族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/53-门巴族丧葬.md) | 门巴族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-54 | [珞巴族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/54-珞巴族丧葬.md) | 珞巴族的临终、治丧、葬式与葬后祭祀习俗。 |
| 02-12-55 | [基诺族丧葬](./docs/02-funeral-rites/02-12-ethnic-minority-funeral/55-基诺族丧葬.md) | 基诺族的临终、治丧、葬式与葬后祭祀习俗。 |

## 03 配套附属板块

为婚丧两编提供背景支撑的三大附属板块：亲属称谓体系、婚丧文书范本与礼制基础概念。

### 03-01 传统亲属称谓

> 目录：[`docs/03-appendix/03-01-kinship-terms/`](./docs/03-appendix/03-01-kinship-terms/README.md) · 共 8 条

| 编号 | 条目 | 说明 |
| --- | --- | --- |
| 03-01-01 | [亲属称谓体系总述](./docs/03-appendix/03-01-kinship-terms/01-亲属称谓体系总述.md) | 宗亲、外亲、妻亲三大系统与层次划分。 |
| 03-01-02 | [宗亲称谓（父系九族）](./docs/03-appendix/03-01-kinship-terms/02-宗亲称谓.md) | 父系九族（自高祖至玄孙）的称谓表。 |
| 03-01-03 | [外亲称谓（母族）](./docs/03-appendix/03-01-kinship-terms/03-外亲称谓.md) | 母族亲属（外祖、舅、姨等）称谓。 |
| 03-01-04 | [妻亲称谓（姻亲）](./docs/03-appendix/03-01-kinship-terms/04-妻亲称谓.md) | 妻族与姻亲称谓及相互称呼方式。 |
| 03-01-05 | [直系与旁系称谓对照](./docs/03-appendix/03-01-kinship-terms/05-直系旁系称谓对照.md) | 直系与旁系、尊卑两向称谓的对照表。 |
| 03-01-06 | [尊称与谦称](./docs/03-appendix/03-01-kinship-terms/06-尊称与谦称.md) | 亲属交往中的尊称、谦称与书面用语。 |
| 03-01-07 | [亲属称谓的古今演变](./docs/03-appendix/03-01-kinship-terms/07-亲属称谓古今演变.md) | 古今称谓的替换、简化与雅化过程。 |
| 03-01-08 | [各方言区亲属称谓差异](./docs/03-appendix/03-01-kinship-terms/08-方言区亲属称谓差异.md) | 官话与各大方言区称谓差异举要。 |

### 03-02 婚丧文书范本

> 目录：[`docs/03-appendix/03-02-document-templates/`](./docs/03-appendix/03-02-document-templates/README.md) · 共 14 条

| 编号 | 条目 | 说明 |
| --- | --- | --- |
| 03-02-01 | [婚丧文书总述与格式规范](./docs/03-appendix/03-02-document-templates/01-婚丧文书总述.md) | 婚丧文书的文体、行款、称谓与用纸规范。 |
| 03-02-02 | [庚帖（八字帖）范本](./docs/03-appendix/03-02-document-templates/02-庚帖范本.md) | 庚帖的格式、用语与书写范例。 |
| 03-02-03 | [婚书（龙凤帖）范本](./docs/03-appendix/03-02-document-templates/03-婚书范本.md) | 婚书的固定程式与男女双方文本范例。 |
| 03-02-04 | [聘书与礼单范本](./docs/03-appendix/03-02-document-templates/04-聘书与礼单范本.md) | 聘书、礼单、回帖的格式与用例。 |
| 03-02-05 | [请柬与婚宴邀请函范本](./docs/03-appendix/03-02-document-templates/05-请柬与邀请函范本.md) | 传统请柬与现代邀请函的写法对比。 |
| 03-02-06 | [婚礼赞礼词范本](./docs/03-appendix/03-02-document-templates/06-婚礼赞礼词范本.md) | 各婚礼环节主持赞礼词的范例。 |
| 03-02-07 | [祭文范本](./docs/03-appendix/03-02-document-templates/07-祭文范本.md) | 家祭、公祭祭文的格式与范文。 |
| 03-02-08 | [讣告范本](./docs/03-appendix/03-02-document-templates/08-讣告范本.md) | 讣告的行文格式、亲属署名与范文。 |
| 03-02-09 | [悼词与哀启范本](./docs/03-appendix/03-02-document-templates/09-悼词与哀启范本.md) | 追悼会悼词与哀启的写作范例。 |
| 03-02-10 | [挽联、挽幛范本](./docs/03-appendix/03-02-document-templates/10-挽联挽幛范本.md) | 挽联平仄对仗规则与各类范例。 |
| 03-02-11 | [墓碑文与墓志铭范本](./docs/03-appendix/03-02-document-templates/11-墓碑文与墓志铭范本.md) | 墓碑文、墓志铭的体例与范文。 |
| 03-02-12 | [谢帖与答谢启范本](./docs/03-appendix/03-02-document-templates/12-谢帖与答谢启范本.md) | 丧事谢帖、答谢启的格式与范例。 |
| 03-02-13 | [祭祖祝文范本](./docs/03-appendix/03-02-document-templates/13-祭祖祝文范本.md) | 岁时祭祖祝文的格式与范文。 |
| 03-02-14 | [现代电子讣告与追思函范本](./docs/03-appendix/03-02-document-templates/14-现代电子讣告与追思函.md) | 微信群讣告、线上追思函的写法范例。 |

### 03-03 礼制基础概念

> 目录：[`docs/03-appendix/03-03-ritual-concepts/`](./docs/03-appendix/03-03-ritual-concepts/README.md) · 共 20 条

| 编号 | 条目 | 说明 |
| --- | --- | --- |
| 03-03-01 | [五礼体系（吉、凶、军、宾、嘉）](./docs/03-appendix/03-03-ritual-concepts/01-五礼体系.md) | 《周礼》五礼的分类逻辑与内容。 |
| 03-03-02 | [礼与俗的关系](./docs/03-appendix/03-03-ritual-concepts/02-礼与俗的关系.md) | 礼制与民俗之间的互动、上行下效与俗化。 |
| 03-03-03 | [宗法制度](./docs/03-appendix/03-03-ritual-concepts/03-宗法制度.md) | 大宗小宗、嫡长子继承与宗族组织形态。 |
| 03-03-04 | [昭穆制度](./docs/03-appendix/03-03-ritual-concepts/04-昭穆制度.md) | 昭穆排列原则及其在庙次、墓次中的体现。 |
| 03-03-05 | [庙制与祭祖制度](./docs/03-appendix/03-03-ritual-concepts/05-庙制与祭祖制度.md) | 自天子七庙至士一庙的庙制与祭祖层级。 |
| 03-03-06 | [嫡庶与继承制度](./docs/03-appendix/03-03-ritual-concepts/06-嫡庶与继承制度.md) | 嫡庶之分与立嫡、立长、立贤的规则。 |
| 03-03-07 | [吉礼概说](./docs/03-appendix/03-03-ritual-concepts/07-吉礼概说.md) | 祭祀之礼的分类与主要仪节。 |
| 03-03-08 | [嘉礼概说](./docs/03-appendix/03-03-ritual-concepts/08-嘉礼概说.md) | 冠、婚、飨、射、贺庆等嘉礼内容。 |
| 03-03-09 | [凶礼概说](./docs/03-appendix/03-03-ritual-concepts/09-凶礼概说.md) | 丧、荒、吊、禬、恤等凶礼内容。 |
| 03-03-10 | [宾礼与军礼概说](./docs/03-appendix/03-03-ritual-concepts/10-宾礼与军礼概说.md) | 朝聘、会盟与征伐、田猎之礼。 |
| 03-03-11 | [三礼概述（《仪礼》《礼记》《周礼》）](./docs/03-appendix/03-03-ritual-concepts/11-三礼概述.md) | 三礼的内容、相互关系与史料价值。 |
| 03-03-12 | [历代礼制沿革](./docs/03-appendix/03-03-ritual-concepts/12-历代礼制沿革.md) | 汉唐宋明清礼制的修订与婚丧制度变迁。 |
| 03-03-13 | [礼器与礼制等级](./docs/03-appendix/03-03-ritual-concepts/13-礼器与礼制等级.md) | 鼎簋、玉帛等礼器与身份等级的对应。 |
| 03-03-14 | [阴阳五行与择吉文化](./docs/03-appendix/03-03-ritual-concepts/14-阴阳五行与择吉.md) | 阴阳五行、干支与择吉术的基本原理。 |
| 03-03-15 | [堪舆（风水）基础](./docs/03-appendix/03-03-ritual-concepts/15-堪舆基础.md) | 形势与理气两派及阳宅阴宅的基本概念。 |
| 03-03-16 | [传统历法、干支与二十四节气](./docs/03-appendix/03-03-ritual-concepts/16-传统历法与干支.md) | 农历、干支纪日与婚丧择日之间的关系。 |
| 03-03-17 | [命理合婚基础](./docs/03-appendix/03-03-ritual-concepts/17-命理合婚基础.md) | 八字、纳音、属相合婚的基本方法。 |
| 03-03-18 | [婚丧礼俗中的信仰元素（儒、释、道、民间）](./docs/03-appendix/03-03-ritual-concepts/18-婚丧中的信仰元素.md) | 儒释道与民间信仰在婚丧中的叠合形态。 |
| 03-03-19 | [民俗田野调查与记录方法](./docs/03-appendix/03-03-ritual-concepts/19-田野调查与记录方法.md) | 访谈、观察、记录与口述史整理的方法。 |
| 03-03-20 | [婚丧礼俗的当代变迁](./docs/03-appendix/03-03-ritual-concepts/20-婚丧礼俗的当代变迁.md) | 城市化、简办与非遗保护之下的礼俗变迁。 |

## 贡献

请阅读 [CONTRIBUTING.md](./CONTRIBUTING.md)（English: [CONTRIBUTING.en.md](./CONTRIBUTING.en.md)）。欢迎补充文献出处、地域田野记录、器物图版与校勘意见。

## 许可

- 文档内容：CC BY-SA 4.0（见 [LICENSE](./LICENSE)）
- 脚本代码：MIT（见 [LICENSE-CODE](./LICENSE-CODE)）
