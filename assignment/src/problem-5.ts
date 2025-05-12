// 6. Task: Leap Year Checker
// Write a function that determines whether a given year is a leap year.
// Example: Happy New Year

{
  function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  // Example usage:
  const year = 2028;
  if (isLeapYear(year)) {
    console.log("Happy New Year");
  } else {
    console.log("This is not a leap year");
  }
}
