const http = require('http');

const server = http.createServer((req, res)=> {
    res.write('welcome Apala Gupta');
    res.end();
})

server.listen(5000);