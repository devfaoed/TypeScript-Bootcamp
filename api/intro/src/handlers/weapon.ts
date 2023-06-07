import express from "express";
const weaponRouthe = express.Router();
import jwt from "jsonwebtoken";

// database modle importation
import Weapon from "../models/weapon";

weaponRouthe.post("/products", async (req, res) => {
  const newFantansy = {
    name: req.body.name,
    type: req.body.type,
    weight: req.body.weight,
  };

  try {
    const very = jwt.verify(req.body.token, "process.env.app.secret.ENCRYPT");
  } catch (err) {
    return res.status(401).json(`invaliid token ${err}`);
  }
  try {
    const weapons = await Weapon.create(newFantansy);
    res.status(200).send(weapons);
  } catch (err) {
    throw new Error(`unable to create weapons ${err}`);
  }
});

weaponRouthe.get("/index", async (req, res) => {
  try {
    const weapons = await Weapon.find({});
    res.status(200).send(weapons);
    console.log(`${req.url} visited`);
  } catch (err) {
    throw new Error(`unable to get ${req.url}  ${err}`);
  }
});

export default weaponRouthe;
