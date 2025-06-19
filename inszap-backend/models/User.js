const mongoose = require('mongoose');

    const userSchema = new mongoose.Schema({
      name: { type: String, required: true },
      email: { type: String },
      phone: { type: String },
      password: { type: String },
      carModel: { type: String, required: true },
      chargingType: { type: String, required: true },
    });

    module.exports = mongoose.model('User', userSchema);