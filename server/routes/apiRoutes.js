const express = require('express');
const router = express.Router();

// GET endpoint
router.get('/', (req, res) => {
  res.json({ message: 'Hello from API routes!' });
});

// POST endpoint
router.post('/data', (req, res) => {
  const { data } = req.body;
  res.json({ success: true, received: data });
});

module.exports = router;
