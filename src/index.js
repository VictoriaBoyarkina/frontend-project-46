/* eslint-disable object-shorthand */
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import parse from './parser.js';
import makeAstTree from './makeAstTree.js';
import formatDiff from './formatters/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getPath = (filename) => path.resolve(__dirname, '../__fixtures__/', filename);

const getExtension = (filepath) => path.extname(filepath).substring(1);

const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');

const gendiff = (path1, path2, format) => {
  const fullPath1 = getPath(path1);
  const fullPath2 = getPath(path2);
  const ext1 = getExtension(path1);
  const ext2 = getExtension(path2);
  const data1 = readFile(fullPath1);
  const data2 = readFile(fullPath2);
  const obj1 = parse(data1, ext1);
  const obj2 = parse(data2, ext2);
  const astTree = makeAstTree(obj1, obj2);
  return formatDiff(astTree, format);
};

export { gendiff, readFile, getPath };
