var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressHbs= require('express-handlebars');
const mongoose = require('mongoose');
var session = require('express-session');

var passport= require('passport');

var flash = require('connect-flash');
var indexRouter = require('./routes/index');


var app = express();

//mongoose.connect('mongodb://root:root:27017/nodeshop', { useNewUrlParser: true });

//mongoose.connect('mongodb://127.0.0.1:27017/nodeshop', { useNewUrlParser: true }, function(err) { console.log("mongoDB connected", err); })


mongoose.connect("mongodb://localhost:27017/nodeshop" , { useNewUrlParser: true }).then(
  (res) => {
   console.log("Connected to Database Successfully.")
  }
).catch(() => {
  console.log("Conntection to database failed.");
});
require('./config/passport');
// view engine setup
app.engine('.hbs', expressHbs({defaultLayout:'layout', extname: '.hbs'}));

app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({secret:'mysupersecret', resave: false, saveUninitialized: false}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
