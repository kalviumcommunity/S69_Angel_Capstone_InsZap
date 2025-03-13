const express = require('express');
const router = express.Router();
const Station = require('../models/Station');

// Get all stations
router.get('/', async (req, res) => {
  try {
    const stations = await Station.find();
    res.json(stations);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Get station by ID
router.get('/:id', async (req, res) => {
  try {
    const station = await Station.findById(req.params.id);
    if (!station) return res.status(404).send('Station not found');
    res.json(station);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
