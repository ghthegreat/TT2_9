import dotenv from 'dotenv';
import express from "express";
import mysql from 'mysql2';
import cookieParser from 'cookie-parser';
import claimsRoutes from "./routes/insuranceclaims.js"
import authRoutes from "./routes/authentication.js"
import cors from 'cors'

dotenv.config()

const app = express()
const PORT = 5000

const db = mysql.createConnection({
    host: "awshackathondb.cnpaqptltymp.ap-northeast-1.rds.amazonaws.com",
    user: "root",
    password: "hackathon",
    database: "InsuranceData",
    port: 3306
})

console.log(process.env.DATABASE_HOST)
db.connect((err) => 
{
    if(err)
        console.log(err.message)
    else
        console.log('database connected')
})

app.use(cors());
app.use(cookieParser())
app.set('view-engine', 'html')
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

//routes
app.use('/auth',authRoutes)
app.use("/claims", claimsRoutes);
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));