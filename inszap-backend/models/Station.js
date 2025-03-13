const mongoose = require('mongoose');

const stationSchema = new mongoose.Schema({
  name: String,
  location: String,
  availability: Boolean,
  price: Number,
});

module.exports = mongoose.model('Station', stationSchema);
