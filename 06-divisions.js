// This script executes and euclidean division between the 1st and 2nd argument passed into it

nbArg = process.argv.length;
firstNumber = process.argv[2];
secondNumber = process.argv[3];
errorMessage = "erreur.";
quotient = 0;
remainder = 0;


function validityCheck(firstNumber, secondNumber)
{
    var firstNumberUltValue;
    var secondNumberUltValue;
    if(nbArg !== 4)
    {
        return false;
    }
    if (firstNumber < 0)
    {
        firstNumberUltValue = -firstNumber;
    }
    else
    {
        firstNumberUltValue = firstNumber;
    }
    if (secondNumber < 0)
    {
        secondNumberUltValue = -secondNumber;
    }
    else if (secondNumber > 0) 
    {
        secondNumberUltValue = secondNumber;
    }
    // Is the 1st arg a number?
    for (let i = 0; i < firstNumberUltValue.length; i++)
    {
        if (firstNumberUltValue[i].charCodeAt() < 48 || firstNumberUltValue[i].charCodeAt() > 57)
        {
            return false;
        }
    }
    // Is the 2nd arg a number?
    for (let i = 0; i < secondNumberUltValue.length; i++)
    {
        if (secondNumberUltValue[i].charCodeAt() < 48 || secondNumberUltValue[i].charCodeAt() > 57)
        {
            return false;
        }
    }
    if (+firstNumberUltValue < +secondNumberUltValue)
    {
        return false;
    }
}

function division(firstNumber, secondNumber)
{
    remainder = firstNumber % secondNumber;
    quotient = (firstNumber - (remainder)) / secondNumber;

    return "résultat: "+ quotient + "\n" + "reste: "+remainder;
}

if (validityCheck == false)
{
    console.log(errorMessage);
}
else
{
    console.log(division(firstNumber, secondNumber));
}



/* 2e Solution: un peu trop simple donc probablement pas autorisée dans l'exercice 

a = process.argv[2];
b = process.argv[3];
errorMessage = "erreur.";

quotient = (a-(a%b))/b
remainder = a%b

if(process.argv.length < 4 || process.argv.length > 4)
{
    console.log(errorMessage)
    return;
}

if (!isFinite(quotient) || !isFinite(remainder))
{
    console.log(errorMessage)
    return;
}

console.log(quotient);
console.log(remainder); */