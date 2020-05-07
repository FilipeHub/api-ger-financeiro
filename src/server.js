require('dotenv').config({  
    path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"
});

const mongoose = require('mongoose');

const app = require('./app');

mongoose.connect(process.env.DB_CONNECTION, 
    {useNewUrlParser:true,
        useCreateIndex: true,
        useUnifiedTopology: true});
        
const http = require('http').createServer(app);


//Running the server
http.listen(process.env.PORT, () => {
    console.log("Server is running on port ", process.env.PORT);
});

