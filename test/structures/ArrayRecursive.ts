import { RandomGenerator } from "../internal/RandomGenerator";

export type ArrayRecursive = ArrayRecursive.ICategory[];
export namespace ArrayRecursive {
    export interface ICategory {
        children: ICategory[];
        id: number;
        code: string;
        name: string;
        sequence: number;
        created_at: ITimestamp;
    }
    export interface ITimestamp {
        time: number;
        zone: number;
    }

    export function generate(
        limit: number = 3,
        index: number = 0,
    ): ArrayRecursive {
        return RandomGenerator.array(() => ({
            id: RandomGenerator.number(),
            code: RandomGenerator.string(),
            name: RandomGenerator.string(),
            sequence: RandomGenerator.number(),
            created_at: {
                time: RandomGenerator.number(),
                zone: RandomGenerator.number(),
            },
            children: index < limit ? generate(limit, index + 1) : [],
        }));
    }
}
