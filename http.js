const http = require('http');

const server = http.createServer((req, res)=> {
   if(req.url === '/') {
    res.end('welcome home Apala. you are genius & appreciated & rich');
}

    if(req.url === '/about') {
     res.end('this is about page')
    }
     
    res.end( ` <h1> oops </h1>
             <a href='/' > back to home </a> `)
})

server.listen(5000);