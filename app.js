const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('HomePage Holla!!')
});

app.listen(3001, () => {
    console.log('server has started')
});