import expess from "express";
const app = expess();
const port = 4500;

// import image index route
import ApiRoute from "./routes";

app.use("/", ApiRoute);

app.listen(port, () => {
  console.log(`server started successfully on http://localhost:${port}`);
});


export default app