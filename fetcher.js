const request = require("request");
const fs = require("fs");
const args = process.argv.slice(2);

const url = args[0];
const path = args[1];
// let fileSize = index.html.length;
// console.log(fileSize)

const writeInFile = (path, whatToWrite) => {
  fs.writeFile(path, whatToWrite, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`Downloaded and saved ${whatToWrite.length} bytes to ${path}`);
  });
};

request(url, (error, response, body) => {
  writeInFile(path, body);
});
