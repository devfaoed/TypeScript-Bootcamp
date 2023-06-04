import express from "express";
const app = express();

import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

// configuring file with .env extension
dotenv.config();

const port = 3000;

const db = process.env;

// database configuration and connection
mongoose
  .connect("mongodb://127.0.0.1:27017/fantansy_worlds")
  .then((con) => {
    console.log("mongoose database connected successfully");
  })
  .catch((err) => {
    console.log("unable to connect to database");
  });

// importing handlers 
import weaponRouthe from "./handlers/weapon";

app.use(bodyParser.json());

app.use("/api", weaponRouthe)

app.get("/", async (req, res) => {
  try {
    res.status(200).send("hello world");
  } catch (error) {
    error;
  }
});

app.listen(port, () => {
  console.log(
    `application running successfully on port http://localhost:${port}`
  );
});
