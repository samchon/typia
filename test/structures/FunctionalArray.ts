import { RandomGenerator } from "../internal/RandomGenerator";

export type FunctionalArray = Array<(...args: any[]) => any>;
export namespace FunctionalArray {
    export function generate(): FunctionalArray {
        return RandomGenerator.array(() => console.log);
    }
}
