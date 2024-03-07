import typia from "typia";
import { _test_functional_isFunction } from "../../../internal/_test_functional_isFunction";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";
export const test_functional_isFunction_ConstantAtomicUnion =
  _test_functional_isFunction("ConstantAtomicUnion")(ConstantAtomicUnion)(
    (p: (input: ConstantAtomicUnion) => ConstantAtomicUnion) =>
      (input: ConstantAtomicUnion): ConstantAtomicUnion | null => {
        if (
          false ===
          ((input: any): input is ConstantAtomicUnion => {
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
          })(input)
        )
          return null;
        const result = p(input);
        return ((input: any): input is ConstantAtomicUnion => {
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
        })(result)
          ? result
          : null;
      },
  );
