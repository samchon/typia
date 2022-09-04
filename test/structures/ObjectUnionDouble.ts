import { RandomGenerator } from "../internal/RandomGenerator";

export type ObjectUnionDouble = ObjectUnionDouble.Union[];
export namespace ObjectUnionDouble {
    export type Union = IA | IB;

    export interface IA {
        value: { x: number };
        child: IAA | IAB;
    }
    export interface IAA {
        value: { y: boolean };
    }
    export interface IAB {
        value: { y: number };
    }

    export interface IB {
        value: { x: string };
        child: IBA | IBB;
    }
    export interface IBA {
        value: { y: string };
    }
    export interface IBB {
        value: { y: number[] };
    }

    export function generate(): ObjectUnionDouble {
        return [
            {
                value: { x: RandomGenerator.integer() },
                child: {
                    value: { y: RandomGenerator.boolean() },
                },
            },
            {
                value: { x: RandomGenerator.integer() },
                child: {
                    value: { y: RandomGenerator.integer() },
                },
            },
            {
                value: { x: RandomGenerator.string() },
                child: {
                    value: { y: RandomGenerator.string() },
                },
            },
            {
                value: { x: RandomGenerator.string() },
                child: {
                    value: {
                        y: RandomGenerator.array(() =>
                            RandomGenerator.integer(),
                        ),
                    },
                },
            },
        ];
    }
}
