// This script passes an argument in and returns if it is a prime number or not

number = process.argv[2];
errorMessage = "erreur.";
factorList = [];

if (process.argv.length < 3 || process.argv.length > 3)
{
    console.log(errorMessage);
    return;
}

for (let i = 0; i < number.length; i++)
{
    if (number.charCodeAt(i) < 48 || number.charCodeAt(i) > 57)
    {
        console.log(errorMessage);
        return;
    }
}

for (let i = 1; i <= +number; i++)
{
    if (Number.isInteger(+(number)/i))
    {
        factorList.push(i);
    }

}

if (factorList.length == 2)
{
    console.log("Oui, " + number + " est un nombre premier.");
}
else
{
    console.log("Non, " + number + " n'est pas un nombre premier");
}