//const  express= require('express'); //Import the expree library commonjs module outdated
import express from 'express'; //  import the express library using ES modules
import connectDB from './config/database.js';

// import dotenv from 'dotenv'; // -> es modules modern 
// require('dotenv').config(); //to old approach to load  environment variables from a .env file
// dotenv.config(); //old approach to load  environment variables from a .env file

//const->immutable , let->mutable
//everything in js is object
//$() this is a function that takes a string as an argument and returns an object that represents the express application

const  app = express(); // this creates an instance of the express application

const port = process.env.PORT; // this is the port number on which the server will listen for incoming requests

//old approach
function helloWorldOld(req,res){
    res.send('Hello World');
}

//new approach arrow function
//named approach
const helloWorldNew = (req,res) => {
    res.send('Hello Again, World');
}

// app.get('/',(req,res)=>{ 
//     res.send('Hello World'); 
// });

app.get('/',helloWorldNew); // '/' is the root route of the application, and helloWorldNew is the callback function that will be executed when a GET request is made to this route

connectDB();

app.listen(port,() =>{ 
    console.log(`Example app listening at http://localhost:${port}`); 
});