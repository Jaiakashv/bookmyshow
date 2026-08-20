const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const movieRoutes =  require("./routes/movieRoutes");
const bookingRoutes =  require("./routes/bookingRoutes");

const app = express();


//middleware

app.use(cors());
app.use(express.json());

//mongodb connection
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("mongodb connected"))
.catch((err)=>console.log(err));

//routes

app.use("/api/movies",movieRoutes);
app.use("/api/bookings",bookingRoutes);

//Home routes
app.get("/",(req,res)=>{
    res.send("backend running")
});

//server

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
});