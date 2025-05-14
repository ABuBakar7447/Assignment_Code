// 6. Task: Leap Year Checker
// Write a function that determines whether a given year is a leap year.
// Example: Happy New Year

{
  function isLeapYear(year: number): string {
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
      return "Happy New Year"
    }
    else{
      return "This is not a leap year"
    }
    
  }

  const year = 2028;
  console.log(isLeapYear(year));
  
}
