import typia from "typia";
import { _test_functional_isParameters } from "../../../internal/_test_functional_isParameters";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";
export const test_functional_isParameters_ConstantConstEnumeration =
  _test_functional_isParameters("ConstantConstEnumeration")(
    ConstantConstEnumeration,
  )(
    (p: (input: ConstantConstEnumeration) => ConstantConstEnumeration) =>
      (input: ConstantConstEnumeration): ConstantConstEnumeration | null => {
        if (
          false ===
          ((input: any): input is ConstantConstEnumeration => {
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
        return p(input);
      },
  );
