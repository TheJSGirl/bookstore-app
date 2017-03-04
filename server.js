const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 5001;

//initiate
const app = express();

//connection 
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', (req,res) =>{
    res.send('bookstore');
});

app.listen(port, () =>{
    console.log('listen on port no:'+ port);
});



