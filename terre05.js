// This script returns if a number is whether even or odd

number = process.argv[2];
argList = process.argv;
nbArg = argList.length;
errorMessage = "Tu ne me la mettras pas à l'envers.";

function validityCheck(argList)
{ 
// Too many args?
    if (nbArg !== 3)
    {
        return false;
    }
    // Negative number?
    if (number < 0)
    {
        number = -(number);
    }
    // All the characters valid ?
    for (i = 0; i < number.length; i++)
    {
        if(number[i].charCodeAt() < 47 || number[i].charCodeAt() > 58)
        {
            return false;
        }
    }
}

function evenOrOdd(number)
{
    if(number % 2 == 0)
    {
        return "pair";
    }
    else
    {
        return "impair";
    }
}

if (validityCheck(argList) == false)
{
    console.log(errorMessage);
}
else
{
    console.log(evenOrOdd(number));
}