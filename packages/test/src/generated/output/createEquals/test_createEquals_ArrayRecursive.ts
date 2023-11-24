import typia from "typia";

import { _test_equals } from "../../../internal/_test_equals";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";

export const test_createEquals_ArrayRecursive = _test_equals(
  "ArrayRecursive",
)<ArrayRecursive>(ArrayRecursive)(
  (input: any, _exceptionable: boolean = true): input is ArrayRecursive => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
      Array.isArray(input.children) &&
      input.children.every(
        (elem: any, _index1: number) =>
          "object" === typeof elem &&
          null !== elem &&
          $io0(elem, true && _exceptionable),
      ) &&
      "number" === typeof input.id &&
      Number.isFinite(input.id) &&
      "string" === typeof input.code &&
      "number" === typeof input.sequence &&
      Number.isFinite(input.sequence) &&
      "object" === typeof input.created_at &&
      null !== input.created_at &&
      $io1(input.created_at, true && _exceptionable) &&
      (5 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (
            ["children", "id", "code", "sequence", "created_at"].some(
              (prop: any) => key === prop,
            )
          )
            return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
      "number" === typeof input.time &&
      Number.isFinite(input.time) &&
      "number" === typeof input.zone &&
      Number.isFinite(input.zone) &&
      (2 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (["time", "zone"].some((prop: any) => key === prop)) return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    return "object" === typeof input && null !== input && $io0(input, true);
  },
);
