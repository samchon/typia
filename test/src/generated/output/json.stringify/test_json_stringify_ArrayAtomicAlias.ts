import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";

export const test_json_stringify_ArrayAtomicAlias = _test_json_stringify(
  "ArrayAtomicAlias",
)<ArrayAtomicAlias>(ArrayAtomicAlias)((input) =>
  ((input: ArrayAtomicAlias): string => {
    const $number = require("typia/lib/functional/$number").$number;
    const $string = require("typia/lib/functional/$string").$string;
    return `[${`[${input[0]
      .map((elem: any) => elem)
      .join(",")}]`},${`[${input[1]
      .map((elem: any) => $number(elem))
      .join(",")}]`},${`[${input[2]
      .map((elem: any) => $string(elem))
      .join(",")}]`}]`;
  })(input),
);
