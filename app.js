const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const { greet } = require("./greet");
const childController = require("./controllers/childController");
const Child = require("./models/child");

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1/santaMongo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
const db = mongoose.connection;

// Bind connection to errorevent(to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Not sure what this does. path.join puts the slash in as separator
app.set("views", path.join(__dirname, "views"));

app.set("view engine", "pug");

app.use(express.static('public'));
app.use(express.static('scripts', { extensions: ".js"}))

app.listen(8000, () => {
    console.log("Server started on port 8000");
});

app.use(express.urlencoded({ extended: true }));

// Routes

// Home render. Takes a random greeting from greeting module and is injected through pug
app.get('/', (req, res) => {
    res.render("index", {greeting: `${greet()}` });
});

// About render
app.get('/about', (req, res) => {
    res.render("about");
});

// Contact render
app.get('/contact', (req, res) => {
    res.render("contact");
});

// Contact form inserted into Mongo DB. The callback is defined in the controller for Child objects
app.post('/contactPOST', childController.createChild);

// Thanks page render, redirected at end of contactPOST. 
// Id of newly created db entry is passed along to be used for find() function to get that entry
// This is a little roundabout, but demonstrates controllers that both insert into and pull from the db
app.get("/displayChildInThanks", (req, res) => {
    childController.getChildData(req, res, req.query.id);
});