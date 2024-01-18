import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { AtomicSimple } from "../../../structures/AtomicSimple";

export const test_json_createStringify_AtomicSimple = _test_json_stringify(
  "AtomicSimple",
)<AtomicSimple>(AtomicSimple)((input: AtomicSimple): string => {
  const $number = require("typia/lib/functional/$number").$number;
  const $string = require("typia/lib/functional/$string").$string;
  return `[${input[0]},${$number(input[1])},${$string(input[2])}]`;
});
