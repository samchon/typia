import typia from "typia";

import { _test_functional_isFunction } from "../../../internal/_test_functional_isFunction";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_functional_isFunction_ConstantEnumeration =
  _test_functional_isFunction("ConstantEnumeration")(ConstantEnumeration)(
    (p: (input: ConstantEnumeration) => ConstantEnumeration) =>
      (input: ConstantEnumeration): ConstantEnumeration | null => {
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
                  "Four" === elem ||
                  "Three" === elem,
              )
            );
          })(input)
        )
          return null;
        const result = p(input);
        return ((input: any): input is ConstantEnumeration => {
          return (
            Array.isArray(input) &&
            input.every(
              (elem: any) =>
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
