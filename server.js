const http = require('http');
const express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');

var users = [
    { id: 1, username: "Andi", password: 1234 },
    { id: 2, username: "Sandi", password: 1234 },
  ];


app.use(express.static(__dirname + '/views'));
app.use(express.json());
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 


app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Server Not Response!')
})


const routes = require("./routes/routes")(app,fs);

app.listen(8080)
console.log('Server jalan di 8080!')