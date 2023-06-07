import express from "express"
const userRouthe = express.Router();


import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

// import user database model
import User from "../models/user";

userRouthe.post("/signup", async (req, res) => {
    try {
        const salting = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(req.body.password, salting)
        const newUser = {
            name: req.body.name,
            email: req.body.email,
            password: hash
        }
        
        const user = await User.create(newUser);
        const token = jwt.sign({iuser:user}, "process.env.app.secret.ENCRYPT")
        res.status(201).json(token)
        console.log(user)
    } catch (error) {
        console.log(error)
    }
})


export default userRouthe