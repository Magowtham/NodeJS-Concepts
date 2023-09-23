const fs = require("fs");
const path = require("path");

//creating a file read stream
const readStream = fs.createReadStream(path.resolve("../Test-Files/test.txt"), {
  encoding: "utf8",
});

//data event listening
readStream.on("data", (data) => {
  console.log(data);
});
