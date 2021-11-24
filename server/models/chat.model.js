const mongoose = require("mongoose");
const messageSchema = require("./message.model");

const chatSchema = new mongoose.Schema({
  chatId: {
    type: mongoose.Types.ObjectId,
    auto: true,
    unique: true,
    // required: true
  },
  sessionId: {
    type: mongoose.Types.ObjectId,
    // required: true
  },
  messages: {
    type: [messageSchema],
    // required: true,
    default: [],
  },
});

module.exports = mongoose.model("chat", chatSchema);
