/* eslint-disable object-shorthand */
import fs from 'fs';
import process from 'process';
import path from 'path';
import parse from './parser.js';

const getPath = (filepath) => path.resolve(process.cwd(), filepath);

const getExtension = (filepath) => path.extname(filepath).substring(1);

const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');

// eslint-disable-next-line no-unused-vars
const getObjects = (filepath1, filepath2, formatter = 'stylish') => {
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

export default getObjects;
