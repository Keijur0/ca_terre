// This script displays the alphabet

const Alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
i = 0;
var result = "";

function sayAlphabet(Alphabet)
{
	for (let i = 0; i < Alphabet.length; i++)
	{
		result = result + Alphabet[i];
	}
	return result;
}
console.log(sayAlphabet(Alphabet));