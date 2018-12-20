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

router.post('/',(req, res, next) => {
    /*const gallery = new Gallery({
        _id: new mongoose.Types.ObjectId,
        desc: req.body.desc,
        img: req.body.img
    });
    gallery.save().then(result =>{
        console.log(result);
    })
    .catch(err => console.log(err));*/
    res.status(201).json({
        message: 'Handling POST requests to /gallery',
        /*gallery: gallery*/
    });
});

module.exports = router;