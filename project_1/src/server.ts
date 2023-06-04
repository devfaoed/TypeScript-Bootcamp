import expess from "express";
const app = expess();
const port = 5000;

import ejs from "ejs";
import path from "path";

// import image index route
import ApiRoute from "./routes";

app.set("views", path.join(__dirname, "views"))
app.set("public", path.join(__dirname, "public"))
app.set("view engine", "ejs");

app.use("/", ApiRoute);

app.listen(port, () => {
  console.log(`server started successfully on http://localhost:${port}`);
});

export default app;
