import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { TypeTagArray } from "../../../structures/TypeTagArray";

export const test_json_createIsStringify_TypeTagArray = _test_json_isStringify(
  "TypeTagArray",
)<TypeTagArray>(TypeTagArray)((input: TypeTagArray): string | null => {
  const is = (input: any): input is TypeTagArray => {
    const $io0 = (input: any): boolean =>
      Array.isArray(input.value) &&
      input.value.every(
        (elem: any) => "object" === typeof elem && null !== elem && $io1(elem),
      );
    const $io1 = (input: any): boolean =>
      Array.isArray(input.items) &&
      3 <= input.items.length &&
      input.items.length <= 3 &&
      input.items.every(
        (elem: any) =>
          "string" === typeof elem &&
          /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
            elem,
          ),
      ) &&
      Array.isArray(input.minItems) &&
      3 <= input.minItems.length &&
      input.minItems.every(
        (elem: any) =>
          "number" === typeof elem && Number.isFinite(elem) && 3 <= elem,
      ) &&
      Array.isArray(input.both) &&
      3 <= input.both.length &&
      input.both.length <= 7 &&
      input.both.every(
        (elem: any) =>
          "string" === typeof elem &&
          /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
            elem,
          ),
      ) &&
      Array.isArray(input.equal) &&
      10 <= input.equal.length &&
      input.equal.length <= 10 &&
      input.equal.every(
        (elem: any) => "number" === typeof elem && 10 <= elem && elem <= 10,
      );
    return "object" === typeof input && null !== input && $io0(input);
  };
  const stringify = (input: TypeTagArray): string => {
    const $io1 = (input: any): boolean =>
      Array.isArray(input.items) &&
      3 <= input.items.length &&
      input.items.length <= 3 &&
      input.items.every(
        (elem: any) =>
          "string" === typeof elem &&
          /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
            elem,
          ),
      ) &&
      Array.isArray(input.minItems) &&
      3 <= input.minItems.length &&
      input.minItems.every(
        (elem: any) => "number" === typeof elem && 3 <= elem,
      ) &&
      Array.isArray(input.both) &&
      3 <= input.both.length &&
      input.both.length <= 7 &&
      input.both.every(
        (elem: any) =>
          "string" === typeof elem &&
          /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
            elem,
          ),
      ) &&
      Array.isArray(input.equal) &&
      10 <= input.equal.length &&
      input.equal.length <= 10 &&
      input.equal.every(
        (elem: any) => "number" === typeof elem && 10 <= elem && elem <= 10,
      );
    const $string = (typia.json.createIsStringify as any).string;
    const $number = (typia.json.createIsStringify as any).number;
    const $so0 = (input: any): any =>
      `{"value":${`[${input.value
        .map((elem: any) => $so1(elem))
        .join(",")}]`}}`;
    const $so1 = (input: any): any =>
      `{"items":${`[${input.items
        .map((elem: any) => $string(elem))
        .join(",")}]`},"minItems":${`[${input.minItems
        .map((elem: any) => $number(elem))
        .join(",")}]`},"both":${`[${input.both
        .map((elem: any) => $string(elem))
        .join(",")}]`},"equal":${`[${input.equal
        .map((elem: any) => $number(elem))
        .join(",")}]`}}`;
    return $so0(input);
  };
  return is(input) ? stringify(input) : null;
});
