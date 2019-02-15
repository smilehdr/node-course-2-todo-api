// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if(err) {
        return console.log(err);
    }
    console.log('Connected to mongodb server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c66268f82577ffba4133d63')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c66300d82577ffba41340b3')
    }, {
        $set: {
            name:'Hendra'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});