import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { TypeTagTypeUnion } from "../../../structures/TypeTagTypeUnion";

export const test_createRandom_TypeTagTypeUnion = _test_random(
  "TypeTagTypeUnion",
)<TypeTagTypeUnion>(TypeTagTypeUnion)({
  random: (
    generator: Partial<typia.IRandomGenerator> = (TypeTagTypeUnion as any)
      .RANDOM,
  ): typia.Resolved<TypeTagTypeUnion> => {
    // @ts-ignore;
    declare const require: (lib: string) => any;
    const $generator = require("typia/lib/functional/$generator").$generator;
    const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
      int32_or_uint32: (generator?.pick ?? $generator.pick)([
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: 'Type<"int32">',
              kind: "type",
              value: "int32",
            },
          ]) ?? (generator?.integer ?? $generator.integer)(0, 100),
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: 'Type<"uint32">',
              kind: "type",
              value: "uint32",
            },
          ]) ?? (generator?.integer ?? $generator.integer)(0, 10),
      ])(),
      int32_or_int64: (generator?.pick ?? $generator.pick)([
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: 'Type<"int32">',
              kind: "type",
              value: "int32",
            },
          ]) ?? (generator?.integer ?? $generator.integer)(0, 100),
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: 'Type<"int64">',
              kind: "type",
              value: "int64",
            },
          ]) ?? (generator?.integer ?? $generator.integer)(0, 100),
      ])(),
      int32_or_uint64: (generator?.pick ?? $generator.pick)([
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: 'Type<"int32">',
              kind: "type",
              value: "int32",
            },
          ]) ?? (generator?.integer ?? $generator.integer)(0, 100),
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: 'Type<"uint64">',
              kind: "type",
              value: "uint64",
            },
          ]) ?? (generator?.integer ?? $generator.integer)(0, 10),
      ])(),
      int32_or_float: (generator?.pick ?? $generator.pick)([
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: 'Type<"int32">',
              kind: "type",
              value: "int32",
            },
          ]) ?? (generator?.integer ?? $generator.integer)(0, 100),
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: 'Type<"float">',
              kind: "type",
              value: "float",
            },
          ]) ?? (generator?.number ?? $generator.number)(0, 100),
      ])(),
      int32_or_double: (generator?.pick ?? $generator.pick)([
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: 'Type<"int32">',
              kind: "type",
              value: "int32",
            },
          ]) ?? (generator?.integer ?? $generator.integer)(0, 100),
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: 'Type<"double">',
              kind: "type",
              value: "double",
            },
          ]) ?? (generator?.number ?? $generator.number)(0, 100),
      ])(),
      int64_or_uint64: (generator?.pick ?? $generator.pick)([
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: 'Type<"int64">',
              kind: "type",
              value: "int64",
            },
          ]) ?? (generator?.integer ?? $generator.integer)(0, 100),
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: 'Type<"uint64">',
              kind: "type",
              value: "uint64",
            },
          ]) ?? (generator?.integer ?? $generator.integer)(0, 10),
      ])(),
      int64_or_float: (generator?.pick ?? $generator.pick)([
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: 'Type<"float">',
              kind: "type",
              value: "float",
            },
          ]) ?? (generator?.number ?? $generator.number)(0, 100),
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: 'Type<"int64">',
              kind: "type",
              value: "int64",
            },
          ]) ?? (generator?.integer ?? $generator.integer)(0, 100),
      ])(),
      int64_or_double: (generator?.pick ?? $generator.pick)([
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: 'Type<"double">',
              kind: "type",
              value: "double",
            },
          ]) ?? (generator?.number ?? $generator.number)(0, 100),
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: 'Type<"int64">',
              kind: "type",
              value: "int64",
            },
          ]) ?? (generator?.integer ?? $generator.integer)(0, 100),
      ])(),
      float_or_double: (generator?.pick ?? $generator.pick)([
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: 'Type<"float">',
              kind: "type",
              value: "float",
            },
          ]) ?? (generator?.number ?? $generator.number)(0, 100),
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: 'Type<"double">',
              kind: "type",
              value: "double",
            },
          ]) ?? (generator?.number ?? $generator.number)(0, 100),
      ])(),
      everything: (generator?.pick ?? $generator.pick)([
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: 'Type<"int32">',
              kind: "type",
              value: "int32",
            },
          ]) ?? (generator?.integer ?? $generator.integer)(0, 100),
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: 'Type<"uint32">',
              kind: "type",
              value: "uint32",
            },
          ]) ?? (generator?.integer ?? $generator.integer)(0, 10),
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: 'Type<"float">',
              kind: "type",
              value: "float",
            },
          ]) ?? (generator?.number ?? $generator.number)(0, 100),
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: 'Type<"double">',
              kind: "type",
              value: "double",
            },
          ]) ?? (generator?.number ?? $generator.number)(0, 100),
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: 'Type<"int64">',
              kind: "type",
              value: "int64",
            },
          ]) ?? (generator?.integer ?? $generator.integer)(0, 100),
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: 'Type<"uint64">',
              kind: "type",
              value: "uint64",
            },
          ]) ?? (generator?.integer ?? $generator.integer)(0, 10),
      ])(),
    });
    return $ro0();
  },
  assert: (input: any): TypeTagTypeUnion => {
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
        // @ts-ignore;
        declare const require: (lib: string) => any;
        const $guard = require("typia/lib/functional/$guard").$guard(
          "typia.createAssert",
        );
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
  },
});
