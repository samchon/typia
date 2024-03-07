import typia from "typia";
import { _test_functional_validateReturn } from "../../../internal/_test_functional_validateReturn";
import { ObjectSimpleProtobufOptional } from "../../../structures/ObjectSimpleProtobufOptional";
export const test_functional_validateReturn_ObjectSimpleProtobufOptional =
  _test_functional_validateReturn("ObjectSimpleProtobufOptional")(
    ObjectSimpleProtobufOptional,
  )(
    (
        p: (
          input: ObjectSimpleProtobufOptional,
        ) => ObjectSimpleProtobufOptional,
      ) =>
      (
        input: ObjectSimpleProtobufOptional,
      ): import("typia").IValidation<ObjectSimpleProtobufOptional> => {
        const result = ((
          input: any,
        ): typia.IValidation<ObjectSimpleProtobufOptional> => {
          const errors = [] as any[];
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
          if (false === __is(input)) {
            const $report = (typia.functional.validateReturn as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectSimpleProtobufOptional => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  undefined === input.bool ||
                    "boolean" === typeof input.bool ||
                    $report(_exceptionable, {
                      path: _path + ".bool",
                      expected: "(boolean | undefined)",
                      value: input.bool,
                    }),
                  undefined === input.int32 ||
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
                      expected: '((number & Type<"int32">) | undefined)',
                      value: input.int32,
                    }),
                  undefined === input.uint32 ||
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
                      expected: '((number & Type<"uint32">) | undefined)',
                      value: input.uint32,
                    }),
                  undefined === input.int64 ||
                    "bigint" === typeof input.int64 ||
                    $report(_exceptionable, {
                      path: _path + ".int64",
                      expected: "(bigint | undefined)",
                      value: input.int64,
                    }),
                  undefined === input.uint64 ||
                    ("bigint" === typeof input.uint64 &&
                      (BigInt(0) <= input.uint64 ||
                        $report(_exceptionable, {
                          path: _path + ".uint64",
                          expected: 'bigint & Type<"uint64">',
                          value: input.uint64,
                        }))) ||
                    $report(_exceptionable, {
                      path: _path + ".uint64",
                      expected: '((bigint & Type<"uint64">) | undefined)',
                      value: input.uint64,
                    }),
                  undefined === input.float ||
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
                      expected: '((number & Type<"float">) | undefined)',
                      value: input.float,
                    }),
                  undefined === input.double ||
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
                      expected: '((number & Type<"double">) | undefined)',
                      value: input.double,
                    }),
                  undefined === input.string ||
                    "string" === typeof input.string ||
                    $report(_exceptionable, {
                      path: _path + ".string",
                      expected: "(string | undefined)",
                      value: input.string,
                    }),
                  undefined === input.bytes ||
                    input.bytes instanceof Uint8Array ||
                    $report(_exceptionable, {
                      path: _path + ".bytes",
                      expected: "(Uint8Array | undefined)",
                      value: input.bytes,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input &&
                  null !== input &&
                  false === Array.isArray(input)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectSimpleProtobufOptional",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectSimpleProtobufOptional",
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
