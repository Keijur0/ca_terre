errorMessage = "erreur.";
argList = process.argv;
nbArg = process.argv.length;

function validityCheck(argList)
{
    if (nbArg < 4)
    {
        console.log(errorMessage);
        return false;
    }
    else
    {
        for (let i = 2; i < nbArg; i++)
        {
            if (argList[i] < 0)
                {
                    argList[i] = -argList[i];
                }
            for (let j = 0; j < argList[i].length; j++)
            {
                if (argList[i].charCodeAt(j) < 48 || argList[i].charCodeAt(j) > 57)
                {
                    console.log(errorMessage);
                    return false;
                }
            }
        }
    }
}

function isSorted(argList)
{
    for(let i = 2; i < nbArg-1; i++)
    {
        if (+argList[i] >= +argList[i+1])
        {
            console.log("Pas triée !");
            return false;
        }
    }
}

if (validityCheck(argList) == false)
{
    return;
}
else if (isSorted(argList) == false)
{
    return;
}
else
{
    console.log("Triée !");
    return;
}