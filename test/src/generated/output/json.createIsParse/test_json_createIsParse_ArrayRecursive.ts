import typia from "typia";

import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";

export const test_json_createIsParse_ArrayRecursive = _test_json_isParse(
  "ArrayRecursive",
)<ArrayRecursive>(ArrayRecursive)(
  (input: any): import("typia").Primitive<ArrayRecursive> => {
    const is = (input: any): input is ArrayRecursive => {
      const $io0 = (input: any): boolean =>
        Array.isArray(input.children) &&
        input.children.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io0(elem),
        ) &&
        "number" === typeof input.id &&
        Number.isFinite(input.id) &&
        "string" === typeof input.code &&
        "number" === typeof input.sequence &&
        Number.isFinite(input.sequence) &&
        "object" === typeof input.created_at &&
        null !== input.created_at &&
        "number" === typeof (input.created_at as any).time &&
        Number.isFinite((input.created_at as any).time) &&
        "number" === typeof (input.created_at as any).zone &&
        Number.isFinite((input.created_at as any).zone);
      return "object" === typeof input && null !== input && $io0(input);
    };
    input = JSON.parse(input);
    return is(input) ? (input as any) : null;
  },
);
