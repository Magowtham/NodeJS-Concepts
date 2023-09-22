const os = require("os");
const path = require("path");
//logs the os name
console.log(os.type());
//logs the machine type
console.log(os.machine());
//logs the os hostname
console.log(os.hostname());
//logs the dir name including root path
console.log(__dirname);
//logs the file name including root path
console.log(__filename);
//logs the dir name including root path
console.log(path.dirname(__filename));
//creates a object that will consists all the  file information
console.log(path.parse(__filename));
//joins the paths
console.log(path.join(__dirname, "test"));
