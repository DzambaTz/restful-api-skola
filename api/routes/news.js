const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const News = require('../models/news');

var i = 1;

router.get('/all', function(req, res) {
    News.find({}, function(err, news) {
      var newsMap = {};
  
      news.forEach(function(news) {
        newsMap[news._id] = news;
      });
      
      res.send(newsMap);  
    });
  });


router.get('/', (req, res, next) => {
    News.find({}, function(err, news) {
        var idsArr = [];
        i = 1;
    
        news.forEach(function(news) {
          idsArr[i] = news._id;
          i += 1;
        });
        
        res.send(idsArr);  
      });
   /* res.status(200).json({
        message: 'Handling GET requests to /news'
    });
    */
});

router.get('/count', (req,res,next) => {
    res.send(i);
});

router.post('/', (req, res, next) => {
    const news = new News({
        _id: new mongoose.Types.ObjectId,
        title: req.body.title,
        img: req.body.img,
        text: req.body.text
    });
    news.save().then(result =>{
        console.log(result);
    })
    .catch(err => console.log(err));
    res.status(201).json({
        message: 'Handling POST requests to /news',
        news: news
    });
});

router.get('/:newsId', (req, res, next) => {
    const id = req.params.newsId;
    News.findById(id)
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