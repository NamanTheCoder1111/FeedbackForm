const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://njnamanjain12:40wlw4pGk3gzP2sP@cluster0.vvcxvby.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log('Connected to database');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});