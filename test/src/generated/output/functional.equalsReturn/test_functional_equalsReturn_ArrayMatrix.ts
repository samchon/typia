import typia from "typia";

import { _test_functional_equalsReturn } from "../../../internal/_test_functional_equalsReturn";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_functional_equalsReturn_ArrayMatrix =
  _test_functional_equalsReturn("ArrayMatrix")(ArrayMatrix)(
    (p: (input: ArrayMatrix) => ArrayMatrix) =>
      (input: ArrayMatrix): ArrayMatrix | null => {
        const result = p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is ArrayMatrix => {
          return (
            Array.isArray(input) &&
            input.every(
              (elem: any, _index1: number) =>
                Array.isArray(elem) &&
                elem.every(
                  (elem: any, _index2: number) =>
                    Array.isArray(elem) &&
                    elem.every(
                      (elem: any, _index3: number) =>
                        "number" === typeof elem && Number.isFinite(elem),
                    ),
                ),
            )
          );
        })(result)
          ? result
          : null;
      },
  );
