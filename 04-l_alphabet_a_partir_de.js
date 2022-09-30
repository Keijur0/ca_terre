// This script will display the rest of the alphabet, starting from the letter passed in argument

args = process.argv;
firstArg = args[2].toLowerCase();
countArgs = args.length;
countArgsLetters = firstArg.length;
result = firstArg;
errorMessage = "Please try again using only 1 alphabet letter as an argument.";

function validityCheck(args)
{
	// Counting arguments
	if(countArgs > 3)
	{
		return false;
	}
	// Checking if the argument is only 1 character
	else if(countArgsLetters>=2)
	{
		return false;
	}
	// Checking if the argument is a letter
	if (firstArg.charCodeAt() < 97 || firstArg.charCodeAt() > 122)
	{
		return false;
	}
}

function restOfAlphabet(firstArg)
{
	for(i=firstArg.charCodeAt()+1; i <= 122; i++)
	{
		result = result + String.fromCharCode(i);
	}
	return result;
}



if (validityCheck(args) == false)
{
	console.log(errorMessage);
}
else
{
	console.log(restOfAlphabet(firstArg));
}


