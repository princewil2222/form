const express = require('express');
const dotenv = require('dotenv')
const connectDB = require('./config/db'); 
const routes = require('./routes/index');
dotenv.config('.env')

const app = express();
connectDB();

// parse request of content type application/json
app.use(express.json());
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(express.urlencoded({extended: true}));

// connecting to the api route
app.use('/api/students', routes);

app.get('/', (req, res) =>{
    // res.render('home');
    res.render('index')
})

// Static file
// app.use(express.static('public'))

// parse requests of conntent type application/x-www-form




const PORT = process.env.PORT||5000;
app.listen(PORT,() =>{
    console.log(`Server is running on port:${PORT}`);
})