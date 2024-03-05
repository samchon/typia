import typia from "typia";

import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_misc_createClone_ArrayRepeatedNullable = _test_misc_clone(
  "ArrayRepeatedNullable",
)<ArrayRepeatedNullable>(ArrayRepeatedNullable)(
  (
    input: ArrayRepeatedNullable,
  ): import("typia").Resolved<ArrayRepeatedNullable> => {
    const $ia0 = (input: any): any =>
      input.every(
        (elem: any) =>
          undefined !== elem &&
          (null === elem ||
            "string" === typeof elem ||
            "number" === typeof elem ||
            (Array.isArray(elem) && ($ia0(elem) || false))),
      );
    const $cp0 = (input: any) => $ca0(input);
    const $ca0 = (input: any): any =>
      input.map((elem: any) =>
        Array.isArray(elem) ? $cp0(elem) : (elem as any),
      );
    return Array.isArray(input) ? $cp0(input) : (input as any);
  },
);
