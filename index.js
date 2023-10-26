const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 4000;
require('dotenv').config()

app.listen(PORT, () => {
    console.log("hello world");
});

mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("Connect to mongo db")
  }).catch((err) => {
    console.log(err);
  });

app.get('/', (req, res) => {
    res.send('API running');
});

app.get('/about', (req, res) => {
    res.send('ABOUT ME');
});

module.exports = app;