/**
 * 英文侧元数据
 *
 * 用途：由 scripts/generate-skeleton.mjs 生成英文索引层
 *   README.en.md
 *   en/docs/README.md
 *   en/docs/<book>/README.md
 *   en/docs/<book>/<section>/README.md
 *
 * 说明：
 *   - 条目级英文标题/摘要见 scripts/i18n/entries-0*.mjs（键为条目 id）。
 *   - 01-08 / 01-09 / 02-11 / 02-12 四个「派生条目」分类不逐条登记，
 *     由 REGION_EN / ETHNIC_EN / NOTE_EN 现场派生。
 */

import { ENTRY_EN_01 } from './i18n/entries-01.mjs';
import { ENTRY_EN_02 } from './i18n/entries-02.mjs';
import { ENTRY_EN_03 } from './i18n/entries-03.mjs';

/** 条目级英文标题与摘要：id → [title, summary] */
export const ENTRY_EN = { ...ENTRY_EN_01, ...ENTRY_EN_02, ...ENTRY_EN_03 };

/** 一级分类英文名与简介 */
export const BOOK_EN = {
  '01': {
    title: 'Marriage Rites (Jiali, the Rites of Festivity)',
    desc:
      'Marriage belongs to the jiali, the festive rites, among the traditional five categories of ceremony. ' +
      'This book follows nine dimensions — ritual origin, pre-wedding custom, the wedding day, post-wedding custom, ' +
      'objects, appellations, auspicious dating, region and ethnicity — assembling the full chain of ceremonial steps ' +
      'from the Six Rites of the pre-Qin period down to contemporary Chinese weddings, together with regional and ethnic variants.',
  },
  '02': {
    title: 'Funeral Rites (Xiongli, the Rites of Mourning)',
    desc:
      'Funerals belong to the xiongli, the mourning rites, among the traditional five categories of ceremony. ' +
      'This book follows twelve dimensions — initial mourning, encoffining, lying in state, procession and burial, ' +
      'post-burial sacrifices, the five degrees of mourning, funerary objects and mingqi, mourning attire, appellations, ' +
      'auspicious dating, region and ethnicity — assembling the full chain of custom from the Shisangli of the Yili ' +
      'down to contemporary funeral reform.',
  },
  '03': {
    title: 'Appendices',
    desc: 'Three appendices that supply the background for the two main books: kinship terminology, document templates for wedding and funeral rites, and foundational concepts of the ritual order.',
  },
};

