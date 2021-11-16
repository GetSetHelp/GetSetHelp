const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema(
  {
    sessionId: {
      type: mongoose.Types.ObjectId,
      auto: true,
      unique: true,
      required: true,
    },
    mentorId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    menteeId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
      default: 15,
    },
    chatId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

module.exports = mongoose.model("session", sessionSchema);
