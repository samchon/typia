import typia from "typia";
import { _test_functional_assertFunctionAsync } from "../../../internal/_test_functional_assertFunctionAsync";
import { ObjectSimpleProtobufOptional } from "../../../structures/ObjectSimpleProtobufOptional";
import { TypeGuardError } from "typia";
export const test_functional_assertFunctionAsync_ObjectSimpleProtobufOptional =
  _test_functional_assertFunctionAsync(TypeGuardError)(
    "ObjectSimpleProtobufOptional",
  )(ObjectSimpleProtobufOptional)(
    (
      p: (
        input: ObjectSimpleProtobufOptional,
      ) => Promise<ObjectSimpleProtobufOptional>,
    ) =>
      async (
        input: ObjectSimpleProtobufOptional,
      ): Promise<ObjectSimpleProtobufOptional> => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertFunction as any).errorFactory;
        ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.parameters[0]")
                : undefined,
            }),
        ): ObjectSimpleProtobufOptional => {
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
                ("bigint" === typeof input.uint64 &&
                  BigInt(0) <= input.uint64)) &&
              (undefined === input.float ||
                ("number" === typeof input.float &&
                  -1.175494351e38 <= input.float &&
                  input.float <= 3.4028235e38)) &&
              (undefined === input.double ||
                ("number" === typeof input.double &&
                  Number.isFinite(input.double) &&
                  true)) &&
              (undefined === input.string ||
                "string" === typeof input.string) &&
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
              const $guard = (typia.functional.assertFunction as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (undefined === input.bool ||
                  "boolean" === typeof input.bool ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".bool",
                      expected: "(boolean | undefined)",
                      value: input.bool,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.int32 ||
                  ("number" === typeof input.int32 &&
                    ((Math.floor(input.int32) === input.int32 &&
                      -2147483648 <= input.int32 &&
                      input.int32 <= 2147483647) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".int32",
                          expected: 'number & Type<"int32">',
                          value: input.int32,
                        },
                        errorFactory,
                      ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".int32",
                      expected: '((number & Type<"int32">) | undefined)',
                      value: input.int32,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.uint32 ||
                  ("number" === typeof input.uint32 &&
                    ((Math.floor(input.uint32) === input.uint32 &&
                      0 <= input.uint32 &&
                      input.uint32 <= 4294967295) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".uint32",
                          expected: 'number & Type<"uint32">',
                          value: input.uint32,
                        },
                        errorFactory,
                      ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".uint32",
                      expected: '((number & Type<"uint32">) | undefined)',
                      value: input.uint32,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.int64 ||
                  "bigint" === typeof input.int64 ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".int64",
                      expected: "(bigint | undefined)",
                      value: input.int64,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.uint64 ||
                  ("bigint" === typeof input.uint64 &&
                    (BigInt(0) <= input.uint64 ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".uint64",
                          expected: 'bigint & Type<"uint64">',
                          value: input.uint64,
                        },
                        errorFactory,
                      ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".uint64",
                      expected: '((bigint & Type<"uint64">) | undefined)',
                      value: input.uint64,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.float ||
                  ("number" === typeof input.float &&
                    ((-1.175494351e38 <= input.float &&
                      input.float <= 3.4028235e38) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".float",
                          expected: 'number & Type<"float">',
                          value: input.float,
                        },
                        errorFactory,
                      ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".float",
                      expected: '((number & Type<"float">) | undefined)',
                      value: input.float,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.double ||
                  ("number" === typeof input.double &&
                    (Number.isFinite(input.double) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".double",
                          expected: "number",
                          value: input.double,
                        },
                        errorFactory,
                      )) &&
                    (true ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".double",
                          expected: 'number & Type<"double">',
                          value: input.double,
                        },
                        errorFactory,
                      ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".double",
                      expected: '((number & Type<"double">) | undefined)',
                      value: input.double,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.string ||
                  "string" === typeof input.string ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".string",
                      expected: "(string | undefined)",
                      value: input.string,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.bytes ||
                  input.bytes instanceof Uint8Array ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".bytes",
                      expected: "(Uint8Array | undefined)",
                      value: input.bytes,
                    },
                    errorFactory,
                  ));
              return (
                ((("object" === typeof input &&
                  null !== input &&
                  false === Array.isArray(input)) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ObjectSimpleProtobufOptional",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectSimpleProtobufOptional",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(input);
        return ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.return")
                : undefined,
            }),
        ): ObjectSimpleProtobufOptional => {
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
                ("bigint" === typeof input.uint64 &&
                  BigInt(0) <= input.uint64)) &&
              (undefined === input.float ||
                ("number" === typeof input.float &&
                  -1.175494351e38 <= input.float &&
                  input.float <= 3.4028235e38)) &&
              (undefined === input.double ||
                ("number" === typeof input.double &&
                  Number.isFinite(input.double) &&
                  true)) &&
              (undefined === input.string ||
                "string" === typeof input.string) &&
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
              const $guard = (typia.functional.assertFunction as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (undefined === input.bool ||
                  "boolean" === typeof input.bool ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".bool",
                      expected: "(boolean | undefined)",
                      value: input.bool,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.int32 ||
                  ("number" === typeof input.int32 &&
                    ((Math.floor(input.int32) === input.int32 &&
                      -2147483648 <= input.int32 &&
                      input.int32 <= 2147483647) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".int32",
                          expected: 'number & Type<"int32">',
                          value: input.int32,
                        },
                        errorFactory,
                      ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".int32",
                      expected: '((number & Type<"int32">) | undefined)',
                      value: input.int32,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.uint32 ||
                  ("number" === typeof input.uint32 &&
                    ((Math.floor(input.uint32) === input.uint32 &&
                      0 <= input.uint32 &&
                      input.uint32 <= 4294967295) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".uint32",
                          expected: 'number & Type<"uint32">',
                          value: input.uint32,
                        },
                        errorFactory,
                      ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".uint32",
                      expected: '((number & Type<"uint32">) | undefined)',
                      value: input.uint32,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.int64 ||
                  "bigint" === typeof input.int64 ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".int64",
                      expected: "(bigint | undefined)",
                      value: input.int64,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.uint64 ||
                  ("bigint" === typeof input.uint64 &&
                    (BigInt(0) <= input.uint64 ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".uint64",
                          expected: 'bigint & Type<"uint64">',
                          value: input.uint64,
                        },
                        errorFactory,
                      ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".uint64",
                      expected: '((bigint & Type<"uint64">) | undefined)',
                      value: input.uint64,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.float ||
                  ("number" === typeof input.float &&
                    ((-1.175494351e38 <= input.float &&
                      input.float <= 3.4028235e38) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".float",
                          expected: 'number & Type<"float">',
                          value: input.float,
                        },
                        errorFactory,
                      ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".float",
                      expected: '((number & Type<"float">) | undefined)',
                      value: input.float,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.double ||
                  ("number" === typeof input.double &&
                    (Number.isFinite(input.double) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".double",
                          expected: "number",
                          value: input.double,
                        },
                        errorFactory,
                      )) &&
                    (true ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".double",
                          expected: 'number & Type<"double">',
                          value: input.double,
                        },
                        errorFactory,
                      ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".double",
                      expected: '((number & Type<"double">) | undefined)',
                      value: input.double,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.string ||
                  "string" === typeof input.string ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".string",
                      expected: "(string | undefined)",
                      value: input.string,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.bytes ||
                  input.bytes instanceof Uint8Array ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".bytes",
                      expected: "(Uint8Array | undefined)",
                      value: input.bytes,
                    },
                    errorFactory,
                  ));
              return (
                ((("object" === typeof input &&
                  null !== input &&
                  false === Array.isArray(input)) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ObjectSimpleProtobufOptional",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectSimpleProtobufOptional",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(await p(input));
      },
  );
