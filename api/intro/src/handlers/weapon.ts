import express from "express";
const weaponRouthe = express.Router();

// database modle importation
import fanatasy from "../models/weapon";

weaponRouthe.post("/index", async (req, res) => {
  try {
    const newFantansy = {
      name: req.body.name,
      type: req.body.type,
    };
    const weapons = await fanatasy.create(newFantansy);
    res.status(200).send(weapons);
  } catch (err) {
    throw new Error(`unable to create weapons ${err}`);
  }
});

weaponRouthe.get("/products", async (req, res) => {
  try {
    const weapons = await fanatasy.find({});
    res.status(200).send(weapons);
    console.log(`${req.url} visited`)
  } catch (err) {
    throw new Error(`unable to get ${req.url}  ${err}`);
  }
});


export default weaponRouthe