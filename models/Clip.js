const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clipSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    clipId: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('clips', clipSchema);
