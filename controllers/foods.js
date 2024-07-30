// controllers/foods.js

const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

// router logic will go here

//GET food index page route
router.get('/', (req, res) => {
    res.render('foods/index.ejs')
});

//GET /foods/new route
router.get('/new', (req, res) => {
    res.render('foods/new.ejs');
});

module.exports = router;
