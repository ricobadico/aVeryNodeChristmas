const mongoose = require("mongoose");
const uniqueValidator=require("mongoose-unique-validator");

// Define schema for child collection
const childSchema = new mongoose.Schema({
    name: { type: String, required: "Santa needs your name, pal!" },
    email: { type: String, unique: "We have that email, get your own!",
        validate: {
            validator:function(v) {
                return /^[a-z0-9._%+-]+@([a-z0-9-]+\.)+[a-z]{2,}$/i.test(v);
            } ,message: props => `${props.value} is not a valid email.` }},
    age: { type: Number, min: 0},
    job: { type: String, required: "You need to tell Santa what you do!", lowercase: true  },
    descriptor: { type: String, required: "Come on, describe yourself!", lowercase: true },
    gift: { type: String, required: "Name a gift or Santa will leave you nothing!", lowercase: true },
    naughtyOrNice: { type: String, required: "No room for moral relativism. Are you good or aren't you?"}
});

childSchema.plugin(uniqueValidator);

// Use that schema to define the model for the child collection
const Child = mongoose.model('Child', childSchema);
module.exports = Child;