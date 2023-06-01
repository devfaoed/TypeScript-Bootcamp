import express from "express";
import sharp from "sharp";

const imageRoute = express.Router();

// geta all images
imageRoute.get("/images", async (req, res) => {
  try {
    res.status(200).send("this route display all image");
  } catch (err) {
    err;
  }
});

// get a specific image and reseize
imageRoute.get("/image/reseize", async (req, res) => {
  try {
    const reseize = await sharp("../asset/img/full/hero-cover-01.jpg")
      .rotate()
      .resize(200, 200)
      .toFile("../asset/img/reseize/hero-cover-01.jpg");
    res.status(200).send(reseize);
    console.log("image processed successfully");
  } catch (err) {
    err;
  }
});

export default imageRoute;
