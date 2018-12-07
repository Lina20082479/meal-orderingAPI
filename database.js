const mongoose = require('mongoose') ;
const autoIncrement = require('mongoose-auto-increment');

mongoose.connect('mongodb://localhost:27017/mealorderingtestdb', { useNewUrlParser: true });

//mongoose.connect('mongodb://mealorderingdb:123456abc@dss143293.mlab.com:43293/mealorderingdb', { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
autoIncrement.initialize(mongoose.connection);

mongoose.connection.on('connected', function () {
    console.log('DB is connected');
});

mongoose.connection.on('error', function (err) {
    console.log('DB is failed');
});

mongoose.connection.on('disconnected', function () {
    console.log('DB is disconnected');
});

module.exports = mongoose;
