// 4.Task: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.
{
  interface Icar {
    make: string;
    model: number;
    year: number;
  }

  const car: Icar[] = [
    { make: "honda", model: 30, year: 2020 },
    { make: "toyota", model: 25, year: 2022 },
    { make: "audi", model: 35, year: 2002 },
  ];

  function ascendingCar(arr: Icar[]): Icar[] {
    const newCar = arr.sort((a, b) => a.year - b.year);
    return newCar;
  }

  console.log(ascendingCar(car));
}
