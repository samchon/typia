import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_json_isStringify_ArrayMatrix = _test_json_isStringify(
  "ArrayMatrix",
)<ArrayMatrix>(ArrayMatrix)((input) =>
  ((input: ArrayMatrix): string | null => {
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
    const stringify = (input: ArrayMatrix): string => {
      const $number = (typia.json.isStringify as any).number;
      return `[${input
        .map(
          (elem: any) =>
            `[${elem
              .map(
                (elem: any) =>
                  `[${elem.map((elem: any) => $number(elem)).join(",")}]`,
              )
              .join(",")}]`,
        )
        .join(",")}]`;
    };
    return is(input) ? stringify(input) : null;
  })(input),
);
