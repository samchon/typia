import typia from "typia";

import { _test_json_assertParse } from "../../../internal/_test_json_assertParse";
import { DynamicNever } from "../../../structures/DynamicNever";

export const test_json_createAssertParse_DynamicNever = _test_json_assertParse(
  "DynamicNever",
)<DynamicNever>(DynamicNever)(
  (input: string): typia.Primitive<DynamicNever> => {
    const assert = (input: any): DynamicNever => {
      const __is = (input: any): input is DynamicNever => {
        const $io0 = (input: any): boolean =>
          Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value) return true;
            if (true) return null !== value && undefined === value;
            return true;
          });
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
        ): input is DynamicNever => {
          const $guard = require("typia/lib/functional/$guard").$guard(
            "typia.json.createAssertParse",
          );
          const $join = require("typia/lib/functional/$join").$join;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              const value = input[key];
              if (undefined === value) return true;
              if (true)
                return (
                  (null !== value ||
                    $guard(_exceptionable, {
                      path: _path + $join(key),
                      expected: "undefined",
                      value: value,
                    })) &&
                  (undefined === value ||
                    $guard(_exceptionable, {
                      path: _path + $join(key),
                      expected: "undefined",
                      value: value,
                    }))
                );
              return true;
            });
          return (
            ((("object" === typeof input &&
              null !== input &&
              false === Array.isArray(input)) ||
              $guard(true, {
                path: _path + "",
                expected: "DynamicNever",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "DynamicNever",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    };
    input = JSON.parse(input);
    return assert(input) as any;
  },
);
