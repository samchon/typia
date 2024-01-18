import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TupleRestArray } from "../../../structures/TupleRestArray";

export const test_json_stringify_TupleRestArray = _test_json_stringify(
  "TupleRestArray",
)<TupleRestArray>(TupleRestArray)((input) =>
  ((input: TupleRestArray): string => {
    // @ts-ignore;
    declare const require: (lib: string) => any;
    const $number = require("typia/lib/functional/$number").$number;
    const $string = require("typia/lib/functional/$string").$string;
    const $rest = require("typia/lib/functional/$rest").$rest;
    return `[${input[0]},${$number(input[1])}${$rest(
      `[${input
        .slice(2)
        .map(
          (elem: any) =>
            `[${elem.map((elem: any) => $string(elem)).join(",")}]`,
        )
        .join(",")}]`,
    )}]`;
  })(input),
);
