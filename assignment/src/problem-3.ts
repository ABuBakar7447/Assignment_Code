// 08. Task: Find Maximum Value:
// Write a function that takes an array of numbers and returns the maximum value.

{
  function maximum(array: number[]): number {
    let max: number = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    return max;
  }

  const arr: number[] = [11, 5, 7, 4, 13];
  console.log(maximum(arr));
}
