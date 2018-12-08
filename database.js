const mongoose = require('mongoose') ;
const autoIncrement = require('mongoose-auto-increment');

// mongoose.connect('mongodb://localhost:27017/mealorderingtestdb', { useNewUrlParser: true });

mongoose.connect('mongodb://123456:wit123456@ds127704.mlab.com:27704/mealorderingtestdb', { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
autoIncrement.initialize(mongoose.connection);

mongoose.connection.on('connected', function () {
    console.log('DB is connected');
});
// eslint-disable-next-line no-unused-vars
mongoose.connection.on('error', function (err) {
    console.log('DB is failed');
});

mongoose.connection.on('disconnected', function () {
    console.log('DB is disconnected');
});

module.exports = mongoose;