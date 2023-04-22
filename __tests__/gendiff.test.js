import gendiff from '../src/index.js';

test('gendiff', () => {
  expect(gendiff('./fixtures/file1.json', './fixtures/file2.json')).toEqual('{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}');
});
