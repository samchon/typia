import { z } from "zod";

const Point = z.object({
  x: z.number(),
  y: z.number(),
  slope: z.union([z.null(), z.undefined(), z.number()]),
});
const Circle = z.object({
  centroid: z.union([z.undefined(), Point]),
  radius: z.number(),
});
const Line = z.object({
  p1: Point,
  p2: Point,
  distance: z.union([z.null(), z.undefined(), z.number()]),
});
const Triangle = z.object({
  p1: Point,
  p2: Point,
  p3: Point,
  width: z.union([z.null(), z.undefined(), z.number()]),
  height: z.union([z.null(), z.undefined(), z.number()]),
  area: z.union([z.null(), z.undefined(), z.number()]),
});
const Rectangle = z.object({
  p1: Point,
  p2: Point,
  p3: Point,
  p4: Point,
  width: z.union([z.null(), z.undefined(), z.number()]),
  height: z.union([z.null(), z.undefined(), z.number()]),
  area: z.union([z.null(), z.undefined(), z.number()]),
});
const Polyline = z.object({
  points: z.array(Point),
  length: z.union([z.null(), z.undefined(), z.number()]),
});
const Polygon = z.object({
  outer: Polyline,
  inner: z.union([z.array(Polyline), z.undefined()]),
  area: z.union([z.null(), z.undefined(), z.number()]),
});

const Union = z.union([
  Point,
  Line,
  Triangle,
  Rectangle,
  Polyline,
  Polygon,
  Circle,
]);

export const ZodObjectUnionImplicit = z.array(Union);
