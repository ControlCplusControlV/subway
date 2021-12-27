const { ethers } = require("ethers");
const path = require('path')
const fs = require("fs");

let artifact = JSON.parse(fs.readFileSync("../build/Sandwich.json"))


process.stdout.write(ethers.utils.defaultAbiCoder.encode(["bytes"], [artifact.bytecode]))