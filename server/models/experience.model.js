const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
    years: {
        type: Number,
        required: true,
        default: 0
    },
    domain: {
        type: String,
        required: true,
    },
    organization: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('experience', experienceSchema);
