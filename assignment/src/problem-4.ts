// 5.Task: Array Reduction
// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

{
  const numbers: number[] = [10, 3, 6, 7, 8, 11];

  function sumEvenNumbers(arr: number[]): number {
    return arr.reduce((acc, curr) => {
      return curr % 2 === 0 ? acc + curr : acc;
    }, 0);
  }

  console.log(sumEvenNumbers(numbers));
}
