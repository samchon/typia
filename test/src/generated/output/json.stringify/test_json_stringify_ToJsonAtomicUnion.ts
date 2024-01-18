import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";

export const test_json_stringify_ToJsonAtomicUnion = _test_json_stringify(
  "ToJsonAtomicUnion",
)<ToJsonAtomicUnion>(ToJsonAtomicUnion)((input) =>
  ((input: ToJsonAtomicUnion): string => {
    // @ts-ignore;
    declare const require: (lib: string) => any;
    const $string = require("typia/lib/functional/$string").$string;
    const $number = require("typia/lib/functional/$number").$number;
    const $throws = require("typia/lib/functional/$throws").$throws(
      "typia.json.stringify",
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
  })(input),
);
