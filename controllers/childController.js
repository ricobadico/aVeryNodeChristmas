const Child = require("../models/child");
const gis = require("g-i-s"); //Used for grabbing an image in getchildData render

// Function for inserting a new child's data into the database
exports.createChild = (req, res) => {

    // Assign a variable to a new Child document, using data passed from form
    const child =  new Child(req.body);
    
    // Insert into db with .save()
    child.save((err, result)  => {
        if (err) {

            // Instead of an array like the example, I'm creating a simple error object with errorname keys and message values
            // This is so I can pair common key names with named inputs on the form
            const errorObject = {};
            const errorKeys = Object.keys(err.errors);
            errorKeys.forEach(key => {
                errorObject[key] = err.errors[key].message
            });
            console.log(errorObject)

            // re-render the contact page with that error data informing the template
            return res.render("contact", { errors: errorObject});
        }

        // In the event we don't have any errors, we redirect to the route that will start rendering the Thank you page
        // We can grab the newly minted id from the result variable the .save() came back with, and pass it with the req via a query
        const newEntry = result._id;
        res.redirect(`/displayChildInThanks?id=${newEntry}`);
    });
};

// Grabs child data based on a given id. In the current app's case, that id corresponds to the child document just created
exports.getChildData = (req, res, id)=> {

    // We use Collection.find({ filter }, callback) to get just the one child document
    Child.find({ _id: id}, (err, child) => {

        // For some added fun, we get an image based on the document's "gift" value
        // This code is modified from the g-i-s module boilerplate, with some additions from me to return just the url of the first entry
        // The idea is to "I'm feeling lucky" an image based on the "gift" keyword stored in each Child Mongo document 
        gis(child[0].gift, (error, results) => {
            if (error) {
                console.log(error);
            }
            else {
                // We then render the thanks page with the data from that .find(). 
                // Note we use child[0] since find() returns an array (in our case, always with a single entry)
                // We do the render call within the callback of the image getter, so that we only render once it has successfully returned with data
                res.render("thanks", { currentChild: child[0], giftImageSrc: results[0].url });
            }
        })
    });
};