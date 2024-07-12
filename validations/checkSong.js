const checkName = (req, res, next) => {
    const { name } = req.body;
    if (name) {
        next();
    } else {
        res.status(400).json({ error: "Name is required."});
    } // end if/else
}; //ends checkName()

const checkArtist = (req, res, next) => {
    const { artist } = req.body;
    if (artist) {
        next();
    } else {
        res.status(400).json({ error: "Artist name is required."});
    } // end if/else
}; //ends checkArtist()

const checkAlbum = (req, res, next) => {
    const { album } = req.body;
    if (album) {
        next();
    } else {
        res.status(400).json({ error: "Album name is required."});
    } // end if/else
}; //ends checkAlbum()

const checkTime = (req, res, next) => {
    const { time } = req.body;
    if (time.match(/^[0-5]?[0-9](?::[0-5]?[0-9])?$/g)) {
        next();
    } else {
        res.status(400).json({ error: "Time is required in mm:ss"});
    } // end if/else
}; //ends checkTime()

const checkBoolean = (req, res, next) => {
    const { is_favorite } = req.body;
        if (is_favorite == "false" || is_favorite == "true" || typeof is_favorite == "boolean"){
                            next();
    } else {
        res.status(400).json({ error: "is_favorite must be a boolean value"})
    } // end if/else
} // end checkBoolean()

module.exports = { checkName, checkBoolean, checkArtist, checkAlbum, checkTime }; //