const mongoose = require("mongoose");
const tokenSchema = require("./token.model");
const experienceSchema = require("./experience.model");

const userSchema = new mongoose.Schema(
  {
    userId: {
      required: true,
      type: mongoose.Types.ObjectId,
      unique: true,
      auto: true,
    },
    userName: {
      required: true,
      type: String,
      unique: true,
    },
    name: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      type: String,
      unique: true,
    },
    tokens: {
      required: true,
      type: tokenSchema,
      unique: true,
    },
    isMentor: {
      required: true,
      type: Boolean,
      default: false,
    },
    isVerified: {
      required: true,
      type: Boolean,
      default: false,
    },
    interests: {
      type: [mongoose.Types.ObjectId],
      required: false,
    },
    experience: {
      type: [mongoose.Types.ObjectId],
      required: false,
    },
    activeSessions: {
      type: [mongoose.Types.ObjectId],
      required: true,
      default: [],
    },
    inactiveSessions: {
      type: [mongoose.Types.ObjectId],
      required: true,
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
