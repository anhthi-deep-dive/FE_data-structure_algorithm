const findFirstRecurring1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
};

console.log(
  "findFirstRecurring1: ",
  findFirstRecurring1([2, 1, 1, 2, 3, 5, 1, 2, 4])
);

const findFirstRecurring2 = (arr) => {
  const accumulateItems = {}; // can also use [].includes

  for (let item of arr) {
    if (accumulateItems[item]) {
      return item;
    }

    accumulateItems[item] = item;
  }
};

console.log(
  "findFirstRecurring2: ",
  findFirstRecurring2([2, 1, 1, 2, 3, 5, 1, 2, 4])
);
