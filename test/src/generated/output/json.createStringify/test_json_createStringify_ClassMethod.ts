import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_json_createStringify_ClassMethod = _test_json_stringify(
  "ClassMethod",
)<ClassMethod>(ClassMethod)((input: ClassMethod): string => {
  // @ts-ignore;
  declare const require: (lib: string) => any;
  const $string = require("typia/lib/functional/$string").$string;
  const $number = require("typia/lib/functional/$number").$number;
  return `{"name":${$string((input as any).name)},"age":${$number(
    (input as any).age,
  )}}`;
});
