const express = require('express');
const router = express.Router();
const course = require('../models/course_model');

router.get('/', function(req, res) {
    course.getAll(function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    })
});

router.get('/:id', function(req, res) {
    course.getById(req.params.id, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    })
});

router.post('/', function(req, res) {
    course.add(req.body, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    })
});

router.delete('/:id', function(req, res) {
    course.delete(req.params.id, function(err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    })
});

router.put('/:id', function(req, res) {
    course.update(req.params.id, req.body, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    })
});

module.exports = router;