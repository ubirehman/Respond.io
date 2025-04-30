const express = require('express');

const router = express.Router();

router.post('/signup', (req, res) => {
    const { username, password } = req.body;

    if (username && password) {
        return res.status(201).json({ message: 'User registered successfully' });
    }

    res.status(400).json({ message: 'Invalid data' });
});

module.exports = router;