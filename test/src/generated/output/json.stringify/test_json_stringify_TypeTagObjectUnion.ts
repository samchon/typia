import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TypeTagObjectUnion } from "../../../structures/TypeTagObjectUnion";

export const test_json_stringify_TypeTagObjectUnion = _test_json_stringify(
  "TypeTagObjectUnion",
)<TypeTagObjectUnion>(TypeTagObjectUnion)((input) =>
  ((input: TypeTagObjectUnion): string => {
    const $io0 = (input: any): boolean =>
      "number" === typeof input.value && 3 <= input.value;
    const $io1 = (input: any): boolean =>
      "string" === typeof input.value &&
      3 <= input.value.length &&
      input.value.length <= 7;
    // @ts-ignore;
    declare const require: (lib: string) => any;
    const $number = require("typia/lib/functional/$number").$number;
    const $string = require("typia/lib/functional/$string").$string;
    const $throws = require("typia/lib/functional/$throws").$throws(
      "typia.json.stringify",
    );
    const $so0 = (input: any): any => `{"value":${$number(input.value)}}`;
    const $so1 = (input: any): any => `{"value":${$string(input.value)}}`;
    const $su0 = (input: any): any =>
      (() => {
        if (
          "string" === typeof input.value &&
          3 <= input.value.length &&
          input.value.length <= 7
        )
          return $so1(input);
        else if ("number" === typeof input.value && 3 <= input.value)
          return $so0(input);
        else
          $throws({
            expected:
              "(TypeTagObjectUnion.Literal | TypeTagObjectUnion.Numeric)",
            value: input,
          });
      })();
    return `[${input.map((elem: any) => $su0(elem)).join(",")}]`;
  })(input),
);
