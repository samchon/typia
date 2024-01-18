import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { CommentTagTypeBigInt } from "../../../structures/CommentTagTypeBigInt";

export const test_notation_createValidateSnake_CommentTagTypeBigInt =
  _test_notation_validateGeneral("CommentTagTypeBigInt")<CommentTagTypeBigInt>(
    CommentTagTypeBigInt,
  )<typia.SnakeCase<CommentTagTypeBigInt>>({
    convert: (
      input: any,
    ): typia.IValidation<typia.SnakeCase<CommentTagTypeBigInt>> => {
      const validate = (
        input: any,
      ): typia.IValidation<CommentTagTypeBigInt> => {
        const errors = [] as any[];
        const __is = (input: any): input is CommentTagTypeBigInt => {
          return (
            "object" === typeof input &&
            null !== input &&
            "bigint" === typeof (input as any).in64 &&
            "bigint" === typeof (input as any).uint64 &&
            BigInt(0) <= (input as any).uint64
          );
        };
        if (false === __is(input)) {
          const $report = require("typia/lib/functional/$report").$report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is CommentTagTypeBigInt => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                "bigint" === typeof input.in64 ||
                  $report(_exceptionable, {
                    path: _path + ".in64",
                    expected: "bigint",
                    value: input.in64,
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
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input && null !== input) ||
                $report(true, {
                  path: _path + "",
                  expected: "CommentTagTypeBigInt",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "CommentTagTypeBigInt",
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
        input: CommentTagTypeBigInt,
      ): typia.SnakeCase<CommentTagTypeBigInt> => {
        const $co0 = (input: any): any => ({
          in64: input.in64 as any,
          uint64: input.uint64 as any,
        });
        return "object" === typeof input && null !== input
          ? $co0(input)
          : (input as any);
      };
      const output = validate(input) as any;
      if (output.success) output.data = general(input);
      return output;
    },
    assert: (input: any): typia.SnakeCase<CommentTagTypeBigInt> => {
      const __is = (
        input: any,
      ): input is typia.SnakeCase<CommentTagTypeBigInt> => {
        return (
          "object" === typeof input &&
          null !== input &&
          "bigint" === typeof (input as any).in64 &&
          "bigint" === typeof (input as any).uint64 &&
          BigInt(0) <= (input as any).uint64
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.SnakeCase<CommentTagTypeBigInt> => {
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
              }));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(true, {
                path: _path + "",
                expected: "CommentTagTypeBigInt",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "CommentTagTypeBigInt",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    },
  });
