import express from "express";
import { createGradient } from "./gradient";
import { processParams } from "./shared";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Worlds!");
});

app.get("/gradient", (req, res) => {
  // TODO get params from query and generate correct map for color gradients
  // TODO always have to be two points at min and max position if not present fill it with white gradient
  const points = [
    { x: 0, y: 0, color: "#F2F2F7" },
    { x: 200, y: 0, color: "#E67669" },
    { x: 100, y: 200, color: "#776EDD" },
    // { x: 300, y: 200, color: "#FAB555" },
    { x: 500, y: 300, color: "#FFFFFF" },
  ];
  const config = processParams(req.query);
  const gradientBuffer = createGradient({ ...config, points });
  res.write(gradientBuffer);
  res.end();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
