import typia from "typia";

import { _test_functional_equalsReturn } from "../../../internal/_test_functional_equalsReturn";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_functional_equalsReturn_ConstantConstEnumeration =
  _test_functional_equalsReturn("ConstantConstEnumeration")(
    ConstantConstEnumeration,
  )(
    (p: (input: ConstantConstEnumeration) => ConstantConstEnumeration) =>
      (input: ConstantConstEnumeration): ConstantConstEnumeration | null => {
        const result = p(input);
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
                "Three" === elem ||
                "Four" === elem,
            )
          );
        })(result)
          ? result
          : null;
      },
  );
