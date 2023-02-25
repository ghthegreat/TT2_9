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
    const id = req.body.employeeId
    db.query('SELECT * FROM InsurancePolicies IP RIGHT JOIN InsuranceClaims IC on IC.InsuranceID = IP.InsuranceID WHERE IP.EmployeeID = ?', id ,async (err,results) =>{
        if(err)
            console.log(err.message)
        console.log(results)
        res.status(200).json(results)
    })
});
export default router;