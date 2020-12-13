const gis = require("g-i-s");

gis('cats', logResults);

function logResults(error, results) {
    if (error) {
      console.log(error);
    }
    else {
      console.log(JSON.stringify(results[0], null, '  '));
    }
  }