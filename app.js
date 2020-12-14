const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const { greet } = require("./greet");
const childController = require("./controllers/childController");
const ChildModel = require("./models/child");

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
app.get('/', (req, res) => {
    res.render("index", {greeting: `${greet()}`,  });
});

app.get('/contact', (req, res) => {
    res.render("contact");
});

app.get('/about', (req, res) => {
    res.render("about");
});

app.post('/contactPOST', childController.createChild);

app.get("/displayChildInThanks", (req, res) => {
    console.log(req.query);

    children.find().toArray((err, items) => {
        console.log(items)
    })
    // res.render("thanks");
})