/**
 * # Create a function that reverses a string
 */

const reverseStr = (str) => {
  if (typeof str !== "string" || str.length === 0) {
    return;
  }

  return [...str].reverse().join("");
};
