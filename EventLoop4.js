const fs = require('fs');

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer ecpired"), 0);

Promise.resolve(() => console.log("Promise"));

fs.readFile("./file2.txt", "utf-8", () => {
    console.log("File Read call back");
})

process.nextTick(() => {
    process.nextTick(() => console.log("Inner nextTick"));
    console.log("Outer nextTick");
});

console.log("Last line of the file");

// Output:
// Last line of the file
// Outer nextTick
// Inner nextTick
// Timer ecpired
// setImmediate
// File Read call back