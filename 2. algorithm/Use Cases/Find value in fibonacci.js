/**
 * Given [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
 * Find fibonacci of a number using recursion
 * O(2^n) - require more operations
 */

const fibonacciRecursive = (num) => {
  if (num < 2) {
    return num;
  }

  return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
};

console.log("fibonacciRecursive: ", fibonacciRecursive(43));

/**
 * Find fibonacci of a number using iterative
 * O(n)
 */

const fibonacciIterative = (num) => {
  const result = [0, 1];

  for (let i = 1; i < num; i++) {
    const nextFibo = result[result.length - 1] + result[result.length - 2];
    result.push(nextFibo);
  }

  return result[n];
};

console.log("fibonacciIterative: ", fibonacciIterative(43));