/** 二级分类英文名与简介 */
export const SECTION_EN = {
  '01-01': {
    title: 'The Six Rites of the Zhou Canon',
    desc: 'The six procedures recorded in the Shihunli of the Yili — nacai, wenming, naji, nazheng, qingqi and qinying — the textual archetype of the traditional marriage system.',
  },
  '01-02': {
    title: 'Pre-Wedding Customs',
    desc: 'The whole body of pre-wedding custom, from negotiation and betrothal to the preparation of the trousseau: matchmaking, horoscope matching, betrothal gifts, date selection and dowry.',
  },
  '01-03': {
    title: 'Wedding-Day Ceremonies',
    desc: 'The ceremonial programme of the wedding day itself, from the departure of the escort party to the bridal chamber — the most richly ritualised part of the marriage custom.',
  },
  '01-04': {
    title: 'Post-Wedding Customs',
    desc: 'The exchanges, acknowledgements of kin, prayers for offspring and household divisions that follow the wedding.',
  },
  '01-05': {
    title: 'Wedding Objects and Attire',
    desc: 'The objects, attire, documents and auspicious motifs used in the course of a marriage.',
  },
  '01-06': {
    title: 'Wedding and Affinal Appellations',
    desc: 'The kinship, matchmaker, marriageable-age and verb terminologies employed in the context of marriage.',
  },
  '01-07': {
    title: 'Auspicious Dating and Taboos in Marriage',
    desc: 'The principles of date selection and astrological matching in marriage, and the taboos observed throughout the wedding.',
  },
  '01-08': {
    title: 'Han Regional Variants of Marriage Custom',
    desc: 'Provincial units, together with the Cantonese, Chaoshan, Hakka, Huizhou and Minnan sub-groups, are taken as the framework for recording regional variants of Han Chinese marriage custom.',
  },
  '01-09': {
    title: 'Marriage Customs of the Ethnic Minorities',
    desc: 'Taking each of the 55 ethnic minorities in turn, this section records characteristic forms of courtship, negotiation, wedding ceremony and post-wedding custom.',
  },
  '02-01': {
    title: 'Initial Mourning',
    desc: 'The rites of the earliest phase: dying, summoning the soul, washing the body, filling the mouth, announcing the death, appointing the chief mourner and receiving condolences.',
  },
  '02-02': {
    title: 'Encoffining',
    desc: 'Minor and major dressing, and the placing of the body in the coffin, together with the regulations governing coffins and grave goods.',
  },
  '02-03': {
    title: 'Lying in State',
    desc: 'The ordering of the mourning hall, the vigil, morning and evening offerings, and rites of deliverance — the longest phase of the funeral.',
  },
  '02-04': {
    title: 'Funeral Procession and Burial',
    desc: 'The complete process of raising the coffin, the procession, roadside offerings, burial and the raising of the mound, including modes of burial and the geomancy of the grave.',
  },
  '02-05': {
    title: 'Post-Burial Sacrifices',
    desc: 'The full sequence of sacrifices, from the third day and the seven-day cycle to the anniversaries and the end of mourning, together with Qingming, Zhongyuan and other seasonal offerings.',
  },
  '02-06': {
    title: 'The Five Degrees of Mourning',
    desc: 'The five grades — zhan cui, zi cui, da gong, xiao gong and si ma — and their links to lineage law and inheritance.',
  },
  '02-07': {
    title: 'Funeral Objects and Mingqi',
    desc: 'Coffins, mingqi, paper offerings, grave stelae and ritual instruments, with their ritual regulation and what excavation has revealed.',
  },
  '02-08': {
    title: 'Mourning Attire Regulations',
    desc: 'The cut, materials, headwear and staves of mourning attire, the points at which it is taken up, changed and laid aside, and the modern forms of filial dress.',
  },
  '02-09': {
    title: 'Funeral Appellations',
    desc: 'Appellations for the deceased, the self-designations of the bereaved, the system of death euphemisms, and the titles of funeral officers.',
  },
  '02-10': {
    title: 'Auspicious Dating and Taboos in Funerals',
    desc: 'Date selection in mourning, the avoidance of repeated bereavement, grave geomancy, and the taboos observed during the mourning period.',
  },
  '02-11': {
    title: 'Han Regional Variants of Funeral Custom',
    desc: 'Provincial units, together with the Huizhou, Minnan and Hakka sub-groups, are taken as the framework for recording regional variants of Han Chinese funeral custom.',
  },
  '02-12': {
    title: 'Funeral Customs of the Ethnic Minorities',
    desc: 'Taking each of the 55 ethnic minorities in turn, this section records characteristic forms of dying, mourning, burial and post-burial sacrifice.',
  },
  '03-01': {
    title: 'Traditional Kinship Terms',
    desc: 'The three systems of agnatic, maternal and afinal terms, together with their historical evolution and dialectal variation.',
  },
  '03-02': {
    title: 'Document Templates for Wedding and Funeral Rites',
    desc: 'The format and model texts of horoscope cards, marriage contracts, invitations, elegies, obituaries and grave inscriptions.',
  },
  '03-03': {
    title: 'Foundational Concepts of the Ritual Order',
    desc: 'Concepts of the ritual order such as the five categories of rites, lineage law and the zhao-mu system, together with background on date selection, geomancy and the calendar.',
  },
};

