const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    desc: String,
    img: String
});

module.exports = mongoose.model('Photo',photoSchema);