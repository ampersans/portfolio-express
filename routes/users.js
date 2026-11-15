/* 
Tristan Burditt - 100982847
Assignment 2
Web & Script Programming
users.js
*/

var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next) {
  res.send('respond with a resource');
});
module.exports = router;