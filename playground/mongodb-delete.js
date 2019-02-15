// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if(err) {
        return console.log(err);
    }
    console.log('Connected to mongodb server');

    //deleteMany
    // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({name:'Hendra'}).then((result) => {
        console.log(result);
    })

    db.collection('Users').findOneAndDelete({ _id : new ObjectID('5c5bd14aaec0a5192cab94e7')}).then((result) => {
        console.log(result);
    });

    // db.close();
});