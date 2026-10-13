#!/usr/bin/env node
/**
 * 填充进度统计
 *
 * 判定规则：
 *   - 文档正文仍包含「<!-- 编写提示」标记 → 视为未填充（模板骨架）
 *   - 已移除全部编写提示 → 视为已填充
 *
 * 用法：node scripts/progress.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DOCS_DIR = path.join(ROOT, 'docs');
const HINT = '<!-- 编写提示';

const rows = [];
let total = 0;
let filled = 0;

const bookDirs = fs
  .readdirSync(DOCS_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .sort((a, b) => a.name.localeCompare(b.name));

for (const bookDir of bookDirs) {
  const bookPath = path.join(DOCS_DIR, bookDir.name);
  const sectionDirs = fs
    .readdirSync(bookPath, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name));

  for (const sectionDir of sectionDirs) {
    const sectionPath = path.join(bookPath, sectionDir.name);
    const docs = fs
      .readdirSync(sectionPath, { withFileTypes: true })
      .filter((f) => f.isFile() && f.name.endsWith('.md') && f.name !== 'README.md')
      .sort((a, b) => a.name.localeCompare(b.name));

    const done = docs.filter((f) => !fs.readFileSync(path.join(sectionPath, f.name), 'utf8').includes(HINT));
    total += docs.length;
    filled += done.length;
    const pct = docs.length ? Math.round((done.length / docs.length) * 100) : 0;
    rows.push({
      section: `${bookDir.name}/${sectionDir.name}`,
      done: done.length,
      all: docs.length,
      pct,
      pending: done.length === 0 ? docs.slice(0, 1).map((f) => f.name.replace(/\.md$/, '')).join('') : '',
    });
  }
}

const bar = (pct, width = 20) => {
  const n = Math.round((pct / 100) * width);
  return '█'.repeat(n) + '░'.repeat(width - n);
};

console.log('—— 填充进度 ——\n');
console.log('进度                                    已完成/总数   百分比   二级分类');
for (const r of rows) {
  console.log(
    `${bar(r.pct)}   ${String(r.done).padStart(3)}/${String(r.all).padEnd(3)}   ${String(r.pct).padStart(3)}%   ${r.section}`,
  );
}

const bookTotals = {};
for (const r of rows) {
  const book = r.section.split('/')[0];
  bookTotals[book] = bookTotals[book] || { done: 0, all: 0 };
  bookTotals[book].done += r.done;
  bookTotals[book].all += r.all;
}

console.log('\n—— 按一级分类汇总 ——\n');
for (const [book, v] of Object.entries(bookTotals)) {
  console.log(`${book}：${v.done}/${v.all}（${Math.round((v.done / v.all) * 100)}%）`);
}

const pct = total ? (filled / total) * 100 : 0;
console.log(`\n总计：${filled}/${total} 条已填充（${pct.toFixed(1)}%），待填充 ${total - filled} 条`);

/* ------------------------------------------------------------------ *
 * 英文正文翻译进度（en/docs/**）
 * ------------------------------------------------------------------ */

const EN_DOCS_DIR = path.join(ROOT, 'en', 'docs');
const EN_ENTRY_RE = /^\d{2}-.+\.md$/;

const enRows = rows.map((r) => {
  const [bookDir, sectionDir] = r.section.split('/');
  const enSecDir = path.join(EN_DOCS_DIR, bookDir, sectionDir);
  const done = fs.existsSync(enSecDir)
    ? fs.readdirSync(enSecDir).filter((f) => EN_ENTRY_RE.test(f)).length
    : 0;
  return { section: r.section, done, all: r.all };
});

const enFilled = enRows.reduce((s, r) => s + r.done, 0);
const enPct = total ? (enFilled / total) * 100 : 0;

console.log('\n—— 英文正文进度 ——\n');
console.log('进度                                    已英译/总数   百分比   二级分类');
for (const r of enRows.filter((r) => r.done > 0)) {
  console.log(
    `${bar(Math.round((r.done / r.all) * 100))}   ${String(r.done).padStart(3)}/${String(r.all).padEnd(3)}   ${String(
      Math.round((r.done / r.all) * 100),
    ).padStart(3)}%   ${r.section}`,
  );
}
console.log(`\n已英译：${enFilled}/${total} 条（${enPct.toFixed(1)}%），待英译 ${total - enFilled} 条`);
