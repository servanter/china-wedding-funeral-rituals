#!/usr/bin/env node
/**
 * 《中华传统婚丧礼俗资料库》结构校验（CI 使用）
 *
 * 校验项：
 *   1. 目录层级与命名：docs/<NN-slug>/<NN-NN-slug>/NN-<条目名>.md
 *   2. 每个一级、二级目录都必须有 README.md 索引
 *   3. 三级条目 frontmatter 必填字段完整、id 唯一且与目录编号、文件序号一致
 *   4. 条目总数与各编条目数符合预期
 *   5. 二级 README 索引必须列出本目录的全部条目
 *
 * 退出码：0 通过；1 存在错误。
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DOCS_DIR = path.join(ROOT, 'docs');

const REQUIRED_KEYS = ['id', 'title', 'category', 'tags', 'sources', 'region', 'ethnicity', 'summary', 'status', 'updated'];
const EXPECTED = {
  total: 415,
  sections: 24,
  books: { '01': 169, '02': 204, '03': 42 },
  bookSections: { '01': 9, '02': 12, '03': 3 },
};

const errors = [];
const fail = (msg) => errors.push(msg);

const BOOK_DIR_RE = /^(\d{2})-[a-z0-9-]+$/;
const SECTION_DIR_RE = /^(\d{2})-(\d{2})-[a-z0-9-]+$/;
const DOC_FILE_RE = /^(\d{2})-(.+)\.md$/;
/** 英文树条目文件名：`NN-<english-slug>.md`，全 ASCII 小写，不含中文 */
const EN_DOC_FILE_RE = /^\d{2}-[a-z0-9]+(?:-[a-z0-9]+)*\.md$/;

function readFrontmatter(file) {
  const text = fs.readFileSync(file, 'utf8');
  if (!text.startsWith('---\n')) return null;
  const end = text.indexOf('\n---', 4);
  if (end === -1) return null;
  const lines = text.slice(4, end + 1).split('\n');
  const data = {};
  let current = null;
  for (const raw of lines) {
    if (!raw.trim()) continue;
    const listItem = raw.match(/^[ \t]+-[ \t]+(.*)$/);
    if (listItem) {
      if (!current) return { __malformed: true };
      if (!Array.isArray(data[current])) data[current] = [];
      data[current].push(listItem[1].trim());
      continue;
    }
    const m = raw.match(/^([A-Za-z_][A-Za-z0-9_]*):[ \t]?(.*)$/);
    if (!m) return { __malformed: true };
    current = m[1];
    data[current] = m[2].trim();
  }
  return data;
}

const isEmptyField = (v) => v === undefined || v === '' || (Array.isArray(v) && v.length === 0);

/* ------------------------------------------------------------------ *
 * 英文索引层校验（--lang en）
 *
 * 校验项：
 *   1. en/docs/ 与 docs/ 的一级、二级目录一一对应，且各有 README.md
 *   2. 英文二级 README 必须列出本目录全部条目（链英文页或中文原文页）
 *   3. 英文树中的条目正文 frontmatter 必填字段完整、id 与文件编号一致
 *   4. 英文树不得出现中文树中不存在的条目文件
 * ------------------------------------------------------------------ */

const LANG_FLAG = process.argv.indexOf('--lang');
const LANG = LANG_FLAG > -1 ? process.argv[LANG_FLAG + 1] : 'zh';

