import typia from "typia";
import { _test_functional_isReturnAsync } from "../../../internal/_test_functional_isReturnAsync";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
export const test_functional_isReturnAsync_ArrayMatrix =
  _test_functional_isReturnAsync("ArrayMatrix")(ArrayMatrix)(
    (p: (input: ArrayMatrix) => Promise<ArrayMatrix>) =>
      async (input: ArrayMatrix): Promise<ArrayMatrix | null> => {
        const result = await p(input);
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
