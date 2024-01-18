import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_json_createIsStringify_ConstantIntersection =
  _test_json_isStringify("ConstantIntersection")<ConstantIntersection>(
    ConstantIntersection,
  )((input: ConstantIntersection): string | null => {
    const is = (input: any): input is ConstantIntersection => {
      return (
        Array.isArray(input) &&
        input.length === 3 &&
        false === input[0] &&
        1 === input[1] &&
        "two" === input[2]
      );
    };
    const stringify = (input: ConstantIntersection): string => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $number = require("typia/lib/functional/$number").$number;
      const $string = require("typia/lib/functional/$string").$string;
      const $throws = require("typia/lib/functional/$throws").$throws(
        "typia.json.createIsStringify",
      );
      return `[${input[0]},${$number(input[1])},${(() => {
        if ("string" === typeof input[2]) return $string(input[2]);
        if ("string" === typeof input[2]) return '"' + input[2] + '"';
        $throws({
          expected: '"two"',
          value: input[2],
        });
      })()}]`;
    };
    return is(input) ? stringify(input) : null;
  });
