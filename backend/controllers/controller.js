import mysql from "mysql";

const db = mysql.createConnection({
  host: "awshackathondb.cnpaqptltymp.ap-northeast-1.rds.amazonaws.com",
  user: "root",
  password: "hackathon",
  database: "InsuranceData",
  port: 3306,
});

export const create = (req, res) => {
  console.log(req.body);
  // missing data condition
  const claimID = req.body.claimID;
  db.query(
    "INSERT INTO InsuranceClaims SET ?",
    claimID,
    async (err, result) => {
      if (err) {
        console.log(err.message);

        console.log(result);
      };
    };
  );
};

export const delete = (req, res) => {
  console.log(req.body);
  // missing data condition
  const claimID = req.body.claimID;
  db.query(
    "INSDELETE FROM InsuranceClaims WHERE ClaimID = ?",
    claimID,
    async (err, result) => {
      if (err) {
        console.log(err.message);

        console.log(result);
      };
    };
  );
};