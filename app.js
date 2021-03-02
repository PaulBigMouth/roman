const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

const keys = require('./config/keys');

const authRoutes = require('./routes/auth.routes');
const clipRoutes = require('./routes/clip.routes');

const app = express();

mongoose
	.connect(keys.mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('mongoDB connected'))
	.catch((e) => console.log(e));

app.use(passport.initialize());
require('./middleware/passport')(passport);

app.use(require('morgan')('dev'));
app.use(require('cors')());
app.use(
	bodyParser.urlencoded({
		extended: true,
	}),
);
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/clips', clipRoutes);

module.exports = app;
