import config from 'dotenv';
import express from "express";
import mysql from 'mysql';
import cookieParser from 'cookie-parser';
import claimsRoutes from "./routes/insuranceclaims.js"

const app = express()
const PORT = 5000
//const cookieParser = require('cookie-parser')


const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PW,
    database: process.env.DATABASE_NAME,
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