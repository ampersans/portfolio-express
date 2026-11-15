/*
  Tristan Burditt - 100982847
  Assignment 2
  Web & Script Programming
  app.js
*/
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var expressLayouts = require('express-ejs-layouts');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// use views/layout.ejs as the shared template for every page
app.use(expressLayouts);
app.set('layout', 'layout');


app.locals.site = {
  name: 'Tristan Burditt',
  tagline: 'Networking and IT Security Student',
  email: 'tristan.burditt@ontariotechu.net',
  github: 'https://github.com/ampersans',
  linkedin: 'https://www.linkedin.com/in/' //i do not have linked in
};

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', indexRouter);
app.use('/users', usersRouter);


app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.title = 'Error';
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;