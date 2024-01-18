import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { CommentTagTypeBigInt } from "../../../structures/CommentTagTypeBigInt";

export const test_random_CommentTagTypeBigInt = _test_random(
  "CommentTagTypeBigInt",
)<CommentTagTypeBigInt>(CommentTagTypeBigInt)({
  random: () =>
    ((
      generator?: Partial<typia.IRandomGenerator>,
    ): typia.Resolved<CommentTagTypeBigInt> => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $generator = require("typia/lib/functional/$generator").$generator;
      const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
        in64:
          (generator?.customs ?? $generator.customs)?.bigint?.([]) ??
          (generator?.bigint ?? $generator.bigint)(BigInt(0), BigInt(100)),
        uint64:
          (generator?.customs ?? $generator.customs)?.bigint?.([
            {
              name: 'Type<"uint64">',
              kind: "type",
              value: "uint64",
            },
          ]) ?? (generator?.bigint ?? $generator.bigint)(BigInt(0), BigInt(10)),
      });
      return $ro0();
    })((CommentTagTypeBigInt as any).RANDOM),
  assert: (input: any): CommentTagTypeBigInt => {
    const __is = (input: any): input is CommentTagTypeBigInt => {
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
      ): input is CommentTagTypeBigInt => {
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
