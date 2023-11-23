import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { TypeTagTuple } from "../../../structures/TypeTagTuple";

export const test_random_TypeTagTuple = _test_random(
  "TypeTagTuple",
)<TypeTagTuple>(TypeTagTuple)({
  random: () =>
    ((
      generator?: Partial<typia.IRandomGenerator>,
    ): typia.Resolved<TypeTagTuple> => {
      const $generator = (typia.random as any).generator;
      const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
        tuple: [
          (generator?.customs ?? $generator.customs)?.string?.([
            {
              name: "MinLength<3>",
              kind: "minLength",
              value: 3,
            },
            {
              name: "MaxLength<7>",
              kind: "maxLength",
              value: 7,
            },
          ]) ??
            (generator?.string ?? $generator.string)(
              (generator?.integer ?? $generator.integer)(3, 7),
            ),
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: "Minimum<3>",
              kind: "minimum",
              value: 3,
            },
            {
              name: "Maximum<7>",
              kind: "maximum",
              value: 7,
            },
          ]) ?? (generator?.number ?? $generator.number)(3, 7),
          (generator?.array ?? $generator.array)(
            () =>
              (generator?.customs ?? $generator.customs)?.string?.([
                {
                  name: "MinLength<1>",
                  kind: "minLength",
                  value: 1,
                },
                {
                  name: "MaxLength<2>",
                  kind: "maxLength",
                  value: 2,
                },
              ]) ??
              (generator?.string ?? $generator.string)(
                (generator?.integer ?? $generator.integer)(1, 2),
              ),
            (generator?.integer ?? $generator.integer)(3, 7),
          ),
          (generator?.array ?? $generator.array)(
            () =>
              (generator?.customs ?? $generator.customs)?.number?.([
                {
                  name: "Minimum<1>",
                  kind: "minimum",
                  value: 1,
                },
                {
                  name: "Maximum<2>",
                  kind: "maximum",
                  value: 2,
                },
              ]) ?? (generator?.number ?? $generator.number)(1, 2),
            (generator?.integer ?? $generator.integer)(3, 7),
          ),
        ],
      });
      return $ro0();
    })((TypeTagTuple as any).RANDOM),
  assert: (input: any): TypeTagTuple => {
    const __is = (input: any): input is TypeTagTuple => {
      const $io0 = (input: any): boolean =>
        Array.isArray(input.tuple) &&
        input.tuple.length === 4 &&
        "string" === typeof input.tuple[0] &&
        3 <= input.tuple[0].length &&
        input.tuple[0].length <= 7 &&
        "number" === typeof input.tuple[1] &&
        3 <= input.tuple[1] &&
        input.tuple[1] <= 7 &&
        Array.isArray(input.tuple[2]) &&
        3 <= input.tuple[2].length &&
        input.tuple[2].length <= 7 &&
        input.tuple[2].every(
          (elem: any) =>
            "string" === typeof elem && 1 <= elem.length && elem.length <= 2,
        ) &&
        Array.isArray(input.tuple[3]) &&
        3 <= input.tuple[3].length &&
        input.tuple[3].length <= 7 &&
        input.tuple[3].every(
          (elem: any) => "number" === typeof elem && 1 <= elem && elem <= 2,
        );
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is TypeTagTuple => {
        const $guard = (typia.createAssert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ((Array.isArray(input.tuple) ||
            $guard(_exceptionable, {
              path: _path + ".tuple",
              expected:
                "[string & MinLength<3> & MaxLength<7>, number & Minimum<3> & Maximum<7>, (string & MinLength<1> & MaxLength<2>)[] & MinItems<...> & MaxItems<...>, (number & ... 1 more ... & Maximum<...>)[] & ... 1 more ... & MaxItems<...>]",
              value: input.tuple,
            })) &&
            (input.tuple.length === 4 ||
              $guard(_exceptionable, {
                path: _path + ".tuple",
                expected:
                  "[(string & MinLength<3> & MaxLength<7>), (number & Minimum<3> & Maximum<7>), (Array<string & MinLength<1> & MaxLength<2>> & MinItems<3> & MaxItems<7>), (Array<number & Minimum<1> & Maximum<2>> & MinItems<3> & MaxItems<7>)]",
                value: input.tuple,
              })) &&
            (("string" === typeof input.tuple[0] &&
              (3 <= input.tuple[0].length ||
                $guard(_exceptionable, {
                  path: _path + ".tuple[0]",
                  expected: "string & MinLength<3>",
                  value: input.tuple[0],
                })) &&
              (input.tuple[0].length <= 7 ||
                $guard(_exceptionable, {
                  path: _path + ".tuple[0]",
                  expected: "string & MaxLength<7>",
                  value: input.tuple[0],
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".tuple[0]",
                expected: "(string & MinLength<3> & MaxLength<7>)",
                value: input.tuple[0],
              })) &&
            (("number" === typeof input.tuple[1] &&
              (3 <= input.tuple[1] ||
                $guard(_exceptionable, {
                  path: _path + ".tuple[1]",
                  expected: "number & Minimum<3>",
                  value: input.tuple[1],
                })) &&
              (input.tuple[1] <= 7 ||
                $guard(_exceptionable, {
                  path: _path + ".tuple[1]",
                  expected: "number & Maximum<7>",
                  value: input.tuple[1],
                }))) ||
              $guard(_exceptionable, {
                path: _path + ".tuple[1]",
                expected: "(number & Minimum<3> & Maximum<7>)",
                value: input.tuple[1],
              })) &&
            (((Array.isArray(input.tuple[2]) ||
              $guard(_exceptionable, {
                path: _path + ".tuple[2]",
                expected:
                  "(Array<string & MinLength<1> & MaxLength<2>> & MinItems<3> & MaxItems<7>)",
                value: input.tuple[2],
              })) &&
              (3 <= input.tuple[2].length ||
                $guard(_exceptionable, {
                  path: _path + ".tuple[2]",
                  expected: "Array<> & MinItems<3>",
                  value: input.tuple[2],
                })) &&
              (input.tuple[2].length <= 7 ||
                $guard(_exceptionable, {
                  path: _path + ".tuple[2]",
                  expected: "Array<> & MaxItems<7>",
                  value: input.tuple[2],
                })) &&
              input.tuple[2].every(
                (elem: any, _index1: number) =>
                  ("string" === typeof elem &&
                    (1 <= elem.length ||
                      $guard(_exceptionable, {
                        path: _path + ".tuple[2][" + _index1 + "]",
                        expected: "string & MinLength<1>",
                        value: elem,
                      })) &&
                    (elem.length <= 2 ||
                      $guard(_exceptionable, {
                        path: _path + ".tuple[2][" + _index1 + "]",
                        expected: "string & MaxLength<2>",
                        value: elem,
                      }))) ||
                  $guard(_exceptionable, {
                    path: _path + ".tuple[2][" + _index1 + "]",
                    expected: "(string & MinLength<1> & MaxLength<2>)",
                    value: elem,
                  }),
              )) ||
              $guard(_exceptionable, {
                path: _path + ".tuple[2]",
                expected:
                  "(Array<string & MinLength<1> & MaxLength<2>> & MinItems<3> & MaxItems<7>)",
                value: input.tuple[2],
              })) &&
            (((Array.isArray(input.tuple[3]) ||
              $guard(_exceptionable, {
                path: _path + ".tuple[3]",
                expected:
                  "(Array<number & Minimum<1> & Maximum<2>> & MinItems<3> & MaxItems<7>)",
                value: input.tuple[3],
              })) &&
              (3 <= input.tuple[3].length ||
                $guard(_exceptionable, {
                  path: _path + ".tuple[3]",
                  expected: "Array<> & MinItems<3>",
                  value: input.tuple[3],
                })) &&
              (input.tuple[3].length <= 7 ||
                $guard(_exceptionable, {
                  path: _path + ".tuple[3]",
                  expected: "Array<> & MaxItems<7>",
                  value: input.tuple[3],
                })) &&
              input.tuple[3].every(
                (elem: any, _index2: number) =>
                  ("number" === typeof elem &&
                    (1 <= elem ||
                      $guard(_exceptionable, {
                        path: _path + ".tuple[3][" + _index2 + "]",
                        expected: "number & Minimum<1>",
                        value: elem,
                      })) &&
                    (elem <= 2 ||
                      $guard(_exceptionable, {
                        path: _path + ".tuple[3][" + _index2 + "]",
                        expected: "number & Maximum<2>",
                        value: elem,
                      }))) ||
                  $guard(_exceptionable, {
                    path: _path + ".tuple[3][" + _index2 + "]",
                    expected: "(number & Minimum<1> & Maximum<2>)",
                    value: elem,
                  }),
              )) ||
              $guard(_exceptionable, {
                path: _path + ".tuple[3]",
                expected:
                  "(Array<number & Minimum<1> & Maximum<2>> & MinItems<3> & MaxItems<7>)",
                value: input.tuple[3],
              }))) ||
          $guard(_exceptionable, {
            path: _path + ".tuple",
            expected:
              "[string & MinLength<3> & MaxLength<7>, number & Minimum<3> & Maximum<7>, (string & MinLength<1> & MaxLength<2>)[] & MinItems<...> & MaxItems<...>, (number & ... 1 more ... & Maximum<...>)[] & ... 1 more ... & MaxItems<...>]",
            value: input.tuple,
          });
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(true, {
              path: _path + "",
              expected: "TypeTagTuple",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "TypeTagTuple",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  },
});
