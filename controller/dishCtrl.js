const dishesModel = require('../models/dish');

const dishesController = {
    // eslint-disable-next-line no-unused-vars 
    getAll: (req, res, next) => {
        dishesModel.find({}, (err, dishes) => {
            if (err) return res.json(err);
            res.json(dishes);
        });
    },
    // eslint-disable-next-line no-unused-vars
    getOne: (req, res, next) => {
        dishesModel.findById(req.params.id, (err, dish) => {
            res.json(dish || {});
        });
    },
    // eslint-disable-next-line no-unused-vars
    create: (req, res, next) => {
        dishesModel.create(req.body, (err, dish) => {
            if (err) return res.status(404).json(err);
            res.json(dish);
        });
    },
    // eslint-disable-next-line no-unused-vars
    update: (req, res, next) => {
        dishesModel.findOneAndUpdate({ _id:req.params.id}, req.body, { new: true }, (err, dish) => {
            if (err) return res.status(404).json(err);
            res.json(dish);
        });
    },
    // eslint-disable-next-line no-unused-vars
    delete: (req, res, next) => {
        // eslint-disable-next-line no-unused-vars
        dishesModel.remove({ _id: req.params.id }, (err, ok) => {
            if (err) return res.json(err);
        });
        res.json(true);
    },
    // eslint-disable-next-line no-unused-vars
    search: (req, res, next) => {
        const searchInfo = req.params;
        switch (searchInfo.type) {
        case 'name':
            dishesModel.find({ 'name': { $regex: `.*${searchInfo.keywords}.*`, $options: '-i' } }, (err, dish) => {
                if (err) return res.json(err);
                res.json(dish);
            });
            break;
        }
    }

};


module.exports = dishesController;