import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ToJsonTuple } from "../../../structures/ToJsonTuple";

export const test_json_stringify_ToJsonTuple = _test_json_stringify(
  "ToJsonTuple",
)<ToJsonTuple>(ToJsonTuple)((input) =>
  ((input: ToJsonTuple): string => {
    const $string = require("typia/lib/functional/$string").$string;
    const $number = require("typia/lib/functional/$number").$number;
    return `[${$string(input[0].toJSON())},${$number(
      input[1].toJSON(),
    )},${input[2].toJSON()},${`{"code":${$string(
      (input[3].toJSON() as any).code,
    )},"name":${$string((input[3].toJSON() as any).name)}}`}]`;
  })(input),
);
