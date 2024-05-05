const dotenv = require("dotenv");
dotenv.config();
const mongoose = require('mongoose');


const URI = 
    "mongodb+srv://cabetlee:bob@cluster0.r3txaga.mongodb.net/";

const connectDB = async () => {
    await mongoose.connect(URI);
    console.log('MongoDB connected...!')
};

module.exports = connectDB