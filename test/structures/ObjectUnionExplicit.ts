import { RandomGenerator } from "../internal/RandomGenerator";

export type ObjectUnionExplicit = Array<
    | ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>
    | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>
    | ObjectUnionExplicit.Discriminator<
          "triangle",
          ObjectUnionExplicit.ITriangle
      >
    | ObjectUnionExplicit.Discriminator<
          "rectangle",
          ObjectUnionExplicit.IRectangle
      >
    | ObjectUnionExplicit.Discriminator<
          "polyline",
          ObjectUnionExplicit.IPolyline
      >
    | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>
    | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>
>;
export namespace ObjectUnionExplicit {
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

    export function generate(): ObjectUnionExplicit {
        return [
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
                points: RandomGenerator.array(() => point(), 10),
            },
            {
                type: "polygon",
                outer: {
                    points: RandomGenerator.array(() => point(), 10),
                },
                inner: [
                    {
                        points: RandomGenerator.array(() => point(), 10),
                    },
                    {
                        points: RandomGenerator.array(() => point(), 10),
                    },
                ],
            },
            {
                type: "circle",
                centroid: point(),
                radius: RandomGenerator.number(),
            },
        ];
    }
    function point(): IPoint {
        return {
            x: RandomGenerator.number(),
            y: RandomGenerator.number(),
        };
    }
}
