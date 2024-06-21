const express = require('express');
const app = express();
const path = require('path');
const listRoutes= require('./routes/listRoutes');
const mongoose = require('mongoose')

app.use(express.json());

app.use('/api/list', listRoutes);
require('dotenv').config();

app.set("view engine", "ejs");

app.use(express.static("public"));







//Connect Database
mongoose.connect(process.env.DB_URI)
.then(() => {
    console.log('Connected to database') 
}).catch(err => console.error(err));

app.listen(3000,()=>{
    console.log('server is running on port 3000')
});