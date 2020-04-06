const express = require('express');

const app = express();
const mongoose = require('mongoose');
const Meme = require('./models/meme')

const databaseUrl = 'mongodb://localhost:27017/meme-generator';
mongoose.connect(databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get('/', (req, res) => {
    res.send('HomePage Holla!!')
});

app.get('/view', (req, res) => {
    Meme.find({}, (err, allMemes) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(allMemes)
        res.send(allMemes);
      }
    });
  });
  

app.listen(3001, () => {
    console.log('server has started')
});