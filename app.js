const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

const userRoutes = require('./api/routes/users')
const newsRoutes = require('./api/routes/news')
const loginRoutes = require('./api/routes/login')
const galleryRoutes = require('./api/routes/gallery')
const photoRoutes = require('./api/routes/photo')
const galleryOldRoutes = require('./api/routes/gallery_old')

mongoose.connect('mongodb://' + process.env.Mongo_Atlas_User + ':' + process.env.Mongo_Atlas_PW + '@etstuzla-shard-00-00-t3iti.mongodb.net:27017,etstuzla-shard-00-01-t3iti.mongodb.net:27017,etstuzla-shard-00-02-t3iti.mongodb.net:27017/test?ssl=true&replicaSet=etstuzla-shard-0&authSource=admin&retryWrites=true', { useNewUrlParser: true});

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method == 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        res.status(200),json({});
    }
    next();
});

app.use('/users', userRoutes);
app.use('/login', loginRoutes);
app.use('/news', newsRoutes);
app.use('/gallery', galleryRoutes);
app.use('/photo', photoRoutes);
app.use('/gallery_old', galleryOldRoutes);

app.use((req, res, next) =>{
    const error = new Error();
    error.status = 404;
    next(error);
});

app.use((error, req, res, next)=>{
    res.status(err.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
});

module.exports = app;