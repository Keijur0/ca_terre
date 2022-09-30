// This script takes 2 numbers as argument and shows the result of the 1st number exponent the 2nd one

nbArg = process.argv.length;
firstNumber = process.argv[2];
secondNumber = process.argv[3];
errorMessage = "erreur.";

function validityCheck(firstNumber, secondNumber)
{
    if (nbArg !== 4)
    {
        return false;
    }
    for (let i = 0; i < firstNumber.length; i++)
    {
        if(firstNumber.charCodeAt(i) < 48 || firstNumber.charCodeAt(i) > 57)
        {
            return false;
        }
    }
    for (let i = 0; i < secondNumber.length; i++)
    {
        if (secondNumber.charCodeAt(i) < 48 || secondNumber.charCodeAt(i) > 57)
        {
            return false;
        }
    }
}
function square (firstNumber, secondNumber)
 {
    return firstNumber ** secondNumber;
 }

 if (validityCheck(firstNumber, secondNumber) == false)
 {
    console.log(errorMessage);
 }
 else
 {
    console.log(square(firstNumber,secondNumber));
 }