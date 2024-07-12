const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong, createSong } = require("../queries/songs");

// INDEX
songs.get("/", async (req, res) => {
    const allSongs = await getAllSongs();
    if(allSongs[0]) {
        res.status(200).json(allSongs);
    } else {
        res.status(500).json({ error: "Server error" });
    }
});

// SHOW

songs.get("/:id", async (req, res) => {
    const { id } = req.params;
    const song = await getSong(id);
    if (song) {
        res.status(200).json(song);
    } else {
        res.status(404).json({ error: "song not found"});
    } // end if/else 
}); // end show route

// CREATE

songs.post('/', async (req, res) => {
    const song = await createSong(req.body);
    res.json(song);
}); // end post route

module.exports = songs;