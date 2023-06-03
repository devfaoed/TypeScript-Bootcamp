import express from "express"
const app = express()

const port = 3000

app.get("/",async (req, res) => {
    try {
        res.status(200).send("hello world")
    } catch (error) {
        error
    }
})

app.listen(port, () => {
    console.log(`application running successfully on port http://localhost/${port}`)
})