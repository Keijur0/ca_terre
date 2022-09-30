// This scripts takes a number as arugment and returns its square root

nbArg = process.argv.length;
number = process.argv[2];
errorMessage = "erreur.";

function validityCheck(number)
{
    if (nbArg !== 3)
    {
        return false;
    }
    else if (number < 0)
    {
        return false;
    }
    for (i = 0; i < number.length; i++ )
    {
        if (number.charCodeAt(i) < 48 || number.charCodeAt(i) > 57)
        {
            console.log(errorMessage);
            return false;
        }
    }
}

function sqrt(number)
{
    temp = (number/2);
    do
    {
        result = temp;
        temp = (result + (number / result)) / 2;
    }
    while (result !== temp);

    return result;
}

if (validityCheck(number) == false)
{
    console.log(errorMessage)
}
else
{
    console.log(sqrt(number));
}