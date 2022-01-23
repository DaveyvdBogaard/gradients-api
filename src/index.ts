import express from "express";
import { createGradient } from "./gradient";
import { processGradient } from "./image-processor";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Worlds!");
});

app.get("/gradient", (req, res) => {
  const gradientBuffer = createGradient();
  res.write(gradientBuffer);
  res.end();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
