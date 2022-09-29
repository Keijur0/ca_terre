// This script takes a time in 24-h format and converts it to a 12-h time format

nbArg = process.argv.length;
time = process.argv[2];
errorMessageFormat = "Erreur. Le format correct est: HH:MM ou H:MM. Où H est un entier entre 0 et 23, et M est un entier entre 0 et 59.";
var hour;
var minute;
var timeSuffix;

if (nbArg < 3 || nbArg > 3)
{
    console.log("Erreur. Entrez un argument.");
    return;
}

if (time.length < 4 || time.length > 5)
{
    console.log(errorMessageFormat);
    return;
}
else if (time[1] !== ":" && time[2] !== ":")
{    
    console.log(errorMessageFormat);
    return;
}
else
{
    splitTime = time.split(":");
    hour = splitTime[0];
    minute = splitTime[1];
}

for(let i = 0; i < hour.length; i++)
{
    if (hour.charCodeAt(i) < 48 || hour.charCodeAt(i) > 57)
    {
        console.log(errorMessageFormat);
        return;
    }
}
for(let i = 0; i < minute.length; i++)
{
    if(minute.charCodeAt(i) < 48 || minute.charCodeAt(i) > 57)
    {
        console.log(errorMessageFormat);
        return;
    }
}

if (+hour < 0 || +hour > 23)
{
    console.log(errorMessageFormat+"5");
    return;
}
else if (+minute < 0 || +minute > 59)
{
    console.log(errorMessageFormat+"6")
    return;
}
else if (+hour < 12)
{
    timeSuffix = "AM";
}
else if (+hour > 12)
{
    timeSuffix = "PM";
    hour = hour - 12;
}
else if (+hour == 12)
{
    timeSuffix = "PM";
}
console.log(hour + ":" +minute+timeSuffix);