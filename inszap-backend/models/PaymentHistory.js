const mongoose = require("mongoose");

const paymentHistorySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    station: { type: mongoose.Schema.Types.ObjectId, ref: "Station", required: true },
    method: { type: String, enum: ["UPI", "Credit/Debit Card", "Net Banking"], required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ["Success", "Failed"], default: "Success" },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("PaymentHistory", paymentHistorySchema);
