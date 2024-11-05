const mongoose = require('mongoose');
require('dotenv').config()

const db = process.env.db

mongoose.connect(db)
.then(()=>{
    console.log(`Database connected`);
    
})
.catch((error) =>{
    console.log('Error connecting to database: ' + error.message);
    
})