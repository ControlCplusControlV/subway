const fs = require("fs");

let artifact = JSON.parse(fs.readFileSync("../build/Sandwich.json"))

console.log(artifact.bytecode)