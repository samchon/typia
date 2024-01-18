import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ToJsonTuple } from "../../../structures/ToJsonTuple";

export const test_json_isStringify_ToJsonTuple = _test_json_isStringify(
  "ToJsonTuple",
)<ToJsonTuple>(ToJsonTuple)((input) =>
  ((input: ToJsonTuple): string | null => {
    const is = (input: any): input is ToJsonTuple => {
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
    const stringify = (input: ToJsonTuple): string => {
      const $string = require("typia/lib/functional/$string").$string;
      const $number = require("typia/lib/functional/$number").$number;
      return `[${$string(input[0].toJSON())},${$number(
        input[1].toJSON(),
      )},${input[2].toJSON()},${`{"code":${$string(
        (input[3].toJSON() as any).code,
      )},"name":${$string((input[3].toJSON() as any).name)}}`}]`;
    };
    return is(input) ? stringify(input) : null;
  })(input),
);
