import typia from "typia";

import { _test_functional_validateReturn } from "../../../internal/_test_functional_validateReturn";
import { ObjectSimpleProtobufNullable } from "../../../structures/ObjectSimpleProtobufNullable";

export const test_functional_validateReturn_ObjectSimpleProtobufNullable =
  _test_functional_validateReturn("ObjectSimpleProtobufNullable")(
    ObjectSimpleProtobufNullable,
  )(
    (
      p: (input: ObjectSimpleProtobufNullable) => ObjectSimpleProtobufNullable,
    ) =>
      (
        input: ObjectSimpleProtobufNullable,
      ): import("typia").IValidation<ObjectSimpleProtobufNullable> => {
        const result = ((
          input: any,
        ): typia.IValidation<ObjectSimpleProtobufNullable> => {
          const errors = [] as any[];
          const __is = (input: any): input is ObjectSimpleProtobufNullable => {
            const $io0 = (input: any): boolean =>
              (null === input.bool || "boolean" === typeof input.bool) &&
              (null === input.int32 ||
                ("number" === typeof input.int32 &&
                  Math.floor(input.int32) === input.int32 &&
                  -2147483648 <= input.int32 &&
                  input.int32 <= 2147483647)) &&
              (null === input.uint32 ||
                ("number" === typeof input.uint32 &&
                  Math.floor(input.uint32) === input.uint32 &&
                  0 <= input.uint32 &&
                  input.uint32 <= 4294967295)) &&
              (null === input.int64 || "bigint" === typeof input.int64) &&
              (null === input.uint64 ||
                ("bigint" === typeof input.uint64 &&
                  BigInt(0) <= input.uint64)) &&
              (null === input.float ||
                ("number" === typeof input.float &&
                  -1.175494351e38 <= input.float &&
                  input.float <= 3.4028235e38)) &&
              (null === input.double ||
                ("number" === typeof input.double &&
                  Number.isFinite(input.double) &&
                  true)) &&
              (null === input.string || "string" === typeof input.string) &&
              (null === input.bytes || input.bytes instanceof Uint8Array);
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input)) {
            const $report = (typia.functional.validateReturn as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectSimpleProtobufNullable => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  null === input.bool ||
                    "boolean" === typeof input.bool ||
                    $report(_exceptionable, {
                      path: _path + ".bool",
                      expected: "(boolean | null)",
                      value: input.bool,
                    }),
                  null === input.int32 ||
                    ("number" === typeof input.int32 &&
                      ((Math.floor(input.int32) === input.int32 &&
                        -2147483648 <= input.int32 &&
                        input.int32 <= 2147483647) ||
                        $report(_exceptionable, {
                          path: _path + ".int32",
                          expected: 'number & Type<"int32">',
                          value: input.int32,
                        }))) ||
                    $report(_exceptionable, {
                      path: _path + ".int32",
                      expected: '((number & Type<"int32">) | null)',
                      value: input.int32,
                    }),
                  null === input.uint32 ||
                    ("number" === typeof input.uint32 &&
                      ((Math.floor(input.uint32) === input.uint32 &&
                        0 <= input.uint32 &&
                        input.uint32 <= 4294967295) ||
                        $report(_exceptionable, {
                          path: _path + ".uint32",
                          expected: 'number & Type<"uint32">',
                          value: input.uint32,
                        }))) ||
                    $report(_exceptionable, {
                      path: _path + ".uint32",
                      expected: '((number & Type<"uint32">) | null)',
                      value: input.uint32,
                    }),
                  null === input.int64 ||
                    "bigint" === typeof input.int64 ||
                    $report(_exceptionable, {
                      path: _path + ".int64",
                      expected: "(bigint | null)",
                      value: input.int64,
                    }),
                  null === input.uint64 ||
                    ("bigint" === typeof input.uint64 &&
                      (BigInt(0) <= input.uint64 ||
                        $report(_exceptionable, {
                          path: _path + ".uint64",
                          expected: 'bigint & Type<"uint64">',
                          value: input.uint64,
                        }))) ||
                    $report(_exceptionable, {
                      path: _path + ".uint64",
                      expected: '((bigint & Type<"uint64">) | null)',
                      value: input.uint64,
                    }),
                  null === input.float ||
                    ("number" === typeof input.float &&
                      ((-1.175494351e38 <= input.float &&
                        input.float <= 3.4028235e38) ||
                        $report(_exceptionable, {
                          path: _path + ".float",
                          expected: 'number & Type<"float">',
                          value: input.float,
                        }))) ||
                    $report(_exceptionable, {
                      path: _path + ".float",
                      expected: '((number & Type<"float">) | null)',
                      value: input.float,
                    }),
                  null === input.double ||
                    ("number" === typeof input.double &&
                      (Number.isFinite(input.double) ||
                        $report(_exceptionable, {
                          path: _path + ".double",
                          expected: "number",
                          value: input.double,
                        })) &&
                      (true ||
                        $report(_exceptionable, {
                          path: _path + ".double",
                          expected: 'number & Type<"double">',
                          value: input.double,
                        }))) ||
                    $report(_exceptionable, {
                      path: _path + ".double",
                      expected: '((number & Type<"double">) | null)',
                      value: input.double,
                    }),
                  null === input.string ||
                    "string" === typeof input.string ||
                    $report(_exceptionable, {
                      path: _path + ".string",
                      expected: "(null | string)",
                      value: input.string,
                    }),
                  null === input.bytes ||
                    input.bytes instanceof Uint8Array ||
                    $report(_exceptionable, {
                      path: _path + ".bytes",
                      expected: "(Uint8Array | null)",
                      value: input.bytes,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectSimpleProtobufNullable",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectSimpleProtobufNullable",
                  value: input,
                })
              );
            })(input, "$input", true);
          }
          const success = 0 === errors.length;
          return {
            success,
            errors,
            data: success ? input : undefined,
          } as any;
        })(p(input));
        if (!result.success)
          result.errors = result.errors.map((error: any) => ({
            ...error,
            path: error.path.replace("$input", "$input.return"),
          }));
        return result;
      },
  );
