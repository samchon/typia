import typia from "typia";

import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { TypeTagTypeBigInt } from "../../../structures/TypeTagTypeBigInt";

export const test_assertGuardEquals_TypeTagTypeBigInt = _test_assertGuardEquals(
  "TypeTagTypeBigInt",
)<TypeTagTypeBigInt>(TypeTagTypeBigInt)((input) =>
  ((input: any): asserts input is TypeTagTypeBigInt => {
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is TypeTagTypeBigInt => {
      const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
        "bigint" === typeof input.in64 &&
        "bigint" === typeof input.uint64 &&
        BigInt(0) <= input.uint64 &&
        (2 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["in64", "uint64"].some((prop: any) => key === prop))
              return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      return "object" === typeof input && null !== input && $io0(input, true);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is TypeTagTypeBigInt => {
        const $guard = (typia.assertGuardEquals as any).guard;
        const $join = (typia.assertGuardEquals as any).join;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("bigint" === typeof input.in64 ||
            $guard(_exceptionable, {
              path: _path + ".in64",
              expected: "bigint",
              value: input.in64,
            })) &&
          (("bigint" === typeof input.uint64 &&
            (BigInt(0) <= input.uint64 ||
              $guard(_exceptionable, {
                path: _path + ".uint64",
                expected: 'bigint & Type<"uint64">',
                value: input.uint64,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".uint64",
              expected: '(bigint & Type<"uint64">)',
              value: input.uint64,
            })) &&
          (2 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["in64", "uint64"].some((prop: any) => key === prop))
                return true;
              const value = input[key];
              if (undefined === value) return true;
              return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value,
              });
            }));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(true, {
              path: _path + "",
              expected: "TypeTagTypeBigInt",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "TypeTagTypeBigInt",
            value: input,
          })
        );
      })(input, "$input", true);
  })(input),
);
