import { IPointer } from "../helpers/IPointer";
import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export type ObjectUnionCompositePointer = IPointer<
  Array<
    IPointer<
      | ObjectUnionCompositePointer.IPoint
      | ObjectUnionCompositePointer.ILine
      | ObjectUnionCompositePointer.ITriangle
      | ObjectUnionCompositePointer.IRectangle
      | ObjectUnionCompositePointer.IPolyline
      | ObjectUnionCompositePointer.IPolygon
      | ObjectUnionCompositePointer.IPointedShape
      | ObjectUnionCompositePointer.ICircle
    >
  >
>;
export namespace ObjectUnionCompositePointer {
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
  export interface IPointedShape {
    outer: IPoint[];
    inner: IPoint;
  }
  export interface ICircle {
    centroid: IPoint;
    radius: number;
  }

  export function generate(): ObjectUnionCompositePointer {
    return {
      value: [
        {
          ...point(),
        },
        {
          p1: point(),
          p2: point(),
        },
        {
          p1: point(),
          p2: point(),
          p3: point(),
        },
        {
          p1: point(),
          p2: point(),
          p3: point(),
          p4: point(),
        },
        {
          points: TestRandomGenerator.array(() => point(), 10),
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
        },
        {
          outer: TestRandomGenerator.array(() => point()),
          inner: point(),
        },
        {
          centroid: point(),
          radius: TestRandomGenerator.integer(),
        },
      ].map((value) => ({ value })),
    };
  }
  function point(): IPoint {
    return {
      x: TestRandomGenerator.integer(),
      y: TestRandomGenerator.integer(),
    };
  }

  export const SPOILERS: Spoiler<ObjectUnionCompositePointer>[] = [
    (input) => {
      (input.value[0]!.value as ObjectUnionCompositePointer.IPoint).x =
        {} as any;
      return ["$input.value[0].value.x"];
    },
    (input) => {
      (input.value[1]!.value as ObjectUnionCompositePointer.ILine).p2 =
        {} as any;
      return ["$input.value[1].value.p2.x", "$input.value[1].value.p2.y"];
    },
    (input) => {
      (input.value[2]!.value as ObjectUnionCompositePointer.ITriangle).p3 =
        null!;
      return ["$input.value[2].value.p3"];
    },
    (input) => {
      (input.value[3]!.value as ObjectUnionCompositePointer.IRectangle).p4 =
        null!;
      return ["$input.value[3].value.p4"];
    },
    (input) => {
      (input.value[4]!.value as ObjectUnionCompositePointer.IPolyline).points =
        3 as any;
      return ["$input.value[4].value.points"];
    },
    (input) => {
      (input.value[5]!.value as ObjectUnionCompositePointer.IPolygon).outer =
        {} as any;
      return ["$input.value[5].value.p1", "$input.value[5].value.p2"];
    },
    (input) => {
      (
        input.value[6]!.value as ObjectUnionCompositePointer.IPointedShape
      ).outer = {
        length: 0,
      } as any;
      return ["$input.value[6].value.p1", "$input.value[6].value.p2"];
    },
    (input) => {
      (input.value[7]!.value as ObjectUnionCompositePointer.ICircle).radius =
        "string" as any;
      return ["$input.value[7].value.radius"];
    },
  ];
}
