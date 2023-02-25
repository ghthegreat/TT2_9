import express from "express";
import { create, remove, userInsurance, userClaims } from "../controllers/controller.js";
const router = express.Router();

// will start with /claims

//route is localhost::5000/claims
router.get("/", (req, res) => {
  res.send("Default page");
});
router.post("/create", create);
router.delete("/delete", remove);
router.get("/insuranceNo", userInsurance)
router.get("/claimsNo", userClaims)

export default router;
