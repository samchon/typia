import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";

export const test_json_createStringify_ConstantAtomicSimple =
  _test_json_stringify("ConstantAtomicSimple")<ConstantAtomicSimple>(
    ConstantAtomicSimple,
  )((input: ConstantAtomicSimple): string => {
    // @ts-ignore;
    declare const require: (lib: string) => any;
    const $number = require("typia/lib/functional/$number").$number;
    const $string = require("typia/lib/functional/$string").$string;
    const $throws = require("typia/lib/functional/$throws").$throws(
      "typia.json.createStringify",
    );
    return `[${input[0]},${input[1]},${$number(input[2])},${(() => {
      if ("string" === typeof input[3]) return $string(input[3]);
      if ("string" === typeof input[3]) return '"' + input[3] + '"';
      $throws({
        expected: '"three"',
        value: input[3],
      });
    })()}]`;
  });
