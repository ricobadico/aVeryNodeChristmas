const express = require("express");
const app = express();
// Magically, we don't need to require pug
const path = require("path");
const { greet } = require("./greet");

// Not sure what this does. path.join puts the slash in as separator
app.set("views", path.join(__dirname, "views"));

app.set("view engine", "pug");

app.listen(8000, () => {
    console.log("Server started on port 8000");
});

app.use(express.urlencoded({ extended: true }));

// Magically, pug knows to look into views and get the pug file without directory or extension
app.get('/pug', (req, res) => {
    res.render("index", {greeting: `${greet()}` });
})