const fs = require('fs');

const a=100;

setImmediate(() => {
    console.log("setImmediate");
});

fs.readFile("./file2.txt", "utf8", () => {
    console.log("File Read call back");
});

setTimeout(() => {
    console.log("setTimeout: Timer expired");
}, 0);

function printA() {
    console.log("a = ", a);
};

printA();

console.log("Last line of the file");


// ---------Ouput----------
        // a =  100
        // Last line of the file
        // setTimeout: Timer expired
        // setImmediate
        // File Read call back