const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 7000;
const Genres = require('./models/genres');
const Books = require('./models/book');

//initiate
const app = express();

//connection 
mongoose.connect('mongodb://127.0.0.1:27017/bookstore');
var db = mongoose.connection;

app.get('/', (req, res) =>{
    res.send('bookstore');
});

app.get('/api/genres', (req, res) =>{
    Genre.getGenres((err, genres) =>{
        if(err){
            throw err;
        }

        res.json(genres);

    });

});

app.get('/api/Books', (req, res) =>{
    Genre.getBooks((err, Books) =>{
        if(err){
            throw err;
        }

        res.json(Books);

    });
});

app.listen(port, () =>{
    console.log('listen on port no:'+ port);
});



  