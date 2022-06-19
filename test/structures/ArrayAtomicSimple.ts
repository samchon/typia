import { RandomGenerator } from "../internal/RandomGenerator";

export type ArrayAtomicSimple = [Array<boolean>, Array<number>, Array<string>];
export namespace ArrayAtomicSimple {
    export function generate(): ArrayAtomicSimple {
        return [
            RandomGenerator.array(RandomGenerator.boolean),
            RandomGenerator.array(RandomGenerator.number),
            RandomGenerator.array(RandomGenerator.string),
        ];
    }
}
