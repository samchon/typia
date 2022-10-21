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
        width?: number;
        distance?: number;
    }
    export interface ITriangle {
        p1: IPoint;
        p2: IPoint;
        p3: IPoint;
        width?: number;
        height?: number;
        area?: number;
    }
    export interface IRectangle {
        p1: IPoint;
        p2: IPoint;
        p3: IPoint;
        p4: IPoint;
        width?: number;
        height?: number;
        area?: number;
    }
    export interface IPolyline {
        points: IPoint[];
        length?: number;
    }
    export interface IPolygon {
        outer: IPolyline;
        inner?: IPolyline[];
        area?: number;
    }
    export interface ICircle {
        centroid?: IPoint;
        radius: number;
        area?: number;
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
                radius: RandomGenerator.integer(),
            },
        ];
    }
    function point(): IPoint {
        return {
            x: RandomGenerator.integer(),
            y: RandomGenerator.integer(),
        };
    }
}
