const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie");

//get api for all movies

router.get("/",async(req,res)=>{
    try{
        const movies = await movies.find();
        res.json(movies);
    }
    catch(error){
        res.status(500).json({
            message: err.message
        });
    }
});

//get one movies by id

router.get("/:id", async(req,res)=>{
    try{
        const movie = await Movie.findById(req.params.id);
        res.json(movie);
    }
    catch(error){
        res.status(500).json({
            message:err.message
        });
    }
});

module.exports = router;