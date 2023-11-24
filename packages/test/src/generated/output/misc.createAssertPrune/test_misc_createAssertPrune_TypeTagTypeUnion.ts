import typia from "typia";

import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { TypeTagTypeUnion } from "../../../structures/TypeTagTypeUnion";

export const test_misc_createAssertPrune_TypeTagTypeUnion =
  _test_misc_assertPrune("TypeTagTypeUnion")<TypeTagTypeUnion>(
    TypeTagTypeUnion,
  )((input: any): TypeTagTypeUnion => {
    const assert = (input: any): TypeTagTypeUnion => {
      const __is = (input: any): input is TypeTagTypeUnion => {
        const $io0 = (input: any): boolean =>
          "number" === typeof input.int32_or_uint32 &&
          ((Math.floor(input.int32_or_uint32) === input.int32_or_uint32 &&
            -2147483648 <= input.int32_or_uint32 &&
            input.int32_or_uint32 <= 2147483647) ||
            (Math.floor(input.int32_or_uint32) === input.int32_or_uint32 &&
              0 <= input.int32_or_uint32 &&
              input.int32_or_uint32 <= 4294967295)) &&
          "number" === typeof input.int32_or_int64 &&
          ((Math.floor(input.int32_or_int64) === input.int32_or_int64 &&
            -2147483648 <= input.int32_or_int64 &&
            input.int32_or_int64 <= 2147483647) ||
            (Math.floor(input.int32_or_int64) === input.int32_or_int64 &&
              -9223372036854776000 <= input.int32_or_int64 &&
              input.int32_or_int64 <= 9223372036854776000)) &&
          "number" === typeof input.int32_or_uint64 &&
          ((Math.floor(input.int32_or_uint64) === input.int32_or_uint64 &&
            -2147483648 <= input.int32_or_uint64 &&
            input.int32_or_uint64 <= 2147483647) ||
            (Math.floor(input.int32_or_uint64) === input.int32_or_uint64 &&
              0 <= input.int32_or_uint64 &&
              input.int32_or_uint64 <= 18446744073709552000)) &&
          "number" === typeof input.int32_or_float &&
          ((Math.floor(input.int32_or_float) === input.int32_or_float &&
            -2147483648 <= input.int32_or_float &&
            input.int32_or_float <= 2147483647) ||
            (-1.175494351e38 <= input.int32_or_float &&
              input.int32_or_float <= 3.4028235e38)) &&
          "number" === typeof input.int32_or_double &&
          ((Math.floor(input.int32_or_double) === input.int32_or_double &&
            -2147483648 <= input.int32_or_double &&
            input.int32_or_double <= 2147483647) ||
            (Number.isFinite(input.int32_or_double) && true)) &&
          "number" === typeof input.int64_or_uint64 &&
          ((Math.floor(input.int64_or_uint64) === input.int64_or_uint64 &&
            -9223372036854776000 <= input.int64_or_uint64 &&
            input.int64_or_uint64 <= 9223372036854776000) ||
            (Math.floor(input.int64_or_uint64) === input.int64_or_uint64 &&
              0 <= input.int64_or_uint64 &&
              input.int64_or_uint64 <= 18446744073709552000)) &&
          "number" === typeof input.int64_or_float &&
          ((-1.175494351e38 <= input.int64_or_float &&
            input.int64_or_float <= 3.4028235e38) ||
            (Math.floor(input.int64_or_float) === input.int64_or_float &&
              -9223372036854776000 <= input.int64_or_float &&
              input.int64_or_float <= 9223372036854776000)) &&
          "number" === typeof input.int64_or_double &&
          ((Number.isFinite(input.int64_or_double) && true) ||
            (Math.floor(input.int64_or_double) === input.int64_or_double &&
              -9223372036854776000 <= input.int64_or_double &&
              input.int64_or_double <= 9223372036854776000)) &&
          "number" === typeof input.float_or_double &&
          ((-1.175494351e38 <= input.float_or_double &&
            input.float_or_double <= 3.4028235e38) ||
            (Number.isFinite(input.float_or_double) && true)) &&
          "number" === typeof input.everything &&
          ((Math.floor(input.everything) === input.everything &&
            -2147483648 <= input.everything &&
            input.everything <= 2147483647) ||
            (Math.floor(input.everything) === input.everything &&
              0 <= input.everything &&
              input.everything <= 4294967295) ||
            (-1.175494351e38 <= input.everything &&
              input.everything <= 3.4028235e38) ||
            (Number.isFinite(input.everything) && true) ||
            (Math.floor(input.everything) === input.everything &&
              -9223372036854776000 <= input.everything &&
              input.everything <= 9223372036854776000) ||
            (Math.floor(input.everything) === input.everything &&
              0 <= input.everything &&
              input.everything <= 18446744073709552000));
        return "object" === typeof input && null !== input && $io0(input);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is TypeTagTypeUnion => {
          const $guard = (typia.misc.createAssertPrune as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (("number" === typeof input.int32_or_uint32 &&
              ((Math.floor(input.int32_or_uint32) === input.int32_or_uint32 &&
                -2147483648 <= input.int32_or_uint32 &&
                input.int32_or_uint32 <= 2147483647) ||
                (Math.floor(input.int32_or_uint32) === input.int32_or_uint32 &&
                  0 <= input.int32_or_uint32 &&
                  input.int32_or_uint32 <= 4294967295) ||
                $guard(_exceptionable, {
                  path: _path + ".int32_or_uint32",
                  expected: '(number & (Type<"int32"> | Type<"uint32">))',
                  value: input.int32_or_uint32,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".int32_or_uint32",
                expected: '(number & (Type<"int32"> | Type<"uint32">))',
                value: input.int32_or_uint32,
              })) &&
            (("number" === typeof input.int32_or_int64 &&
              ((Math.floor(input.int32_or_int64) === input.int32_or_int64 &&
                -2147483648 <= input.int32_or_int64 &&
                input.int32_or_int64 <= 2147483647) ||
                (Math.floor(input.int32_or_int64) === input.int32_or_int64 &&
                  -9223372036854776000 <= input.int32_or_int64 &&
                  input.int32_or_int64 <= 9223372036854776000) ||
                $guard(_exceptionable, {
                  path: _path + ".int32_or_int64",
                  expected: '(number & (Type<"int32"> | Type<"int64">))',
                  value: input.int32_or_int64,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".int32_or_int64",
                expected: '(number & (Type<"int32"> | Type<"int64">))',
                value: input.int32_or_int64,
              })) &&
            (("number" === typeof input.int32_or_uint64 &&
              ((Math.floor(input.int32_or_uint64) === input.int32_or_uint64 &&
                -2147483648 <= input.int32_or_uint64 &&
                input.int32_or_uint64 <= 2147483647) ||
                (Math.floor(input.int32_or_uint64) === input.int32_or_uint64 &&
                  0 <= input.int32_or_uint64 &&
                  input.int32_or_uint64 <= 18446744073709552000) ||
                $guard(_exceptionable, {
                  path: _path + ".int32_or_uint64",
                  expected: '(number & (Type<"int32"> | Type<"uint64">))',
                  value: input.int32_or_uint64,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".int32_or_uint64",
                expected: '(number & (Type<"int32"> | Type<"uint64">))',
                value: input.int32_or_uint64,
              })) &&
            (("number" === typeof input.int32_or_float &&
              ((Math.floor(input.int32_or_float) === input.int32_or_float &&
                -2147483648 <= input.int32_or_float &&
                input.int32_or_float <= 2147483647) ||
                (-1.175494351e38 <= input.int32_or_float &&
                  input.int32_or_float <= 3.4028235e38) ||
                $guard(_exceptionable, {
                  path: _path + ".int32_or_float",
                  expected: '(number & (Type<"int32"> | Type<"float">))',
                  value: input.int32_or_float,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".int32_or_float",
                expected: '(number & (Type<"int32"> | Type<"float">))',
                value: input.int32_or_float,
              })) &&
            (("number" === typeof input.int32_or_double &&
              ((Math.floor(input.int32_or_double) === input.int32_or_double &&
                -2147483648 <= input.int32_or_double &&
                input.int32_or_double <= 2147483647) ||
                (Number.isFinite(input.int32_or_double) && true) ||
                $guard(_exceptionable, {
                  path: _path + ".int32_or_double",
                  expected: '(number & (Type<"int32"> | Type<"double">))',
                  value: input.int32_or_double,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".int32_or_double",
                expected: '(number & (Type<"int32"> | Type<"double">))',
                value: input.int32_or_double,
              })) &&
            (("number" === typeof input.int64_or_uint64 &&
              ((Math.floor(input.int64_or_uint64) === input.int64_or_uint64 &&
                -9223372036854776000 <= input.int64_or_uint64 &&
                input.int64_or_uint64 <= 9223372036854776000) ||
                (Math.floor(input.int64_or_uint64) === input.int64_or_uint64 &&
                  0 <= input.int64_or_uint64 &&
                  input.int64_or_uint64 <= 18446744073709552000) ||
                $guard(_exceptionable, {
                  path: _path + ".int64_or_uint64",
                  expected: '(number & (Type<"int64"> | Type<"uint64">))',
                  value: input.int64_or_uint64,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".int64_or_uint64",
                expected: '(number & (Type<"int64"> | Type<"uint64">))',
                value: input.int64_or_uint64,
              })) &&
            (("number" === typeof input.int64_or_float &&
              ((-1.175494351e38 <= input.int64_or_float &&
                input.int64_or_float <= 3.4028235e38) ||
                (Math.floor(input.int64_or_float) === input.int64_or_float &&
                  -9223372036854776000 <= input.int64_or_float &&
                  input.int64_or_float <= 9223372036854776000) ||
                $guard(_exceptionable, {
                  path: _path + ".int64_or_float",
                  expected: '(number & (Type<"float"> | Type<"int64">))',
                  value: input.int64_or_float,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".int64_or_float",
                expected: '(number & (Type<"float"> | Type<"int64">))',
                value: input.int64_or_float,
              })) &&
            (("number" === typeof input.int64_or_double &&
              ((Number.isFinite(input.int64_or_double) && true) ||
                (Math.floor(input.int64_or_double) === input.int64_or_double &&
                  -9223372036854776000 <= input.int64_or_double &&
                  input.int64_or_double <= 9223372036854776000) ||
                $guard(_exceptionable, {
                  path: _path + ".int64_or_double",
                  expected: '(number & (Type<"double"> | Type<"int64">))',
                  value: input.int64_or_double,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".int64_or_double",
                expected: '(number & (Type<"double"> | Type<"int64">))',
                value: input.int64_or_double,
              })) &&
            (("number" === typeof input.float_or_double &&
              ((-1.175494351e38 <= input.float_or_double &&
                input.float_or_double <= 3.4028235e38) ||
                (Number.isFinite(input.float_or_double) && true) ||
                $guard(_exceptionable, {
                  path: _path + ".float_or_double",
                  expected: '(number & (Type<"float"> | Type<"double">))',
                  value: input.float_or_double,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".float_or_double",
                expected: '(number & (Type<"float"> | Type<"double">))',
                value: input.float_or_double,
              })) &&
            (("number" === typeof input.everything &&
              ((Math.floor(input.everything) === input.everything &&
                -2147483648 <= input.everything &&
                input.everything <= 2147483647) ||
                (Math.floor(input.everything) === input.everything &&
                  0 <= input.everything &&
                  input.everything <= 4294967295) ||
                (-1.175494351e38 <= input.everything &&
                  input.everything <= 3.4028235e38) ||
                (Number.isFinite(input.everything) && true) ||
                (Math.floor(input.everything) === input.everything &&
                  -9223372036854776000 <= input.everything &&
                  input.everything <= 9223372036854776000) ||
                (Math.floor(input.everything) === input.everything &&
                  0 <= input.everything &&
                  input.everything <= 18446744073709552000) ||
                $guard(_exceptionable, {
                  path: _path + ".everything",
                  expected:
                    '(number & (Type<"int32"> | Type<"uint32"> | Type<"float"> | Type<"double"> | Type<"int64"> | Type<"uint64">))',
                  value: input.everything,
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".everything",
                expected:
                  '(number & (Type<"int32"> | Type<"uint32"> | Type<"float"> | Type<"double"> | Type<"int64"> | Type<"uint64">))',
                value: input.everything,
              }));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(true, {
                path: _path + "",
                expected: "TypeTagTypeUnion",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "TypeTagTypeUnion",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    };
    const prune = (input: TypeTagTypeUnion): void => {
      const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if (
            "int32_or_uint32" === key ||
            "int32_or_int64" === key ||
            "int32_or_uint64" === key ||
            "int32_or_float" === key ||
            "int32_or_double" === key ||
            "int64_or_uint64" === key ||
            "int64_or_float" === key ||
            "int64_or_double" === key ||
            "float_or_double" === key ||
            "everything" === key
          )
            continue;
          delete input[key];
        }
      };
      if ("object" === typeof input && null !== input) $po0(input);
    };
    assert(input);
    prune(input);
    return input;
  });
