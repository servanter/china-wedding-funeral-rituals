/**
 * 英文条目数据：01 婚嫁礼俗（嘉礼）
 *
 * 键 = 条目 id（frontmatter id），值 = [英文标题, 英文摘要]。
 * 01-08（汉族地域变体）与 01-09（少数民族）由 scripts/i18n.mjs 依据
 * REGION_EN / ETHNIC_EN 派生，不在此列。
 */
export const ENTRY_EN_01 = {
  // 01-01 先秦六礼
  '01-01-01': ['Betrothal Proposal (Nacai)', "The groom's family sends a matchmaker to open the proposal, presenting a wild goose; the first of the Six Rites."],
  '01-01-02': ["Requesting the Bride's Name (Wenming)", "Asking the bride's name and birth date in order to divine the auspiciousness of the match."],
  '01-01-03': ['Announcing the Favourable Divination (Naji)', "The divination proves auspicious and is reported to the bride's family, whereupon the betrothal is settled."],
  '01-01-04': ['Presentation of Betrothal Gifts (Nazheng)', 'The formal presentation of betrothal gifts; the origin of later dowry negotiation and of the rite of major betrothal.'],
  '01-01-05': ['Requesting the Wedding Date (Qingqi)', "The groom's family fixes a date and asks the bride's family to approve it."],
  '01-01-06': ['Personal Reception of the Bride (Qinying)', 'The groom goes in person to escort his bride; the completion of the Six Rites.'],
  '01-01-07': ['Origins of the Six Rites and the Shihunli of the Yili', "The ritual classic's text, the reconstruction of its ceremonial steps, and the textual basis of the Six Rites."],
  '01-01-08': ['Simplification of the Six Rites and Later Transformations', 'The merging of the rites into three or four steps, and the evolution of modern-style weddings.'],
  '01-01-09': ['Exogamy of the Same Surname and Zhou Marriage Institutions', 'Clan exogamy, the concubine-accompanying system, and the ritual basis of one principal wife with secondary consorts.'],
  '01-01-10': ["Matchmakers and the Maxim “Parents' Command, the Go-Between's Word”", "Official and private matchmakers, and the professionalisation of the go-between."],

  // 01-02 婚前习俗
  '01-02-01': ['Proposal and Matchmaking', "The matchmaker's introduction and the two families' mutual enquiries into standing and means."],
  '01-02-02': ['Meeting the Prospect (Inspecting the Household)', 'The two families assess character, means and social standing before agreeing.'],
  '01-02-03': ['Horoscope Matching (Hehun)', 'Exchange of horoscope cards and divination of the match by the eight birth characters.'],
  '01-02-04': ['Minor Betrothal (Xiaoding)', 'A preliminary engagement marked by a small betrothal gift from the groom\u2019s family.'],
  '01-02-05': ['Major Betrothal (Dading)', 'The formal presentation of betrothal gifts, by which the engagement takes effect.'],
  '01-02-06': ['Negotiating Bride-Price and Dowry', 'Settlement of the bride-price, return gifts and dowry, and the handling of disputes.'],
  '01-02-07': ['Betrothal Contracts and Engagement Documents', 'The legal and customary force of the betrothal contract, and the procedures of agreement and repudiation.'],
  '01-02-08': ['Sending the Date (Song Rizi)', "The chosen wedding date is notified to the bride's family on a written date card."],
  '01-02-09': ['Urging the Trousseau (Cuizhuang)', "As the date approaches, the groom's family sends gifts to hasten the bride's preparations."],
  '01-02-10': ['Setting and Dressing the Bridal Bed', 'Installing the bridal bed, spreading it with auspicious items, and reciting blessings.'],
  '01-02-11': ['Coming-of-Age Coiffure and Face Threading', "The bride's change of hairstyle and hairpin, and the threading of her face before leaving home."],
  '01-02-12': ['Preparing and Delivering the Dowry', 'Categories of trousseau, the order of the delivery procession, and the customs observed along the way.'],
  '01-02-13': ['Bridal Lament (Kujia)', 'Genres of bridal lament songs, their verse structure and emotional function.'],
  '01-02-14': ['Announcing the Marriage to the Ancestors', 'The family rite of informing the ancestors of the coming wedding and asking their blessing.'],
  '01-02-15': ['Child Brides, Prenatal Betrothals and Infant Betrothals (A Critical Survey)', 'Causes, forms and a critical examination of malformed marriage customs of the old order.'],

  // 01-03 婚礼当日仪节
  '01-03-01': ['Escorting the Bride: The Wedding Procession', 'The make-up and route of the escort party, its attendants, drums and insignia.'],
  '01-03-02': ["Blocking the Door and the Door-Opening Gift", "The bride's family bars the door and demands red packets, answered with songs and verse contests."],
  '01-03-03': ['Bowing in the Hall (The Three Bows)', 'Bowing to Heaven and Earth, then to the parents, then to each other, and the meaning of each bow.'],
  '01-03-04': ['Sharing the Cup (Hejin)', 'A gourd split in two, from which bride and groom each drink: a rite of bodily union.'],
  '01-03-05': ['Binding the Hair and Tying the Red Cord', "The symbolism of binding the couple's hair as husband and wife, of the red cord and the lover's knot."],
  '01-03-06': ['Scattering the Bed (Sazhang)', 'Dates, chestnuts and grains are scattered into the bedchamber with wishes for many sons.'],
  '01-03-07': ['Lifting the Veil with the Steelyard', 'The rite of lifting the bridal veil with an auspicious steelyard, and its felicitous sayings.'],
  '01-03-08': ['Sitting in the Curtained Bed and Sharing the Bed', 'The couple sits beneath the canopy to receive congratulations, then retires together.'],
  '01-03-09': ['Presentation at the Ancestral Temple (Miaojian)', "The bride meets her parents-in-law and pays homage at the family shrine, thereby formally assuming her duties as wife."],
  '01-03-10': ['Wedding Banquet and Toasting Etiquette', "Seating order, sequence of courses, and the rules governing the couple's toasts."],
  '01-03-11': ['Roughhousing in the Nuptial Chamber', 'Types of raucous chamber games, regional differences, and their ritual function.'],
  '01-03-12': ['Meeting the Relatives and Ranking by Generation', "The bride's introduction to the kin group, her bows of greeting and her changes of address."],
  '01-03-13': ["Returning to the Bride's Family (Huimen)", "The timing and ceremonial of the couple's visit to the bride's home after the wedding."],
  '01-03-14': ['The Bridal Sedan Chair and Its Regulations', 'Construction and decoration of the sedan, the rules of carrying it, and the rites of mounting and alighting.'],
  '01-03-15': ['Matrons of Honour, Bridesmaids and Groomsmen', 'The roles, duties and auspicious qualifications of the wedding attendants.'],
  '01-03-16': ['Wedding Officers and the Master of Ceremonies (Lisheng)', 'The spoken formulas of the master of ceremonies, the ritual assistants and the stewards.'],
  '01-03-17': ['The Contemporary Chinese Wedding: An Integrated Programme', 'How traditional rites are retained, simplified or rearranged in modern weddings.'],

  // 01-04 婚后礼俗
  '01-04-01': ['Third-Day Return Visit', "The bride's visit home on the third day, with its rites and gifts."],
  '01-04-02': ['The Joint Return and the Month-Long Stay', "Customs of the couple returning together to the bride's home, and of the bride staying a full month."],
  '01-04-03': ['Thanking the Matchmaker', 'Gifts, etiquette and proverbs attending the reward of the go-between.'],
  '01-04-04': ['Sending Lamps and Praying for Sons', "The bride's natal family sends lamps and figurines of children in hope of offspring."],
  '01-04-05': ['First Month, Hundredth Day and First Birthday', 'The child-rearing rites of the full month, the hundredth day and the grasping ceremony.'],
  '01-04-06': ['Acknowledging and Visiting the New Kin', 'Seasonal visits and rules of gift exchange between the newly allied families.'],
  '01-04-07': ['Household Division and Establishing a New House', 'Customary constraints on setting up an independent household and dividing family property.'],
  '01-04-08': ['Wedding Anniversaries', 'The shift from the traditional return visit to the modern wedding anniversary.'],

  // 01-05 婚嫁器物
  '01-05-01': ['Objects of the Six Rites: the Wild Goose, Dark-and-Crimson Silks, and Paired Hides', 'The gifts prescribed by the ritual classics and their ceremonial meaning.'],
  '01-05-02': ['The Bridal Sedan (Huajiao)', 'The form and decoration of the bridal sedan, the regulations for carrying it, and the rental trade that supplied it.'],
  '01-05-03': ['The Bridal Veil (Gaitou)', 'The form and materials of the veil, and the origins of its symbolism of concealment.'],
  '01-05-04': ['Wedding Attire: Phoenix Crown and Rosy Robe, and the Qun Gua', 'The forms of wedding dress through the dynasties, with their rank distinctions and regional variants.'],
  '01-05-05': ['Wedding Shoes (Caitang Xie)', "Embroidered shoes, the hall-treading shoe, and shoe customs linked to the bride's delayed removal to her husband's house."],
  '01-05-06': ['Auspicious Quilts and Pillows', 'Rules for stitching dragon-and-phoenix quilts and auspicious pillows, and for laying them out.'],
  '01-05-07': ['Wedding Candles and Dragon-and-Phoenix Candles', 'The forms of the bridal candle, the rite of lighting it, and the taboos attached to it.'],
  '01-05-08': ['Hejin Cups and Crossed-Cup Wine Vessels', 'The shapes and uses of hejin cups and of the vessels used for the crossed-cup toast.'],
  '01-05-09': ['The Auspicious Steelyard and Other Lucky Objects', 'The uses of the steelyard, the ruyi sceptre, the grain measure and the foot rule.'],
  '01-05-10': ['Wedding Cards (Dragon-and-Phoenix Cards) and Invitations', 'The form, layout and etiquette of delivering wedding invitations.'],
  '01-05-11': ['Dowry Chests and the Descendants Bucket', 'The conventions governing trousseau chests, the descendants bucket and other dowry gear.'],
  '01-05-12': ['Drums, Suona and Festive Instruments', 'The make-up of the wedding band, its tunes, and its sequence of performance.'],
  '01-05-13': ['Firecrackers and Festive Fireworks', 'How firecrackers are set off at weddings, in what order, and with what regional differences.'],
  '01-05-14': ['The Heaven-and-Earth Table and Its Offerings', 'The arrangement of the table, the incense stand and offerings, and the rite of announcement.'],
  '01-05-15': ['Double Happiness, Wedding Couplets and Paper Cuts', 'The writing and posting of auspicious characters and couplets, and the motifs of paper cutting.'],
  '01-05-16': ['Auspicious Motifs: Dragon and Phoenix, Mandarin Ducks, Pomegranate, Double Happiness', 'The symbolic repertoire of wedding decoration.'],

  // 01-06 婚嫁称谓
  '01-06-01': ['Marriage-Related Kinship Terms: An Overview', 'How kinship terms change before and after marriage, and the framework as a whole.'],
  '01-06-02': ['Names for the Matchmaker: Moon Old Man, Red Maid, Ice Man', "The origins and uses of the matchmaker's literary and colloquial titles."],
  '01-06-03': ['The Titles of Groom and Bride', 'The origins of xinlang, xinniang, guanren and niangzi.'],
  '01-06-04': ['Terms for the In-Laws (Qingjia)', 'The usage of terms for affinal elders, and their regional variants.'],
  '01-06-05': ['Terms among Affinal Kin: Sisters-in-Law, Co-Brothers-in-Law, Aunts and Sons-in-Law', 'The terminology for same-generation and half-affinal relationships.'],
  '01-06-06': ['Terms for Legitimate and Secondary Status: Principal Wife, Successor Wife, Concubine', 'Terms relating to principal wives, successor wives, concubines and children born of concubines.'],
  '01-06-07': ['Terms for Marriageable Age (Jiji, Ruoguan, Daizi, Chuge)', 'The appellations marking stages of marriageable age, and their ritual basis.'],
  '01-06-08': ['The Verb System of Marriage (Qu, Jia, Shi, Gui, Zhui)', 'The verbs denoting marriage relations and the differences in their meanings.'],

  // 01-07 婚嫁择吉与禁忌
  '01-07-01': ['Choosing an Auspicious Wedding Date: Yellow-Road Days and the Zhoutang Chart', 'How auspicious and inauspicious days are determined, and how the zhoutang chart is used.'],
  '01-07-02': ['Eight-Character Matching and Fate-Based Prohibitions', 'Methods of judging a match by the eight birth characters, the nayin pitches and the spirit-killers.'],
  '01-07-03': ['Zodiac Clashes and the Six Conflicts', 'The six clashes, six harmonies and three harmonies among the zodiac animals, and the rules for matching them.'],
  '01-07-04': ['Monthly Prohibitions: Years Without Spring and Widow Years', "The origins of prohibitions attaching to years without a solar spring, to one's own zodiac year, and to other periods."],
  '01-07-05': ['Behavioural Taboos at Weddings', 'Prohibitions on breaking objects, weeping, sweeping and the like.'],
  '01-07-06': ['Taboos Concerning Persons', 'Excluding widows, zodiac-clashing persons and mourners from the wedding.'],
  '01-07-07': ['Taboos on Routes and Directions', "The bride-escort route, the rule against retracing one's steps, and auspicious directions."],
  '01-07-08': ['Wedding Meeting Wedding, and Clashing with Another Bridal Sedan', 'How a clash between two wedding processions is avoided or resolved.'],

  // END OF DATA
};
