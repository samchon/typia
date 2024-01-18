import typia from "typia";

import { _test_assert } from "../../../internal/_test_assert";
import { DynamicTag } from "../../../structures/DynamicTag";

export const test_assert_DynamicTag = _test_assert("DynamicTag")<DynamicTag>(
  DynamicTag,
)((input) =>
  ((input: any): DynamicTag => {
    const __is = (input: any): input is DynamicTag => {
      const $io0 = (input: any): boolean =>
        Object.keys(input).every((key: any) => {
          const value = input[key];
          if (undefined === value) return true;
          if (
            "number" === typeof Number(key) &&
            0 <= Number(key) &&
            Number(key) < 10
          )
            return "bigint" === typeof value && BigInt(0) <= value;
          if (
            "string" === typeof key &&
            /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
              key,
            )
          )
            return (
              "string" === typeof value &&
              /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
                value,
              )
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
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is DynamicTag => {
        const $guard = require("typia/lib/functional/$guard").$guard(
          "typia.assert",
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
            if (
              "number" === typeof Number(key) &&
              0 <= Number(key) &&
              Number(key) < 10
            )
              return (
                ("bigint" === typeof value &&
                  (BigInt(0) <= value ||
                    $guard(_exceptionable, {
                      path: _path + $join(key),
                      expected: 'bigint & Type<"uint64">',
                      value: value,
                    }))) ||
                $guard(_exceptionable, {
                  path: _path + $join(key),
                  expected: '(bigint & Type<"uint64">)',
                  value: value,
                })
              );
            if (
              "string" === typeof key &&
              /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                key,
              )
            )
              return (
                ("string" === typeof value &&
                  (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
                    value,
                  ) ||
                    $guard(_exceptionable, {
                      path: _path + $join(key),
                      expected: 'string & Format<"email">',
                      value: value,
                    }))) ||
                $guard(_exceptionable, {
                  path: _path + $join(key),
                  expected: '(string & Format<"email">)',
                  value: value,
                })
              );
            return true;
          });
        return (
          ((("object" === typeof input &&
            null !== input &&
            false === Array.isArray(input)) ||
            $guard(true, {
              path: _path + "",
              expected: "DynamicTag",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "DynamicTag",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  })(input),
);
