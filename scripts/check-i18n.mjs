import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

function messageShape(messages, prefix = '') {
  return Object.entries(messages).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'string') return [path];
    assert(value && typeof value === 'object' && !Array.isArray(value), `${path}: use strings ou objetos de mensagens`);
    return messageShape(value, path);
  }).sort();
}

const [portuguese, english] = await Promise.all(
  ['pt', 'en'].map(async (locale) => JSON.parse(await readFile(new URL(`../content/${locale}.json`, import.meta.url), 'utf8'))),
);
assert.deepEqual(messageShape(english), messageShape(portuguese), 'As chaves PT e EN devem ser iguais');
console.log('Traduções PT e EN têm as mesmas chaves.');
