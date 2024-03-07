import typia from "typia";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TupleRestObject } from "../../../structures/TupleRestObject";
export const test_json_createStringify_TupleRestObject = _test_json_stringify(
  "TupleRestObject",
)<TupleRestObject>(TupleRestObject)((input: TupleRestObject): string => {
  const $number = (typia.json.createStringify as any).number;
  const $string = (typia.json.createStringify as any).string;
  const $rest = (typia.json.createStringify as any).rest;
  return `[${input[0]},${$number(input[1])}${$rest(
    `[${input
      .slice(2)
      .map((elem: any) => `{"value":${$string((elem as any).value)}}`)
      .join(",")}]`,
  )}]`;
});
