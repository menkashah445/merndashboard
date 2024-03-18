const express = require('express');
const { authenticate } = require('../middlewares/auth');

const router = express.Router();

// map profile endpoint with authenticate middleware 
// which handle get request
router.get('/profile', authenticate, (req, res) => {
  res.json({ message: `Welcome ${req.user.username}` });
});

module.exports = router;