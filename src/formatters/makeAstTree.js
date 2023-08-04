import _ from 'lodash';

const getListOfKeys = (file1, file2) => {
  const list1 = Object.keys(file1);
  const list2 = Object.keys(file2);
  const listOfKeys = [...list1, ...list2];
  const uniqArray = _.uniq(listOfKeys);
  return uniqArray.sort();
};

const makeAstTree = (object1, object2, listOfKeys) => {
  const result = [];
  result.push('{');
  // eslint-disable-next-line array-callback-return
  listOfKeys.map((key) => {
    if (_.has(object1, key) && _.has(object2, key)) {
      if (object1[key] === object2[key]) {
        result.push(`    ${key}: ${object1[key]}`);
      }
    }
    if (_.has(object1, key) && _.has(object2, key)) {
      if (object1[key] !== object2[key]) {
        result.push(`  - ${key}: ${object1[key]}`);
        result.push(`  + ${key}: ${object2[key]}`);
      }
    }
    if (_.has(object1, key) && !_.has(object2, key)) {
      result.push(`  - ${key}: ${object1[key]}`);
    }
    if (!_.has(object1, key) && _.has(object2, key)) {
      result.push(`  + ${key}: ${object2[key]}`);
    }
  });
  result.push('}');
  result.join('\n');
  return result;
};

// eslint-disable-next-line no-unused-vars

export { makeAstTree, getListOfKeys };
