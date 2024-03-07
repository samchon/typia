import typia from "typia";
import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
export const test_functional_isReturn_ArrayMatrix = _test_functional_isReturn(
  "ArrayMatrix",
)(ArrayMatrix)(
  (p: (input: ArrayMatrix) => ArrayMatrix) =>
    (input: ArrayMatrix): ArrayMatrix | null => {
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
