function SumFormula(n) 
{
    if (typeof n != 'number'
        || !Number.isInteger(n)
        || n < -200
        || n > 200) 
        return 'Invalid input';

    let isNegative = false;

    if (n < 0) 
    {
        isNegative = true;
        n = Math.abs(n);
    }

    let result = '';

    if (n == 0) result = '1';
    else 
    {
        for (var i = 0; i <= n; i++) 
        {
            var multiplier = factorial(BigInt(n)) / (factorial(BigInt(n - i)) * factorial(BigInt(n) - BigInt(n - i)));
            if (multiplier == 1) multiplier = '';
            else result += String(multiplier);
            if (n - i == 1) result += 'a';
            if (n - i > 1) result += 'a' + '^' + (n - i);
            if (i == 1) result += 'b';
            if (i > 1) result += 'b' + '^' + (i);
            if (i != n) result += ' + ';
        }
    }
    return isNegative ? '1 / (' + result + ')' : result;
}

function factorial(n) { return n ? n * factorial(n - 1n) : 1n; }

console.log("(a+b)^n: ")
console.log(SumFormula(0));
console.log(SumFormula(1));
console.log(SumFormula(2));
console.log(SumFormula(-2));
console.log(SumFormula(3));
console.log(SumFormula(5));
console.log(SumFormula(201));
console.log(SumFormula(3.14));