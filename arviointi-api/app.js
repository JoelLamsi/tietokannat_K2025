var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const studentRouter = require('./routes/student');
app.use('/students', studentRouter);

const courseRouter = require('./routes/course');
app.use('/courses', courseRouter);

const assessmentRouter = require('./routes/assessment');
app.use('/assessments', assessmentRouter);

module.exports = app;
