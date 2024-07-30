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

//POST /foods create route
router.post('/', async (req, res) => {
try {
    const currentUser = await User.findById(req.session.user._id);
    currentUser.foods.push(req.body);
    await currentUser.save();
    res.redirect(`/users/${currentUser._id}/foods`);
} catch (error) {
    console.log(error);
    res.redirect('/')
}
});

module.exports = router;
