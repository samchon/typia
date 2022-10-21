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
        slope?: number | null;
    }
    export interface ILine {
        p1: IPoint;
        p2: IPoint;
        width?: number | null;
        distance?: number | null;
    }
    export interface ITriangle {
        p1: IPoint;
        p2: IPoint;
        p3: IPoint;
        width?: number | null;
        height?: number | null;
        area?: number | null;
    }
    export interface IRectangle {
        p1: IPoint;
        p2: IPoint;
        p3: IPoint;
        p4: IPoint;
        width?: number | null;
        height?: number | null;
        area?: number | null;
    }
    export interface IPolyline {
        points: IPoint[];
        length?: number | null;
    }
    export interface IPolygon {
        outer: IPolyline;
        inner?: IPolyline[];
        area?: number | null;
    }
    export interface ICircle {
        centroid?: IPoint;
        radius: number;
        area?: number | null;
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
                points: RandomGenerator.array(() => point(), 10),
                length: scalar(),
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
                area: scalar(),
            },
            {
                centroid: point(),
                radius: RandomGenerator.integer(),
                area: scalar(),
            },
        ];
    }

    function point(): IPoint {
        return {
            x: RandomGenerator.integer(),
            y: RandomGenerator.integer(),
            slope: scalar(),
        };
    }

    function scalar(): number | null | undefined {
        return Math.random() < 1 / 3
            ? null
            : Math.random() < 0.5
            ? RandomGenerator.integer()
            : undefined;
    }
}
