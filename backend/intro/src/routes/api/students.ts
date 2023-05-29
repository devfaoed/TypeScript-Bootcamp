import express from "express";
const studentRoute = express.Router();

studentRoute.get("/students", async (req, res) => {
  try {
    res.status(200).send("welcome to the student portal");
  } catch (err) {
    err;
  }
});

export default studentRoute;
