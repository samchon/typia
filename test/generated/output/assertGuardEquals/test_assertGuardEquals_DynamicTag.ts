import typia from "../../../../src";
import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { DynamicTag } from "../../../structures/DynamicTag";

export const test_assertGuardEquals_DynamicTag = _test_assertGuardEquals(
  "DynamicTag",
)<DynamicTag>(DynamicTag)((input) =>
  ((input: any): asserts input is DynamicTag => {
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is DynamicTag => {
      const $join = (typia.assertGuardEquals as any).join;
      const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
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
          return false;
        });
      return (
        "object" === typeof input &&
        null !== input &&
        false === Array.isArray(input) &&
        $io0(input, true)
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is DynamicTag => {
        const $guard = (typia.assertGuardEquals as any).guard;
        const $join = (typia.assertGuardEquals as any).join;
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
            return $guard(_exceptionable, {
              path: _path + $join(key),
              expected: "undefined",
              value: value,
            });
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
  })(input),
);
