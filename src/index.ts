import express from "express";
import { GradientQueryParams } from "types";
import { createGradient } from "./gradient";
import { processParams } from "./shared";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Worlds!");
});

app.get("/gradient", (req, res) => {
  // TODO always have to be two points at min and max position if not present fill it with white gradient
  const config = processParams(req.query as GradientQueryParams);
  const gradientBuffer = createGradient(config);
  res.write(gradientBuffer);
  res.end();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
