import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { TypeTagAtomicUnion } from "../../../structures/TypeTagAtomicUnion";

export const test_json_createIsStringify_TypeTagAtomicUnion =
  _test_json_isStringify("TypeTagAtomicUnion")<TypeTagAtomicUnion>(
    TypeTagAtomicUnion,
  )((input: TypeTagAtomicUnion): string | null => {
    const is = (input: any): input is TypeTagAtomicUnion => {
      const $io0 = (input: any): boolean =>
        Array.isArray(input.value) &&
        input.value.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io1(elem),
        );
      const $io1 = (input: any): boolean =>
        ("string" === typeof input.value &&
          3 <= input.value.length &&
          input.value.length <= 7) ||
        ("number" === typeof input.value &&
          Number.isFinite(input.value) &&
          3 <= input.value);
      return "object" === typeof input && null !== input && $io0(input);
    };
    const stringify = (input: TypeTagAtomicUnion): string => {
      const $io1 = (input: any): boolean =>
        ("string" === typeof input.value &&
          3 <= input.value.length &&
          input.value.length <= 7) ||
        ("number" === typeof input.value && 3 <= input.value);
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $string = require("typia/lib/functional/$string").$string;
      const $number = require("typia/lib/functional/$number").$number;
      const $throws = require("typia/lib/functional/$throws").$throws(
        "typia.json.createIsStringify",
      );
      const $so0 = (input: any): any =>
        `{"value":${`[${input.value
          .map((elem: any) => $so1(elem))
          .join(",")}]`}}`;
      const $so1 = (input: any): any =>
        `{"value":${(() => {
          if (
            "string" === typeof input.value &&
            3 <= input.value.length &&
            input.value.length <= 7
          )
            return $string(input.value);
          if ("number" === typeof input.value && 3 <= input.value)
            return $number(input.value);
          $throws({
            expected:
              "((number & Minimum<3>) | (string & MinLength<3> & MaxLength<7>))",
            value: input.value,
          });
        })()}}`;
      return $so0(input);
    };
    return is(input) ? stringify(input) : null;
  });
