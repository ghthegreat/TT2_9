import express from "express";
import bodyParser from "body-parser";
import sql from "mysql";

import claimsRoutes from "./routes/insuranceclaims.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/claims", claimsRoutes);
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));