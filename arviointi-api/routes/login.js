const express = require('express');
const router = express.Router();
const { authenticateUser, generateToken } = require('../authMiddleware');

router.post('/', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        const user = await authenticateUser(username, password);
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = generateToken(user);
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
});

module.exports = router;