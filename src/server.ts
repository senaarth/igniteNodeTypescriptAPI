import express from "express";
import volleyball from "volleyball";
import { categoriesRouter } from "./routes/categories.routes";

const app = express();

app.use(express.json());
app.use(volleyball);

app.get("/", (req, res) => {
  return res.json({ message: "Hello World!" });
});

app.use("/categories", categoriesRouter);

app.listen("3000", () => {
  console.log("App listenig to port 3000.");
});
