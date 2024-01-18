import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { TypeTagTuple } from "../../../structures/TypeTagTuple";

export const test_json_isStringify_TypeTagTuple = _test_json_isStringify(
  "TypeTagTuple",
)<TypeTagTuple>(TypeTagTuple)((input) =>
  ((input: TypeTagTuple): string | null => {
    const is = (input: any): input is TypeTagTuple => {
      const $io0 = (input: any): boolean =>
        Array.isArray(input.tuple) &&
        input.tuple.length === 4 &&
        "string" === typeof input.tuple[0] &&
        3 <= input.tuple[0].length &&
        input.tuple[0].length <= 7 &&
        "number" === typeof input.tuple[1] &&
        3 <= input.tuple[1] &&
        input.tuple[1] <= 7 &&
        Array.isArray(input.tuple[2]) &&
        3 <= input.tuple[2].length &&
        input.tuple[2].length <= 7 &&
        input.tuple[2].every(
          (elem: any) =>
            "string" === typeof elem && 1 <= elem.length && elem.length <= 2,
        ) &&
        Array.isArray(input.tuple[3]) &&
        3 <= input.tuple[3].length &&
        input.tuple[3].length <= 7 &&
        input.tuple[3].every(
          (elem: any) => "number" === typeof elem && 1 <= elem && elem <= 2,
        );
      return "object" === typeof input && null !== input && $io0(input);
    };
    const stringify = (input: TypeTagTuple): string => {
      const $string = require("typia/lib/functional/$string").$string;
      const $number = require("typia/lib/functional/$number").$number;
      const $so0 = (input: any): any =>
        `{"tuple":${`[${$string(input.tuple[0])},${$number(
          input.tuple[1],
        )},${`[${input.tuple[2]
          .map((elem: any) => $string(elem))
          .join(",")}]`},${`[${input.tuple[3]
          .map((elem: any) => $number(elem))
          .join(",")}]`}]`}}`;
      return $so0(input);
    };
    return is(input) ? stringify(input) : null;
  })(input),
);
