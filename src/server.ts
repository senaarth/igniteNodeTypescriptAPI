import express from "express";
import swaggerUi from "swagger-ui-express";
import volleyball from "volleyball";

import { router } from "./routes";
import swaggerFile from "../swagger.json";

const app = express();

app.use(express.json());
app.use(volleyball);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen("3333", () => {
  console.log("App listenig to port 3333.");
});
