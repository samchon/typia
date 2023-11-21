import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TupleRestArray } from "../../../structures/TupleRestArray";

export const test_json_createStringify_TupleRestArray = _test_json_stringify(
  "TupleRestArray",
)<TupleRestArray>(TupleRestArray)((input: TupleRestArray): string => {
  const $number = (typia.json.createStringify as any).number;
  const $string = (typia.json.createStringify as any).string;
  const $rest = (typia.json.createStringify as any).rest;
  return `[${input[0]},${$number(input[1])}${$rest(
    `[${input
      .slice(2)
      .map(
        (elem: any) => `[${elem.map((elem: any) => $string(elem)).join(",")}]`,
      )
      .join(",")}]`,
  )}]`;
});
