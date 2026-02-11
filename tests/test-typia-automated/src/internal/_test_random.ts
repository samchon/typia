import { TestStructure } from "@typia/template";
import { Resolved } from "typia";
import { ArrayUtil } from "typia/src/utils/ArrayUtil";

export const _test_random =
  (_name: string) =>
  <T>(_factory: TestStructure<T>) =>
  (functor: { random: () => Resolved<T>; assert: (input: T) => T }): void => {
    ArrayUtil.repeat(100, () => {
      const data: Resolved<T> = functor.random();
      functor.assert(data as T);
    });
  };
