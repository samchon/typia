import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { CommentTagRangeBigInt } from "../../../structures/CommentTagRangeBigInt";

export const test_createRandom_CommentTagRangeBigInt = _test_random(
  "CommentTagRangeBigInt",
)<CommentTagRangeBigInt>(CommentTagRangeBigInt)({
  random: (
    generator: Partial<typia.IRandomGenerator> = (CommentTagRangeBigInt as any)
      .RANDOM,
  ): typia.Resolved<CommentTagRangeBigInt> => {
    const $generator = (typia.createRandom as any).generator;
    const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
      value: (generator?.array ?? $generator.array)(() =>
        $ro1(_recursive, _recursive ? 1 + _depth : _depth),
      ),
    });
    const $ro1 = (_recursive: boolean = false, _depth: number = 0): any => ({
      greater:
        (generator?.customs ?? $generator.customs)?.bigint?.([
          {
            name: "ExclusiveMinimum<3n>",
            kind: "exclusiveMinimum",
            value: BigInt(3),
          },
        ]) ?? (generator?.bigint ?? $generator.bigint)(BigInt(4), BigInt(14)),
      greater_equal:
        (generator?.customs ?? $generator.customs)?.bigint?.([
          {
            name: "Minimum<3n>",
            kind: "minimum",
            value: BigInt(3),
          },
        ]) ?? (generator?.bigint ?? $generator.bigint)(BigInt(3), BigInt(13)),
      less:
        (generator?.customs ?? $generator.customs)?.bigint?.([
          {
            name: "ExclusiveMaximum<7n>",
            kind: "exclusiveMaximum",
            value: BigInt(7),
          },
        ]) ?? (generator?.bigint ?? $generator.bigint)(BigInt(-4), BigInt(6)),
      less_equal:
        (generator?.customs ?? $generator.customs)?.bigint?.([
          {
            name: "Maximum<7n>",
            kind: "maximum",
            value: BigInt(7),
          },
        ]) ?? (generator?.bigint ?? $generator.bigint)(BigInt(-3), BigInt(7)),
      greater_less:
        (generator?.customs ?? $generator.customs)?.bigint?.([
          {
            name: "ExclusiveMinimum<3n>",
            kind: "exclusiveMinimum",
            value: BigInt(3),
          },
          {
            name: "ExclusiveMaximum<7n>",
            kind: "exclusiveMaximum",
            value: BigInt(7),
          },
        ]) ?? (generator?.bigint ?? $generator.bigint)(BigInt(4), BigInt(6)),
      greater_equal_less:
        (generator?.customs ?? $generator.customs)?.bigint?.([
          {
            name: "Minimum<3n>",
            kind: "minimum",
            value: BigInt(3),
          },
          {
            name: "ExclusiveMaximum<7n>",
            kind: "exclusiveMaximum",
            value: BigInt(7),
          },
        ]) ?? (generator?.bigint ?? $generator.bigint)(BigInt(3), BigInt(6)),
      greater_less_equal:
        (generator?.customs ?? $generator.customs)?.bigint?.([
          {
            name: "ExclusiveMinimum<3n>",
            kind: "exclusiveMinimum",
            value: BigInt(3),
          },
          {
            name: "Maximum<7n>",
            kind: "maximum",
            value: BigInt(7),
          },
        ]) ?? (generator?.bigint ?? $generator.bigint)(BigInt(4), BigInt(7)),
      greater_equal_less_equal:
        (generator?.customs ?? $generator.customs)?.bigint?.([
          {
            name: "Minimum<3n>",
            kind: "minimum",
            value: BigInt(3),
          },
          {
            name: "Maximum<7n>",
            kind: "maximum",
            value: BigInt(7),
          },
        ]) ?? (generator?.bigint ?? $generator.bigint)(BigInt(3), BigInt(7)),
      equal:
        (generator?.customs ?? $generator.customs)?.bigint?.([
          {
            name: "Minimum<10n>",
            kind: "minimum",
            value: BigInt(10),
          },
          {
            name: "Maximum<10n>",
            kind: "maximum",
            value: BigInt(10),
          },
        ]) ?? (generator?.bigint ?? $generator.bigint)(BigInt(10), BigInt(10)),
    });
    return $ro0();
  },
  assert: (input: any): CommentTagRangeBigInt => {
    const __is = (input: any): input is CommentTagRangeBigInt => {
      const $io0 = (input: any): boolean =>
        Array.isArray(input.value) &&
        input.value.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io1(elem),
        );
      const $io1 = (input: any): boolean =>
        "bigint" === typeof input.greater &&
        3 < input.greater &&
        "bigint" === typeof input.greater_equal &&
        3 <= input.greater_equal &&
        "bigint" === typeof input.less &&
        input.less < 7 &&
        "bigint" === typeof input.less_equal &&
        input.less_equal <= 7 &&
        "bigint" === typeof input.greater_less &&
        3 < input.greater_less &&
        input.greater_less < 7 &&
        "bigint" === typeof input.greater_equal_less &&
        3 <= input.greater_equal_less &&
        input.greater_equal_less < 7 &&
        "bigint" === typeof input.greater_less_equal &&
        3 < input.greater_less_equal &&
        input.greater_less_equal <= 7 &&
        "bigint" === typeof input.greater_equal_less_equal &&
        3 <= input.greater_equal_less_equal &&
        input.greater_equal_less_equal <= 7 &&
        "bigint" === typeof input.equal &&
        10 <= input.equal &&
        input.equal <= 10;
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is CommentTagRangeBigInt => {
        const $guard = (typia.createAssert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ((Array.isArray(input.value) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "Array<CommentTagRangeBigInt.Type>",
              value: input.value,
            })) &&
            input.value.every(
              (elem: any, _index1: number) =>
                ((("object" === typeof elem && null !== elem) ||
                  $guard(_exceptionable, {
                    path: _path + ".value[" + _index1 + "]",
                    expected: "CommentTagRangeBigInt.Type",
                    value: elem,
                  })) &&
                  $ao1(
                    elem,
                    _path + ".value[" + _index1 + "]",
                    true && _exceptionable,
                  )) ||
                $guard(_exceptionable, {
                  path: _path + ".value[" + _index1 + "]",
                  expected: "CommentTagRangeBigInt.Type",
                  value: elem,
                }),
            )) ||
          $guard(_exceptionable, {
            path: _path + ".value",
            expected: "Array<CommentTagRangeBigInt.Type>",
            value: input.value,
          });
        const $ao1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (("bigint" === typeof input.greater &&
            (3 < input.greater ||
              $guard(_exceptionable, {
                path: _path + ".greater",
                expected: "bigint & ExclusiveMinimum<3n>",
                value: input.greater,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".greater",
              expected: "(bigint & ExclusiveMinimum<3n>)",
              value: input.greater,
            })) &&
          (("bigint" === typeof input.greater_equal &&
            (3 <= input.greater_equal ||
              $guard(_exceptionable, {
                path: _path + ".greater_equal",
                expected: "bigint & Minimum<3n>",
                value: input.greater_equal,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".greater_equal",
              expected: "(bigint & Minimum<3n>)",
              value: input.greater_equal,
            })) &&
          (("bigint" === typeof input.less &&
            (input.less < 7 ||
              $guard(_exceptionable, {
                path: _path + ".less",
                expected: "bigint & ExclusiveMaximum<7n>",
                value: input.less,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".less",
              expected: "(bigint & ExclusiveMaximum<7n>)",
              value: input.less,
            })) &&
          (("bigint" === typeof input.less_equal &&
            (input.less_equal <= 7 ||
              $guard(_exceptionable, {
                path: _path + ".less_equal",
                expected: "bigint & Maximum<7n>",
                value: input.less_equal,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".less_equal",
              expected: "(bigint & Maximum<7n>)",
              value: input.less_equal,
            })) &&
          (("bigint" === typeof input.greater_less &&
            (3 < input.greater_less ||
              $guard(_exceptionable, {
                path: _path + ".greater_less",
                expected: "bigint & ExclusiveMinimum<3n>",
                value: input.greater_less,
              })) &&
            (input.greater_less < 7 ||
              $guard(_exceptionable, {
                path: _path + ".greater_less",
                expected: "bigint & ExclusiveMaximum<7n>",
                value: input.greater_less,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".greater_less",
              expected:
                "(bigint & ExclusiveMinimum<3n> & ExclusiveMaximum<7n>)",
              value: input.greater_less,
            })) &&
          (("bigint" === typeof input.greater_equal_less &&
            (3 <= input.greater_equal_less ||
              $guard(_exceptionable, {
                path: _path + ".greater_equal_less",
                expected: "bigint & Minimum<3n>",
                value: input.greater_equal_less,
              })) &&
            (input.greater_equal_less < 7 ||
              $guard(_exceptionable, {
                path: _path + ".greater_equal_less",
                expected: "bigint & ExclusiveMaximum<7n>",
                value: input.greater_equal_less,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".greater_equal_less",
              expected: "(bigint & Minimum<3n> & ExclusiveMaximum<7n>)",
              value: input.greater_equal_less,
            })) &&
          (("bigint" === typeof input.greater_less_equal &&
            (3 < input.greater_less_equal ||
              $guard(_exceptionable, {
                path: _path + ".greater_less_equal",
                expected: "bigint & ExclusiveMinimum<3n>",
                value: input.greater_less_equal,
              })) &&
            (input.greater_less_equal <= 7 ||
              $guard(_exceptionable, {
                path: _path + ".greater_less_equal",
                expected: "bigint & Maximum<7n>",
                value: input.greater_less_equal,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".greater_less_equal",
              expected: "(bigint & ExclusiveMinimum<3n> & Maximum<7n>)",
              value: input.greater_less_equal,
            })) &&
          (("bigint" === typeof input.greater_equal_less_equal &&
            (3 <= input.greater_equal_less_equal ||
              $guard(_exceptionable, {
                path: _path + ".greater_equal_less_equal",
                expected: "bigint & Minimum<3n>",
                value: input.greater_equal_less_equal,
              })) &&
            (input.greater_equal_less_equal <= 7 ||
              $guard(_exceptionable, {
                path: _path + ".greater_equal_less_equal",
                expected: "bigint & Maximum<7n>",
                value: input.greater_equal_less_equal,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".greater_equal_less_equal",
              expected: "(bigint & Minimum<3n> & Maximum<7n>)",
              value: input.greater_equal_less_equal,
            })) &&
          (("bigint" === typeof input.equal &&
            (10 <= input.equal ||
              $guard(_exceptionable, {
                path: _path + ".equal",
                expected: "bigint & Minimum<10n>",
                value: input.equal,
              })) &&
            (input.equal <= 10 ||
              $guard(_exceptionable, {
                path: _path + ".equal",
                expected: "bigint & Maximum<10n>",
                value: input.equal,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".equal",
              expected: "(bigint & Minimum<10n> & Maximum<10n>)",
              value: input.equal,
            }));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(true, {
              path: _path + "",
              expected: "CommentTagRangeBigInt",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "CommentTagRangeBigInt",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  },
});
