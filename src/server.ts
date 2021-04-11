import express from "express";
import volleyball from "volleyball";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(volleyball);

app.use(router);

app.listen("3000", () => {
  console.log("App listenig to port 3000.");
});
