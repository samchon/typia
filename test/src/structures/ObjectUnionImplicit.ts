import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export type ObjectUnionImplicit = Array<
  | ObjectUnionImplicit.IPoint
  | ObjectUnionImplicit.ILine
  | ObjectUnionImplicit.ITriangle
  | ObjectUnionImplicit.IRectangle
  | ObjectUnionImplicit.IPolyline
  | ObjectUnionImplicit.IPolygon
  | ObjectUnionImplicit.ICircle
>;
export namespace ObjectUnionImplicit {
  export interface IPoint {
    x: number;
    y: number;
    slope?: undefined | number | null;
  }
  export interface ILine {
    p1: IPoint;
    p2: IPoint;
    width?: undefined | number | null;
    distance?: undefined | number | null;
  }
  export interface ITriangle {
    p1: IPoint;
    p2: IPoint;
    p3: IPoint;
    width?: undefined | number | null;
    height?: undefined | number | null;
    area?: undefined | number | null;
  }
  export interface IRectangle {
    p1: IPoint;
    p2: IPoint;
    p3: IPoint;
    p4: IPoint;
    width?: undefined | number | null;
    height?: undefined | number | null;
    area?: undefined | number | null;
  }
  export interface IPolyline {
    points: IPoint[];
    length?: undefined | number | null;
  }
  export interface IPolygon {
    outer: IPolyline;
    inner?: undefined | IPolyline[];
    area?: undefined | number | null;
  }
  export interface ICircle {
    radius: number;
    centroid?: undefined | IPoint;
    area?: undefined | number | null;
  }

  export function generate(): ObjectUnionImplicit {
    return [
      {
        ...point(),
      },
      {
        p1: point(),
        p2: point(),
        distance: scalar(),
      },
      {
        p1: point(),
        p2: point(),
        p3: point(),
        width: scalar(),
        height: scalar(),
        area: scalar(),
      },
      {
        p1: point(),
        p2: point(),
        p3: point(),
        p4: point(),
        width: scalar(),
        height: scalar(),
        area: scalar(),
      },
      {
        points: TestRandomGenerator.array(() => point(), 10),
        length: scalar(),
      },
      {
        outer: {
          points: TestRandomGenerator.array(() => point(), 10),
        },
        inner: [
          {
            points: TestRandomGenerator.array(() => point(), 10),
          },
          {
            points: TestRandomGenerator.array(() => point(), 10),
          },
        ],
        area: scalar(),
      },
      {
        centroid: point(),
        radius: TestRandomGenerator.integer(),
        area: scalar(),
      },
    ];
  }

  export function trail(): ObjectUnionImplicit {
    const data: ObjectUnionImplicit = ObjectUnionImplicit.generate();
    data.push({
      p1: point(),
      p2: point(),
      p3: point(),
      p4: point(),
      width: scalar(),
      height: scalar(),
      area: "wrong" as any,
    });
    return data;
  }

  export const SPOILERS: Spoiler<ObjectUnionImplicit>[] = [
    (input) => {
      // point
      (input[0] as ObjectUnionImplicit.IPoint).x = {} as any;
      return ["$input[0].x"];
    },
    (input) => {
      // line
      (input[1] as ObjectUnionImplicit.ILine).p2 = [] as any;
      return ["$input[1].p2.x", "$input[1].p2.y"];
    },
    (input) => {
      // triangle
      (input[2] as ObjectUnionImplicit.ITriangle).p3 = null!;
      return ["$input[2].p3"];
    },
    (input) => {
      // rectangle
      (input[3] as ObjectUnionImplicit.IRectangle).p4 = null!;
      return ["$input[3].p4"];
    },
    (input) => {
      // polyline
      (input[4] as ObjectUnionImplicit.IPolyline).points = 3 as any;
      return ["$input[4].points"];
    },
    (input) => {
      // polygon
      (input[5] as ObjectUnionImplicit.IPolygon).outer = {} as any;
      return ["$input[5].outer.points"];
    },
    (input) => {
      // circle
      (input[6] as ObjectUnionImplicit.ICircle).radius = "string" as any;
      return ["$input[6].radius"];
    },
  ];

  export const BINARABLE = false;
}

const point = (): ObjectUnionImplicit.IPoint => ({
  x: TestRandomGenerator.integer(),
  y: TestRandomGenerator.integer(),
  slope: scalar(),
  ...{
    __cache: undefined,
  },
});

const scalar = (): number | null | undefined =>
  Math.random() < 1 / 3
    ? null
    : Math.random() < 0.5
      ? TestRandomGenerator.integer()
      : undefined;
