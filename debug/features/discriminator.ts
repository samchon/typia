import typia from "typia";

interface Point {
  type: "point";
  x: number;
  y: number;
}
interface Line {
  type: "line";
  p1: Point;
  p2: Point;
}
interface Triangle {
  type: "triangle";
  p1: Point;
  p2: Point;
  p3: Point;
}
interface Rectangle {
  type: "rectangle";
  p1: Point;
  p2: Point;
  p3: Point;
  p4: Point;
}
interface Polyline {
  type: "polyline";
  points: Point[];
}
interface Circle {
  radius: number;
}

console.log(
  typia.json.application<[Point | Line | Triangle | Rectangle | Polyline]>()
    .schemas[0],
  typia.json.application<
    [Point | Line | Triangle | Rectangle | Polyline | null]
  >().schemas[0],
  typia.json.application<
    [Point | Line | Triangle | Rectangle | Polyline | Circle]
  >().schemas[0],
);
