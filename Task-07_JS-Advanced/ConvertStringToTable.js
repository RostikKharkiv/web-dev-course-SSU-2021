function ConvertStringToTable(a, b, str) {
    if (typeof a != "number"
        || typeof b != "number"
        || !Number.isInteger(a)
        || !Number.isInteger(b)
        || a < 1
        || b < 1)
        return 'The first and second arguments must be a positive integer!';

    let section = [];

    for (let i = 0; i < str.length; i += a) 
    {
        section.push(str.substring(i, i + a));
    }

    let res = '';
    let delimeter = "+---".repeat(a) + "+\n";
    let emptyCell = `|   `;

    for (let i = 0; i < b; i++) 
    {
        res += delimeter;
        for (let j = 0; j < a; j++) 
        {
            if (typeof section[i] != "undefined" && typeof section[i][j] != "undefined") 
            {
                section[i][j] == ' ' ? res += emptyCell : res += `| ${section[i][j]} `;
            }
            else 
            {
                res += emptyCell;
            }
        }
        res += "|\n";
    }
    res += delimeter;
    return (res);
}

console.log("Display a row as a table: ")
console.log(ConvertStringToTable(4, 4, "Hello World!"));
console.log(ConvertStringToTable(4, 3, "Nice pattern"));
console.log(ConvertStringToTable(3, 4, "Nice pattern"));
console.log(ConvertStringToTable(4, 4, ""));