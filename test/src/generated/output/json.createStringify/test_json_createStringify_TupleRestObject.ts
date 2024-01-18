import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TupleRestObject } from "../../../structures/TupleRestObject";

export const test_json_createStringify_TupleRestObject = _test_json_stringify(
  "TupleRestObject",
)<TupleRestObject>(TupleRestObject)((input: TupleRestObject): string => {
  const $number = require("typia/lib/functional/$number").$number;
  const $string = require("typia/lib/functional/$string").$string;
  const $rest = require("typia/lib/functional/$rest").$rest;
  return `[${input[0]},${$number(input[1])}${$rest(
    `[${input
      .slice(2)
      .map((elem: any) => `{"value":${$string((elem as any).value)}}`)
      .join(",")}]`,
  )}]`;
});
