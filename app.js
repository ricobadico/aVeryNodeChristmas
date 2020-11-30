const express = require("express");

const app = express();
const port = 8000;

// Using Handlebars as template engine
const handlebars = require("express-handlebars");
app.set('view engine', 'handlebars');

//Sets handlebars configurations (we will go through them later on)
app.engine('handlebars', handlebars({ 
    extname: "handlebars",
    defaultLayout: "",
    layoutsDir: __dirname + '/views/layouts',
    }));

// Allows for parsing request body in the form x-wwww-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//  Directs all style references to the styles directory
app.use(express.static("styles"));
app.use(express.static("public"));

const agencyList = {Agencies: [
    { 
        agencyName: "Calgary Crowfoot Branch",
        agencyEmail: "yyc@travelexperts.ca",
        agencyAddress: "8665 Nose Hill Dr NW Calgary, AB T3G 5T3",
        agencyNumber: "(403) 992-7374",
        agents: [
            {
                name: "Beth",
                title: "Travel Consultant",
                info: "Favourite Destination Visted: Moscow, Russia",
                phoneNumber: "(403) 123 - 4567"
            },
            {
                name: "Townes",
                title: "Travel Consultant",
                info: "Favourite Destination Visted: Las Vegas, Nevada",
                phoneNumber: "(403) 765 - 4321"
            },
            {
                name: "Benny",
                title: "Casual Chess Player",
                info: "Favourite Destination Visted: New York, New York",
                phoneNumber: "(403) 987 - 6543"
            },
        ]
    },
    { 
        agencyName: "Other Branch",
        agencyEmail: "yyc@travelexperts.ca",
        agencyAddress: "8665 Nose Hill Dr NW Calgary, AB T3G 5T3",
        agencyNumber: "(403) 992-7374",
        agents: [
            {
                name: "Townes",
                title: "Travel Consultant",
                info: "Favourite Destination Visted: Las Vegas, Nevada",
                phoneNumber: "(403) 765 - 4321"
            },
            {
                name: "Benny",
                title: "Casual Chess Player",
                info: "Favourite Destination Visted: New York, New York",
                phoneNumber: "(403) 987 - 6543"
            },
            {
                name: "Borgov",
                title: "Travel Consultant",
                info: "Favourite Destination Visted: Paris, France",
                phoneNumber: "(403) 345 - 6789"
            }
        ]
    },
]};



app.get("/contacts", (req,res) => {
    res.render('contact.handlebars', agencyList);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/contact.html");
})

app.post("/postcustomer", (req,res) => {
    console.log(req.body);
    res.send("Received")
})

// Default case to go to 404 page if no valid path given
app.use((req, res) => {
    res.status(404).sendFile(__dirname + "/views/404.html");
});

// Listen on given port
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server online on port ${port}`);
});