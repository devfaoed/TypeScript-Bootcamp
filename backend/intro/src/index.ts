import express from "express";

// const express = require('express')

// route importation
import route from "./routes/index";

const app = express();
const port = 5000;

app.use("/", route);

app.listen(port, () => {
  console.log(`server is running on port http://localhost:${port}`);
});
