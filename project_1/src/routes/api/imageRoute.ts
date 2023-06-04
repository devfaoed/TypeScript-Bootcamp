import express from "express";
import Image from "image-js";
const imageRoute = express.Router();

// geta all images
imageRoute.get("/images", async (req, res) => {
  try {
    res.status(200).render("images");
  } catch (err) {
    err;
  }
});

// get a specific image and reseize
// imageRoute.get("/image/pro",  async(req, res) => {
//  try{
//   let image = await Image.load('img/bird.jpg');
//     let grey = image
//       .grey() // convert the image to greyscale.
//       .resize({ width: 20 }) // resize the image, forcing a width of 200 pixels. The height is computed automatically to preserve the aspect ratio.
//       .rotate(30); // rotate the image clockwise by 30 degrees.
//     return grey.save('img/full/bird.jpg');
//     res.status(200).send("image process successfully")
//   }catch(error){
//     console.log(error)
//  }
// // execute().catch(console.error);

// // async function execute() {
// //   let image = await Image.load('img/bird.jpg');
// //   let grey = image
// //     .grey() // convert the image to greyscale.
// //     .resize({ width: 200 }) // resize the image, forcing a width of 200 pixels. The height is computed automatically to preserve the aspect ratio.
// //     .rotate(30); // rotate the image clockwise by 30 degrees.
// //   return grey.save('img/full/bird.jpg');
// // }
// });

export default imageRoute;
