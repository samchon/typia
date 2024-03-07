import typia from "typia";
import { _test_functional_equalsFunctionAsync } from "../../../internal/_test_functional_equalsFunctionAsync";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
export const test_functional_equalsFunctionAsync_ArrayMatrix =
  _test_functional_equalsFunctionAsync("ArrayMatrix")(ArrayMatrix)(
    (p: (input: ArrayMatrix) => Promise<ArrayMatrix>) =>
      async (input: ArrayMatrix): Promise<ArrayMatrix | null> => {
        if (
          false ===
          ((
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
          })(input)
        )
          return null;
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
