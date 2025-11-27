const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
//   userId: { type: String, required: true },
 userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  productId: { type: Number , required : true},
  name: String,
  price: Number,
  image: String,
  quantity: { type: Number, default: 1 },
});

module.exports = mongoose.model("Cart", CartSchema);
