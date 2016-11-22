var express = require('express');
var mongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.send('chamil udayanga');
});

app.post('/add', function (req, res) {
    insertBook(req.body);
    res.send(req.body);
});

app.listen(5000, function (server) {
    console.log('------ server started:5000 --------');
});

function insertBook(book) {

    var connection = getDbConnection();

    connection.then(function (db) {

        var result = db.collection('Books').insertOne(book);
        result.then(function (data) {
            console.log(data.insertedId);
        })
        db.close();

    }, function (err) {

        console.error(err);
    });
}

function getDbConnection(callback) {

    var mongodbConnectionString = "mongodb://localhost:27017/testproject";
    return mongoClient.connect(mongodbConnectionString);
}