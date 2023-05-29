import express from "express";
const ApiRoute = express.Router();

// importing image api route
import imageRoute from "./api/imageRoute";

// importing logger middleware
import logger from "../utils/logger";

ApiRoute.get("/", async (req, res) => {
  try {
    res.redirect("/api");
  } catch (err) {
    err;
  }
});

ApiRoute.get("/api", logger,  async (req, res) => {
  try {
    res.status(200).send("welcome to image processing api");
  } catch(err) {
    
  }
});

ApiRoute.use("/api", logger, imageRoute);

export default ApiRoute