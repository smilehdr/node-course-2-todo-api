const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo}= require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5c6cc15f900583d02e71f34d23';

// if(!ObjectID.isValid(id)) {
//     console.log('ID Not Valid');
// }

// Todo.find({
//     _id : id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id : id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('ID Not found');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

var idUser = '5c6a505d989abc8433f4fd8a';

User.findById(idUser).then((user) => {
    if(!user) {
        return console.log('User not found');
    }
    console.log('User', user);
}).catch((e) => console.log(e));