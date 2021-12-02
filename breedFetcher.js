const request = require("request");
const args = process.argv.slice(2);

const catName = args[0];

request('https://api.thecatapi.com/v1/breeds/search?q=' + catName, function(error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const data = JSON.parse(body);
    if (!data.length) {
      console.log("Breed not found");
    } else {
      console.log(data);
    }
  }
});