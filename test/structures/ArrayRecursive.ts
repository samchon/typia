import { RandomGenerator } from "../internal/RandomGenerator";

export type ArrayRecursive = ArrayRecursive.ICategory[];
export namespace ArrayRecursive {
    export interface ICategory {
        code: string;
        name: string;
        children: ICategory[];
    }

    export function generate(
        limit: number = 4,
        index: number = 0,
    ): ArrayRecursive {
        return RandomGenerator.array(() => ({
            code: RandomGenerator.string(),
            name: RandomGenerator.string(),
            children: index < limit ? generate(limit, index + 1) : [],
        }));
    }
}
