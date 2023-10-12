/**
 * Given 2 arrays, create a function that let user know (true/false)
 * whether theses two arrays contain any common items
 */

const array1 = ["a", "b", "c", "y"];
const array2 = ["z", "y", "c"];

/**
 * Solution 1: Bad - O(N^2) because of nested loop
 */

const findCommon1 = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }

  return false;
};

console.log("findCommon1: ", findCommon1(array1, array2));

/**
 * Solution 2: Better - O(n) because only one loop
 */

const array3 = ["a", "b", "c", "d"];
const array4 = ["z", "y", "z"];

const findCommon2 = (arr1, arr2) => {
  const arr1InObj = Array.from(new Set(arr1)).reduce((acc, item) => {
    acc[item] = true;
    return acc;
  }, {});

  for (let i = 0; i < arr2.length; i++) {
    if (arr1InObj[arr2[i]]) {
      return true;
    }
  }

  return false;
};

console.log("findCommon2: ", findCommon2(array3, array4));

/**
 * Solution 3
 */

const array5 = ["a", "b", "c", "d"];
const array6 = ["z", "y", "a"];

const findCommon3 = (arr1, arr2) => {
  return arr1.some((itemInArr1) => arr2.includes(itemInArr1));
};

console.log("findCommon3: ", findCommon3(array5, array6));
