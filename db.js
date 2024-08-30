// express + mongodb

const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Load the environment variables

const uri = process.env.DB_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(uri , 
        {useNewUrlParser: true, 
        useUnifiedTopology: true
    });
    console.log("MongoDB Connected")
    }
    catch (error) {
        console.error(error.message);
        process.exit(1);
    } 
}

module.exports = connectDB;