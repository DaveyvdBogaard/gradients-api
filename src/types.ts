export type GradientConfig = {
  width: number;
  height: number;
  points: GradientPoint[];
  noise?: boolean;
};

export type GradientPoint = { x: number; y: number; color: string };
