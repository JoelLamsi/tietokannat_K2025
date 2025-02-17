const express = require('express');
const router = express.Router();
const assessment = require('../models/assessment_model');

router.get('/:id',
    function(req, res) {
        assessment.getByStudentId(req.params.id, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
);

module.exports = router;