/** 标签英文名（条目 frontmatter 用；缺失时回落为中文原词） */
export const TAG_EN = {
  嘉礼: 'Festive rites (jiali)',
  凶礼: 'Mourning rites (xiongli)',
  六礼: 'Six Rites',
  聘娶婚: 'Betrothal marriage',
  礼经: 'Ritual classics',
  文献学: 'Textual scholarship',
  婚前: 'Pre-wedding',
  议婚: 'Negotiation of marriage',
  婚礼当日: 'Wedding day',
  仪节: 'Ceremonial procedure',
  婚后: 'Post-wedding',
  往来: 'Exchange of visits',
  器物: 'Objects',
  服饰: 'Attire',
  称谓: 'Appellations',
  亲属: 'Kinship',
  择吉: 'Auspicious dating',
  禁忌: 'Taboos',
  地域变体: 'Regional variants',
  汉族: 'Han Chinese',
  民族: 'Ethnicity',
  少数民族: 'Ethnic minorities',
  附录: 'Appendix',
  文书: 'Documents',
  范本: 'Templates',
  礼制: 'Ritual order',
  概念: 'Concepts',
  初丧: 'Initial mourning',
  临终: 'Dying',
  棺椁: 'Coffins',
  灵堂: 'Mourning hall',
  祭祀: 'Sacrifices',
  岁时: 'Seasonal observances',
  五服: 'Five degrees of mourning',
  宗法: 'Lineage law',
  明器: 'Mingqi',
  丧服: 'Mourning attire',
  服制: 'Mourning regulations',
  讳称: 'Death euphemisms',
  田野: 'Fieldwork',
};

/** 汉族地域变体：中文地区名（即文件名前缀）→ 英文 */
export const REGION_EN = {
  北京: 'Beijing',
  天津: 'Tianjin',
  河北: 'Hebei',
  山西: 'Shanxi',
  内蒙古: 'Inner Mongolia',
  辽宁: 'Liaoning',
  吉林: 'Jilin',
  黑龙江: 'Heilongjiang',
  上海: 'Shanghai',
  江苏: 'Jiangsu',
  浙江: 'Zhejiang',
  安徽: 'Anhui',
  福建: 'Fujian',
  江西: 'Jiangxi',
  山东: 'Shandong',
  河南: 'Henan',
  湖北: 'Hubei',
  湖南: 'Hunan',
  广东: 'Guangdong',
  广西: 'Guangxi',
  海南: 'Hainan',
  重庆: 'Chongqing',
  四川: 'Sichuan',
  贵州: 'Guizhou',
  云南: 'Yunnan',
  陕西: 'Shaanxi',
  甘肃: 'Gansu',
  青海: 'Qinghai',
  宁夏: 'Ningxia',
  新疆: 'Xinjiang',
  台湾: 'Taiwan',
  港澳: 'Hong Kong and Macau',
};

/** 汉族地域变体备注的英文（缺失时回落为中文原注） */
export const NOTE_EN = {
  晋商婚俗: 'Shanxi merchant customs',
  走西口移民婚俗: 'migration customs of the Western Passage',
  含徽州民系: 'including the Huizhou sub-group',
  '含闽南、福州民系': 'including the Minnan and Fuzhou sub-groups',
  '含广府、潮汕、客家民系': 'including the Cantonese, Chaoshan and Hakka sub-groups',
  屯垦移民婚俗: 'garrison-farming migration customs',
};

