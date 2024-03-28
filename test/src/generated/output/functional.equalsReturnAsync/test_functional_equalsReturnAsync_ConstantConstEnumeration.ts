import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../../internal/_test_functional_equalsReturnAsync";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_functional_equalsReturnAsync_ConstantConstEnumeration =
  _test_functional_equalsReturnAsync("ConstantConstEnumeration")(
    ConstantConstEnumeration,
  )(
    (
      p: (input: ConstantConstEnumeration) => Promise<ConstantConstEnumeration>,
    ) =>
      async (
        input: ConstantConstEnumeration,
      ): Promise<ConstantConstEnumeration | null> => {
        const result = await p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is ConstantConstEnumeration => {
          return (
            Array.isArray(input) &&
            input.every(
              (elem: any, _index1: number) =>
                0 === elem ||
                1 === elem ||
                2 === elem ||
                "Four" === elem ||
                "Three" === elem,
            )
          );
        })(result)
          ? result
          : null;
      },
  );
