// const express = require('express'); -> commonjs module -> outdated
import express from 'express'; // -> es module -> modern
import connectDB from './config/database.js';
// require('dotenv').config(); -> older approach to load .env variables

// import dotenv from 'dotenv';
// dotenv.config(); -> old approach to load .env variables

import HANDLERS from './handlers/index.js';
import errorMiddleware from './middlewares/error.js';

const app = express();
const port = process.env.PORT;

// old approach
function helloWorldOld(req, res) {
  res.send('Hello World!');
}

// new approach
// named function
const helloWorldNew = (req, res) => {
  res.send('Hello Again, World!');
};

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.get('/', helloWorldNew);

connectDB();

app.use(express.json()); //this make sure that the request body is parsed as JSON and available in req.body 
app.use("/", HANDLERS); // this will mount the handlers on the root path, so all the routes defined in the handlers will be accessible from the root path
app.use(errorMiddleware); // this will handle any errors that occur in the handlers and send a proper response to the client

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});