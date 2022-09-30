// This scripts takes 3 integers as arguments and returns the middle value

nb1 = process.argv[2];
nb2 = process.argv[3];
nb3 = process.argv[4];
nbArg = process.argv.length;
errorMessage = "erreur.";

function validityCheck(number)
{
    if (+number < 0)
    {
        var number = -number;
    }
    for (let i = 0; i < number.length; i++)
    {
        if (number.charCodeAt(i) < 48 || number.charCodeAt(i) > 57)
        {
            console.log(errorMessage+"1");
            return false;
        }
    }
    if (nb1 == nb2 == nb3 || nb1 == nb2 || nb1 == nb3 || nb1 == nb2 || nb2 == nb3)
    {
        console.log(errorMessage+"2");
        return false;
    }
}

function findTheMiddle(nb1, nb2, nb3)
{
    if ((nb2 < nb1 && nb1 < nb3) || (nb2 > nb1 && nb1 > nb3))
    {
        return nb1;
    }
    else if ((nb1 < nb2 && nb2 < nb3) || (nb1 > nb2 && nb2 > nb3))
    {
        return nb2;
    }
    else
    {
        return nb3;
    }
}

if (+nbArg !== 5)
{
    console.log(errorMessage+"3");
    return;
}
else if (validityCheck(nb1) == false)
{
    return;
}
else if (validityCheck(nb2) == false)
{
    return;
}
else if (validityCheck(nb3) == false)
{
    return;
}
else
{
    console.log(findTheMiddle(nb1, nb2, nb3));
}

