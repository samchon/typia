import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_json_createStringify_ConstantConstEnumeration =
  _test_json_stringify("ConstantConstEnumeration")<ConstantConstEnumeration>(
    ConstantConstEnumeration,
  )((input: ConstantConstEnumeration): string => {
    // @ts-ignore;
    declare const require: (lib: string) => any;
    const $string = require("typia/lib/functional/$string").$string;
    const $number = require("typia/lib/functional/$number").$number;
    const $throws = require("typia/lib/functional/$throws").$throws(
      "typia.json.createStringify",
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
  });
