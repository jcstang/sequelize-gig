const express = require('express');
const router = express.Router();
const db = require('../config/connection');
const Gig = require('../models/Gig');

// Get gig list
router.get('/', (req, res) => {
  Gig.findAll()
    .then(gigs => {
      console.log(gigs);
      res.sendStatus(200);
    })
    .catch(err => console.log(err))
});

// Add a gig
router.get('/add', (req, res) => {
  const data = {
    title: 'looking for a React developer',
    technologies: 'react, javascript, html, css',
    budget: '$3000',
    description: 'randmon descriptions',
    contact_email: 'user1@gmail.com'
  }

  let { title, technologies, budget, description, contact_email } = data;

  // insert into table
  Gig.create({
    title: title,
    technologies: technologies,
    description: description,
    budget: budget,
    contact_email: contact_email
  })
    .then(gig => res.redirect('/gigs'))
    .catch(err => console.log(err));

});

module.exports = router;