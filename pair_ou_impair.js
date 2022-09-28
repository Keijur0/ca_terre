/* const acceptable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; */
number = process.argv[2];
isValid = false;
errorMessage = "Tu ne me la mettras pas à l'envers."

// Too many args?
if (process.argv.length > 3)
{
    console.log(errorMessage);
    return;
}
// No arg?
else if (process.argv.length < 3)
{
    console.log(errorMessage);
    return;
}
// Negative number?
if (number[0] == String.fromCharCode(45))
{
    number = -(number);
}

// Checking the rest of characters
for (i = 0; i < number.length; i++)
{
    if(number[i].charCodeAt() < 47 || number[i].charCodeAt() > 58)
    {
        console.log(errorMessage);
        return;
    }
}

if(number % 2 == 0)
{
    console.log("pair");
}
else
{
    console.log("impair");
}