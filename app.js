// DEPENDENCIES
const cors = require('cors');
const express = require('express');

// CONGIFURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES

// Home
app.get('/', (req, res) =>{
    res.send("Welcome to the Tuner App!");
});

// http://localhost:4001/songs
const songsController = require("./controllers/songsController.js");
app.use("/songs", songsController);

// 404
app.get("*", (req,res) => {
    res.status(404).send("Page not found");
})

// EXPORTS
module.exports = app;