const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Types.ObjectId,
        auto: true,
        unique: true,
        required: true
    },
    creatorId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    // TODO: Text should be sanitized markdown
    text: {
        type: String,
        required: true
    },
    likeCounter: {
        type: Number,
        required: true,
        default: 0
    },
    likers: {
        type: [mongoose.Types.ObjectId],
        required: true,
        default: []
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    category: {
        type: String,
        required: true
    },
    tags: {
        type: String
    }
});

module.exports = mongoose.model('post', postSchema);
