import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_json_stringify_AtomicUnion = _test_json_stringify(
  "AtomicUnion",
)<AtomicUnion>(AtomicUnion)((input) =>
  ((input: AtomicUnion): string => {
    const $string = require("typia/lib/functional/$string").$string;
    const $number = require("typia/lib/functional/$number").$number;
    const $throws = require("typia/lib/functional/$throws").$throws(
      "typia.json.stringify",
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
  })(input),
);
