// This script passes an argument in and returns if it is a prime number or not

nbArg = process.argv.length;
number = process.argv[2];
errorMessage = "erreur.";
factorList = [];

function validityCheck(number)
{
    if (nbArg !== 3)
    {
        return false;
    }
    for (let i = 0; i < number.length; i++)
    {
        if (number.charCodeAt(i) < 48 || number.charCodeAt(i) > 57)
        {
            return false;
        }
    }
}
function isPrimeNumber(number)
{
    for (let i = 1; i <= +number; i++)
    {
        if (Number.isInteger(+(number)/i))
        {
            factorList.push(i);
        }
    }
    if (factorList.length == 2)
    {
        return "Oui, " + number + " est un nombre premier.";
    }
    else
    {
        return "Non, " + number + " n'est pas un nombre premier";
    }
}

if (validityCheck(number) == false)
{
    console.log(errorMessage);
}
else
{
    console.log(isPrimeNumber(number));
}