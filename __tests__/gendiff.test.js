import { gendiff, readFile, getPath } from '../src/index.js';

const expectedStylish = readFile(getPath('result_Stylish.txt', 'utf8'));
const expectedPlain = readFile(getPath('result_Plain.txt', 'utf8'));
const expectedJson = readFile(getPath('result_Json.txt', 'utf8'));

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
