import typia from "typia";

import { _test_functional_isReturnAsync } from "../../../internal/_test_functional_isReturnAsync";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_functional_isReturnAsync_ArrayRepeatedNullable =
  _test_functional_isReturnAsync("ArrayRepeatedNullable")(
    ArrayRepeatedNullable,
  )(
    (p: (input: ArrayRepeatedNullable) => Promise<ArrayRepeatedNullable>) =>
      async (
        input: ArrayRepeatedNullable,
      ): Promise<ArrayRepeatedNullable | null> => {
        const result = await p(input);
        return ((input: any): input is ArrayRepeatedNullable => {
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
        })(result)
          ? result
          : null;
      },
  );
