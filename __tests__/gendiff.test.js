import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getPath = (filename) => path.resolve(__dirname, '../__fixtures__/', filename);
const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');

const expectedStylish = readFile(getPath('resultStylish.txt', 'utf8'));
const expectedPlain = readFile(getPath('resultPlain.txt', 'utf8'));
const expectedJson = readFile(getPath('resultJson.txt', 'utf8'));

const fileExt = ['.json', '.yaml'];

test.each(fileExt)('testing different file options', (extension) => {
  const fileBefore = `./file1${extension}`;
  const fileAfter = `./file2${extension}`;
  const actual1 = gendiff(fileBefore, fileAfter);
  expect(actual1).toEqual(expectedStylish);
  const actual2 = gendiff(fileBefore, fileAfter, 'stylish');
  expect(actual2).toEqual(expectedStylish);
  const actual3 = gendiff(fileBefore, fileAfter, 'plain');
  expect(actual3).toEqual(expectedPlain);
  const actual4 = gendiff(fileBefore, fileAfter, 'json');
  expect(actual4).toEqual(expectedJson);
});
