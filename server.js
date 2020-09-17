const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');

app.use('/api', userRoute);
app.use('/api/user', authRoute);

app.listen(port);
