const http = require('http')

http.createServer((req, res) => {
    res.write('Hiya')
    res.end()
}).listen(5000, () => console.log('Server Running...'))