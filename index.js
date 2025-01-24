const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req,res) => {
    //The commented out section is a tutorial example but not used in real practice.
   
    // //Check the URl
    // if(req.url === '/'){
    //     //If URL is / read the index.html file in public folder
    //     fs.readFile(
    //         path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //             //Check for an error and throw error if true
    //             if(err) throw(err)
    //             //Set status and content type
    //             res.writeHead(200, {'Content-Type': 'text/html'})
    //             //Serves Page
    //             res.end(content);
    //     })  
    // }
    // if(req.url === '/about'){
    //     //If URL is /about read the about.html file in public folder
    //     fs.readFile(
    //         path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //             //Check for an error and throw error if true
    //             if(err) throw(err)
    //             //Set status and content type
    //             res.writeHead(200, {'Content-Type': 'text/html'})
    //             //Serves Page
    //             res.end(content);
    //     })
    
    // }

    // if(req.url === '/api/users'){
    //     const users = [
    //         {name: 'Bobby Boy', age: 100},
    //         {name: 'Susie Woosie', age: 50}
    //     ]
    //     res.writeHead(200, {'Content-Type': 'application/json'})
    //     res.end(JSON.stringify(users))
    // }

    
})

const PORT = process.env.PORT || 5000; 

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))