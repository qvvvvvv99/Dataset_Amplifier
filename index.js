const express = require('express');
// const path = require('path');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload')
const app = new express();
const ejs = require('ejs');

const homeController = require('./controllers/home');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(fileUpload())

app.listen(4000, () => {
   console.log('App listening on port 4000');
});

mongoose.connect('mongodb+srv://qvvvvvv:kse657544@cluster0.cetk1.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.get('/', homeController);