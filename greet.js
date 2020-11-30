// Array of greetings to pull from
const greetings = [
    "Hello.",
    "Good day to you!",
    "Welcome, friend.",
    "Prepare yourself for a brand new web browsing experience.",
    "Oh hi! Didn't see you there."
];

exports.greet = function randomGreeting() {
    let randIndex= Math.floor(Math.random() * Math.floor(greetings.length));
    return greetings[randIndex];
}

