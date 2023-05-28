import gendiff from '../src/index.js';

test('gendiff1', () => {
  expect(gendiff('./__fixtures__/file1.json', './__fixtures__/file2.json')).toEqual('{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}');
});

test('gendiff2', () => {
  expect(gendiff('./__fixtures__/file1.yaml', './__fixtures__/file2.yaml')).toEqual('{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}');
});

test('gendiff3', () => {
  expect(gendiff('./__fixtures__/file1.yml', './__fixtures__/file2.yml')).toEqual('{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}');
});

