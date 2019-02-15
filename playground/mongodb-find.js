// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if(err) {
        return console.log(err);
    }
    console.log('Connected to mongodb server');

    // db.collection('Todos').find({
    //     _id : new ObjectID('5c5bd0413d4a1f417c3d6447')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
        
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find().count().then((count) => {
        console.log(`Users count: ${count}`);
    }, (err) => {
        console.log(err);
    });

    // db.close();
});