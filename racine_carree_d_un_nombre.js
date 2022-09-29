// This scripts takes a number as arugment and returns its square root

number = process.argv[2];
errorMessage = "erreur.";
temp = (number/2);


if (process.argv.length < 3 || process.argv.length > 3)
{
    console.log(errorMessage);
    return;
}

for (i = 0; i < number.length; i++ )
{
    if (number.charCodeAt(i) < 48 || number.charCodeAt(i) > 57)
    {
        console.log(errorMessage);
        return;
    }
}

do
{
    result = temp;
    temp = (result + (number / result)) / 2;
}
while (result !== temp);

    
console.log(result);
