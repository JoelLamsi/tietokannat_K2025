const express = require('express');
const router = express.Router();
const student = require('../models/student_model');

router.get('/', function(req, res) {
    student.getAll(function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

router.get('/:id', function(req, res) {
    student.getById(req.params.id, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

router.post('/', function(req, res) {
    student.add(req.body, function(err, dbResult) {
        if (err) {
            res.json(err);
        } else {
            res.json(dbResult);
        }
    });
});

router.delete('/:id', function(req, res) {
    student.delete(req.params.id, function(err, dbResult) {
        if (err) {
            res.json(err);
        } else {
            res.json(dbResult);
        }
    });
});

router.put('/:id', function(req, res) {
    student.update(req.params.id, req.body, function(err, dbResult) {
        if (err) {
            res.json(err);
        } else {
            res.json(dbResult);
        }
    });
});

module.exports = router;