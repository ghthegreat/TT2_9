//require('dotenv').config()
import config from 'dotenv';
import mysql from 'mysql';
import express from 'express';
import cookieParser from 'cookie-parser';
import claimsRoutes from './routes/insuranceclaims.js'

// const express = require('express')
// const mysql = require('mysql')
const app = express()
const PORT = 5000
// const cookieParser = require('cookie-parser')


const db = mysql.createConnection({
    host: 'awshackathondb.cnpaqptltymp.ap-northeast-1.rds.amazonaws.com',
    user: 'root',
    password: 'hackathon',
    database: 'InsuranceData',
    port: 3306
})

db.connect((err) => 
{
    if(err)
        console.log(err.message)
    else
        console.log('database connected')
})

app.use(cookieParser())
app.set('view-engine', 'html')
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

//routes
app.use("/claims", claimsRoutes);
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));