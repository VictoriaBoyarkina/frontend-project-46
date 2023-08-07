import { gendiff, readFile, getPath } from '../src/index.js';

test('gendiff1', () => {
  expect(gendiff('./__fixtures__/file1.json', './__fixtures__/file2.json')).toEqual(readFile(getPath('result.txt', 'utf8')));
});
