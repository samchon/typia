import typia from "typia";
import { _test_functional_equalsParameters } from "../../../internal/_test_functional_equalsParameters";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
export const test_functional_equalsParameters_ArrayMatrix =
  _test_functional_equalsParameters("ArrayMatrix")(ArrayMatrix)(
    (p: (input: ArrayMatrix) => ArrayMatrix) =>
      (input: ArrayMatrix): ArrayMatrix | null => {
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
        return p(input);
      },
  );
