import typia from "typia";
import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";
export const test_functional_isReturn_ConstantAtomicUnion =
  _test_functional_isReturn("ConstantAtomicUnion")(ConstantAtomicUnion)(
    (p: (input: ConstantAtomicUnion) => ConstantAtomicUnion) =>
      (input: ConstantAtomicUnion): ConstantAtomicUnion | null => {
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
