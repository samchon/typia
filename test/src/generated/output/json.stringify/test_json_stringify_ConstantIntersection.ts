import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_json_stringify_ConstantIntersection = _test_json_stringify(
  "ConstantIntersection",
)<ConstantIntersection>(ConstantIntersection)((input) =>
  ((input: ConstantIntersection): string => {
    const $number = require("typia/lib/functional/$number").$number;
    const $string = require("typia/lib/functional/$string").$string;
    const $throws = require("typia/lib/functional/$throws").$throws(
      "typia.json.stringify",
    );
    return `[${input[0]},${$number(input[1])},${(() => {
      if ("string" === typeof input[2]) return $string(input[2]);
      if ("string" === typeof input[2]) return '"' + input[2] + '"';
      $throws({
        expected: '"two"',
        value: input[2],
      });
    })()}]`;
  })(input),
);
