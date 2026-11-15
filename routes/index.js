/* 
Tristan Burditt - 100982847
Assignment 2
Web & Script Programming
index.js
*/

var express = require('express');
var router = express.Router();

var projects = [

  //data for projects page, ripped directly from assignment 1 with an addition for this website
  {
    title: 'Personal Banking App',
    icon: 'fa-building-columns',
    description: 'Personal Banking App emulator including multiple accounts, bill payments, transferring funds, loans, and working interest. Created in an Object Oriented Programming class in my first year, designed with PyQt5 and built in Python.'
  },
  {
    title: 'Text Adventure Game',
    icon: 'fa-book-open',
    description: 'An incredibly non-linear, choice-based text adventure inspired by classic choose-your-own-adventure novels. Created in an Intro to Programming class in my first year, designed and built in Python.'
  },
  {
    title: 'Personal Portfolio Website v1',
    icon: 'fa-globe',
    description: 'Created in Web and Script Programming, designed with CSS and built in HTML.',
    link: 'https://github.com/ampersans/portfolio-assignment/',
    linkText: 'View Assignment 1 Repo',
  },
  {
    title: 'Personal Portfolio Website v2',
    icon: 'fa-globe',
    description: 'This very website! Originally created in Web and Script Programming, designed with CSS and built in HTML. It has now been rebuilt with Node.js, Express and EJS.',
    link: 'https://github.com/ampersans/portfolio-express/',
    linkText: 'View Assignment 2 Repo',
  },
  {
    title: 'Digital Music Keyboard',
    icon: 'fa-music',
    description: 'A digital piano keyboard with button elements and different instrument voicings, including brass, piano, strings and choir. Created in a Computer Science class in my last year of high school, designed with UX principles and built in Python and Tkinter.'
  }

];

/* GET home page  */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Home', active: "home"});
});

/* GET about page  */
router.get('/about', function(req, res, next) {
  res.render('about', {title: 'About Me', active: "about"});
});

/* GET projects page  */
router.get('/projects', function(req, res, next) {
  res.render('projects', {title: 'Projects', active: "projects", projects: projects });
});

/* GET empty form contact page  */
router.get('/contact', function(req, res, next) {
  res.render('contact', {title: 'Contact Me', active: "contact", errors: [], submitted: null, form: {}});
});

//contact form, only validates data, no saving or sending
router.post('/contact', function(req,res,next) {
  var form = {
    name: (req.body.name || '').trim(),
    email: (req.body.email || '').trim(),
    phone: (req.body.phone || '').trim(),
    comments: (req.body.comments || '').trim(),
  };
  
  var errors = [];

  if (!form.name) errors.push('Please enter your name');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.push('Please enter a valid email address.');
  if (!/^[0-9+ ()\-]{7,20}$/.test(form.phone)) errors.push('Please enter a valid phone number (7-20 digits, spaces, + ( ) - allowed).');
  if (!form.comments) errors.push("Please enter a comment");

  //shows the form again with errors and what was typed
  if (errors.length > 0) {
    return res.status(400).render('contact', {title: 'Contact Me', active: 'contact', errors: errors, submitted: null, form: form });
  }

  res.render('contact', {title:"Contact Me", active: 'contact', errors: [], submitted: form, form: {} });

  });



module.exports = router;

