var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World") + chalk.magenta("testing") + chalk.bgWhite("YOLO");
console.log(message);