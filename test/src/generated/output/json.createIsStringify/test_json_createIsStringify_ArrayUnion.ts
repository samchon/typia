import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_json_createIsStringify_ArrayUnion = _test_json_isStringify(
  "ArrayUnion",
)<ArrayUnion>(ArrayUnion)((input: ArrayUnion): string | null => {
  const is = (input: any): input is ArrayUnion => {
    const $ip0 = (input: any) => {
      const array = input;
      const top = input[0];
      if (0 === input.length) return true;
      const arrayPredicators = [
        [
          (top: any[]): any => "boolean" === typeof top,
          (entire: any[]): any =>
            entire.every((elem: any) => "boolean" === typeof elem),
        ] as const,
        [
          (top: any[]): any => "number" === typeof top && Number.isFinite(top),
          (entire: any[]): any =>
            entire.every(
              (elem: any) => "number" === typeof elem && Number.isFinite(elem),
            ),
        ] as const,
        [
          (top: any[]): any => "string" === typeof top,
          (entire: any[]): any =>
            entire.every((elem: any) => "string" === typeof elem),
        ] as const,
      ];
      const passed = arrayPredicators.filter((pred: any) => pred[0](top));
      if (1 === passed.length) return passed[0]![1](array);
      else if (1 < passed.length)
        for (const pred of passed)
          if (array.every((value: any) => true === pred[0](value)))
            return pred[1](array);
      return false;
    };
    return (
      Array.isArray(input) &&
      input.every((elem: any) => Array.isArray(elem) && ($ip0(elem) || false))
    );
  };
  const stringify = (input: ArrayUnion): string => {
    // @ts-ignore;
    declare const require: (lib: string) => any;
    const $number = require("typia/lib/functional/$number").$number;
    const $string = require("typia/lib/functional/$string").$string;
    const $throws = require("typia/lib/functional/$throws").$throws(
      "typia.json.createIsStringify",
    );
    const $sp0 = (input: any) => {
      const array = input;
      const top = input[0];
      if (0 === input.length) return "[]";
      const arrayPredicators = [
        [
          (top: any[]): any => "boolean" === typeof top,
          (entire: any[]): any =>
            `[${entire.map((elem: any) => elem).join(",")}]`,
        ] as const,
        [
          (top: any[]): any => "number" === typeof top,
          (entire: any[]): any =>
            `[${entire.map((elem: any) => $number(elem)).join(",")}]`,
        ] as const,
        [
          (top: any[]): any => "string" === typeof top,
          (entire: any[]): any =>
            `[${entire.map((elem: any) => $string(elem)).join(",")}]`,
        ] as const,
      ];
      const passed = arrayPredicators.filter((pred: any) => pred[0](top));
      if (1 === passed.length) return passed[0]![1](array);
      else if (1 < passed.length)
        for (const pred of passed)
          if (array.every((value: any) => true === pred[0](value)))
            return pred[1](array);
      $throws({
        expected: "(Array<boolean> | Array<number> | Array<string>)",
        value: input,
      });
    };
    return `[${input.map((elem: any) => $sp0(elem)).join(",")}]`;
  };
  return is(input) ? stringify(input) : null;
});
