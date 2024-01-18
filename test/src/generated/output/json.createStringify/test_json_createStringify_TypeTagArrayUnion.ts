import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";

export const test_json_createStringify_TypeTagArrayUnion = _test_json_stringify(
  "TypeTagArrayUnion",
)<TypeTagArrayUnion>(TypeTagArrayUnion)((input: TypeTagArrayUnion): string => {
  const $string = require("typia/lib/functional/$string").$string;
  const $number = require("typia/lib/functional/$number").$number;
  const $throws = require("typia/lib/functional/$throws").$throws(
    "typia.json.createStringify",
  );
  const $so0 = (input: any): any =>
    `{"items":${`[${input.items
      .map((elem: any) => $string(elem))
      .join(",")}]`},"minItems":${`[${input.minItems
      .map((elem: any) => $number(elem))
      .join(",")}]`},"maxItems":${`[${input.maxItems
      .map((elem: any) =>
        (() => {
          if ("string" === typeof elem && elem.length <= 7)
            return $string(elem);
          if ("number" === typeof elem && elem <= 7) return $number(elem);
          $throws({
            expected: "((number & Maximum<7>) | (string & MaxLength<7>))",
            value: elem,
          });
        })(),
      )
      .join(",")}]`},"both":${`[${input.both
      .map((elem: any) => $string(elem))
      .join(",")}]`}}`;
  return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
});
