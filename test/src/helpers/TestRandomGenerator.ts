import { back_inserter, ranges } from "tstl";
import { RandomGenerator } from "typia/lib/utils/RandomGenerator";

export const TestRandomGenerator = {
  ...RandomGenerator,
  array: <T>(closure: (index: number) => T, count?: number): T[] =>
    new Array(count ?? RandomGenerator.integer(3, 10))
      .fill(0)
      .map((_e, index) => closure(index)),

  sample:
    <T>(array: T[]) =>
    (count: number): T[] => {
      const ret: T[] = [];
      ranges.sample(array, back_inserter(ret), count);
      return ret;
    },
};
