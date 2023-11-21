import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { TypeTagTuple } from "../../../structures/TypeTagTuple";

export const test_createEquals_TypeTagTuple = _test_equals(
  "TypeTagTuple",
)<TypeTagTuple>(TypeTagTuple)(
  (input: any, _exceptionable: boolean = true): input is TypeTagTuple => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
      Array.isArray(input.tuple) &&
      input.tuple.length === 4 &&
      "string" === typeof input.tuple[0] &&
      3 <= input.tuple[0].length &&
      input.tuple[0].length <= 7 &&
      "number" === typeof input.tuple[1] &&
      3 <= input.tuple[1] &&
      input.tuple[1] <= 7 &&
      Array.isArray(input.tuple[2]) &&
      3 <= input.tuple[2].length &&
      input.tuple[2].length <= 7 &&
      input.tuple[2].every(
        (elem: any, _index1: number) =>
          "string" === typeof elem && 1 <= elem.length && elem.length <= 2,
      ) &&
      Array.isArray(input.tuple[3]) &&
      3 <= input.tuple[3].length &&
      input.tuple[3].length <= 7 &&
      input.tuple[3].every(
        (elem: any, _index2: number) =>
          "number" === typeof elem && 1 <= elem && elem <= 2,
      ) &&
      (1 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (["tuple"].some((prop: any) => key === prop)) return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    return "object" === typeof input && null !== input && $io0(input, true);
  },
);
