const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Photo = require('../models/photo');

router.post('/',(req, res, next) => {
    const photo = new Photo({
        _id: new mongoose.Types.ObjectId,
        desc: req.body.desc,
        img: req.body.img
    });
    photo.save().then(result =>{
        console.log(result);
    })
    .catch(err => console.log(err));
    res.status(201).json({
        message: 'Handling POST requests to /photo',
        photo: photo
    });
});

router.get('/:photoId', (req, res, next) => {
    const id = req.params.photoId;
    Photo.findById(id)
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