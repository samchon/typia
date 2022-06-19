import { RandomGenerator } from "../internal/RandomGenerator";

export type ObjectGeneric = [
    ObjectGeneric.ISomething<boolean>,
    ObjectGeneric.ISomething<number>,
    ObjectGeneric.ISomething<string>,
];
export namespace ObjectGeneric {
    export interface ISomething<T> {
        value: T;
        child: IChild<T>;
        elements: IChild<T>[];
    }
    export interface IChild<V, N = V> {
        child_value: V;
        child_next: N;
    }

    export function generate(): ObjectGeneric {
        return [
            individual(RandomGenerator.boolean),
            individual(RandomGenerator.number),
            individual(RandomGenerator.string),
        ];
    }
    function individual<T>(value: () => T): ISomething<T> {
        return {
            value: value(),
            child: {
                child_next: value(),
                child_value: value(),
            },
            elements: RandomGenerator.array(() => ({
                child_next: value(),
                child_value: value(),
            })),
        };
    }
}
