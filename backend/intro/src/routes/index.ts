import express from "express";

// setting up routes
const route = express.Router();

// student route importation
import studentRoute from "./api/students";

// teacher routhe importation
import teacherRoute from "./api/teachers";

// import loger middleware
import loger from "../util/logger";

route.get("/api", loger, async (req, res) => {
  try {
    res.status(200).send("hello world!");
  } catch (err) {}
});

route.use("/api", loger, studentRoute);
route.use("/api", loger, teacherRoute);

export default route;
