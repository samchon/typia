import { RandomGenerator } from "../internal/RandomGenerator";

export type FunctionalObjectUnion = FunctionalObjectUnion.Union[];
export namespace FunctionalObjectUnion {
    export type Union = IPoint | ILine | IPolyline | IPolygon;
    export interface IPoint {
        x: number;
        y: number;
        distance: (p: IPoint) => number;
    }
    export interface ILine {
        p1: IPoint;
        p2: IPoint;
        length: () => number;
    }
    export interface IPolyline {
        points: IPoint[];
        length: () => number;
    }
    export interface IPolygon {
        points: IPoint[];
        length: () => number;
        area: () => number;
    }

    export function generate(): FunctionalObjectUnion {
        return [
            point(),
            {
                p1: point(),
                p2: point(),
                length: () => RandomGenerator.number(),
            },
            {
                points: RandomGenerator.array(point),
                length: () => RandomGenerator.number(),
            },
            {
                points: RandomGenerator.array(point),
                length: () => RandomGenerator.number(),
                area: () => RandomGenerator.number(),
            },
        ];
    }
    export function point(): IPoint {
        return {
            x: RandomGenerator.number(),
            y: RandomGenerator.number(),
            distance: () => RandomGenerator.number(),
        };
    }
}
