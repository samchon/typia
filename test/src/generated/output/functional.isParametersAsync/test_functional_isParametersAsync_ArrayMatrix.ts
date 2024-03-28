import typia from "typia";

import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_functional_isParametersAsync_ArrayMatrix =
  _test_functional_isParametersAsync("ArrayMatrix")(ArrayMatrix)(
    (p: (input: ArrayMatrix) => Promise<ArrayMatrix>) =>
      async (input: ArrayMatrix): Promise<ArrayMatrix | null> => {
        if (
          false ===
          ((input: any): input is ArrayMatrix => {
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any) =>
                  Array.isArray(elem) &&
                  elem.every(
                    (elem: any) =>
                      Array.isArray(elem) &&
                      elem.every(
                        (elem: any) =>
                          "number" === typeof elem && Number.isFinite(elem),
                      ),
                  ),
              )
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );
