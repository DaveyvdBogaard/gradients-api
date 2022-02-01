export type GradientQueryParams = {
  width: string;
  height: string;
  x: string[];
  y: string[];
  color: string[];
  noise?: string;
};

export type GradientConfig = {
  width: number;
  height: number;
  points: GradientPoint[];
  noise?: boolean;
};

export type GradientPoint = { x: number; y: number; color: string };
