// This script displays every arguments vertically

args = process.argv;
for (i = 2; i < args.length; i++)
{
	console.log(args[i]);
}
