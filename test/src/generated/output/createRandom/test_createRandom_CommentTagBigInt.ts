import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { CommentTagBigInt } from "../../../structures/CommentTagBigInt";

export const test_createRandom_CommentTagBigInt = _test_random(
  "CommentTagBigInt",
)<CommentTagBigInt>(CommentTagBigInt)({
  random: (
    generator: Partial<typia.IRandomGenerator> = (CommentTagBigInt as any)
      .RANDOM,
  ): typia.Resolved<CommentTagBigInt> => {
    const $generator = require("typia/lib/functional/$generator").$generator;
    const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
      value:
        (generator?.customs ?? $generator.customs)?.bigint?.([]) ??
        (generator?.bigint ?? $generator.bigint)(BigInt(0), BigInt(100)),
      ranged:
        (generator?.customs ?? $generator.customs)?.bigint?.([
          {
            name: "Minimum<0n>",
            kind: "minimum",
            value: BigInt(0),
          },
          {
            name: "Maximum<100n>",
            kind: "maximum",
            value: BigInt(100),
          },
        ]) ?? (generator?.bigint ?? $generator.bigint)(BigInt(0), BigInt(100)),
      minimum:
        (generator?.customs ?? $generator.customs)?.bigint?.([
          {
            name: "Minimum<0n>",
            kind: "minimum",
            value: BigInt(0),
          },
        ]) ?? (generator?.bigint ?? $generator.bigint)(BigInt(0), BigInt(10)),
      maximum:
        (generator?.customs ?? $generator.customs)?.bigint?.([
          {
            name: "Maximum<100n>",
            kind: "maximum",
            value: BigInt(100),
          },
        ]) ?? (generator?.bigint ?? $generator.bigint)(BigInt(90), BigInt(100)),
      multipleOf:
        (generator?.customs ?? $generator.customs)?.bigint?.([
          {
            name: "MultipleOf<3n>",
            kind: "multipleOf",
            value: BigInt(3),
          },
        ]) ??
        BigInt(3) *
          (generator?.bigint ?? $generator.bigint)(BigInt(0), BigInt(10)),
    });
    return $ro0();
  },
  assert: (input: any): CommentTagBigInt => {
    const __is = (input: any): input is CommentTagBigInt => {
      return (
        "object" === typeof input &&
        null !== input &&
        "bigint" === typeof (input as any).value &&
        "bigint" === typeof (input as any).ranged &&
        0 <= (input as any).ranged &&
        (input as any).ranged <= 100 &&
        "bigint" === typeof (input as any).minimum &&
        0 <= (input as any).minimum &&
        "bigint" === typeof (input as any).maximum &&
        (input as any).maximum <= 100 &&
        "bigint" === typeof (input as any).multipleOf &&
        (input as any).multipleOf % 3n === 0n
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is CommentTagBigInt => {
        const $guard = require("typia/lib/functional/$guard").$guard(
          "typia.createAssert",
        );
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("bigint" === typeof input.value ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "bigint",
              value: input.value,
            })) &&
          (("bigint" === typeof input.ranged &&
            (0 <= input.ranged ||
              $guard(_exceptionable, {
                path: _path + ".ranged",
                expected: "bigint & Minimum<0n>",
                value: input.ranged,
              })) &&
            (input.ranged <= 100 ||
              $guard(_exceptionable, {
                path: _path + ".ranged",
                expected: "bigint & Maximum<100n>",
                value: input.ranged,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".ranged",
              expected: "(bigint & Minimum<0n> & Maximum<100n>)",
              value: input.ranged,
            })) &&
          (("bigint" === typeof input.minimum &&
            (0 <= input.minimum ||
              $guard(_exceptionable, {
                path: _path + ".minimum",
                expected: "bigint & Minimum<0n>",
                value: input.minimum,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".minimum",
              expected: "(bigint & Minimum<0n>)",
              value: input.minimum,
            })) &&
          (("bigint" === typeof input.maximum &&
            (input.maximum <= 100 ||
              $guard(_exceptionable, {
                path: _path + ".maximum",
                expected: "bigint & Maximum<100n>",
                value: input.maximum,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".maximum",
              expected: "(bigint & Maximum<100n>)",
              value: input.maximum,
            })) &&
          (("bigint" === typeof input.multipleOf &&
            (input.multipleOf % 3n === 0n ||
              $guard(_exceptionable, {
                path: _path + ".multipleOf",
                expected: "bigint & MultipleOf<3n>",
                value: input.multipleOf,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".multipleOf",
              expected: "(bigint & MultipleOf<3n>)",
              value: input.multipleOf,
            }));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(true, {
              path: _path + "",
              expected: "CommentTagBigInt",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "CommentTagBigInt",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  },
});
