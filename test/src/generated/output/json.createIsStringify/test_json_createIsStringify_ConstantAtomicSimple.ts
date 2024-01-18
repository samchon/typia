import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";

export const test_json_createIsStringify_ConstantAtomicSimple =
  _test_json_isStringify("ConstantAtomicSimple")<ConstantAtomicSimple>(
    ConstantAtomicSimple,
  )((input: ConstantAtomicSimple): string | null => {
    const is = (input: any): input is ConstantAtomicSimple => {
      return (
        Array.isArray(input) &&
        input.length === 4 &&
        false === input[0] &&
        true === input[1] &&
        2 === input[2] &&
        "three" === input[3]
      );
    };
    const stringify = (input: ConstantAtomicSimple): string => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $number = require("typia/lib/functional/$number").$number;
      const $string = require("typia/lib/functional/$string").$string;
      const $throws = require("typia/lib/functional/$throws").$throws(
        "typia.json.createIsStringify",
      );
      return `[${input[0]},${input[1]},${$number(input[2])},${(() => {
        if ("string" === typeof input[3]) return $string(input[3]);
        if ("string" === typeof input[3]) return '"' + input[3] + '"';
        $throws({
          expected: '"three"',
          value: input[3],
        });
      })()}]`;
    };
    return is(input) ? stringify(input) : null;
  });
