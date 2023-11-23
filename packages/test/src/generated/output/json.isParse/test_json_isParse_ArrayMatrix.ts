import typia from "typia";

import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_json_isParse_ArrayMatrix = _test_json_isParse(
  "ArrayMatrix",
)<ArrayMatrix>(ArrayMatrix)((input) =>
  ((input: any): typia.Primitive<ArrayMatrix> => {
    const is = (input: any): input is ArrayMatrix => {
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
    };
    input = JSON.parse(input);
    return is(input) ? (input as any) : null;
  })(input),
);
