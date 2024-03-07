import typia from "typia";
import { _test_functional_isFunction } from "../../../internal/_test_functional_isFunction";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
export const test_functional_isFunction_ArrayMatrix =
  _test_functional_isFunction("ArrayMatrix")(ArrayMatrix)(
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
        const result = p(input);
        return ((input: any): input is ArrayMatrix => {
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
        })(result)
          ? result
          : null;
      },
  );
