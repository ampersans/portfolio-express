var express = require('express');
var router = express.Router();

var projects = [

  {
    title: 'Personal Banking App',
    icon: 'fa-building-columns',
    description: 'Personal Banking App emulator including multiple accounts, bill payments, transferring funds, loans, and working interest. Created in an Object Oriented Programming class in my first year, designed with PyQt5 and built in Python.'
  }

]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
