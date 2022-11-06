const functions = require("firebase-functions");
const admin = require('firebase-admin');

//initialize firebase admin
admin.initializeApp();

//install express
const express = require('express');

const app = express();
//get request view screams
app.get('/screams', (req, res) => {
    admin
        .firestore()
        .collection('screams')
        .get()
        .then(data => {
            let screams = [];
            data.forEach(doc => {
                screams.push(doc.data());
            });
            return res.json(screams);
        })
        .catch(err => console.error(err));
});


//post a new scream
app.post('/scream', (req, res) => {

    const newScream = {
        body: req.body.body,
        userHandle: req.body.userHandle,
        createdAt: new Date().toISOString()
    };

    admin
        .firestore()
        .collection('screams')
        .add(newScream)
        .then(doc => {
            res.json({ message: `document${doc.id} created successfully` });
        })
        .catch(err => {
            res.status(500).json({ error: 'something went wrong' });
            console.error(err);
        });
});


//retrieve app & data as a baseurl    
exports.api = functions.https.onRequest(app);