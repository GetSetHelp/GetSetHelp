const mongoose = require("mongoose");

const userCredentialSchema = new mongoose.Schema(
  {
    userId: {
      required: true,
      type: Number,
      unique: true
    },
    firstname: {
      required: true,
      type: String,
    },
    lastname: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      type: String,
      unique: true,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

module.exports = mongoose.model("userCredential", userCredentialSchema);
