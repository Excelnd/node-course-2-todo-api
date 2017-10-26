var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');

mongoose.connect('mongodb://ihsanmpm:accounter123@ds233895.mlab.com:33895/dbjabal' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
