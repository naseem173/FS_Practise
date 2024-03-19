const fs = require('fs/promises'et);

let filepath = __dirname + '/data.json'

let data = {
    text: 'Hello world',
    date: '18 March 2024'
}

fs.writeFile(filepath, JSON.stringify(data))
    .then(()=> {
        console.log("sab badhiya")
    })
        .catch(err => {
        console.log(err);
    })
