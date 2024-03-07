import typia from "typia";
import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { ObjectSimpleProtobuf } from "../../../structures/ObjectSimpleProtobuf";
import { TypeGuardError } from "typia";
export const test_assertGuard_ObjectSimpleProtobuf = _test_assertGuard(
  TypeGuardError,
)("ObjectSimpleProtobuf")<ObjectSimpleProtobuf>(ObjectSimpleProtobuf)((input) =>
  ((
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): asserts input is ObjectSimpleProtobuf => {
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
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectSimpleProtobuf => {
        const $guard = (typia.assertGuard as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("boolean" === typeof input.bool ||
            $guard(
              _exceptionable,
              {
                path: _path + ".bool",
                expected: "boolean",
                value: input.bool,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.int32 &&
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
                expected: '(number & Type<"int32">)',
                value: input.int32,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.uint32 &&
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
                expected: '(number & Type<"uint32">)',
                value: input.uint32,
              },
              errorFactory,
            )) &&
          ("bigint" === typeof input.int64 ||
            $guard(
              _exceptionable,
              {
                path: _path + ".int64",
                expected: "bigint",
                value: input.int64,
              },
              errorFactory,
            )) &&
          (("bigint" === typeof input.uint64 &&
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
                expected: '(bigint & Type<"uint64">)',
                value: input.uint64,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.float &&
            ((-1.175494351e38 <= input.float && input.float <= 3.4028235e38) ||
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
                expected: '(number & Type<"float">)',
                value: input.float,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.double &&
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
                expected: '(number & Type<"double">)',
                value: input.double,
              },
              errorFactory,
            )) &&
          ("string" === typeof input.string ||
            $guard(
              _exceptionable,
              {
                path: _path + ".string",
                expected: "string",
                value: input.string,
              },
              errorFactory,
            )) &&
          (input.bytes instanceof Uint8Array ||
            $guard(
              _exceptionable,
              {
                path: _path + ".bytes",
                expected: "Uint8Array",
                value: input.bytes,
              },
              errorFactory,
            ));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ObjectSimpleProtobuf",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "ObjectSimpleProtobuf",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
  })(input),
);
