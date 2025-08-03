// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const convertArrayToNumber = value => Number(value.join(''));

  return convertArrayToNumber(array1) + convertArrayToNumber(array2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const convertedString = String(value);
  let reversedValue = '';

  for (const number of convertedString) {
    reversedValue = number + reversedValue;
  }

  return convertedString === reversedValue;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!input) return 'Required field';

  if (!Number(input)) return 'Must be a number besides 0';

  return '';
}
