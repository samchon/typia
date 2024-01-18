import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_json_createStringify_ConstantIntersection =
  _test_json_stringify("ConstantIntersection")<ConstantIntersection>(
    ConstantIntersection,
  )((input: ConstantIntersection): string => {
    const $number = require("typia/lib/functional/$number").$number;
    const $string = require("typia/lib/functional/$string").$string;
    const $throws = require("typia/lib/functional/$throws").$throws(
      "typia.json.createStringify",
    );
    return `[${input[0]},${$number(input[1])},${(() => {
      if ("string" === typeof input[2]) return $string(input[2]);
      if ("string" === typeof input[2]) return '"' + input[2] + '"';
      $throws({
        expected: '"two"',
        value: input[2],
      });
    })()}]`;
  });
