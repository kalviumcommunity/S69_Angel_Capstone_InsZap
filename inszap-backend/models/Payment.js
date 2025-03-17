const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    amount: { type: Number, required: true },
    method: { type: String, enum: ["UPI", "Credit/Debit Card", "Net Banking"], required: true },
    status: { type: String, enum: ["Success", "Failed"], default: "Success" },
    transactionId: { type: String, unique: true, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Payment", paymentSchema);
