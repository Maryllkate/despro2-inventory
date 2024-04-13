const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    rfidID: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number
    },
    manufacturer: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    description: String,
  },
  { timestamps: true }
);


const Product = mongoose.model("product", ProductSchema);
module.exports = Product;