/** 少数民族：中文族名 → 英文族名 */
export const ETHNIC_EN = {
  蒙古族: 'Mongolian',
  回族: 'Hui',
  藏族: 'Tibetan',
  维吾尔族: 'Uyghur',
  苗族: 'Miao',
  彝族: 'Yi',
  壮族: 'Zhuang',
  布依族: 'Bouyei',
  朝鲜族: 'Korean',
  满族: 'Manchu',
  侗族: 'Dong',
  瑶族: 'Yao',
  白族: 'Bai',
  土家族: 'Tujia',
  哈尼族: 'Hani',
  哈萨克族: 'Kazakh',
  傣族: 'Dai',
  黎族: 'Li',
  傈僳族: 'Lisu',
  佤族: 'Wa',
  畲族: 'She',
  高山族: 'Gaoshan',
  拉祜族: 'Lahu',
  水族: 'Sui',
  东乡族: 'Dongxiang',
  纳西族: 'Naxi',
  景颇族: 'Jingpo',
  柯尔克孜族: 'Kyrgyz',
  土族: 'Tu',
  达斡尔族: 'Daur',
  仫佬族: 'Mulao',
  羌族: 'Qiang',
  布朗族: 'Blang',
  撒拉族: 'Salar',
  毛南族: 'Maonan',
  仡佬族: 'Gelao',
  锡伯族: 'Xibe',
  阿昌族: 'Achang',
  普米族: 'Pumi',
  塔吉克族: 'Tajik',
  怒族: 'Nu',
  乌孜别克族: 'Uzbek',
  俄罗斯族: 'Russian',
  鄂温克族: 'Evenki',
  德昂族: "De'ang",
  保安族: 'Bonan',
  裕固族: 'Yugur',
  京族: 'Jing',
  塔塔尔族: 'Tatar',
  独龙族: 'Derung',
  鄂伦春族: 'Oroqen',
  赫哲族: 'Hezhen',
  门巴族: 'Monba',
  珞巴族: 'Lhoba',
  基诺族: 'Jino',
};

/**
 * 英文条目文件名主干（slug）
 *
 * 规则：由英文标题派生的 kebab-case；个别过长的标题在 SLUG_OVERRIDE 中指定短名。
 * 英文树条目文件名统一为 `NN-<slug>.md`，全 ASCII。
 */
