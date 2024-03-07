import typia from "typia";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";
export const test_json_createIsStringify_ArrayRecursive =
  _test_json_isStringify("ArrayRecursive")<ArrayRecursive>(ArrayRecursive)(
    (input: ArrayRecursive): string | null => {
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
      const stringify = (input: ArrayRecursive): string => {
        const $io0 = (input: any): boolean =>
          Array.isArray(input.children) &&
          input.children.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io0(elem),
          ) &&
          "number" === typeof input.id &&
          "string" === typeof input.code &&
          "number" === typeof input.sequence &&
          "object" === typeof input.created_at &&
          null !== input.created_at &&
          $io1(input.created_at);
        const $io1 = (input: any): boolean =>
          "number" === typeof input.time && "number" === typeof input.zone;
        const $number = (typia.json.createIsStringify as any).number;
        const $string = (typia.json.createIsStringify as any).string;
        const $so0 = (input: any): any =>
          `{"children":${`[${input.children
            .map((elem: any) => $so0(elem))
            .join(",")}]`},"id":${$number(input.id)},"code":${$string(
            input.code,
          )},"sequence":${$number(
            input.sequence,
          )},"created_at":${`{"time":${$number(
            (input.created_at as any).time,
          )},"zone":${$number((input.created_at as any).zone)}}`}}`;
        return $so0(input);
      };
      return is(input) ? stringify(input) : null;
    },
  );
