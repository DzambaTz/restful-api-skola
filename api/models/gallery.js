const mongoose = require('mongoose');

const gallerySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    description: String,
    img: String
});

module.exports = mongoose.model('Gallery',gallerySchema);