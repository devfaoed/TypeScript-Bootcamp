import express from "express";
const teacherRoute = express.Router();

teacherRoute.get("/teachers", async (req, res) => {
  try {
    res.status(200).send("welcome to the teacher portal");
  } catch (err) {
    err;
  }
});

export default teacherRoute;
