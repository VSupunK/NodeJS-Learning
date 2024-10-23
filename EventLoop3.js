const fs =require('fs');
const { setTimeout } = require('timers');

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer ecpired"), 0);

Promise.resolve(() => console.log("Promise"));
Promise.resolve("Promise").then(console.log);

fs.readFile("./file2.txt", "utf-8", () => {
    setTimeout(() => console.log("File Read call back 2"), 0);

    process.nextTick(() => console.log("Process.nextTick 2"));

    setImmediate(() => console.log("setImmediate 2"));

    console.log("File Read call back 1");
});

process.nextTick(() => console.log("Process.nextTick 1"));

console.log("Last line of the file");

// Output:
// Last line of the file
// Process.nextTick 1
// Timer ecpired
// setImmediate
// File Read call back 1
// Process.nextTick 2
// setImmediate 2
// File Read call back 2