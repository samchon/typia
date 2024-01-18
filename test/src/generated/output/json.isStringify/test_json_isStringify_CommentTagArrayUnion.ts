import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { CommentTagArrayUnion } from "../../../structures/CommentTagArrayUnion";

export const test_json_isStringify_CommentTagArrayUnion =
  _test_json_isStringify("CommentTagArrayUnion")<CommentTagArrayUnion>(
    CommentTagArrayUnion,
  )((input) =>
    ((input: CommentTagArrayUnion): string | null => {
      const is = (input: any): input is CommentTagArrayUnion => {
        const $io0 = (input: any): boolean =>
          Array.isArray(input.items) &&
          3 <= input.items.length &&
          input.items.length <= 3 &&
          input.items.every((elem: any) => "string" === typeof elem) &&
          Array.isArray(input.minItems) &&
          3 <= input.minItems.length &&
          input.minItems.every(
            (elem: any) => "number" === typeof elem && Number.isFinite(elem),
          ) &&
          Array.isArray(input.maxItems) &&
          input.maxItems.length <= 7 &&
          input.maxItems.every(
            (elem: any) =>
              "string" === typeof elem ||
              ("number" === typeof elem && Number.isFinite(elem)),
          ) &&
          Array.isArray(input.both) &&
          3 <= input.both.length &&
          input.both.length <= 7 &&
          input.both.every((elem: any) => "string" === typeof elem);
        return (
          Array.isArray(input) &&
          input.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io0(elem),
          )
        );
      };
      const stringify = (input: CommentTagArrayUnion): string => {
        const $string = require("typia/lib/functional/$string").$string;
        const $number = require("typia/lib/functional/$number").$number;
        const $throws = require("typia/lib/functional/$throws").$throws(
          "typia.json.isStringify",
        );
        const $so0 = (input: any): any =>
          `{"items":${`[${input.items
            .map((elem: any) => $string(elem))
            .join(",")}]`},"minItems":${`[${input.minItems
            .map((elem: any) => $number(elem))
            .join(",")}]`},"maxItems":${`[${input.maxItems
            .map((elem: any) =>
              (() => {
                if ("string" === typeof elem) return $string(elem);
                if ("number" === typeof elem) return $number(elem);
                $throws({
                  expected: "(number | string)",
                  value: elem,
                });
              })(),
            )
            .join(",")}]`},"both":${`[${input.both
            .map((elem: any) => $string(elem))
            .join(",")}]`}}`;
        return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
      };
      return is(input) ? stringify(input) : null;
    })(input),
  );
