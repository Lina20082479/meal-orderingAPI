// eslint-disable-next-line no-unused-vars
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// eslint-disable-next-line no-unused-vars
const database = require('./database');
const app = express();
const routes = require('./routes/index');
// eslint-disable-next-line no-unused-vars
const authenticateCtrl = require('./controller/authCtrl');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

if (process.env.NODE_ENV !== 'test') {  
    app.use(logger('dev'));
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// app.use('/orders', authenticateCtrl.authenticate);
routes(app);

// error handler
// eslint-disable-next-line no-unused-vars
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


app.listen(PORT);

// module.exports = app;
