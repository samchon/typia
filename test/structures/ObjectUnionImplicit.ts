import { RandomGenerator } from "../internal/RandomGenerator";

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

    export function generate(): ObjectUnionImplicit {
        return [
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
                points: RandomGenerator.array(() => point(), 10),
            },
            {
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
