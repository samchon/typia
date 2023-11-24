import typia from "typia";

import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_misc_createIsClone_ConstantAtomicUnion = _test_misc_isClone(
  "ConstantAtomicUnion",
)<ConstantAtomicUnion>(ConstantAtomicUnion)(
  (input: any): typia.Resolved<ConstantAtomicUnion> | null => {
    const is = (input: any): input is ConstantAtomicUnion => {
      const $io0 = (input: any): boolean => "key" === input.key;
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any) =>
            null !== elem &&
            undefined !== elem &&
            (false === elem ||
              2 === elem ||
              1 === elem ||
              "three" === elem ||
              "four" === elem ||
              ("object" === typeof elem && null !== elem && $io0(elem))),
        )
      );
    };
    const clone = (
      input: ConstantAtomicUnion,
    ): typia.Resolved<ConstantAtomicUnion> => {
      const $cp0 = (input: any) =>
        input.map((elem: any) =>
          "object" === typeof elem && null !== elem
            ? $co0(elem)
            : (elem as any),
        );
      const $co0 = (input: any): any => ({
        key: input.key as any,
      });
      return Array.isArray(input) ? $cp0(input) : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  },
);
