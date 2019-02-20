var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp', { useMongoClient: true });
//mongoose.openUri('mongodb://todoappuser:jGNElgQDDErVMfIV@cluster0-shard-00-00-ihf3w.gcp.mongodb.net:27017,cluster0-shard-00-01-ihf3w.gcp.mongodb.net:27017,cluster0-shard-00-02-ihf3w.gcp.mongodb.net:27017/TodoApp?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true');

module.exports = {mongoose};