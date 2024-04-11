import typia from "typia";

import { _test_functional_isParameters } from "../../../internal/_test_functional_isParameters";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_functional_isParameters_ConstantEnumeration =
  _test_functional_isParameters("ConstantEnumeration")(ConstantEnumeration)(
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
