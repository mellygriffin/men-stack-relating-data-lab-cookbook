const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

//router logic below

//GET user index
router.get('/', async (req, res) => {
    try {
        const allUsers = await User.find();
        res.render('users/index.ejs', {
            users: allUsers,
        });
    } catch (error) {
        console.log(error)
        res.redirect('/')
    }
});

//SHOW route
router.get('/:userId', async (req, res) => {
    try {
        await User.findById(req.session.user._id);
        res.render('users/show.ejs', {
            user: currentUser,
        });
    } catch (error) {
        console.log(error);
        res.redirect('/')
    }
});

module.exports = router;