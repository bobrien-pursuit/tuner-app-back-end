const express = require("express");
const songs = express.Router();
const { getAllSongs } = require("../queries/songs");

// INDEX
songs.get("/", async (req, res) => {});

module.exports = songs;