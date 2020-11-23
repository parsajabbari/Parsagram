// Dependencies
const express = require('express')

// Config
const app = express()
const port = 3000

// Endpoint - Posts
app.get('/posts', (request, response) => {
    let posts = [
       {
           caption: "Golden Gate Bridge",
           location: "San Francisco"
       }, 
       {
           caption: "London Eye",
           location: "London"
       }
    ]
    response.send(posts)
})

// Listen
app.listen(process.env.PORT || 3000, () => {
    console.log(`Parsagram listening at http://localhost:${port}`)
})