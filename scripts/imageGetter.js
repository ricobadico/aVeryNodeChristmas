const gis = require("g-i-s");

// This code is boilerplate g-i-s, with some additions from me to return just the url of the first entry
// The idea is to "I'm feeling lucky" an image based on the "gift" keyword stored in each Child Mongo document 

gis('cats', logResults);

function logResults(error, results) {
    if (error) {
      console.log(error);
    }
    else {
      return results[0].url;
    }
  }