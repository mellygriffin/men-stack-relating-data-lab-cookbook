// controllers/foods.js

const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

// router logic will go here

//GET food index page route
router.get('/', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        res.render('foods/index.ejs', {
            foods: currentUser.pantry,
        });
    } catch (error) {
        console.log(error)
        res.redirect('/')
    }
});

//GET /foods/new route
router.get('/new', (req, res) => {
    res.render('foods/new.ejs');
});

//POST /foods create route
router.post('/', async (req, res) => {
try {
    const currentUser = await User.findById(req.session.user._id);
    console.log(currentUser)
    currentUser.pantry.push(req.body);
    await currentUser.save();
    res.redirect(`/users/${currentUser._id}/foods`);
} catch (error) {
    console.log(error);
    res.redirect('/')
}
});

//SHOW route
router.get('/:foodId', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        const food = currentUser.pantry.id(req.params.foodId);
        res.render('foods/show.ejs', {
            food: food,
        });
    } catch (error) {
        console.log(error);
        res.redirect('/')
    }
});

//DELETE post route
router.delete('/:foodId', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        currentUser.pantry.id(req.params.foodId).deleteOne();
        await currentUser.save();
        res.redirect(`/users/${currentUser._id}/foods`);
    } catch (error) {
        console.log(error);
        res.redirect('/')
    }
});




module.exports = router;
