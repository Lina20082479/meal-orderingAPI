let userRoute = require('./users');
let orderRoute = require('./order');
let dishRoute = require('./dish');

let routes = (route) => {
    // eslint-disable-next-line no-unused-vars
    route.get('/', function(req, res) {
        res.render('index', { title: 'Online Meal Ordering' });
    });


    userRoute(route);

    orderRoute(route);

    dishRoute(route);
};


module.exports = routes;
