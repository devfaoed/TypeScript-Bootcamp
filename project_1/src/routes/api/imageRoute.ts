import express from "express";

const imageRoute = express.Router();

imageRoute.get("/images", async (req, res) => {
  try {
    res.status(200).send("this route display all image");
  } catch (err) {
    err;
  }
});

export default imageRoute;
