const ordersModel = require('../models/order');

const ordersController = {
    // eslint-disable-next-line no-unused-vars 
    getAll: (req, res, next) => {
        ordersModel.find({}).populate('dishes.dish').populate('customer').exec((err, orders) => {
            if (err) return res.json(err);


            const orderWithTotalPrice = orders.map(order => {
                let totalPrice = 0;

                order.dishes.forEach(dish => {
                    totalPrice += dish.dish.price * dish.quantity;
                });
                const dishInfo = {
                    dishDetails: order,
                    totalPrice: totalPrice
                };
                return dishInfo;
            });

            res.json(orderWithTotalPrice);
        });
    },
    // eslint-disable-next-line no-unused-vars 
    getByUserId: (req, res, next) => {
        ordersModel.find({customer: req.params.userId}).populate('dishes.dish').populate('customer').exec((err, orders) => {
            if (err) return res.json(err);


            const orderWithTotalPrice = orders.map(order => {
                let totalPrice = 0;

                order.dishes.forEach(dish => {
                    totalPrice += dish.dish.price * dish.quantity;
                });
                const dishInfo = {
                    dishDetails: order,
                    totalPrice: totalPrice
                };
                return dishInfo;
            });

            res.json(orderWithTotalPrice);
        });
    },
    // eslint-disable-next-line no-unused-vars 
    getOne: (req, res, next) => {
        ordersModel.findById(req.params.id).populate('dishes.dish').exec((err, order) => {
            let totalPrice = 0;

            order.dishes.forEach(dish => {
                totalPrice += dish.dish.price * dish.quantity;
            });

            const dishInfo = {
                dishDetails: order,
                totalPrice: totalPrice
            };
            res.json(dishInfo || {});
        });
    },
    // eslint-disable-next-line no-unused-vars 
    create: (req, res, next) => {
        ordersModel.create(req.body, (err, order) => {
            if (err) return res.json(err);
            res.json(order);
        });
    },
    // eslint-disable-next-line no-unused-vars 
    update: (req, res, next) => {
        ordersModel.findOneAndUpdate(req.params.id, req.body, {new: true}, (err, order) => {
            if (err) return res.json(err);
            res.json(order);
        });
    },
    // eslint-disable-next-line no-unused-vars 
    delete: (req, res, next) => {
        // eslint-disable-next-line no-unused-vars 
        ordersModel.remove({_id: req.params.id}, (err, ok) => {
            if (err) return res.json(err);
        });
        res.json(true);
    }

};


module.exports = ordersController;