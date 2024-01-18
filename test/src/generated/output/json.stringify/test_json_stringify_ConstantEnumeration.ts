import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_json_stringify_ConstantEnumeration = _test_json_stringify(
  "ConstantEnumeration",
)<ConstantEnumeration>(ConstantEnumeration)((input) =>
  ((input: ConstantEnumeration): string => {
    const $string = require("typia/lib/functional/$string").$string;
    const $number = require("typia/lib/functional/$number").$number;
    const $throws = require("typia/lib/functional/$throws").$throws(
      "typia.json.stringify",
    );
    return `[${input
      .map((elem: any) =>
        (() => {
          if ("string" === typeof elem) return $string(elem);
          if ("number" === typeof elem) return $number(elem);
          if ("string" === typeof elem) return '"' + elem + '"';
          $throws({
            expected: '("Four" | "Three" | 0 | 1 | 2)',
            value: elem,
          });
        })(),
      )
      .join(",")}]`;
  })(input),
);
