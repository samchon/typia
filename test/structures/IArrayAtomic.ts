import { RandomGenerator } from "../internal/RandomGenerator";

export type IArrayAtomic<T> = Array<T>;
export namespace IArrayAtomic {
    export function generate<T>(closure: () => T): Array<T> {
        return RandomGenerator.array(closure);
    }
}
