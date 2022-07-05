const path = require('path');

const filePath = (path.join(__dirname, './folder', 'folder', 'test.txt'));

console.log(filePath);

//path.basename(args)returns base
console.log(path.basename(filePath));

console.log(path.resolve('folder', 'subfolder', 'test.txt'));

