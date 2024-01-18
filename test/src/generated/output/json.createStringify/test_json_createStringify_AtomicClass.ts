import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { AtomicClass } from "../../../structures/AtomicClass";

export const test_json_createStringify_AtomicClass = _test_json_stringify(
  "AtomicClass",
)<AtomicClass>(AtomicClass)((input: AtomicClass): string => {
  const $number = require("typia/lib/functional/$number").$number;
  const $string = require("typia/lib/functional/$string").$string;
  const $throws = require("typia/lib/functional/$throws").$throws(
    "typia.json.createStringify",
  );
  return `[${input[0]},${input[1]},${input[2]},${$number(input[3])},${$number(
    input[4],
  )},${$number(input[5])},${$string(input[6])},${(() => {
    if ("string" === typeof input[7]) return $string(input[7]);
    if ("string" === typeof input[7] || input[7] instanceof String)
      return $string(input[7]);
    $throws({
      expected: '("characters" | String)',
      value: input[7],
    });
  })()},${$string(input[8])}]`;
});
