const fs = require("fs");

/**
 * Reading the file
 */
fs.readFile("/sandbox/myfile.txt", (err, data) => {
  if (!err) {
    console.log(data); // will print out the buffer
    console.log(data.toString()); // will print out the readable text
    // console.log(data.toJSON()); // will print out the buffer data as a json
  } else {
    console.error(err);
  }
});

/**
 * Reading the file with the encoding
 */
fs.readFile("/sandbox/myfile.txt", "utf-8", (err, data) => {
  if (!err) {
    console.log(data); // will print out the data with encoding which is readable text
  } else {
    console.error(err);
  }
});

/**
 * Using buffer bytelength
 */
const myString = "Hello, World!";

console.log(myString);
console.log(myString.length);
console.log(Buffer.byteLength(myString, "utf-8")); // byte length will be same

const mySpecialString = "\u00bd + \u00bc = \u00be";

console.log(mySpecialString);
console.log(mySpecialString.length);
console.log(Buffer.byteLength(mySpecialString, "utf-8")); // The above string contains characters that take more than usual 1 byte space

/**
 * Writing to buffers
 */
const smallBuffer = new Buffer(5);
smallBuffer.write("Hello, World!");
console.log(smallBuffer.toString()); // will not be able to store the entire string

smallBuffer.write("NewText", 2);
console.log(smallBuffer.toString());
smallBuffer.write("xxxx", 2, 1);
console.log(smallBuffer.toString());
smallBuffer.write("xxxx", 2, 1, "utf-8");
console.log(smallBuffer.toString());

/**
 * Comparing Buffers
 */
const buff1 = new Buffer("1234");
const buff2 = new Buffer("0123");
const buff3 = new Buffer("1234");

console.log(buff1.compare(buff2)); // returns 1 since they are not equal
console.log(buff1.compare(buff3)); // returns 0 since they are equal
console.log(buff1.equals(buff2));
console.log(buff1.equals(buff3));

// Sorting arrays of buffer with compare
const myArray = [buff1, buff2];
console.log(myArray.sort(Buffer.compare));

/**
 * Slicing Buffers
 */
const bufferToSlice = new Buffer("Hello, World!");
const slicedBuffer = bufferToSlice.slice(0, 5);
console.log(slicedBuffer.toString());
slicedBuffer.write("---"); // will affect original since slice returns a reference to original
console.log(slicedBuffer.toString());
console.log(bufferToSlice.toString());
