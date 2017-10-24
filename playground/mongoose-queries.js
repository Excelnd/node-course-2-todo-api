const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '59ef3184a58552c00b82fe4c';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// } 

// Todo.find ({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// }); 

// Todo.findOne ({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById('59eed655ed2b2264241be19b').then((user) => {
    if (!user) {
        return console.log('Unable to find user');
    }

    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});