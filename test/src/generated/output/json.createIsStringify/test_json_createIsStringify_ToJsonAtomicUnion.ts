import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";

export const test_json_createIsStringify_ToJsonAtomicUnion =
  _test_json_isStringify("ToJsonAtomicUnion")<ToJsonAtomicUnion>(
    ToJsonAtomicUnion,
  )((input: ToJsonAtomicUnion): string | null => {
    const is = (input: any): input is ToJsonAtomicUnion => {
      const $io0 = (input: any): boolean => true;
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io0(elem),
        )
      );
    };
    const stringify = (input: ToJsonAtomicUnion): string => {
      const $string = require("typia/lib/functional/$string").$string;
      const $number = require("typia/lib/functional/$number").$number;
      const $throws = require("typia/lib/functional/$throws").$throws(
        "typia.json.createIsStringify",
      );
      return `[${input
        .map((elem: any) =>
          null !== elem.toJSON()
            ? (() => {
                if ("string" === typeof elem.toJSON())
                  return $string(elem.toJSON());
                if ("number" === typeof elem.toJSON())
                  return $number(elem.toJSON());
                if ("boolean" === typeof elem.toJSON()) return elem.toJSON();
                $throws({
                  expected: "(boolean | null | number | string)",
                  value: elem.toJSON(),
                });
              })()
            : "null",
        )
        .join(",")}]`;
    };
    return is(input) ? stringify(input) : null;
  });
