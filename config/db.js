const dotenv = require('dotenv')
const mongoose = require('mongoose');
const connectDB = async() =>{
    try{
        const conn = await mongoose.connect("mongodb+srv://princewilh:secured@2019@cluster0.1o4dy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`Mongo DB is connected: ${conn.connection.host}`);
    }catch (err){
        console.log(err);
        process.exit(1)
    }
}

module.exports = connectDB