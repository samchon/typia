import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../../internal/_test_functional_equalsReturnAsync";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_functional_equalsReturnAsync_ConstantAtomicUnion =
  _test_functional_equalsReturnAsync("ConstantAtomicUnion")(
    ConstantAtomicUnion,
  )(
    (p: (input: ConstantAtomicUnion) => Promise<ConstantAtomicUnion>) =>
      async (
        input: ConstantAtomicUnion,
      ): Promise<ConstantAtomicUnion | null> => {
        const result = await p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is ConstantAtomicUnion => {
          const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "key" === input.key &&
            (1 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (["key"].some((prop: any) => key === prop)) return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          return (
            Array.isArray(input) &&
            input.every(
              (elem: any, _index1: number) =>
                null !== elem &&
                undefined !== elem &&
                (false === elem ||
                  1 === elem ||
                  2 === elem ||
                  "three" === elem ||
                  "four" === elem ||
                  ("object" === typeof elem &&
                    null !== elem &&
                    $io0(elem, true))),
            )
          );
        })(result)
          ? result
          : null;
      },
  );
