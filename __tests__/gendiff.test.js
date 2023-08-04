import gendiff from '../src/index.js';

test('gendiff1', () => {
  expect(gendiff('./__fixtures__/file1.json', './__fixtures__/file2.json')).toEqual('./__fixtures__/result.txt');
});
