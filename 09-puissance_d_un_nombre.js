// This script takes 2 numbers as argument and shows the result of the 1st number exponent the 2nd one

firstNumber = process.argv[2];
secondNumber = process.argv[3];
errorMessage = "erreur.";
result = firstNumber ** secondNumber;

if (process.argv.length < 4 || process.argv.length > 4)
{
    console.log(errorMessage);
    return;
}

for (let i = 0; i < firstNumber.length; i++)
{
    if(firstNumber.charCodeAt(i) < 48 || firstNumber.charCodeAt(i) > 57)
    {
        console.log(errorMessage+"1");
        return;
    }
}
for (let i = 0; i < secondNumber.length; i++)
{
    if (secondNumber.charCodeAt(i) < 48 || secondNumber.charCodeAt(i) > 57)
    {
        console.log(errorMessage+"2");
        return;
    }
}

console.log(result);