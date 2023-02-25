import mysql from "mysql";

const db = mysql.createConnection({
  host: "awshackathondb.cnpaqptltymp.ap-northeast-1.rds.amazonaws.com",
  user: "root",
  password: "hackathon",
  database: "InsuranceData",
  port: 3306,
});

export const create = (req, res) => {
  //console.log(req.body);
  // missing data condition
  //const claimID = req.body.claimID;
  const {insuranceID, firstName, lastName, date, claimAmt, purpose, followUp, previousClaimId} = req.body;
  const status = "Pending"

  db.query(
    "INSERT INTO InsuranceClaims SET InsuranceID = ?, FirstName = ?, LastName =?, ExpenseDate = ?, Amount = ?, Purpose = ?, FollowUp = ?, PreviousClaimID=?, Status = ?, LastEditedClaimDate = CONVERT_TZ(NOW(), 'UTC', '+8:00')",
    [insuranceID, firstName, lastName, date, claimAmt, purpose, followUp, previousClaimId, status],
    async (err, result) => {
      if (err) {
        console.log(err.message);
        res.status(404).json({message: "Claim not created"})
      }else{
        console.log(result);
        res.status(200).json({data: result})
      }
    }
  )
};

function updateStamp() {
  var stamp = moment().format("YYYY-MM-DD HH:MM:SS");
  return stamp
}


export const remove = (req, res) => {
  console.log(req.body);
  // missing data condition
  const claimID = req.body.claimID;
  db.query(
    "DELETE FROM InsuranceClaims WHERE ClaimID = ?",
    claimID,
    async (err, result) => {
      if (err) {
        console.log(err.message)
        res.status(404).json({message: "User not found"})
      }
        else{
          console.log(result);
          res.status(200).json({message:"User deleted"})
        }
    }
  )
};

export const userInsurance = (req, res) => {
  const employeeID = req.body.userID;
  db.query("SELECT InsuranceID, InsuranceType FROM InsurancePolicies WHERE EmployeeID = ?", employeeID, async(err, result) => {
    if (err) {
      console.log(err.message)
      res.status(404).json({message: "User not found"})
    }
      else{
        console.log(result);
        res.status(200).json({data:result})
      }
  })

}

export const userClaims = (req, res) => {
  const insuranceID = req.body.insuranceID;
  db.query("SELECT ClaimID FROM InsuranceClaims WHERE InsuranceID = ?", insuranceID, async(err, result) => {
    if (err) {
      console.log(err.message)
      res.status(404).json({message: "User not found"})
    }
      else{
        console.log(result);
        res.status(200).json({data:result})
      }
  })

}