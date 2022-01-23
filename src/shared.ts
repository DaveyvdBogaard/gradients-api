import { GradientConfig, GradientPoint } from "./types";

export const processParams = (queryParams: any): GradientConfig => {
  const formattedPoints: GradientPoint[] = [];
  return {
    width: Number(queryParams.width),
    height: Number(queryParams.height),
    noise: queryParams.noise === "true",
    points: formattedPoints,
  };
};
