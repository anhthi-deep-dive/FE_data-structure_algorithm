/**
 * Find factorial of a number using recursion
 */

const findFactorialRecursive = (num) => {
  if (num < 2) {
    return 1;
  }

  return num * findFactorialRecursive(num - 1);
};

console.log("findFactorialRecursive: ", findFactorialRecursive(5));

/**
 * Find factorial of a number using iterative
 */

const findFactorialIterative = (num) => {
  if (num < 2) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
};

console.log("findFactorialIterative: ", findFactorialIterative(5));
