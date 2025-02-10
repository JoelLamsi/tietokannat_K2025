var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/example',
    function(request,response){
        response.send('I am example');
        console.log('I am example');
    }
);

app.get('/example/:name',
    function(request,response){
        response.send('Heippa ' + request.params.name);
        console.log('Heippa ' + request.params.name);
    }
);

app.get('/example/:lastname/:firstname',
    function(request,response){
        response.send('Heippa ' + request.params.firstname + ' ' + request.params.lastname);
        console.log('Heippa ' + request.params.firstname + ' ' + request.params.lastname);
    }
);

app.post('/',
    function(request,response){
        response.send(request.body);
        console.log(request.body);
    }
);

app.put('/',
    function(request,response){
        response.send('This ia a PUT request');
        console.log('This is a PUT request');
    }
);

module.exports = app;
