import { z } from "zod";

const Point = z.object({
  x: z.number(),
  y: z.number(),
});
const Circle = z.object({
  centroid: Point,
  radius: z.number(),
});
const Line = z.object({
  p1: Point,
  p2: Point,
});
const Triangle = z.object({
  p1: Point,
  p2: Point,
  p3: Point,
});
const Rectangle = z.object({
  p1: Point,
  p2: Point,
  p3: Point,
  p4: Point,
});
const Polyline = z.object({
  points: z.array(Point),
});
const Polygon = z.object({
  outer: Polyline,
  inner: z.array(Polyline),
});

const Union = z.union([
  Point.extend({
    type: z.literal("point"),
  }),
  Line.extend({
    type: z.literal("line"),
  }),
  Triangle.extend({
    type: z.literal("triangle"),
  }),
  Rectangle.extend({
    type: z.literal("rectangle"),
  }),
  Polyline.extend({
    type: z.literal("polyline"),
  }),
  Polygon.extend({
    type: z.literal("polygon"),
  }),
  Circle.extend({
    type: z.literal("circle"),
  }),
]);

export const ZodObjectUnionExplicit = z.array(Union);
