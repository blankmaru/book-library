const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

app.listen(port);
