// Given array of numbers
const numbers = [23, 17, 56, 8, 42, 5, 10];

// Function to find the sum of all numbers in the array
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Function to find the average of the numbers in the array
function findAverage(arr) {
  if (arr.length === 0) return 0;
  const sum = findSum(arr);
  return sum / arr.length;
}

// Function to find the maximum value in the array
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Function to find the minimum value in the array
function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// Function to sort the array in ascending order (using bubble sort algorithm)
function sortArray(arr) {
  const sortedArr = arr.slice();
  const n = sortedArr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (sortedArr[j] > sortedArr[j + 1]) {
        // Swap elements
        const temp = sortedArr[j];
        sortedArr[j] = sortedArr[j + 1];
        sortedArr[j + 1] = temp;
      }
    }
  }
  return sortedArr;
}

// Output the results
console.log("Array: " + numbers);
console.log("Sum: " + findSum(numbers));
console.log("Average: " + findAverage(numbers));
console.log("Maximum: " + findMax(numbers));
console.log("Minimum: " + findMin(numbers));
console.log("Sorted Array: " + sortArray(numbers));
