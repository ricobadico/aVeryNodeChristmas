// Array of greetings to pull from
const greetings = [
    "Tidings of Comfort and Joy",
    "Ho ho hello!",
    "Happy Holidays!",
    "Jingle all the way!",
    "Merry Christmas!"
];

exports.greet = function randomGreeting() {
    let randIndex= Math.floor(Math.random() * Math.floor(greetings.length));
    return greetings[randIndex];
}

