const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 4000;

app.listen(PORT, () => {
    console.log("hello world");
});

mongoose.connect("mongodb+srv://bunyawat:Asd_0949823192@cluster0.nqv9e.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

app.get('/', (req, res) => {
    res.send('API running');
});

app.get('/about', (req, res) => {
    res.send('ABOUT ME');
});

module.exports = app;