# Contributing

**Languages:** [简体中文](./CONTRIBUTING.md) · **English**

Thank you for contributing to *Chinese Wedding and Funeral Rituals: A Reference Corpus*. This is a **serious compilation of ritual and folk custom**, and every contribution should be grounded in texts and fieldwork. Write with care.

## 1. Repository conventions

```text
docs/                             # Chinese corpus (authoritative)
├── 01-marriage-rites/            # Book 01: marriage rites (jiali)
│   ├── README.md                 # Book index (generated)
│   └── 01-01-six-rites/          # Sub-category: the Six Rites of the Zhou canon
│       ├── README.md             # Sub-category index (generated)
│       ├── 01-纳采.md            # Entry: one document per entry
│       └── 02-问名.md
├── 02-funeral-rites/             # Book 02: funeral rites (xiongli)
└── 03-appendix/                  # Book 03: appendices

en/docs/                          # English layer: index + translated entry bodies
└── 01-marriage-rites/01-01-six-rites/
    ├── README.md                 # English sub-category index (generated)
    └── 01-betrothal-proposal-nacai.md   # English entry body (optional)
```

- Book directories: `<NN>-<english-slug>/`
- Sub-category directories: `<NN>-<NN>-<english-slug>/`
- Chinese entry documents: `<two-digit index>-<entry name>.md`; the index is the entry's position within the sub-category and must be continuous.
- English entry bodies live under `en/docs/` and are named `<two-digit index>-<english-slug>.md` — lower-case ASCII only, **no Chinese characters in English file paths**. The two-digit index is the link between the trees, so they stay one-to-one while every English path remains readable.

## 2. Entry document specification

### 2.1 Frontmatter (required)

```yaml
---
id: 01-01-01                 # must match directory numbering and file index; globally unique
title: 纳采
category: 婚嫁礼俗（嘉礼）/先秦六礼
tags:
  - 嘉礼
  - 六礼
sources:
  - 《仪礼·士昏礼》
region: 全国                  # Nationwide / province / ethnic-minority area
ethnicity: 汉族
summary: 男家遣媒提亲，以雁为贽，六礼之首。
status: draft                # draft | review | published
updated: 2026-10-10
---
```

### 2.2 Six-part body

| Section | Requirement |
| --- | --- |
| 一、释义 Definition | Define the entry, distinguish it from neighbouring entries, and state the relation between ritual prescription and folk practice |
| 二、历史源流 Historical origins | Trace back to the ritual classics and pre-Qin sources, then follow the changes through the dynasties, citing sources |
| 三、仪节流程 Ceremonial procedure | Record the procedure in chronological order, noting participants, objects and formulas, and regional differences |
| 四、地域与民族变体 Regional and ethnic variants | Give representative regional or ethnic practice, with the place and source of the record |
| 五、器物与文书 Objects and documents | Record the form, material and dimensions of relevant objects, and the format of documents used |
| 六、文献与参考 Sources | List classics, local gazetteers, monographs, articles and fieldwork records |

## 3. Writing requirements

1. **Separate ritual prescription from folk practice.** What the classics prescribe and what people actually did must not be conflated.
2. **Cite sources.** Every specific statement should be traceable; oral material should note date, place and narrator (which may be anonymised).
3. **Write critically.** Customs such as child brides, "joyous" marriage to the dying and ghost marriages require historical, critical treatment and must never be advocated.
4. **Respect ethnic custom.** Describe minority practice using each people's own name and the standard ethnic designation, and avoid exoticising language.
5. **Do not include** personal information about living people, unverified rumour, or practical instructions that promote superstition as treatment.

## 4. Workflow

```bash
# 1. Add or edit entry documents
# 2. Rebuild all indexes (README files are derived artefacts)
node scripts/generate-skeleton.mjs

# 3. Structure validation (must pass)
node scripts/check-structure.mjs
node scripts/check-structure.mjs --lang en

# 4. Commit
git add . && git commit -m "docs(01-01): 补全纳采条目的仪节流程"
```

### Commit message prefixes

| Prefix | Purpose |
| --- | --- |
| `docs(<id>)` | Add or revise entry content |
| `feat(<id>)` | Add a new entry |
| `fix(<id>)` | Correction, erratum |
| `chore` | Directories, scripts, CI |
| `i18n(<id>)` | Add or revise an English translation |

## 5. Scripts

| Script | Purpose |
| --- | --- |
| `scripts/generate-skeleton.mjs` | Generate missing entry documents, rebuild all README indexes (Chinese and English). Existing entries are kept unless `--force` is given. |
| `scripts/check-structure.mjs` | Validate directory naming, frontmatter, entry counts and index completeness. Add `--lang en` to validate the English layer. Called by CI. |
| `scripts/progress.mjs` | Report progress of Chinese body completion and English translation. |
| `scripts/i18n.mjs` and `scripts/i18n/entries-0*.mjs` | English metadata: book and section titles, entry titles and summaries, region and ethnicity names. |

> All `README.md` and `README.en.md` index files are generated artefacts. Do not edit them by hand; change the description fields in the generation script or the English metadata instead.

### Adding English metadata for a new entry

1. Add the entry to `BOOKS` in `scripts/generate-skeleton.mjs` (Chinese title and summary).
2. Register its English title and summary in `scripts/i18n/entries-0*.mjs`, keyed by the entry id.
3. Run `node scripts/generate-skeleton.mjs`; the English indexes pick the new entry up automatically.
4. To translate the body, create `en/docs/<book>/<section>/<two-digit index>-<english-slug>.md` with the same frontmatter keys (English values) plus a `translation:` field, and re-run the generator so the index links to it. The slug is derived from the English title; add the id to `SLUG_OVERRIDE` in `scripts/i18n.mjs` when the derived slug is too long or awkward.

## 6. Review process

1. Open a pull request titled `docs(01-01-03): ...`.
2. CI runs the structure checks, which must pass.
3. At least one maintainer reviews **accuracy of sources** and **neutrality of expression**.
4. `status` moves from `draft` to `review`, and to `published` once the review is complete.

## 7. Licence

By contributing you agree to license text under CC BY-SA 4.0 and scripts under MIT.
