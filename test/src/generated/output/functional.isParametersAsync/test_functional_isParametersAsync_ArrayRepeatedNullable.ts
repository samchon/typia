import typia from "typia";
import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";
export const test_functional_isParametersAsync_ArrayRepeatedNullable =
  _test_functional_isParametersAsync("ArrayRepeatedNullable")(
    ArrayRepeatedNullable,
  )(
    (p: (input: ArrayRepeatedNullable) => Promise<ArrayRepeatedNullable>) =>
      async (
        input: ArrayRepeatedNullable,
      ): Promise<ArrayRepeatedNullable | null> => {
        if (
          false ===
          ((input: any): input is ArrayRepeatedNullable => {
            const $ia0 = (input: any): any =>
              input.every(
                (elem: any) =>
                  undefined !== elem &&
                  (null === elem ||
                    "string" === typeof elem ||
                    ("number" === typeof elem && Number.isFinite(elem)) ||
                    (Array.isArray(elem) && ($ia0(elem) || false))),
              );
            return (
              undefined !== input &&
              (null === input ||
                "string" === typeof input ||
                ("number" === typeof input && Number.isFinite(input)) ||
                (Array.isArray(input) && ($ia0(input) || false)))
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );
