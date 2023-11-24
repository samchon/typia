import { IPointer } from "../helpers/IPointer";
import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export type ObjectUnionExplicitPointer = IPointer<
  Array<IPointer<ObjectUnionExplicitPointer.Shape>>
>;
export namespace ObjectUnionExplicitPointer {
  export type Shape =
    | ObjectUnionExplicitPointer.Discriminator<
        "point",
        ObjectUnionExplicitPointer.IPoint
      >
    | ObjectUnionExplicitPointer.Discriminator<
        "line",
        ObjectUnionExplicitPointer.ILine
      >
    | ObjectUnionExplicitPointer.Discriminator<
        "triangle",
        ObjectUnionExplicitPointer.ITriangle
      >
    | ObjectUnionExplicitPointer.Discriminator<
        "rectangle",
        ObjectUnionExplicitPointer.IRectangle
      >
    | ObjectUnionExplicitPointer.Discriminator<
        "polyline",
        ObjectUnionExplicitPointer.IPolyline
      >
    | ObjectUnionExplicitPointer.Discriminator<
        "polygon",
        ObjectUnionExplicitPointer.IPolygon
      >
    | ObjectUnionExplicitPointer.Discriminator<
        "circle",
        ObjectUnionExplicitPointer.ICircle
      >;

  export type Discriminator<Type extends string, T extends object> = T & {
    type: Type;
  };
  export interface IPoint {
    x: number;
    y: number;
  }
  export interface ILine {
    p1: IPoint;
    p2: IPoint;
  }
  export interface ITriangle {
    p1: IPoint;
    p2: IPoint;
    p3: IPoint;
  }
  export interface IRectangle {
    p1: IPoint;
    p2: IPoint;
    p3: IPoint;
    p4: IPoint;
  }
  export interface IPolyline {
    points: IPoint[];
  }
  export interface IPolygon {
    outer: IPolyline;
    inner: IPolyline[];
  }
  export interface ICircle {
    centroid: IPoint;
    radius: number;
  }

  export function generate(): ObjectUnionExplicitPointer {
    const shapes: Shape[] = [
      {
        type: "point",
        ...point(),
      },
      {
        type: "line",
        p1: point(),
        p2: point(),
      },
      {
        type: "triangle",
        p1: point(),
        p2: point(),
        p3: point(),
      },
      {
        type: "rectangle",
        p1: point(),
        p2: point(),
        p3: point(),
        p4: point(),
      },
      {
        type: "polyline",
        points: TestRandomGenerator.array(() => point(), 10),
      },
      {
        type: "polygon",
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
      },
      {
        type: "circle",
        centroid: point(),
        radius: TestRandomGenerator.integer(),
      },
    ];
    return {
      value: shapes.map((value) => ({ value })),
    };
  }

  export function trail(): ObjectUnionExplicitPointer {
    const data: ObjectUnionExplicitPointer =
      ObjectUnionExplicitPointer.generate();
    data.value.push({
      value: {
        type: "rectangle",
        p1: point(),
        p2: point(),
        p3: point(),
        p4: null!,
      },
    });
    return data;
  }

  export const SPOILERS: Spoiler<ObjectUnionExplicitPointer>[] = [
    (input) => {
      // point
      input.value[0]!.value.type = "line";
      return ["$input.value[0].value.p1", "$input.value[0].value.p2"];
    },
    (input) => {
      // line
      input.value[1]!.value.type = "circle";
      return ["$input.value[1].value.centroid", "$input.value[1].value.radius"];
    },
    (input) => {
      // triangle
      input.value[2]!.value.type = "polyline";
      return ["$input.value[2].value.points"];
    },
    (input) => {
      // rectangle
      input.value[3]!.value.type = "point";
      return ["$input.value[3].value.x", "$input.value[3].value.y"];
    },
    (input) => {
      // polyline
      input.value[4]!.value.type = "line";
      return ["$input.value[4].value.p1", "$input.value[4].value.p2"];
    },
    (input) => {
      // polygon
      input.value[5]!.value.type = "point";
      return ["$input.value[5].value.x", "$input.value[5].value.y"];
    },
    (input) => {
      // circle
      input.value[6]!.value.type = "polyline";
      return ["$input.value[6].value.points"];
    },
  ];
}

const point = (): ObjectUnionExplicitPointer.IPoint => ({
  x: TestRandomGenerator.integer(),
  y: TestRandomGenerator.integer(),
});
