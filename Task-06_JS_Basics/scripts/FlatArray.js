function FlatArray(array){
    let flatArray = [];
    for (let i = 0; i < array.length; i++)
    {
        if (Array.isArray(array[i]))
        {
            array[i].forEach((item) => result.push(item));
        }
        else
        {
            result.push(array[i]);
        }
    }
    return result.sort((a,b) => a - b);
}


console.log(FlatArray([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]).toString());
console.log(FlatArray([]).toString());
console.log(FlatArray([[], []]).toString());
console.log(FlatArray([[], [1]]).toString());
console.log(FlatArray([[1, 3, 5], [-100], [2, 4, 6]]).toString());