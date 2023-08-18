/* eslint-disable max-len */
import _ from 'lodash';

const bubbleSort = (coll) => {
  let stepsCount = coll.length - 1;
  // Объявляем переменную swapped, значение которой показывает,
  // был ли совершен обмен элементов во время перебора массива
  let swapped;
  // do..while цикл. Работает почти идентично while
  // Разница в проверке. Тут она делается не до выполнения тела, а после.
  // Такой цикл полезен там, где надо выполнить тело хотя бы раз в любом случае.
  do {
    swapped = false;
    // Перебираем массив и меняем местами элементы, если предыдущий
    // больше, чем следующий
    for (let i = 0; i < stepsCount; i += 1) {
      if (coll[i] > coll[i + 1]) {
        // temp – временная константа для хранения текущего элемента
        const temp = coll[i];
        coll[i] = coll[i + 1];
        coll[i + 1] = temp;
        // Если сработал if и была совершена перестановка,
        // присваиваем swapped значение true
        swapped = true;
      }
    }
    // Уменьшаем счетчик на 1, т.к. самый большой элемент уже находится
    // в конце массива
    stepsCount -= 1;
  } while (swapped); // продолжаем, пока swapped === true

  return coll;
};

const getListOfKeys = (file1, file2) => {
  const list1 = Object.keys(file1);
  const list2 = Object.keys(file2);
  const listOfKeys = [...list1, ...list2];
  const uniqArray = _.uniq(listOfKeys);
  return bubbleSort(uniqArray);
};

const makeAstTree = (object1, object2) => {
  const listOfKeys = getListOfKeys(object1, object2);
  const result = listOfKeys.map((key) => {
    if (_.has(object1, key) && _.has(object2, key)) {
      if (_.isObject(object1[key]) && _.isObject(object2[key])) {
        return { key, type: 'nested', children: makeAstTree(object1[key], object2[key]) };
      }
    }
    if (_.has(object1, key) && _.has(object2, key)) {
      if (object1[key] === object2[key]) {
        return { key, type: 'unchanged', value: object1[key] };
      }
    }
    if (_.has(object1, key) && _.has(object2, key)) {
      if (object1[key] !== object2[key]) {
        return {
          key, type: 'updated', value1: object1[key], value2: object2[key],
        };
      }
    }
    if (_.has(object1, key) && !_.has(object2, key)) {
      return { key, type: 'removed', value: object1[key] };
    }
    return { key, type: 'added', value: object2[key] };
  });
  return result;
};

export default makeAstTree;
