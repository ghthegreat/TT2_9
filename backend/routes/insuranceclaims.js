import express from 'express';

import mysql from 'mysql';
const router = express.Router();
// will start with /claims

const db = mysql.createConnection({
    host: 'awshackathondb.cnpaqptltymp.ap-northeast-1.rds.amazonaws.com',
    user: 'root',
    password: 'hackathon',
    database: 'InsuranceData',
    port: 3306
})


//route is localhost::5000/claims
router.get('/', (req, res) => {
    res.send("Default page")
});

//route is localhost::5000/claims
router.get('/getClaims', async (req, res) => {
    try{
        const id = req.body.employeeId
        const test = await db.query(`SELECT * FROM InsurancePolicies`)
        //const testing = await db.query(`SELECT * FROM InsurancePolicies IP RIGHT JOIN InsuranceClaims IC on IC.InsuranceID = IP.InsuranceID WHERE EmployeeID = ${id}`)
        console.log(test)
        // res.status(200).json({data: rows})
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json({message: err.message})
    }
});
export default router;