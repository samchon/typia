import typia from "typia";

import { _test_functional_isParameters } from "../../../internal/_test_functional_isParameters";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_functional_isParameters_ArrayMatrix =
  _test_functional_isParameters("ArrayMatrix")(ArrayMatrix)(
    (p: (input: ArrayMatrix) => ArrayMatrix) =>
      (input: ArrayMatrix): ArrayMatrix | null => {
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
