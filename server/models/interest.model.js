const mongoose = require('mongoose');
const expertiseEnum = require('../util/constants');

const interestSchema = new mongoose.Schema({
    field: {
        type: String,
        required: true,
    },
    expertise: {
        type: expertiseEnum,
        required: true
    },
});

module.exports = mongoose.model('interest', interestSchema);
