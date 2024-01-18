import typia from "typia";

import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { AtomicSimple } from "../../../structures/AtomicSimple";

export const test_json_assertStringify_AtomicSimple =
  _test_json_assertStringify("AtomicSimple")<AtomicSimple>(AtomicSimple)(
    (input) =>
      ((input: any): string => {
        const assert = (input: any): AtomicSimple => {
          const __is = (input: any): input is AtomicSimple => {
            return (
              Array.isArray(input) &&
              input.length === 3 &&
              "boolean" === typeof input[0] &&
              "number" === typeof input[1] &&
              Number.isFinite(input[1]) &&
              "string" === typeof input[2]
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is AtomicSimple => {
              // @ts-ignore;
              declare const require: (lib: string) => any;
              const $guard = require("typia/lib/functional/$guard").$guard(
                "typia.json.assertStringify",
              );
              return (
                ((Array.isArray(input) ||
                  $guard(true, {
                    path: _path + "",
                    expected: "AtomicSimple",
                    value: input,
                  })) &&
                  (input.length === 3 ||
                    $guard(true, {
                      path: _path + "",
                      expected: "[boolean, number, string]",
                      value: input,
                    })) &&
                  ("boolean" === typeof input[0] ||
                    $guard(true, {
                      path: _path + "[0]",
                      expected: "boolean",
                      value: input[0],
                    })) &&
                  (("number" === typeof input[1] &&
                    Number.isFinite(input[1])) ||
                    $guard(true, {
                      path: _path + "[1]",
                      expected: "number",
                      value: input[1],
                    })) &&
                  ("string" === typeof input[2] ||
                    $guard(true, {
                      path: _path + "[2]",
                      expected: "string",
                      value: input[2],
                    }))) ||
                $guard(true, {
                  path: _path + "",
                  expected: "AtomicSimple",
                  value: input,
                })
              );
            })(input, "$input", true);
          return input;
        };
        const stringify = (input: AtomicSimple): string => {
          // @ts-ignore;
          declare const require: (lib: string) => any;
          const $number = require("typia/lib/functional/$number").$number;
          const $string = require("typia/lib/functional/$string").$string;
          return `[${input[0]},${$number(input[1])},${$string(input[2])}]`;
        };
        return stringify(assert(input));
      })(input),
  );
