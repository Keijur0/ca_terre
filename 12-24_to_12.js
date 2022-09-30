// This script takes a time in 24-h format and converts it to a 12-h time format

nbArg = process.argv.length;
time = process.argv[2];
errorMessageFormat = "Erreur. Le format correct est: HH:MM ou H:MM. Où H est un entier entre 0 et 23, et M est un entier entre 0 et 59.";
var hour;
var minute;
var timeSuffix;

function validityCheck(time)
{
    if (nbArg !== 3)
    {
        return false;
    }

    if (time.length < 4 || time.length > 5)
    {
        return false;
    }
    else if (time[1] !== ":" && time[2] !== ":")
    {    
        return false;
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
            return false;
        }
    }
    for(let i = 0; i < minute.length; i++)
    {
        if(minute.charCodeAt(i) < 48 || minute.charCodeAt(i) > 57)
        {
            return false;
        }
    }
    if (+hour < 0 || +hour > 23)
    {
        return false;
    }
    else if (+minute < 0 || +minute > 59)
    {
        return false;
    }

}
function timeConverter(time)
{
    if (+hour < 12)
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
    return hour + ":" +minute+timeSuffix;
}

if (validityCheck(time) == false)
{
    console.log(errorMessageFormat);
}
else
{
    console.log(timeConverter(time));
}