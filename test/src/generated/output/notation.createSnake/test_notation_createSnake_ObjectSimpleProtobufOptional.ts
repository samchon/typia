import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ObjectSimpleProtobufOptional } from "../../../structures/ObjectSimpleProtobufOptional";

export const test_notation_createValidateSnake_ObjectSimpleProtobufOptional =
  _test_notation_validateGeneral(
    "ObjectSimpleProtobufOptional",
  )<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)<
    typia.SnakeCase<ObjectSimpleProtobufOptional>
  >({
    convert: (
      input: any,
    ): typia.IValidation<typia.SnakeCase<ObjectSimpleProtobufOptional>> => {
      const validate = (
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
            (undefined === input.string || "string" === typeof input.string) &&
            (undefined === input.bytes || input.bytes instanceof Uint8Array);
          return (
            "object" === typeof input &&
            null !== input &&
            false === Array.isArray(input) &&
            $io0(input)
          );
        };
        if (false === __is(input)) {
          const $report = (typia.notations.createValidateSnake as any).report(
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
      };
      const general = (
        input: ObjectSimpleProtobufOptional,
      ): typia.SnakeCase<ObjectSimpleProtobufOptional> => {
        const $co0 = (input: any): any => ({
          bool: input.bool as any,
          int32: input.int32 as any,
          uint32: input.uint32 as any,
          int64: input.int64 as any,
          uint64: input.uint64 as any,
          float: input.float as any,
          double: input.double as any,
          string: input.string as any,
          bytes:
            input.bytes instanceof Uint8Array
              ? input.bytes
              : (input.bytes as any),
        });
        return "object" === typeof input && null !== input
          ? $co0(input)
          : (input as any);
      };
      const output = validate(input) as any;
      if (output.success) output.data = general(input);
      return output;
    },
    assert: (
      input: any,
      errorFactory?: import("typia").TypeGuardError.IProps,
    ): typia.SnakeCase<ObjectSimpleProtobufOptional> => {
      const $guard = (typia.createAssert as any).guard(errorFactory);
      const __is = (
        input: any,
      ): input is typia.SnakeCase<ObjectSimpleProtobufOptional> => {
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
        ): input is typia.SnakeCase<ObjectSimpleProtobufOptional> => {
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
      return input;
    },
  });
