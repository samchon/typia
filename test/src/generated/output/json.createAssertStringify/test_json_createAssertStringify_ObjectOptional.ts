import typia from "typia";

import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_json_createAssertStringify_ObjectOptional =
  _test_json_assertStringify("ObjectOptional")<ObjectOptional>(ObjectOptional)(
    (input: any): string => {
      const assert = (input: any): ObjectOptional => {
        const __is = (input: any): input is ObjectOptional => {
          const $io0 = (input: any): boolean =>
            (undefined === input.id || "string" === typeof input.id) &&
            (undefined === input.name || "string" === typeof input.name) &&
            (undefined === input.email || "string" === typeof input.email) &&
            (undefined === input.sequence ||
              ("number" === typeof input.sequence &&
                Number.isFinite(input.sequence)));
          return (
            "object" === typeof input &&
            null !== input &&
            false === Array.isArray(input) &&
            $io0(input)
          );
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectOptional => {
            // @ts-ignore;
            declare const require: (lib: string) => any;
            const $guard = require("typia/lib/functional/$guard").$guard(
              "typia.json.createAssertStringify",
            );
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (undefined === input.id ||
                "string" === typeof input.id ||
                $guard(_exceptionable, {
                  path: _path + ".id",
                  expected: "(string | undefined)",
                  value: input.id,
                })) &&
              (undefined === input.name ||
                "string" === typeof input.name ||
                $guard(_exceptionable, {
                  path: _path + ".name",
                  expected: "(string | undefined)",
                  value: input.name,
                })) &&
              (undefined === input.email ||
                "string" === typeof input.email ||
                $guard(_exceptionable, {
                  path: _path + ".email",
                  expected: "(string | undefined)",
                  value: input.email,
                })) &&
              (undefined === input.sequence ||
                ("number" === typeof input.sequence &&
                  Number.isFinite(input.sequence)) ||
                $guard(_exceptionable, {
                  path: _path + ".sequence",
                  expected: "(number | undefined)",
                  value: input.sequence,
                }));
            return (
              ((("object" === typeof input &&
                null !== input &&
                false === Array.isArray(input)) ||
                $guard(true, {
                  path: _path + "",
                  expected: "ObjectOptional",
                  value: input,
                })) &&
                $ao0(input, _path + "", true)) ||
              $guard(true, {
                path: _path + "",
                expected: "ObjectOptional",
                value: input,
              })
            );
          })(input, "$input", true);
        return input;
      };
      const stringify = (input: ObjectOptional): string => {
        // @ts-ignore;
        declare const require: (lib: string) => any;
        const $string = require("typia/lib/functional/$string").$string;
        const $number = require("typia/lib/functional/$number").$number;
        const $tail = require("typia/lib/functional/$tail").$tail;
        const $so0 = (input: any): any =>
          `{${$tail(
            `${
              undefined === input.id
                ? ""
                : `"id":${
                    undefined !== input.id ? $string(input.id) : undefined
                  },`
            }${
              undefined === input.name
                ? ""
                : `"name":${
                    undefined !== input.name ? $string(input.name) : undefined
                  },`
            }${
              undefined === input.email
                ? ""
                : `"email":${
                    undefined !== input.email ? $string(input.email) : undefined
                  },`
            }${
              undefined === input.sequence
                ? ""
                : `"sequence":${
                    undefined !== input.sequence
                      ? $number(input.sequence)
                      : undefined
                  }`
            }`,
          )}}`;
        return $so0(input);
      };
      return stringify(assert(input));
    },
  );
