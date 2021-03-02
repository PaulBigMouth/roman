
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    date: {
        type: Date,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    
});

module.exports = mongoose.model('orders', orderSchema);
