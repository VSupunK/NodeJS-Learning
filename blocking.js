const crypto = require('node:crypto'); //we can use this as ('crypto')

console.log("Hello World");

var a = 102354654;
var b = 123564;

// pbkdf2Sync - Password-Based Key Derivation Function 2 Sync

// Synchronous function - WILL BLOCK THE MAIN THREAD - DON'T USE IT
crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512");
console.log("1st Hashing Done");

setTimeout(() => {
    console.log("Call me right now");
}, 0); // It will only be called after called once stack main thread is empty 

// Asynchronous function - NON-BLOCKING
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
    console.log("2nd Hashing Done");
});

function multiplyFn(x, y) {
    const results = a * b;
    return results;
}

c = multiplyFn(a, b);

console.log("Multiplication of a and b is: ", c);