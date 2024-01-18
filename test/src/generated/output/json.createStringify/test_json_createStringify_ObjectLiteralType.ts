import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_json_createStringify_ObjectLiteralType = _test_json_stringify(
  "ObjectLiteralType",
)<ObjectLiteralType>(ObjectLiteralType)((input: ObjectLiteralType): string => {
  const $string = require("typia/lib/functional/$string").$string;
  const $number = require("typia/lib/functional/$number").$number;
  return `{"id":${$string((input as any).id)},"name":${$string(
    (input as any).name,
  )},"age":${$number((input as any).age)}}`;
});
