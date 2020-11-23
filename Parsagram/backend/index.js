// Dependencies
const express = require('express')
const admin = require('firebase-admin');


// Config Firebase
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Config Express
const app = express()
const port = 3000

// Endpoint - Posts
app.get('/posts', (request, response) => {
    let posts = []
    db.collection('posts').get().then(snapshot =>  {
        snapshot.forEach((doc) => {
        posts.push(doc.data())
    });
    response.send(posts)
    
});
    
})

// Listen
app.listen(process.env.PORT || port, () => {
    console.log(`Parsagram listening at http://localhost:${port}`)
})