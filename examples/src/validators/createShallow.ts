import typia from "typia";

interface Circle {
  type: "circle";
  radius: number;
}
interface Square {
  type: "square";
  side: number;
}
type Shape = Circle | Square;

export const isShape = typia.createShallow<Shape, 1>();
