const { log } = require('console');
const fs = require('fs');

let filepath = __dirname + '/data.txt'

fs.writeFile(filepath, 'hello world!', (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("sab kuch badhiya");
    }
})