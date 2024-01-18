import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_json_createStringify_TupleRestAtomic = _test_json_stringify(
  "TupleRestAtomic",
)<TupleRestAtomic>(TupleRestAtomic)((input: TupleRestAtomic): string => {
  const $number = require("typia/lib/functional/$number").$number;
  const $string = require("typia/lib/functional/$string").$string;
  const $rest = require("typia/lib/functional/$rest").$rest;
  return `[${input[0]},${$number(input[1])}${$rest(
    `[${input
      .slice(2)
      .map((elem: any) => $string(elem))
      .join(",")}]`,
  )}]`;
});
