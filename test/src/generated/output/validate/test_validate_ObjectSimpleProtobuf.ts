import typia from "typia";
import { _test_validate } from "../../../internal/_test_validate";
import { ObjectSimpleProtobuf } from "../../../structures/ObjectSimpleProtobuf";
export const test_validate_ObjectSimpleProtobuf = _test_validate(
  "ObjectSimpleProtobuf",
)<ObjectSimpleProtobuf>(ObjectSimpleProtobuf)((input) =>
  ((input: any): typia.IValidation<ObjectSimpleProtobuf> => {
    const errors = [] as any[];
    const __is = (input: any): input is ObjectSimpleProtobuf => {
      const $io0 = (input: any): boolean =>
        "boolean" === typeof input.bool &&
        "number" === typeof input.int32 &&
        Math.floor(input.int32) === input.int32 &&
        -2147483648 <= input.int32 &&
        input.int32 <= 2147483647 &&
        "number" === typeof input.uint32 &&
        Math.floor(input.uint32) === input.uint32 &&
        0 <= input.uint32 &&
        input.uint32 <= 4294967295 &&
        "bigint" === typeof input.int64 &&
        "bigint" === typeof input.uint64 &&
        BigInt(0) <= input.uint64 &&
        "number" === typeof input.float &&
        -1.175494351e38 <= input.float &&
        input.float <= 3.4028235e38 &&
        "number" === typeof input.double &&
        Number.isFinite(input.double) &&
        true &&
        "string" === typeof input.string &&
        input.bytes instanceof Uint8Array;
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input)) {
      const $report = (typia.validate as any).report(errors);
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectSimpleProtobuf => {
        const $vo0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            "boolean" === typeof input.bool ||
              $report(_exceptionable, {
                path: _path + ".bool",
                expected: "boolean",
                value: input.bool,
              }),
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
                expected: '(number & Type<"int32">)',
                value: input.int32,
              }),
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
                expected: '(number & Type<"uint32">)',
                value: input.uint32,
              }),
            "bigint" === typeof input.int64 ||
              $report(_exceptionable, {
                path: _path + ".int64",
                expected: "bigint",
                value: input.int64,
              }),
            ("bigint" === typeof input.uint64 &&
              (BigInt(0) <= input.uint64 ||
                $report(_exceptionable, {
                  path: _path + ".uint64",
                  expected: 'bigint & Type<"uint64">',
                  value: input.uint64,
                }))) ||
              $report(_exceptionable, {
                path: _path + ".uint64",
                expected: '(bigint & Type<"uint64">)',
                value: input.uint64,
              }),
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
                expected: '(number & Type<"float">)',
                value: input.float,
              }),
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
                expected: '(number & Type<"double">)',
                value: input.double,
              }),
            "string" === typeof input.string ||
              $report(_exceptionable, {
                path: _path + ".string",
                expected: "string",
                value: input.string,
              }),
            input.bytes instanceof Uint8Array ||
              $report(_exceptionable, {
                path: _path + ".bytes",
                expected: "Uint8Array",
                value: input.bytes,
              }),
          ].every((flag: boolean) => flag);
        return (
          ((("object" === typeof input && null !== input) ||
            $report(true, {
              path: _path + "",
              expected: "ObjectSimpleProtobuf",
              value: input,
            })) &&
            $vo0(input, _path + "", true)) ||
          $report(true, {
            path: _path + "",
            expected: "ObjectSimpleProtobuf",
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
  })(input),
);
