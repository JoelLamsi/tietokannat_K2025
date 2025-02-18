const express = require('express');
const router = express.Router();
const user = require('../models/user_model');
const { verifyToken } = require('../authMiddleware');

router.get('/', verifyToken, (req, res) => {
    user.getAll((error, dbResult) => {
        if (error) {
            res.status(400).json(error);
        } else {
            res.status(200).json(dbResult);
        }
    });
});

router.get('/:id?', verifyToken,
    (req, res) => {
        user.getById(req.params.id, (error, dbResult) => {
            if (error) {
                res.status(400).json(error);
            } else {
                res.status(200).json(dbResult);
            }
        });
    }
);

router.post('/', (req, res) => {
        user.add(req.body, (error, dbResult) => {
            if (error) {
                res.status(400).json(error);
            } else {
                res.status(201).json({message: 'User created successfully'});
            }
        });
    }
);

router.delete('/:id', verifyToken,
    (req, res) => {
        user.delete(req.params.id, (error, dbResult) => {
            if (error) {
                res.status(400).json(error);
            } else {
                res.status(200).json({message: 'User deleted successfully'});
            }
        });
    }
);

router.put('/:id',  verifyToken, (req, res) => {
        user.update(req.params.id, req.body, (error, dbResult) => {
            if (error) {
                res.status(400).json(error);
            } else {
                res.status(200).json({message: 'User updated successfully' });
            }
        });
    }
);

module.exports = router;