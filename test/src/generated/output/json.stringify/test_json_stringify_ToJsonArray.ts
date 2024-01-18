import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ToJsonArray } from "../../../structures/ToJsonArray";

export const test_json_stringify_ToJsonArray = _test_json_stringify(
  "ToJsonArray",
)<ToJsonArray>(ToJsonArray)((input) =>
  ((input: ToJsonArray): string => {
    const $number = require("typia/lib/functional/$number").$number;
    const $string = require("typia/lib/functional/$string").$string;
    return `[${`[${input[0]
      .toJSON()
      .map((elem: any) => elem)
      .join(",")}]`},${`[${input[1]
      .toJSON()
      .map((elem: any) => $number(elem))
      .join(",")}]`},${`[${input[2]
      .toJSON()
      .map((elem: any) => $string(elem))
      .join(",")}]`},${`[${input[3]
      .toJSON()
      .map((elem: any) => `{"id":${$string((elem as any).id)}}`)
      .join(",")}]`}]`;
  })(input),
);
