import express from "express";
import { createGradient } from "./gradient";
import { processGradient } from "./image-processor";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Worlds!");
});

app.get("/gradient", (req, res) => {
  // TODO get params from query and generate correct map for color gradients
  const points = [
    { x: 0, y: 0, color: "#FFFFFF" },
    { x: 200, y: 0, color: "#E67669" },
    { x: 100, y: 200, color: "#776EDD" },
    { x: 500, y: 300, color: "#FFFFFF" },
  ];
  const gradientBuffer = createGradient({ width: 500, height: 300, points, noise: true });
  res.write(gradientBuffer);
  res.end();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
