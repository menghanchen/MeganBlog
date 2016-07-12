var express = require('express');
var router = express.Router();
var appdata = require('../data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  var myArtwork = [];
  appdata.speakers.forEach(function(item){
    myArtwork =myArtwork.concat(item.artwork);
  });
  res.render('index', {
    title: 'Home' ,
    artwork:myArtwork
  });
});

/* GET home page. */
router.get('/speakers', function(req, res, next) {
  var myArtwork = [];
  appdata.speakers.forEach(function(item){
    myArtwork =myArtwork.concat(item.artwork);
  });
  res.render('speakers', {
    title: 'Speakers' ,
    artwork:myArtwork
  });
});

module.exports = router;
