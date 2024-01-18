import typia from "typia";

import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { ObjectSimpleProtobufOptional } from "../../../structures/ObjectSimpleProtobufOptional";

export const test_assertGuard_ObjectSimpleProtobufOptional = _test_assertGuard(
  "ObjectSimpleProtobufOptional",
)<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)((input) =>
  ((input: any): asserts input is ObjectSimpleProtobufOptional => {
    const __is = (input: any): input is ObjectSimpleProtobufOptional => {
      const $io0 = (input: any): boolean =>
        (undefined === input.bool || "boolean" === typeof input.bool) &&
        (undefined === input.int32 ||
          ("number" === typeof input.int32 &&
            Math.floor(input.int32) === input.int32 &&
            -2147483648 <= input.int32 &&
            input.int32 <= 2147483647)) &&
        (undefined === input.uint32 ||
          ("number" === typeof input.uint32 &&
            Math.floor(input.uint32) === input.uint32 &&
            0 <= input.uint32 &&
            input.uint32 <= 4294967295)) &&
        (undefined === input.int64 || "bigint" === typeof input.int64) &&
        (undefined === input.uint64 ||
          ("bigint" === typeof input.uint64 && BigInt(0) <= input.uint64)) &&
        (undefined === input.float ||
          ("number" === typeof input.float &&
            -1.175494351e38 <= input.float &&
            input.float <= 3.4028235e38)) &&
        (undefined === input.double ||
          ("number" === typeof input.double &&
            Number.isFinite(input.double) &&
            true)) &&
        (undefined === input.string || "string" === typeof input.string) &&
        (undefined === input.bytes || input.bytes instanceof Uint8Array);
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
      ): input is ObjectSimpleProtobufOptional => {
        // @ts-ignore;
        declare const require: (lib: string) => any;
        const $guard = require("typia/lib/functional/$guard").$guard(
          "typia.assertGuard",
        );
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (undefined === input.bool ||
            "boolean" === typeof input.bool ||
            $guard(_exceptionable, {
              path: _path + ".bool",
              expected: "(boolean | undefined)",
              value: input.bool,
            })) &&
          (undefined === input.int32 ||
            ("number" === typeof input.int32 &&
              ((Math.floor(input.int32) === input.int32 &&
                -2147483648 <= input.int32 &&
                input.int32 <= 2147483647) ||
                $guard(_exceptionable, {
                  path: _path + ".int32",
                  expected: 'number & Type<"int32">',
                  value: input.int32,
                }))) ||
            $guard(_exceptionable, {
              path: _path + ".int32",
              expected: '((number & Type<"int32">) | undefined)',
              value: input.int32,
            })) &&
          (undefined === input.uint32 ||
            ("number" === typeof input.uint32 &&
              ((Math.floor(input.uint32) === input.uint32 &&
                0 <= input.uint32 &&
                input.uint32 <= 4294967295) ||
                $guard(_exceptionable, {
                  path: _path + ".uint32",
                  expected: 'number & Type<"uint32">',
                  value: input.uint32,
                }))) ||
            $guard(_exceptionable, {
              path: _path + ".uint32",
              expected: '((number & Type<"uint32">) | undefined)',
              value: input.uint32,
            })) &&
          (undefined === input.int64 ||
            "bigint" === typeof input.int64 ||
            $guard(_exceptionable, {
              path: _path + ".int64",
              expected: "(bigint | undefined)",
              value: input.int64,
            })) &&
          (undefined === input.uint64 ||
            ("bigint" === typeof input.uint64 &&
              (BigInt(0) <= input.uint64 ||
                $guard(_exceptionable, {
                  path: _path + ".uint64",
                  expected: 'bigint & Type<"uint64">',
                  value: input.uint64,
                }))) ||
            $guard(_exceptionable, {
              path: _path + ".uint64",
              expected: '((bigint & Type<"uint64">) | undefined)',
              value: input.uint64,
            })) &&
          (undefined === input.float ||
            ("number" === typeof input.float &&
              ((-1.175494351e38 <= input.float &&
                input.float <= 3.4028235e38) ||
                $guard(_exceptionable, {
                  path: _path + ".float",
                  expected: 'number & Type<"float">',
                  value: input.float,
                }))) ||
            $guard(_exceptionable, {
              path: _path + ".float",
              expected: '((number & Type<"float">) | undefined)',
              value: input.float,
            })) &&
          (undefined === input.double ||
            ("number" === typeof input.double &&
              (Number.isFinite(input.double) ||
                $guard(_exceptionable, {
                  path: _path + ".double",
                  expected: "number",
                  value: input.double,
                })) &&
              (true ||
                $guard(_exceptionable, {
                  path: _path + ".double",
                  expected: 'number & Type<"double">',
                  value: input.double,
                }))) ||
            $guard(_exceptionable, {
              path: _path + ".double",
              expected: '((number & Type<"double">) | undefined)',
              value: input.double,
            })) &&
          (undefined === input.string ||
            "string" === typeof input.string ||
            $guard(_exceptionable, {
              path: _path + ".string",
              expected: "(string | undefined)",
              value: input.string,
            })) &&
          (undefined === input.bytes ||
            input.bytes instanceof Uint8Array ||
            $guard(_exceptionable, {
              path: _path + ".bytes",
              expected: "(Uint8Array | undefined)",
              value: input.bytes,
            }));
        return (
          ((("object" === typeof input &&
            null !== input &&
            false === Array.isArray(input)) ||
            $guard(true, {
              path: _path + "",
              expected: "ObjectSimpleProtobufOptional",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "ObjectSimpleProtobufOptional",
            value: input,
          })
        );
      })(input, "$input", true);
  })(input),
);
