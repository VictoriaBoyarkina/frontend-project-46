import { gendiff, readFile, getPath } from '../src/index.js';

test('gendiff1', () => {
  expect(gendiff('./file1.json', './file2.json')).toEqual(readFile(getPath('result.txt', 'utf8')));
});
