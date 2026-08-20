const express = require("express");
const router = express.Router();

const Movie = require("../models/Bookings");
const Bookings = require("../models/Bookings");

//get api for booked seats

router.get("/",async(req,res)=>{
   const {movieId,theatre,date,time}=req.query;
   try{
    const bookings = await Bookings.find({
        movieId,
        theatre,
        date,
        time
    });
    let bookedSeats = [];
    bookings.forEach((booking)=>{
        bookedSeats.push(...booking.seats);
    });
    res.json(bookedSeats);
   }
   catch(err){
    res.status(500).json({
        message: err.message
    })
   }
});

//post the bookings

router.post("/", async(req,res)=>{
    try{
        const booking = new Bookings(req.body);
        await booking.save();
        res.json({
            sucess:true,
            message:"booking sucessful",
            booking
        });
    }
    catch(error){
        res.status(500).json({
            sucess:false,
            message:err.message
        });
    }
});

module.exports = router;