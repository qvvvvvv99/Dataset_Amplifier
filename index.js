const express = require('express');
// const path = require('path');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload')
const app = new express();
const ejs = require('ejs');

const mainController = require('./controllers/main');
const searchController = require('./controllers/home');
const validateMiddleware = require('./middleware/validationMiddleware');
const storeDataController = require('./controllers/storeData');
const amplifyData = require('./controllers/amplifyData');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(fileUpload())

app.listen(4000, () => {
   console.log('App listening on port 4000');
});

mongoose.connect('mongodb://127.0.0.1/my_db', {
    useNewUrlParser: true
})

app.get('/', mainController);
// app.get('/', searchController);
app.use('/data/store', validateMiddleware);
app.post('/data/store', storeDataController);
app.get('/data/amplify', amplifyData);