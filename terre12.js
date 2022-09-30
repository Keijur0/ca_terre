time = process.argv[2];
tempSuffix = process.argv[3];
errorMessageFormat = "Erreur. Le format correct est: HH:MM ou H:MM suivi de AM ou PM. MM doit être entre 0 et 59. Si AM: HH doit être entre 0 et 11, si PM: HH doit être entre 1 et 12.";
nbArg = process.argv.length;
var hour;
var minute;

function validityCheck(time)
{
    // Accepting if there is a space between the time and AM/PM
    if (nbArg < 3 || nbArg > 4)
    {
        return false;
    }
    // Merging the 2nd argument with the 1st one and formatting its result
    if (nbArg == 4)
    {
        time = time + tempSuffix;
        time = time.toUpperCase();
        time = time.replace(/\s+/g, "");
    }
    else
    {
        time = time.toUpperCase();
        time = time.replace(/\s+/g, "");
    }
    // Does the argument look like a 12-hour time format?
    if (time.length < 6 || time.length > 7 || !time.endsWith("AM") && !time.endsWith("PM"))
    {
        return false;
    }

    // X:YYZZ format
    else if (time.length == 6)
    {
        if (time[1] !== ":")
        {
            return false;
        }
        else
        {
            hour = time[0];
            minute = time[2] + time[3];
            tempSuffix = time[4] + time[5];
        }
        if(hour.charCodeAt() < 48 || hour.charCodeAt() > 57)
            {
                return false;
            }
        else
        {
            for(let i = 0; i < minute.length; i++)
            {
                if(minute[i].charCodeAt() < 48 || minute[i].charCodeAt() > 57)
                {
                    return false;
                }
            }
        }
    }
    // XX:YYZZ format
    else
    {
        if (time[2] !== ":")
        {
            return false;
        }
        else
        {
            hour = time[0] + time[1];
            minute = time[3] + time[4];
            tempSuffix = time[5] + time[6];
        
            for (let i = 0; i < hour.length; i++)
            {
                if(hour[i].charCodeAt() < 48 || hour[i].charCodeAt() > 58 || minute[i].charCodeAt() < 48 || hour[i].charCodeAt() > 57)
                {
                    return false;
                }
            }
        }
    }
    // Is the time in 12-hour format actually valid? (handling exceptions)
    if ((+hour < 0 || +hour > 12) || (+hour == 0 && tempSuffix == "PM") || (+hour == 12 && tempSuffix == "AM"))
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
    if (tempSuffix == "PM" && +hour !== 12)
    {
        hour = +hour + 12;
    }
    finalTime = hour + ":" + minute;
    return finalTime;
}

if (validityCheck(time) == false)
{
    console.log(errorMessageFormat);
}
else
{
    console.log(timeConverter(time));
}
