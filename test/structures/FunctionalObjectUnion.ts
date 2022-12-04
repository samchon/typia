import { RandomGenerator } from "../internal/RandomGenerator";
import { Spoiler } from "../internal/Spoiler";

export type FunctionalObjectUnion = FunctionalObjectUnion.Union[];
export namespace FunctionalObjectUnion {
    export const PRIMITIVE = false;

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
                length: () => RandomGenerator.integer(),
            },
            {
                points: RandomGenerator.array(point),
                length: () => RandomGenerator.integer(),
            },
            {
                points: RandomGenerator.array(point),
                length: () => RandomGenerator.integer(),
                area: () => RandomGenerator.integer(),
            },
        ];
    }
    export function point(): IPoint {
        return {
            x: RandomGenerator.integer(),
            y: RandomGenerator.integer(),
            distance: () => RandomGenerator.integer(),
        };
    }

    export const SPOILERS: Spoiler<FunctionalObjectUnion>[] = [
        (input) => {
            if ((input as any)[0]!.length) {
                (input as any)[0]!.length = {} as any;
                return ["$input[0].length"];
            }
            (input as any)[0]!.distance = [] as any;
            return ["$input[0].distance"];
        },
    ];
}
