
const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("Welcome to our home page");
    }
    if(req.url === '/about'){
        res.end("Here is our short story")
    }
    res.end(`
    <h1> Oops ! </h1>
    <p> We cant seem to find the page youre looking for</p>
    <a href="/"> back home</a>
    `)

})

server.listen(5000)
//localhost:5000 in browser brings us to the page