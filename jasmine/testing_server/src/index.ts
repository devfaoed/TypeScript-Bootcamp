import express from "express";
// seeting up app endpoint
const app = express();

// setting up server port
const port = 8000;

// default endpoint
app.get("/api", async (req, res) => {
  try {
    await res.status(200).send("hello world");
  } catch (err) {
    err;
  }
});

// listen server on port
app.listen(port, () => {
  console.log(`server started successfully on ${port}`);
});

export default app;
