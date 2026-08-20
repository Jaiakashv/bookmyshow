const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
    movieId: String,
    movieName: String,
    theatre: String,
    date: String,
    time: String,
    seats: [String],
    total:Number
});

module.exports =  mongoose.model("booking",bookingSchema);