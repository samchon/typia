import typia from "typia";
import { _test_functional_equalsReturnAsync } from "../../../internal/_test_functional_equalsReturnAsync";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
export const test_functional_equalsReturnAsync_ArrayMatrix =
  _test_functional_equalsReturnAsync("ArrayMatrix")(ArrayMatrix)(
    (p: (input: ArrayMatrix) => Promise<ArrayMatrix>) =>
      async (input: ArrayMatrix): Promise<ArrayMatrix | null> => {
        const result = await p(input);
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
