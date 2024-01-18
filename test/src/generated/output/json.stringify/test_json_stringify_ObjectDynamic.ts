import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_json_stringify_ObjectDynamic = _test_json_stringify(
  "ObjectDynamic",
)<ObjectDynamic>(ObjectDynamic)((input) =>
  ((input: ObjectDynamic): string => {
    const $string = require("typia/lib/functional/$string").$string;
    const $number = require("typia/lib/functional/$number").$number;
    const $throws = require("typia/lib/functional/$throws").$throws(
      "typia.json.stringify",
    );
    const $so0 = (input: any): any =>
      `{${Object.entries(input)
        .map(([key, value]: [string, any]) => {
          if (undefined === value) return "";
          return `${JSON.stringify(key)}:${(() => {
            if ("string" === typeof value) return $string(value);
            if ("number" === typeof value) return $number(value);
            if ("boolean" === typeof value) return value;
            $throws({
              expected: "(boolean | number | string)",
              value: value,
            });
          })()}`;
        })
        .filter((str: any) => "" !== str)
        .join(",")}}`;
    return $so0(input);
  })(input),
);
