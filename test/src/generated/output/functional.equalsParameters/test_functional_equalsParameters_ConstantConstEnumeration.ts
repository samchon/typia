import typia from "typia";

import { _test_functional_equalsParameters } from "../../../internal/_test_functional_equalsParameters";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_functional_equalsParameters_ConstantConstEnumeration =
  _test_functional_equalsParameters("ConstantConstEnumeration")(
    ConstantConstEnumeration,
  )(
    (p: (input: ConstantConstEnumeration) => ConstantConstEnumeration) =>
      (input: ConstantConstEnumeration): ConstantConstEnumeration | null => {
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
