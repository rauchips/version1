const express = require('express');
const logger = require('morgan');

const indexRouter = require('./routes/index')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, console.log('Server is running on port: ' + PORT));

module.exports = app