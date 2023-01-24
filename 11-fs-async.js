const { readFile , writeFile} = require('fs');

console.log('start');

readFile('./lesson2/content/first.txt' , 'utf8' , (err,result)=> {
    if(err) {
        console.log(err);
        return;
    }

    const first = result;
    readFile('./lesson2/content/second.txt' , 'utf8' , (err , result)=> {
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./lesson2/content/result-async.txt' , `here is the result
        ${first} , ${second}`, (err , result)=> {
            if(err) {
            console.log(err);
            return;
            }
            console.log(result);
        })
        console.log('done with task');
        
    })
})

console.log('starting with task');