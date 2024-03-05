import typia from "typia";

import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";

export const test_json_createIsParse_ArrayRepeatedRequired = _test_json_isParse(
  "ArrayRepeatedRequired",
)<ArrayRepeatedRequired>(ArrayRepeatedRequired)(
  (input: any): import("typia").Primitive<ArrayRepeatedRequired> => {
    const is = (input: any): input is ArrayRepeatedRequired => {
      const $ia0 = (input: any): any =>
        input.every(
          (elem: any) =>
            null !== elem &&
            undefined !== elem &&
            ("string" === typeof elem ||
              ("number" === typeof elem && Number.isFinite(elem)) ||
              (Array.isArray(elem) && ($ia0(elem) || false))),
        );
      return (
        null !== input &&
        undefined !== input &&
        ("string" === typeof input ||
          ("number" === typeof input && Number.isFinite(input)) ||
          (Array.isArray(input) && ($ia0(input) || false)))
      );
    };
    input = JSON.parse(input);
    return is(input) ? (input as any) : null;
  },
);
