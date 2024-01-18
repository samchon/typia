import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ToJsonArray } from "../../../structures/ToJsonArray";

export const test_json_createIsStringify_ToJsonArray = _test_json_isStringify(
  "ToJsonArray",
)<ToJsonArray>(ToJsonArray)((input: ToJsonArray): string | null => {
  const is = (input: any): input is ToJsonArray => {
    const $io0 = (input: any): boolean => true;
    const $io1 = (input: any): boolean => true;
    const $io2 = (input: any): boolean => true;
    const $io3 = (input: any): boolean => true;
    return (
      Array.isArray(input) &&
      input.length === 4 &&
      "object" === typeof input[0] &&
      null !== input[0] &&
      $io0(input[0]) &&
      "object" === typeof input[1] &&
      null !== input[1] &&
      $io1(input[1]) &&
      "object" === typeof input[2] &&
      null !== input[2] &&
      $io2(input[2]) &&
      "object" === typeof input[3] &&
      null !== input[3] &&
      $io3(input[3])
    );
  };
  const stringify = (input: ToJsonArray): string => {
    const $number = require("typia/lib/functional/$number").$number;
    const $string = require("typia/lib/functional/$string").$string;
    return `[${`[${input[0]
      .toJSON()
      .map((elem: any) => elem)
      .join(",")}]`},${`[${input[1]
      .toJSON()
      .map((elem: any) => $number(elem))
      .join(",")}]`},${`[${input[2]
      .toJSON()
      .map((elem: any) => $string(elem))
      .join(",")}]`},${`[${input[3]
      .toJSON()
      .map((elem: any) => `{"id":${$string((elem as any).id)}}`)
      .join(",")}]`}]`;
  };
  return is(input) ? stringify(input) : null;
});
