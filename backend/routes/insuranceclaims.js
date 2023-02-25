import express from 'express';
import mysql from "mysql";

const router = express.Router();

const db = mysql.createConnection({
    host: "awshackathondb.cnpaqptltymp.ap-northeast-1.rds.amazonaws.com",
    user: "root",
    password: "hackathon",
    database: "InsuranceData",
    port: 3306
})

// will start with /claims

//route is localhost::5000/claims
router.get('/', (req, res) => {
    res.send("Default page")
});

router.patch("/editclaims", (req, res) => {
    const claimId = req.body.claimID;
    const claimAmt = req.body.claimAmt;
    const purpose = req.body.purpose;

    

})


export default router;