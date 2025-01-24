const url  = require ('url')

const myUrl = new URL ('https://www.mywebsite.com/hello.html?id=100&status=active')

//Get Serialised URL
console.log(myUrl.href)

//OR to string 
console.log(myUrl.toString())

//Host Root Domain 
console.log(myUrl.host)

//Host Name (does not get port)
console.log(myUrl.hostname)

//Gets pathname 
console.log(myUrl.pathname)

//Serialised Query (everything after question mark.)
console.log(myUrl.search)

//Get Parameters
console.log(myUrl.searchParams)

//Add Parameters
myUrl.searchParams.append('abc', 'tony')
console.log(myUrl.searchParams)

//Loop Parameters
myUrl.searchParams.forEach((value, name )=> console.log(`${name}: ${value}}`))