//destructuring all the function form the imported object form the mathjs module
//we are not dealing with core modules so we have to use './' inorder to import the module present in the same dir
//if the dir in other dir we have to specify the actual module file path
const { add, sub, multi, div } = require("./math");

console.log(add(1, 2));
console.log(sub(2, 1));
console.log(multi(4, 3));
console.log(div(8, 3));
