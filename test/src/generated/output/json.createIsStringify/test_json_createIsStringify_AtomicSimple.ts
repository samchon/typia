import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { AtomicSimple } from "../../../structures/AtomicSimple";

export const test_json_createIsStringify_AtomicSimple = _test_json_isStringify(
  "AtomicSimple",
)<AtomicSimple>(AtomicSimple)((input: AtomicSimple): string | null => {
  const is = (input: any): input is AtomicSimple => {
    return (
      Array.isArray(input) &&
      input.length === 3 &&
      "boolean" === typeof input[0] &&
      "number" === typeof input[1] &&
      Number.isFinite(input[1]) &&
      "string" === typeof input[2]
    );
  };
  const stringify = (input: AtomicSimple): string => {
    const $number = require("typia/lib/functional/$number").$number;
    const $string = require("typia/lib/functional/$string").$string;
    return `[${input[0]},${$number(input[1])},${$string(input[2])}]`;
  };
  return is(input) ? stringify(input) : null;
});
