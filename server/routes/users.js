const express = require('express');
const router = express.Router();
const User = require('../models/User'); 

router.get('/check', async (req, res) => {
    const { username } = req.query; 

    if (!username) {
        return res.status(400).json({ success: false, message: 'Username is required' });
    }

    try {
        const userExists = await User.findOne({username:"user1"}); 

        if (userExists) {
            res.json({ success: true, message: 'User found', user: userExists });
        } else {
            res.json({ success: false, message: 'User not found' });
        }
    } catch (error) {
        console.error('Error checking user existence:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

router.get('/test', async (req, res) => {
    try {
        const allUsers = await User.find(); // Fetch all users
        console.log('All users:', allUsers); // Log all users
        res.json(allUsers);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});


module.exports = router;
