/* eslint-disable object-shorthand */
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import parse from './parser.js';
import { makeAstTree, getListOfKeys } from './makeAstTree.js';
import makeStylish from './json.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getPath = (filename) => path.resolve(__dirname, '../__fixtures__/', filename);

const getExtension = (filepath) => path.extname(filepath).substring(1);

const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');

const filepath1 = 'file1.json';
const filepath2 = 'file2.json';

// eslint-disable-next-line no-unused-vars
const gendiff = (path1, path2, formatter = 'stylish') => {
  const fullPath1 = getPath(filepath1);
  const fullPath2 = getPath(filepath2);
  const ext1 = getExtension(filepath1);
  const ext2 = getExtension(filepath2);
  const data1 = readFile(fullPath1);
  const data2 = readFile(fullPath2);
  const obj1 = parse(data1, ext1);
  const obj2 = parse(data2, ext2);
  return [obj1, obj2];
};

const [obj1, obj2] = gendiff(filepath1, filepath2);

const listOfKeys = getListOfKeys(obj1, obj2);

const astTree = makeAstTree(obj1, obj2, listOfKeys);

const stylish = makeStylish(obj1, obj2, listOfKeys);

// eslint-disable-next-line no-console
console.log(stylish);
