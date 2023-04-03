import { readFileSync } from 'node:fs';
import _ from 'lodash';
import process from 'process';
import path from 'path';

const getJson = (filepath) => {
  const directory = process.cwd();
  const fullFilePath = path.resolve(directory, filepath);
  const json = readFileSync(fullFilePath );
  const file = JSON.parse(json);
  return file;
};

const getListOfKeys = (file1, file2) => {
  const list1 = Object.keys(file1);
  const list2 = Object.keys(file2);
  const listOfKeys = [...list1, ...list2];
  const uniqArray = _.uniq(listOfKeys);
  const sortedList = uniqArray.sort();
  console.log(sortedList);
};

const checkValue = (key, file1, file2) => {
  if (file1.key === file2.key) {
    return `${key}: ${file1.key}`;
  } else if (!Object.hasOwn(file2, key)) {
    return `- ${key}: ${file1.key}`;
  } else if (!Object.hasOwn(file1, key)) {
    return `+ ${key}: ${file2.key}`;
  }
  return (`- ${key}: ${file1.key}\n+ ${key}: ${file2.key}`);
};

export const genDiff = (filepath1, filepath2) => {
  const file1 = getJson(filepath1);
  const file2 = getJson(filepath2);
  const listOfKeys = getListOfKeys(file1, file2);
  for (let i = 0; i < listOfKeys.length; i += 1) {
    console.log(listOfKeys[i]);
  }
}
