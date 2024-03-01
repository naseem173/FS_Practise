const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const localstrategy = require('passport-local').Strategy;

const app = express();
const port = 8000;
const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
const jwt = require('jsonwebtoken');

mongoose.connect(
    "mongodb+srv://mohdnaseemuddin73:fahad@cluster0.ca1lt34.mongodb.net/",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(() => {
    console.log("Connected to mongodb");
}).catch((err) => {
    console.log("Error connecting to mongoDB", err);
});

app.listen(port, () => {
    console.log("Server running on port 8000");
});

