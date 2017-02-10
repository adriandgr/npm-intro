var chalk = require("chalk");

var message = chalk.cyan.dim("Hello World");
var message2 = chalk.cyan("\nHello World");
var message3 = chalk.cyan.bold("\nHello World");
console.log(message, message2, message3);