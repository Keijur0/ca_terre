chaine = process.argv[2];
chaineInverse = "";
errorMessage = "Erreur.";


if(process.argv.length < 3 || process.argv.length > 3)
{
    console.log(errorMessage);
    return;
}
lastCharAddr = chaine.length - 1;

for (i = 0; i <= lastCharAddr; i++)
{
    chaineInverse = chaineInverse + chaine[lastCharAddr-i];
} 

console.log(chaineInverse);






