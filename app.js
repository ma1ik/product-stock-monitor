import readline from "readline";
import fs from "fs";


const myInterface = readline.createInterface({
    input: fs.createReadStream('shoppingList.txt')
});

const fileStream = fs.createWriteStream('shoppingResults.txt');
const transformData = (line) => {
    fileStream.write(`They were out of: ${line}\n`);
};

myInterface.on('line', transformData);