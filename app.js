const express = require('express');

const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Meme = require('./models/meme')

const databaseUrl = 'mongodb://localhost:27017/meme-generator';
mongoose.connect(databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(bodyParser.json());

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
  

  app.post('/add', (req, res) => {
    const caption = req.body.caption;
    const url = req.body.imgUrl;
    const upload = req.body.imgUpload;
    const newMemes = {
      caption,
      imageUrl: url,
      imageUpload: upload,
    };
    Meme.create(newMemes, (err, addMemes) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect('/view');
        console.log('this is the create page', addMemes);
      }
    });
  })
app.listen(3001, () => {
    console.log('server has started')
});