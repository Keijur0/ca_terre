// This script takes a string as argument and returns its size

chaine = process.argv[2];
nbArg = process.argv.length;
errorMessage = "erreur.";
tailleChaine = 0;

function validityCheck(chaine)
{
    if (nbArg < 3 || nbArg > 3)
    {
        return false;
    }
while (isFinite(chaine.charCodeAt(tailleChaine)))
    {
        if (chaine.charCodeAt(tailleChaine) > 47 && chaine.charCodeAt(tailleChaine) < 58 )
        {
            return false;
        }
        tailleChaine++; 
    }
    return tailleChaine;
}

if (validityCheck(chaine) == false)
{
    console.log(errorMessage);
}
else
{
    console.log(validityCheck(chaine));
}