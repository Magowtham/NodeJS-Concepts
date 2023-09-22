//node core file system module
const fs = require("fs");
const path = require("path");

fs.readFile("../Test-Files/test.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
//one way by passing utf8 text format
fs.readFile("../Test-Files/test.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

//to acccess the outside files from the current dir
fs.readFile(path.resolve("../Test-Files/test.txt"), (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

process.on("uncaughtException", (err) => {
  console.error(err.message);
});
