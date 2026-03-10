import typia from "typia";

export const test_llm_coerce_json_strignify_overlapped = (): void => {
  const circle: ICircle = {
    type: "circle",
    center: JSON.stringify(typia.random<IPoint>()) as any,
    radius: JSON.stringify(5) as any,
  };
  const triangle: ITriangle = {
    type: "triangle",
    p1: JSON.stringify(typia.random<IPoint>()) as any,
    p2: {
      type: "point",
      x: "3" as any,
      y: 4,
    } satisfies IPoint,
    p3: typia.random<IPoint>(),
  };
  const rectangle: IRectangle = {
    type: "rectangle",
    p1: JSON.stringify(typia.random<IPoint>()) as any,
    p2: {
      type: "point",
      x: "3" as any,
      y: 4,
    } satisfies IPoint,
  };

  const brokenWorld: IWorld = {
    shapes: [circle, triangle, rectangle].map(
      (s) => JSON.stringify(s) as any as IShape,
    ),
  };
  const coerced: IWorld = typia.llm.coerce<IWorld>(brokenWorld);
  typia.assert(coerced);
};

interface IWorld {
  shapes: IShape[];
}

type IShape = IPoint | ICircle | ITriangle | IRectangle | IPolyline | IPolygon;
interface IPoint {
  type: "point";
  x: number;
  y: number;
}
interface ICircle {
  type: "circle";
  center: IPoint;
  radius: number;
}
interface ITriangle {
  type: "triangle";
  p1: IPoint;
  p2: IPoint;
  p3: IPoint;
}
interface IRectangle {
  type: "rectangle";
  p1: IPoint;
  p2: IPoint;
}
interface IPolyline {
  type: "polyline";
  points: IPoint[];
}
interface IPolygon {
  type: "polygon";
  outer: IPoint[];
  inner: IPoint[][];
}
