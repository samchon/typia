import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { ObjectHttpArray } from "../../../structures/ObjectHttpArray";

export const test_createEquals_ObjectHttpArray = _test_equals(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)(
  (input: any, _exceptionable: boolean = true): input is ObjectHttpArray => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
      Array.isArray(input.booleans) &&
      input.booleans.every(
        (elem: any, _index1: number) => "boolean" === typeof elem,
      ) &&
      Array.isArray(input.bigints) &&
      input.bigints.every(
        (elem: any, _index2: number) => "bigint" === typeof elem,
      ) &&
      Array.isArray(input.numbers) &&
      input.numbers.every(
        (elem: any, _index3: number) =>
          "number" === typeof elem && Number.isFinite(elem),
      ) &&
      Array.isArray(input.strings) &&
      input.strings.every(
        (elem: any, _index4: number) => "string" === typeof elem,
      ) &&
      Array.isArray(input.templates) &&
      input.templates.every(
        (elem: any, _index5: number) =>
          "string" === typeof elem && RegExp(/^something_(.*)/).test(elem),
      ) &&
      (5 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (
            ["booleans", "bigints", "numbers", "strings", "templates"].some(
              (prop: any) => key === prop,
            )
          )
            return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    return "object" === typeof input && null !== input && $io0(input, true);
  },
);
