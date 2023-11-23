import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_json_createStringify_ClassMethod = _test_json_stringify(
  "ClassMethod",
)<ClassMethod>(ClassMethod)((input: ClassMethod): string => {
  const $string = (typia.json.createStringify as any).string;
  const $number = (typia.json.createStringify as any).number;
  return `{"name":${$string((input as any).name)},"age":${$number(
    (input as any).age,
  )}}`;
});
