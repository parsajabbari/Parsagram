// Dependencies
const express = require('express')
const admin = require('firebase-admin');
let inspect = require('util').inspect;
let Busboy = require('busboy');



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
    response.set("Access-Control-Allow-Origin", "*")
    let posts = []
    db.collection('posts').orderBy("date", "desc").get().then(snapshot =>  {
        snapshot.forEach((doc) => {
        posts.push(doc.data())
    });
    response.send(posts)
    
});
    
})

// Endpoint - Create Post
app.post('/createPost', (request, response) => {
    response.set("Access-Control-Allow-Origin", "*") 
    var busboy = new Busboy({ headers: request.headers });
    let fields = {}
    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
      console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
      file.on('data', function(data) {
        console.log('File [' + fieldname + '] got ' + data.length + ' bytes');
      });
      file.on('end', function() {
        console.log('File [' + fieldname + '] Finished');
      });
    });
    busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
      fields[fieldname] = val
    });
    busboy.on('finish', function() {
      db.collection("posts").doc(fields.id).set({
        id: fields.id,
        caption: fields.caption,
        location: fields.location,
        date: fields.date,
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/project-parsagram.appspot.com/o/5tUZBEy.jpg?alt=media&token=306b6365-e100-4615-8027-f10e4d577831"

      })
      response.send("done!");
    });
    request.pipe(busboy);
})

// Listen
app.listen(process.env.PORT || port, () => {
    console.log(`Parsagram listening at http://localhost:${port}`)
})