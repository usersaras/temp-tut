//async, aka non blocking

const { readFile, writeFile } = require('fs');

const first = readFile(`${__dirname}/folder/first.txt`, 'utf8',(err, result) => {
    if(err){
        console.log("Err", err)
        return; //breaks func execution
    }
    console.log(result)

    readFile(`${__dirname}/folder/second.txt`, 'utf8', (err, result) => {
        if(err){
            console.log("Err", err)
            return; //breaks func execution
        }
        console.log(result)

        writeFile(`${__dirname}/folder/new-async-file.txt`, 'New File', (err, result) => {
            if(err){
                console.log(err);
                return;
            }
            console.log("New File Created");
        })
    })

    
})


