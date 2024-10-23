const fs = require('fs');

const a = 100;

setImmediate(() => console.log("setImmediate"));

Promise.resolve(() => console.log("Promise resolved"));

fs.readFile("./file2.txt", "utf8", () => {
    console.log("File Read call back")
});

setTimeout(() => console.log("Timer expired"), 0);

process.nextTick(() => console.log("Process.nextTick"));

function printA() {
    console.log("a = ", a);
};

printA();

console.log("Last line of the file");

// Output:
        // a =  100
        // Last line of the file
        // Process.nextTick
        // Timer expired
        // setImmediate
        // File Read call back