const path = require('path');
 // returns my platform separator specific
console.log(path.sep);

const fileName = path.join('/content' , 'subfolder' , 'test.txt');

console.log(fileName);
const base = path.basename(fileName);
console.log(base);
const absolute = path.resolve(__dirname , '/content' , 'subfolder' , 'test.txt');
console.log(absolute);
