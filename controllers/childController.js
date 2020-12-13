const ChildModel = require("../models/child");
const mongoose = require("mongoose");


exports.createChild = (req, res) => {

    console.log(req.body);

    const child =  new ChildModel(req.body);
    
    child.save((err, result)  => {
        if (err) {
            // Instead of an array, creating a simple error object with errorname keys and message values
            const errorObject = {};
            const errorKeys = Object.keys(err.errors);
            errorKeys.forEach(key => {
                errorObject[key] = err.errors[key].message
            });
            console.log(errorObject)
            return res.render("contact", {
                errors: errorObject
            });
        }

        const newEntry = result._id;
        res.redirect("/displayChildInThanks", newEntry);
    });
};