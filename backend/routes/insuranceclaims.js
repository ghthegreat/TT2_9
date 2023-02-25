import express from 'express';
import mysql from "mysql";
import moment from "moment"; 
import {create,remove,userInsurance,userClaims} from "../controllers/controller.js"

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
router.get("/", (req, res) => {
  res.send("Default page");
});
router.post("/create", create);
router.delete("/delete", remove);
router.get("/insuranceNo", userInsurance)
router.get("/claimsNo", userClaims)

router.patch("/editclaims", (req, res) => {
    const claimId = req.body.claimID;
    const claimAmt = req.body.claimAmt;
    const purpose = req.body.purpose;
    const currentTime = updateStamp();

    db.query("UPDATE InsuranceClaims SET Amount =?, Purpose=?, LastEditedClaimDate = CONVERT_TZ(NOW(), 'UTC', '+8:00') WHERE ClaimID = ?", [claimAmt, purpose, claimId],async (err,results) =>{
        if(err){
            console.log(err.message)
            res.status(404).json({message: "User does not exists"})
        } else{
            console.log(results)
            res.status(200).json(results[1])
        }
          
    })

})

function updateStamp() {
    var stamp = moment().format("YYYY-MM-DD HH:MM:SS");
    return stamp
}

//route is localhost::5000/claims
router.get('/getClaims', async (req, res) => {
    const id = req.body.employeeId
    db.query('SELECT * FROM InsurancePolicies IP RIGHT JOIN InsuranceClaims IC on IC.InsuranceID = IP.InsuranceID WHERE IP.EmployeeID = ?', id ,async (err,results) =>{
        if(err)
            console.log(err.message)
        console.log(results)
        res.status(200).json(results)
    })
});

export default router;
