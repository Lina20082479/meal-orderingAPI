const dishesModel = require('../models/dish');

const dishesController = {
    getAll: (req, res) => {
        dishesModel.find({}, (err, dishes) => {
            if (err) return res.json(err);
            res.json(dishes);
        });
    },

    getOne: (req, res) => {
        dishesModel.findById(req.params.id, (err, dish) => {
            res.json(dish || {});
        });
    },

    create: (req, res) => {
        dishesModel.create(req.body, (err, dish) => {
            if (err) return res.status(404).json(err);
            res.json(dish);
        });
    },

    update: (req, res) => {
        dishesModel.findOneAndUpdate({_id: req.params.id}, req.body, { new: true }, (err, dish) => {
            if (err) return res.status(404).json(err);
            res.json(dish);
        });
    },

    delete: (req, res) => {
        dishesModel.remove({ _id: req.params.id }, (err) => {
            if (err) return res.json(err);
        });
        res.json(true);
    },

    search: (req, res) => {
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