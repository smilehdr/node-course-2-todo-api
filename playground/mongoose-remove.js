const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo}= require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findByIdAndRemove('5c6e4709e1e06a4bccb88d09').then((todo) => {
    console.log(todo);
});