const fs = require('fs');
const request = require('request');
const args = process.argv.slice(2);

request(args[0], (error, response, body) => {
  if (error !== null) throw error;
  if (response.statusCode === 200) {
    fs.writeFile(args[1], body, (err) => {
      if (err) throw (err);
      console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}`);
    });
  } else {
    console.log(`${response.statusCode} error code. Check the if URL, ${args[0]} is valid!`);
  }
});