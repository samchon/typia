import { RandomGenerator } from "typia/lib/utils/RandomGenerator";

export const TestRandomGenerator = {
    ...RandomGenerator,
    array: <T>(closure: (index: number) => T, count?: number): T[] =>
        new Array(count ?? TestRandomGenerator.integer(3, 10))
            .fill(0)
            .map((_e, index) => closure(index)),
};
