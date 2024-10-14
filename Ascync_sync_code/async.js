const fs = require("fs");
const https = require("https");

console.log("Hello World");

var a = 102354654;
var b = 123564;

https.get("https://dummyjson.com/products/1", (res) => {
    console.log("Fetch Data Successfully");
});

setTimeout(() => {
    console.log("setTimeout called after 5 sec");
}, 5000);

fs.readFile("./file.txt", "utf8", (err, data) => {
    console.log("File Data: ", data);
});

function multiplyFn(x, y) {
    const results = a * b;
    return results;
}