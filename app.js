// DEPENDENCIES
const cors = require('cors');
const express = require('express');

// CONGIFURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get('/', (req, res) =>{
    res.send("Welcome to the Tuner App!");
});

// EXPORTS
module.exports = app;