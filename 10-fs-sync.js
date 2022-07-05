//sync, blocking

const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync(`${__dirname}/folder/first.txt`, 'utf8');
const second = readFileSync(`${__dirname}/folder/second.txt`, 'utf8');

console.log(first, ",", second);


writeFileSync('./folder/new-file.txt', 'New File', {
    flag: 'a' //flag: a appends to file
});
