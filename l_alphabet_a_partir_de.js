// This script will display the rest of the alphabet, starting from the letter passed in argument

args = process.argv;
firstArg = args[2].toLowerCase();
countArgs = args.length;
countArgsLetters = firstArg.length;
result = firstArg;
isALetter = false;

// Checking how many arguments have been sent
if(countArgs > 3)
{
	console.log("Please try again, inserting only 1 argument (alphabet letter).")
}
// Checking if the argument is only 1 character
else if(countArgsLetters>=2)
{
	console.log("Please try again using only 1 alphabet letter as an argument.")
}
// Checking if the argument is a letter
for(i = 97; i <= 122; i++)
{
	if(firstArg == String.fromCharCode(i))
	{
		isALetter = true;
	}
}
if(isALetter == false)
	{
		console.log("This is not an alphabet letter. Please try again.");
	}

// Building the result
for(i=firstArg.charCodeAt()+1; i <= 122; i++)
{
	result = result + String.fromCharCode(i);
}
console.log(result);