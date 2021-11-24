const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userId: {
      // required: true,
      type: mongoose.Types.ObjectId,
      unique: true,
      auto: true,
    },
    firstname: {
      // required: true,
      type: String,
    },
    lastname: {
      // required: true,
      type: String,
    },
    email: {
      // required: true,
      type: String,
      unique: true,
    },
    isMentor: {
      type: Boolean,
      default: false,
    },
    isVerified: {
      // required: true,
      type: Boolean,
      default: false,
    },
    interests: [
      {
        type: String,
      },
    ],
    expertise: [
      {
        type: String,
      },
    ],
    activeSessions: {
      type: [mongoose.Types.ObjectId],
      // required: true,
      default: [],
    },
    inactiveSessions: {
      type: [mongoose.Types.ObjectId],
      // required: true,
      default: [],
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

module.exports = mongoose.model("user", userSchema);
