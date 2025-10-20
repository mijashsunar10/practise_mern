const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUser } = require('../controller/user');

// Register route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

router.get("/user/:id",getUser);

module.exports = router;
