import { gendiff, readFile, getPath } from '../src/index.js';

test('gendiffStylish', () => {
  expect(gendiff('./file1.json', './file2.json', 'stylish')).toBe(readFile(getPath('resultStylish.txt', 'utf8')));
});

test('gendiffPlain', () => {
  expect(gendiff('./file1.json', './file2.json', 'plain')).toBe(readFile(getPath('resultPlain.txt', 'utf8')));
});
