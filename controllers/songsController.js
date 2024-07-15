const express = require("express");
const songs = express.Router();
const { getAllSongs, getSong, createSong, deleteSong, updateSong } = require("../queries/songs.js");
const { checkName, checkArtist, checkAlbum, checkTime, checkBoolean } = require("../validations/checkSong.js")

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

songs.post('/', checkName, checkArtist, checkAlbum, checkTime, checkBoolean, async (req, res) => {
    const song = await createSong(req.body);
    res.json(song);
}); // end post route

// DELETE 
songs.delete('/:id', async (req,res) => {
    const { id } = req.params;
    const deletedSong = await deleteSong(id);
    if (deletedSong.id){
    res.status(200).json({ message: `${deletedSong.name} deleted succesfully` });
    } else {
    res.status(404).json({ error: `Song ${id} not found.`});
    }; // end if/else
}); // end DELETE

// UPDATE
songs.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updatedSong = await updateSong(id, req.body);
    res.status(200).json(updatedSong);
}); // end update


module.exports = songs;