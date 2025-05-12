// 7. Task: Unique Values
// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.
{
    const removeDuplicates = (param: number[]):number[] =>{
    
        const removeDupli = param.filter((item: number, index: number) => param.indexOf(item) == index);
        return removeDupli;
    }
    
    const values = removeDuplicates([1, 2, 2,1, 1, 3, 4, 4, 5,5,7,7]);
    console.log(values);
}