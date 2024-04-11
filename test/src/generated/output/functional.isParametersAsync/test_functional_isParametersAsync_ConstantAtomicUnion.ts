import typia from "typia";

import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_functional_isParametersAsync_ConstantAtomicUnion =
  _test_functional_isParametersAsync("ConstantAtomicUnion")(
    ConstantAtomicUnion,
  )(
    (p: (input: ConstantAtomicUnion) => Promise<ConstantAtomicUnion>) =>
      async (
        input: ConstantAtomicUnion,
      ): Promise<ConstantAtomicUnion | null> => {
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
                    1 === elem ||
                    2 === elem ||
                    "three" === elem ||
                    "four" === elem ||
                    ("object" === typeof elem && null !== elem && $io0(elem))),
              )
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );
