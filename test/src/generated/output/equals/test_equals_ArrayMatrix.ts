import typia from "typia";

import { _test_equals } from "../../../internal/_test_equals";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_equals_ArrayMatrix = _test_equals("ArrayMatrix")<ArrayMatrix>(
  ArrayMatrix,
)((input) =>
  ((input: any, _exceptionable: boolean = true): input is ArrayMatrix => {
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
  })(input),
);
