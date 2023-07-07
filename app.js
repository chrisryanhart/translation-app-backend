// test
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const home = require('./routes/home');

const app = express();


app.use(cors());

app.use(express.json());

app.use(morgan("tiny"));


app.use(express.urlencoded({extended: true}));

app.use('/', home);


// 404 route not found error handler
app.use(function (req, res, next) {
    const notFoundError = new ExpressError("Not Found", 404);
    return next(notFoundError)
  });

// generic error handler
app.use(function(err, req, res, next) {
    // the default status is 500 Internal Server Error
    let status = err.status || 500;
    let message = err.message;
  
    // set the status and alert the user
    return res.status(status).json({
      error: {message, status}
    });
  });

module.exports = app;