if (LANG === 'en') {
  const enErrors = [];
  const enFail = (msg) => enErrors.push(msg);
  const EN_DOCS = path.join(ROOT, 'en', 'docs');

  const finish = () => {
    console.log('—— 英文索引层校验 ——');
    if (enErrors.length) {
      console.error(`\n发现 ${enErrors.length} 个问题：`);
      for (const e of enErrors) console.error(`  ✗ ${e}`);
      process.exit(1);
    }
    console.log('\n✓ 英文索引层校验通过');
    process.exit(0);
  };

  if (!fs.existsSync(EN_DOCS)) {
    console.error('en/docs/ 不存在，请先运行 node scripts/generate-skeleton.mjs');
    process.exit(1);
  }
  if (!fs.existsSync(path.join(ROOT, 'README.en.md'))) {
    enFail('缺少根英文入口：README.en.md');
  }

  const bookNames = fs
    .readdirSync(DOCS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();

  let enReadmes = 0;
  let enBodies = 0;

  for (const bookName of bookNames) {
    const zhBookDir = path.join(DOCS_DIR, bookName);
    const enBookDir = path.join(EN_DOCS, bookName);

    if (!fs.existsSync(path.join(enBookDir, 'README.md'))) {
      enFail(`英文树缺少一级 README：en/docs/${bookName}/README.md`);
    } else {
      enReadmes += 1;
    }

    const secNames = fs
      .readdirSync(zhBookDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name)
      .sort();

    for (const secName of secNames) {
      const enSecDir = path.join(enBookDir, secName);
      const rel = `en/docs/${bookName}/${secName}`;
      const readmePath = path.join(enSecDir, 'README.md');

      if (!fs.existsSync(readmePath)) {
        enFail(`英文树缺少二级 README：${rel}/README.md`);
        continue;
      }
      enReadmes += 1;
      const readmeText = fs.readFileSync(readmePath, 'utf8');

      const sm = secName.match(SECTION_DIR_RE);
      const zhDocs = fs
        .readdirSync(path.join(zhBookDir, secName))
        .filter((f) => f.endsWith('.md') && f !== 'README.md')
        .sort();
      /** 中文条目按两位序号索引，英文条目同序号对应 */
      const zhByIndex = new Map(zhDocs.map((d) => [d.slice(0, 2), d]));

      const enDocs = fs
        .readdirSync(enSecDir)
        .filter((f) => f.endsWith('.md') && f !== 'README.md')
        .sort();

      for (const f of enDocs) {
        if (!EN_DOC_FILE_RE.test(f)) {
          enFail(`英文条目文件名应为 NN-<english-slug>.md（小写 ASCII，不含中文）：${rel}/${f}`);
          continue;
        }
        const index = f.slice(0, 2);
        if (!zhByIndex.has(index)) {
          enFail(`英文树存在中文树没有对应序号的条目：${rel}/${f}`);
          continue;
        }
        enBodies += 1;
        const fm = readFrontmatter(path.join(enSecDir, f));
        if (!fm || fm.__malformed) {
          enFail(`英文条目 frontmatter 缺失或格式错误：${rel}/${f}`);
          continue;
        }
        for (const key of REQUIRED_KEYS) {
          if (isEmptyField(fm[key])) enFail(`英文条目 frontmatter 缺少字段 ${key}：${rel}/${f}`);
        }
        if (sm) {
          const expectedId = `${sm[1]}-${sm[2]}-${index}`;
          if (fm.id !== expectedId) {
            enFail(`英文条目 id 与目录/文件序号不一致：${rel}/${f}（id=${fm.id}，期望 ${expectedId}）`);
          }
        }
        if (!readmeText.includes(f)) {
          enFail(`英文二级 README 未列出英文条目文件：${rel}/README.md ← ${f}`);
        }
      }

      for (const [index, zhDoc] of zhByIndex) {
        const translated = enDocs.some((f) => f.startsWith(`${index}-`));
        if (translated) continue;
        if (!readmeText.includes(zhDoc)) {
          enFail(`英文二级 README 未列出条目：${rel}/README.md ← ${zhDoc}`);
        }
      }
    }
  }

  const strayBooks = fs
    .readdirSync(EN_DOCS, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((name) => !bookNames.includes(name));
  for (const name of strayBooks) {
    enFail(`英文树存在中文树没有的一级目录：en/docs/${name}/`);
  }

  console.log(`英文 README：${enReadmes}（期望 ${bookNames.length + bookNames.reduce((s, b) => s + fs.readdirSync(path.join(DOCS_DIR, b), { withFileTypes: true }).filter((d) => d.isDirectory()).length, 0)}）`);
  console.log(`已英译条目正文：${enBodies} / ${EXPECTED.total}`);
  finish();
}

if (!fs.existsSync(DOCS_DIR)) {
  console.error('docs/ 目录不存在，请先运行 node scripts/generate-skeleton.mjs');
  process.exit(1);
}

const bookDirs = fs.readdirSync(DOCS_DIR, { withFileTypes: true }).filter((d) => d.isDirectory());
const ids = new Map();
const seen = new Set();

for (const bookDir of bookDirs) {
  const bm = bookDir.name.match(BOOK_DIR_RE);
  if (!bm) {
    fail(`一级目录命名不符合规范：docs/${bookDir.name}/`);
    continue;
  }
  const bookId = bm[1];
  const bookPath = path.join(DOCS_DIR, bookDir.name);

  if (!fs.existsSync(path.join(bookPath, 'README.md'))) {
    fail(`一级目录缺少 README.md：docs/${bookDir.name}/`);
  }

  const sectionDirs = fs.readdirSync(bookPath, { withFileTypes: true }).filter((d) => d.isDirectory());
  let bookCount = 0;

  for (const sectionDir of sectionDirs) {
    const sm = sectionDir.name.match(SECTION_DIR_RE);
    if (!sm) {
      fail(`二级目录命名不符合规范：docs/${bookDir.name}/${sectionDir.name}/`);
      continue;
    }
    if (sm[1] !== bookId) {
      fail(`二级目录编号与所属一级目录不一致：docs/${bookDir.name}/${sectionDir.name}/`);
    }

    const sectionPath = path.join(bookPath, sectionDir.name);
    const readmePath = path.join(sectionPath, 'README.md');
    let readmeText = '';
    if (!fs.existsSync(readmePath)) {
      fail(`二级目录缺少 README.md：docs/${bookDir.name}/${sectionDir.name}/`);
    } else {
      readmeText = fs.readFileSync(readmePath, 'utf8');
    }

    const docFiles = fs
      .readdirSync(sectionPath, { withFileTypes: true })
      .filter((f) => f.isFile() && f.name.endsWith('.md') && f.name !== 'README.md');

    if (docFiles.length === 0) fail(`二级目录下没有任何条目文档：docs/${bookDir.name}/${sectionDir.name}/`);

    for (const doc of docFiles) {
      const dm = doc.name.match(DOC_FILE_RE);
      const rel = `docs/${bookDir.name}/${sectionDir.name}/${doc.name}`;
      if (!dm) {
        fail(`条目文档命名不符合规范：${rel}`);
        continue;
      }
      const index = dm[1];
      const file = path.join(sectionPath, doc.name);
      const fm = readFrontmatter(file);
      if (!fm || fm.__malformed) {
        fail(`缺少或格式错误的 frontmatter：${rel}`);
        continue;
      }
      for (const key of REQUIRED_KEYS) {
        if (isEmptyField(fm[key])) fail(`frontmatter 缺少字段 ${key}：${rel}`);
      }

      const expectedId = `${sm[1]}-${sm[2]}-${index}`;
      if (fm.id !== expectedId) {
        fail(`id 与目录/文件编号不一致：${rel}（frontmatter id=${fm.id}，期望 ${expectedId}）`);
      }
      if (seen.has(fm.id)) {
        fail(`id 重复：${fm.id}（${rel} 与 ${ids.get(fm.id)}）`);
      } else {
        seen.add(fm.id);
        ids.set(fm.id, rel);
      }
      if (fm.category && !fm.category.includes('/')) {
        fail(`category 格式应为「一级/二级」：${rel}`);
      }
      if (!readmeText.includes(doc.name)) {
        fail(`二级 README 索引未列出条目文档：docs/${bookDir.name}/${sectionDir.name}/README.md ← ${doc.name}`);
      }
      bookCount += 1;
    }
  }

  const expected = EXPECTED.books[bookId];
  if (expected !== undefined && bookCount !== expected) {
    fail(`一级分类 ${bookId} 的条目数为 ${bookCount}，期望 ${expected}`);
  }
  if (EXPECTED.bookSections[bookId] !== undefined && sectionDirs.length !== EXPECTED.bookSections[bookId]) {
    fail(`一级分类 ${bookId} 的二级分类数为 ${sectionDirs.length}，期望 ${EXPECTED.bookSections[bookId]}`);
  }
}

const sectionTotal = bookDirs.reduce(
  (sum, b) => sum + fs.readdirSync(path.join(DOCS_DIR, b.name), { withFileTypes: true }).filter((d) => d.isDirectory()).length,
  0,
);

if (bookDirs.length !== Object.keys(EXPECTED.books).length) {
  fail(`一级分类数为 ${bookDirs.length}，期望 ${Object.keys(EXPECTED.books).length}`);
}
if (sectionTotal !== EXPECTED.sections) {
  fail(`二级分类数为 ${sectionTotal}，期望 ${EXPECTED.sections}`);
}
if (seen.size !== EXPECTED.total) {
  fail(`三级条目数为 ${seen.size}，期望 ${EXPECTED.total}`);
}

console.log('—— 结构校验 ——');
console.log(`一级分类：${bookDirs.length} / ${Object.keys(EXPECTED.books).length}`);
console.log(`二级分类：${sectionTotal} / ${EXPECTED.sections}`);
console.log(`三级条目：${seen.size} / ${EXPECTED.total}`);
for (const [bookId, count] of Object.entries(EXPECTED.books)) {
  console.log(`  ${bookId}：期望 ${count}`);
}

if (errors.length) {
  console.error(`\n发现 ${errors.length} 个问题：`);
  for (const e of errors) console.error(`  ✗ ${e}`);
  process.exit(1);
}

console.log('\n✓ 结构校验通过');
