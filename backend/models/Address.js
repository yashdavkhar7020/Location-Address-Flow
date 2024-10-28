const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    houseNo: String,
    road: String,
    category: String,
    location: {
        lat: Number,
        lng: Number,
    },
});

module.exports = mongoose.model('Address', addressSchema);
