/**
 * Merge 2 sorted arrays
 */

const mergeSorted = (arr1, arr2) => {
  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  const mergedArray = [];
  let i = 0;
  let j = 0;
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];

  while (arr1Item || arr2Item) {
    if (arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      i++;
      arr1Item = arr1[i];
    } else {
      mergedArray.push(arr2Item);
      j++;
      arr2Item = arr2[j];
    }
  }

  return mergedArray;
};

const array1 = [0, 3, 6, 9, 11];
const array2 = [1, 2, 5, 5, 14];

console.log(mergeSorted(array1, array2));
