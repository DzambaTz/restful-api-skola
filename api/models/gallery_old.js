const mongoose = require('mongoose');

const galleryOldSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    desc: String,
    img: String
});

module.exports = mongoose.model('Gallery_old',galleryOldSchema,'Old picture gallery');