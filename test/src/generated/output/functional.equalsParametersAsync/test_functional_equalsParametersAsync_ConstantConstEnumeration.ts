import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../../internal/_test_functional_equalsParametersAsync";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_functional_equalsParametersAsync_ConstantConstEnumeration =
  _test_functional_equalsParametersAsync("ConstantConstEnumeration")(
    ConstantConstEnumeration,
  )(
    (
      p: (input: ConstantConstEnumeration) => Promise<ConstantConstEnumeration>,
    ) =>
      async (
        input: ConstantConstEnumeration,
      ): Promise<ConstantConstEnumeration | null> => {
        if (
          false ===
          ((
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
                  "Three" === elem ||
                  "Four" === elem,
              )
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );
