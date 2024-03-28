import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../../internal/_test_functional_equalsReturnAsync";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";

export const test_functional_equalsReturnAsync_ToJsonAtomicUnion =
  _test_functional_equalsReturnAsync("ToJsonAtomicUnion")(ToJsonAtomicUnion)(
    (p: (input: ToJsonAtomicUnion) => Promise<ToJsonAtomicUnion>) =>
      async (input: ToJsonAtomicUnion): Promise<ToJsonAtomicUnion | null> => {
        const result = await p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is ToJsonAtomicUnion => {
          const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "function" === typeof input.toJSON &&
            (1 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (["toJSON"].some((prop: any) => key === prop)) return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          return (
            Array.isArray(input) &&
            input.every(
              (elem: any, _index1: number) =>
                "object" === typeof elem && null !== elem && $io0(elem, true),
            )
          );
        })(result)
          ? result
          : null;
      },
  );
