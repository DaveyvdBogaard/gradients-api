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

export const parsePoints = (points: any): GradientPoint[] => {
  // FROM
  // x: [ '0', '500' ],
  // y: [ '0', '300' ],
  // color: [ '#FFFFFF', '#FAB555' ]
  // TO
  // [
  // { x: 0, y: 0, color: "#FFFFFF" },
  // { x: 500, y: 300, color: "#FAB555" },
  //   ]

  return [];
};
