const mongoose = require("mongoose");

const AGSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
  },
  { versionKey: false }
);

const AGModel = mongoose.model("AGproduct", AGSchema);

module.exports = {
  AGModel,
};
