import { GradientConfig, GradientPoint } from "./types";

export const processParams = (queryParams: any): GradientConfig => {
  const formattedPoints: GradientPoint[] = queryParams;

  return {
    width: Number(queryParams.width),
    height: Number(queryParams.height),
    noise: queryParams.noise === "true",
    points: formattedPoints,
  };
};

export const parsePoints = (x: string[], y: string[], color: string[]): GradientPoint[] => {
  // FROM
  // x: [ '0', '500' ],
  // y: [ '0', '300' ],
  // color: [ '#FFFFFF', '#FAB555' ]
  // TO
  // [
  // { x: 0, y: 0, color: "#FFFFFF" },
  // { x: 500, y: 300, color: "#FAB555" },
  //   ]
  // const lengths = [x.length, y.length, color.length]
  // const length = lengths.every((l) => )
  // console.log(x.entries(), y.entries(), color.entries());
  const a: GradientPoint[] = [];
  x.map((x, i) => {
    a.push({ x: Number(x), y: Number(y[i]), color: color[i] });
  });
  return a;
};
