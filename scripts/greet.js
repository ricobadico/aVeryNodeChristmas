// Array of greetings to pull from
const greetings = [
    "Ho Ho Ho!",
    "Holly Jolly Hello!",
    "Happy Holidays!",
    "Merry Christmas!",
    "Tidings of Comfort and Joy"
];

exports.greet = function randomGreeting() {
    let randIndex= Math.floor(Math.random() * Math.floor(greetings.length));
    return greetings[randIndex];
}