const { readFileSync , writeFileSync} = require('fs');

console.log('start');
const first = readFileSync('./lesson2/content/first.txt' , 'utf8');

const second  = readFileSync('./lesson2/content/second.txt' , 'utf8');

console.log(first, second);
//it will automatically create a file if its not there.
writeFileSync('./lesson2/content/result-sync.txt' , `here is the result : ${first} , ${second}` , {flag : 'a'});
console.log('done with task');
//flag 'a' is for append, overwrite is the default 

console.log('starting with task');