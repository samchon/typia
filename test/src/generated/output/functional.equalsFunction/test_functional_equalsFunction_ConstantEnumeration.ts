import typia from "typia";

import { _test_functional_equalsFunction } from "../../../internal/_test_functional_equalsFunction";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_functional_equalsFunction_ConstantEnumeration =
  _test_functional_equalsFunction("ConstantEnumeration")(ConstantEnumeration)(
    (p: (input: ConstantEnumeration) => ConstantEnumeration) =>
      (input: ConstantEnumeration): ConstantEnumeration | null => {
        if (
          false ===
          ((
            input: any,
            _exceptionable: boolean = true,
          ): input is ConstantEnumeration => {
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
          })(input)
        )
          return null;
        const result = p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is ConstantEnumeration => {
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