export function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[\u2018\u2019'"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export const SLUG_OVERRIDE = {
  '01-01-07': 'six-rites-and-the-shihunli',
  '01-01-10': 'matchmakers-and-the-maxim',
  '01-02-12': 'preparing-and-delivering-the-dowry',
  '01-02-15': 'child-brides-and-infant-betrothal',
  '01-03-17': 'contemporary-chinese-wedding',
  '01-04-04': 'sending-lamps-and-praying-for-sons',
  '01-04-05': 'first-month-hundredth-day-and-first-birthday',
  '01-05-01': 'objects-of-the-six-rites',
  '01-05-16': 'auspicious-motifs',
  '01-06-05': 'affinal-kin-terms',
  '01-06-06': 'legitimate-and-secondary-status-terms',
  '02-01-01': 'testing-the-breath-with-silk-floss',
  '02-01-09': 'chief-mourner-and-funeral-staff',
  '02-02-08': 'grave-goods-for-encoffining',
  '02-03-08': 'confucian-family-offering',
  '02-03-10': 'elegies-couplets-and-banners',
  '02-04-07': 'coffin-canopy-and-bearing',
  '02-04-12': 'modes-of-disposal',
  '02-04-15': 'modern-funeral-and-cremation',
  '02-05-01': 'third-day-rite-and-rounding-the-grave',
  '02-05-05': 'removing-mourning-and-the-dan-sacrifice',
  '02-05-14': 'modern-memorial-services-and-online-mourning',
  '02-06-01': 'five-degrees-of-mourning',
  '02-06-10': 'mourning-for-maternal-and-affinal-kin',
  '02-07-09': 'funerary-ritual-instruments',
  '02-07-11': 'grave-stelae-and-epitaphs',
  '02-07-15': 'contemporary-funeral-supplies',
  '02-08-03': 'headwear',
  '02-08-10': 'contemporary-mourning-dress',
  '02-09-04': 'gu-zi-ai-zi-gu-ai-zi',
  '02-09-06': 'substitutes-for-to-die',
  '02-10-04': 'grave-geomancy-and-ten-unsuitable-sites',
  '03-01-02': 'agnatic-terms',
  '03-01-03': 'maternal-kin-terms',
  '03-01-04': 'affinal-terms',
  '03-02-03': 'model-marriage-contract',
  '03-02-14': 'electronic-obituaries-and-memorial-messages',
  '03-03-01': 'five-rites',
  '03-03-06': 'legitimate-and-secondary-descent',
  '03-03-07': 'auspicious-rites',
  '03-03-08': 'festive-rites',
  '03-03-09': 'mourning-rites',
  '03-03-10': 'guest-and-military-rites',
  '03-03-11': 'three-ritual-classics',
  '03-03-12': 'ritual-codification',
  '03-03-13': 'ritual-vessels',
  '03-03-14': 'yin-yang-and-date-selection',
  '03-03-20': 'contemporary-change-in-custom',
  '03-03-16': 'traditional-calendar-and-solar-terms',
  '03-03-18': 'religious-elements',
  // 02-06 五服制度（文件名 slug 与英文标题派生的 slug 不一致，按实际文件名登记）
  '02-06-03': 'zi-cui-three-years-staff-period-no-staff-period-three-months',
  '02-06-07': 'tan-mian-and-kin-beyond-the-five-degrees',
  '02-06-08': 'increased-mourning-reduced-mourning-and-reciprocal-mourning',
  '02-06-09': 'the-nine-generation-mourning-degree-chart',
  '02-06-11': 'the-five-degrees-and-the-lineage-system',
  '02-06-12': 'modern-remnants-of-the-five-degrees',
  // 02-07 丧葬器物明器
  '02-07-01': 'origins-and-ritual-regulation-of-mingqi',
  '02-07-02': 'coffin-inner-and-outer-and-coffin-furniture',
  '02-07-03': 'grave-clothes',
  '02-07-04': 'spirit-tablet-and-ancestral-tablet',
  '02-07-05': 'name-banner-and-soul-recalling-banner',
  '02-07-06': 'paper-effigies',
  '02-07-08': 'mourning-basin-and-weeping-staff',
  '02-07-10': 'elegiac-couplets-hangings-and-wreaths',
  '02-07-12': 'grave-goods',
  '02-07-14': 'underworld-land-deeds-and-notices',
  // 02-08 丧服规制
  '02-08-01': 'mourning-attire-cutting-and-construction',
  '02-08-02': 'mourning-attire-materials-and-grades',
  '02-08-04': 'mourning-staff',
  '02-08-05': 'changing-and-removing-the-mourning-attire',
  '02-08-06': 'mourning-period-and-rites',
  '02-08-07': 'mourning-attire-and-status-rank',
  '02-08-08': 'mourning-attire-for-women',
  '02-08-09': 'mourning-taboos-and-living-restrictions',
  // 02-09 丧葬称谓
  '02-09-01': 'funeral-appellations-overview',
  '02-09-02': 'terms-for-the-deceased-xian-kao-xian-bi',
  '02-09-03': 'mourning-master-and-filial-son-and-daughter',
  '02-09-05': 'mourning-self-appellations-and-obituary-formats',
  '02-09-06': 'euphemisms-for-death-by-rank-beng-hong-zu-bulu',
  '02-09-07': 'dingyou-shouzhi-and-duoqing',
  '02-09-08': 'posthumous-name-temple-name-and-spirit-lord-title',
  '02-09-09': 'funeral-functionary-titles',
  '02-09-10': 'condolence-phrases-and-mourning-visit-titles',
  // 02-10 丧葬择吉禁忌
  '02-10-01': 'choosing-the-funeral-date-and-the-zhongshang-taboo',
  '02-10-02': 'length-of-lying-in-state-and-the-sevens',
  '02-10-03': 'hour-and-direction-of-the-procession',
  '02-10-04': 'grave-site-fengshui-and-the-ten-no-burials',
  '02-10-05': 'encoffining-taboos',
  '02-10-06': 'dietary-taboos-in-the-mourning-period',
  '02-10-07': 'behavioural-taboos-in-the-mourning-period',
  '02-10-08': 'social-taboos-for-the-mourner',
  '02-10-09': 'sha-clash-and-zodiac-taboos',
  '02-10-10': 'auspice-seeking-and-evil-warding-customs',
  // 02-11 汉族地域变体（台湾、港澳台）
  '02-11-31': 'taiwan-han-funeral-customs',
  '02-11-32': 'hong-kong-and-macao-funeral-customs',
  // 02-12 少数民族（水族）
  '02-12-24': 'shui-funeral-customs',
};

