import { RandomGenerator } from "../internal/RandomGenerator";

export type ArrayRecursive = ArrayRecursive.ICategory;
export namespace ArrayRecursive {
    export interface ICategory {
        children: ICategory[];
        id: number;
        code: string;
        sequence: number;
        created_at: ITimestamp;
    }
    export interface ITimestamp {
        time: number;
        zone: number;
    }

    export function generate(
        limit: number = 6,
        index: number = 0,
    ): ArrayRecursive {
        return {
            id: RandomGenerator.integer(),
            code: RandomGenerator.string(),
            sequence: RandomGenerator.integer(),
            created_at: {
                time: RandomGenerator.integer(),
                zone: RandomGenerator.integer(),
            },
            children:
                index < limit
                    ? RandomGenerator.array(() => generate(limit, index + 1), 2)
                    : [],
        };
    }
}
