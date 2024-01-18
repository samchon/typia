import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";

export const test_json_stringify_TypeTagCustom = _test_json_stringify(
  "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)((input) =>
  ((input: TypeTagCustom): string => {
    const $string = require("typia/lib/functional/$string").$string;
    const $number = require("typia/lib/functional/$number").$number;
    return `{"id":${$string((input as any).id)},"dollar":${$string(
      (input as any).dollar,
    )},"postfix":${$string((input as any).postfix)},"powerOf":${$number(
      (input as any).powerOf,
    )}}`;
  })(input),
);
