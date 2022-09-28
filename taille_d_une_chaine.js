chaine = process.argv[2];
nbArg = process.argv.length;
errorMessage = "erreur.";
tailleChaine = 0;

if (nbArg < 3 || nbArg > 3)
{
    console.log(errorMessage);
    return;
}
while (isFinite(chaine.charCodeAt(tailleChaine)))
{
    if (chaine.charCodeAt(tailleChaine) > 47 && chaine.charCodeAt(tailleChaine) < 58 )
    {
        console.log(errorMessage);
        return;
    }
    tailleChaine++; 
}

console.log(tailleChaine);