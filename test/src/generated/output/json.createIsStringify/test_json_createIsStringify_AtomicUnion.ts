import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_json_createIsStringify_AtomicUnion = _test_json_isStringify(
  "AtomicUnion",
)<AtomicUnion>(AtomicUnion)((input: AtomicUnion): string | null => {
  const is = (input: any): input is AtomicUnion => {
    return (
      Array.isArray(input) &&
      input.every(
        (elem: any) =>
          null === elem ||
          "string" === typeof elem ||
          ("number" === typeof elem && Number.isFinite(elem)) ||
          "boolean" === typeof elem,
      )
    );
  };
  const stringify = (input: AtomicUnion): string => {
    // @ts-ignore;
    declare const require: (lib: string) => any;
    const $string = require("typia/lib/functional/$string").$string;
    const $number = require("typia/lib/functional/$number").$number;
    const $throws = require("typia/lib/functional/$throws").$throws(
      "typia.json.createIsStringify",
    );
    return `[${input
      .map((elem: any) =>
        null !== elem
          ? (() => {
              if ("string" === typeof elem) return $string(elem);
              if ("number" === typeof elem) return $number(elem);
              if ("boolean" === typeof elem) return elem;
              $throws({
                expected: "(boolean | null | number | string)",
                value: elem,
              });
            })()
          : "null",
      )
      .join(",")}]`;
  };
  return is(input) ? stringify(input) : null;
});
