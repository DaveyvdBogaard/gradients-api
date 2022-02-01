import { GradientConfig, GradientPoint, GradientQueryParams } from "./types";

export const processParams = (queryParams: GradientQueryParams): GradientConfig => {
  const formattedPoints: GradientPoint[] = parsePoints(
    queryParams.x,
    queryParams.y,
    queryParams.color
  );

  return {
    width: Number(queryParams.width),
    height: Number(queryParams.height),
    noise: queryParams.noise === "true",
    points: formattedPoints,
  };
};

export const parsePoints = (x: string[], y: string[], color: string[]): GradientPoint[] => {
  const a: GradientPoint[] = [];
  x.map((x, i) => {
    a.push({ x: Number(x), y: Number(y[i]), color: color[i] });
  });
  return a;
};
