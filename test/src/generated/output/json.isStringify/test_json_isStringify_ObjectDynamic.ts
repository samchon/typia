import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_json_isStringify_ObjectDynamic = _test_json_isStringify(
  "ObjectDynamic",
)<ObjectDynamic>(ObjectDynamic)((input) =>
  ((input: ObjectDynamic): string | null => {
    const is = (input: any): input is ObjectDynamic => {
      const $io0 = (input: any): boolean =>
        Object.keys(input).every((key: any) => {
          const value = input[key];
          if (undefined === value) return true;
          if (true)
            return (
              "string" === typeof value ||
              ("number" === typeof value && Number.isFinite(value)) ||
              "boolean" === typeof value
            );
          return true;
        });
      return (
        "object" === typeof input &&
        null !== input &&
        false === Array.isArray(input) &&
        $io0(input)
      );
    };
    const stringify = (input: ObjectDynamic): string => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $string = require("typia/lib/functional/$string").$string;
      const $number = require("typia/lib/functional/$number").$number;
      const $throws = require("typia/lib/functional/$throws").$throws(
        "typia.json.isStringify",
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
    };
    return is(input) ? stringify(input) : null;
  })(input),
);
