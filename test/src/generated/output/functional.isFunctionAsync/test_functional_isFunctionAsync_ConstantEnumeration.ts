import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../../internal/_test_functional_isFunctionAsync";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_functional_isFunctionAsync_ConstantEnumeration =
  _test_functional_isFunctionAsync("ConstantEnumeration")(ConstantEnumeration)(
    (p: (input: ConstantEnumeration) => Promise<ConstantEnumeration>) =>
      async (
        input: ConstantEnumeration,
      ): Promise<ConstantEnumeration | null> => {
        if (
          false ===
          ((input: any): input is ConstantEnumeration => {
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any) =>
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
        const result = await p(input);
        return ((input: any): input is ConstantEnumeration => {
          return (
            Array.isArray(input) &&
            input.every(
              (elem: any) =>
                0 === elem ||
                1 === elem ||
                2 === elem ||
                "Three" === elem ||
                "Four" === elem,
            )
          );
        })(result)
          ? result
          : null;
      },
  );
