import fs from 'fs';
import process from 'process';
import path from 'path';
import _ from 'lodash';
import getObject from './parser.js';

const getPath = (filepath) => path.resolve(process.cwd(), filepath);

const getExtension = (filepath) => path.extname(filepath).substring(1);

const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');

const getListOfKeys = (file1, file2) => {
  const list1 = Object.keys(file1);
  const list2 = Object.keys(file2);
  const listOfKeys = [...list1, ...list2];
  const uniqArray = _.uniq(listOfKeys);
  return uniqArray.sort();
};

const checkValue = (key, file1, file2) => {
  if (file1[key] === file2[key]) {
    return `    ${key}: ${file1[key]}`;
  } if (!Object.hasOwn(file2, key)) {
    return `  - ${key}: ${file1[key]}`;
  } if (!Object.hasOwn(file1, key)) {
    return `  + ${key}: ${file2[key]}`;
  }
  return (`  - ${key}: ${file1[key]}\n  + ${key}: ${file2[key]}`);
};

// eslint-disable-next-line no-unused-vars
const gendiff = (filepath1, filepath2, format = 'stylish') => {
  const fullPath1 = getPath(filepath1);
  const fullPath2 = getPath(filepath2);
  const extension1 = getExtension(filepath1);
  const extension2 = getExtension(filepath2);
  const file1 = readFile(fullPath1);
  const file2 = readFile(fullPath2);
  const object1 = getObject(file1, extension1);
  const object2 = getObject(file2, extension2);
  const listOfKeys = getListOfKeys(object1, object2);
  const result = [];
  for (let i = 0; i < listOfKeys.length; i += 1) {
    result.push(checkValue(listOfKeys[i], object1, object2));
  }
  return `{\n${result.join('\n')}\n}`;
};

export default gendiff;
