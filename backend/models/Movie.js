const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    image :{
        type: String,
        required: true
    },
    theatres:[
        {
            name:String,
            shows:[String]
        }
    ]
});

module.exports=mongoose.model("movie",movieSchema);