/** 条目英文文件名主干：优先取 override，否则由英文标题派生 */
export function entrySlug(id, englishTitle) {
  return SLUG_OVERRIDE[id] || slugify(englishTitle);
}

/** 英文索引页固定文案 */
export const UI = {
  corpusTitle: 'Chinese Wedding and Funeral Rituals: A Reference Corpus',
  corpusIntro:
    'An open-source corpus systematically documenting traditional Chinese marriage rites (jiali) and funeral rites (xiongli). ' +
    'It is organised as “category → sub-category → entry”, with one standalone Markdown document per entry.',
  aboutHeading: 'About',
  aboutList: [
    '**Marriage rites (jiali)**: the Six Rites of the Zhou canon, pre-wedding custom, wedding-day ceremonies, post-wedding custom, wedding objects, appellations, auspicious dating and taboos, and the regional and ethnic variants of marriage custom.',
    '**Funeral rites (xiongli)**: initial mourning, encoffining, lying in state, procession and burial, post-burial sacrifices, the five degrees of mourning, funerary objects and mingqi, mourning attire regulations, funeral appellations, auspicious dating and taboos, and the regional and ethnic variants of funeral custom.',
    '**Appendices**: traditional kinship terms, document templates for wedding and funeral rites, and foundational concepts of the ritual order.',
  ],
  statisticsHeading: 'Statistics',
  statisticsHead: '| Book | Sub-categories | Entries |',
  docsIndexHeading: 'Document index',
  sectionsHeading: 'Sub-categories',
  sectionsHead: '| Section | Entries | Description |',
  entriesHeading: 'Entries',
  entriesHead: '| ID | Entry | Summary | Body |',
  relatedHeading: 'Related',
  licenceHeading: 'Licence',
  licenceLines: ['- Text: CC BY-SA 4.0 (see [LICENSE](./LICENSE))', '- Scripts: MIT (see [LICENSE-CODE](./LICENSE-CODE))'],

  layoutHeading: 'Repository layout',
  layoutLines: [
    'china-wedding-funeral-rituals/',
    '├── README.md                # Chinese entry point: table of contents and full index',
    '├── README.en.md             # English entry point',
    '├── LICENSE                  # Text licence (CC BY-SA 4.0)',
    '├── LICENSE-CODE             # Script licence (MIT)',
    '├── assets/                  # Images, diagrams and demo video',
    '├── scripts/',
    '│   ├── generate-skeleton.mjs  # Directory skeleton and index generation',
    '│   ├── check-structure.mjs    # Structure validation (used by CI)',
    '│   ├── i18n.mjs               # Batch EN translation and index sync',
    '│   └── progress.mjs           # Translation progress stats',
    '├── docs/                    # Chinese corpus',
    '│   ├── 01-marriage-rites/',
    '│   ├── 02-funeral-rites/',
    '│   └── 03-appendix/',
    '└── en/',
    '    └── docs/                # English index layer and translated entry bodies',
  ],

  entryIndexHeading: 'Full entry index',
  bodyEnglish: 'English',
  bodyChinese: 'Chinese',
  languageSwitch: '**Languages:** [简体中文](./README.md) · **English**',
  folderLabel: 'Directory',
};
