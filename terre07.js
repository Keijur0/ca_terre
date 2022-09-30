// This script takes a string as argument and returns it backwards

nbArg = process.argv.length;
chaine = process.argv[2];
chaineInverse = "";
lastCharIndex = "";
errorMessage = "Erreur.";

function validityCheck(chaine)
{
    if(nbArg !== 3)
    {
        return false;
    }
    else
    {
        lastCharIndex = chaine.length - 1;
        return lastCharIndex;
    }
}
function invertString(chaine)
{
    for (i = 0; i <= lastCharIndex; i++)
    {
        chaineInverse = chaineInverse + chaine[lastCharIndex-i];
    } 
    return chaineInverse;
}

if (validityCheck(chaine) == false)
{
    console.log(errorMessage);
}
else
{
    console.log(invertString(chaine));
}






