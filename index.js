const http = require('http')
const modulku = require("./Moduleku")

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'})
    res.write(req.url)
    res.end()
}).listen(3000)

console.log("http://localhost:3000");