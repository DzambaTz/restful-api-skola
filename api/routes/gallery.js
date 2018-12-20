const express = require('express');
const router = express.Router();

const Gallery = require('../models/gallery');

router.get('/:galleryId', (req, res, next) => {
    const id = req.params.galleryId;
    Gallery.findById(id)
    .exec()
    .then(doc => {
        console.log(doc);
        res.status(200).json(doc);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});



module.exports = router;