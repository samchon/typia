import { RandomGenerator } from "../internal/RandomGenerator";

export type ObjectUnionComposite = Array<
    | ObjectUnionComposite.IPoint
    | ObjectUnionComposite.ILine
    | ObjectUnionComposite.ITriangle
    | ObjectUnionComposite.IRectangle
    | ObjectUnionComposite.IPolyline
    | ObjectUnionComposite.IPolygon
    | ObjectUnionComposite.IPointedShape
    | ObjectUnionComposite.ICircle
>;
export namespace ObjectUnionComposite {
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

    export function generate(): ObjectUnionComposite {
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
                outer: RandomGenerator.array(() => point()),
                inner: point(),
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
