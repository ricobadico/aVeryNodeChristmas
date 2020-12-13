// exports.christmastime = 

function getChristmastime(){
    // Get the year from today's date
    let today = new Date()
    let y = today.getFullYear();

    // Check to see if Christmas has passed this year, if so add 1 to year
    if (today.getMonth() == 11 && today.getDate() > 25)
        y += 1;
    // Provide christmas date 
    let nextChristmas = new Date("12/25/" + y);

    // Gets the millisecond difference between now and christmas
    let millisecDiff = nextChristmas.getTime() - today.getTime();
    // Pass this value to a remainder variable
    let remainder = millisecDiff;

    // Grab the number of whole days (1 day = 86400000 ms)
    let daysAmount = Math.floor(remainder/86400000);
    remainder = remainder%86400000;

    // Now the hours from what's left (1 hour = 3600000ms)
    let hoursAmount = Math.floor(remainder/3600000);
    remainder = remainder%3600000;

    // Now minutes
    let minutesAmount = Math.floor(remainder/60000);
    remainder = remainder%60000;

    // Finally seconds
    let secondsAmount = Math.floor(remainder/1000);

    return (`Only ${daysAmount} days, ${hoursAmount} hours, ${minutesAmount} minutes, and ${secondsAmount} seconds until Christmas!!!`)

}