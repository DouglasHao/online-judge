const express = require('express');
const app = express();
const restRouter = require('./routes/rest');
const indexRouter = require('./routes/index');
const mongoose = require('mongoose');
mongoose.connect('mongodb://phantomape:123456@ds129066.mlab.com:29066/oj-database');

app.use('/', indexRouter);
app.use('/api/v1', restRouter);

app.listen(3000, () => console.log('App listening on port 3000!'));