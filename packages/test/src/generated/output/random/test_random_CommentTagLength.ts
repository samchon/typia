import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { CommentTagLength } from "../../../structures/CommentTagLength";

export const test_random_CommentTagLength = _test_random(
  "CommentTagLength",
)<CommentTagLength>(CommentTagLength)({
  random: () =>
    ((
      generator?: Partial<typia.IRandomGenerator>,
    ): typia.Resolved<CommentTagLength> => {
      const $generator = (typia.random as any).generator;
      const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
        value: (generator?.array ?? $generator.array)(() =>
          $ro1(_recursive, _recursive ? 1 + _depth : _depth),
        ),
      });
      const $ro1 = (_recursive: boolean = false, _depth: number = 0): any => ({
        fixed:
          (generator?.customs ?? $generator.customs)?.string?.([
            {
              name: "MinLength<5>",
              kind: "minLength",
              value: 5,
            },
            {
              name: "MaxLength<5>",
              kind: "maxLength",
              value: 5,
            },
          ]) ??
          (generator?.string ?? $generator.string)(
            (generator?.integer ?? $generator.integer)(5, 5),
          ),
        minimum:
          (generator?.customs ?? $generator.customs)?.string?.([
            {
              name: "MinLength<3>",
              kind: "minLength",
              value: 3,
            },
          ]) ??
          (generator?.string ?? $generator.string)(
            (generator?.integer ?? $generator.integer)(3, 25),
          ),
        maximum:
          (generator?.customs ?? $generator.customs)?.string?.([
            {
              name: "MaxLength<7>",
              kind: "maxLength",
              value: 7,
            },
          ]) ??
          (generator?.string ?? $generator.string)(
            (generator?.integer ?? $generator.integer)(5, 7),
          ),
        minimum_and_maximum:
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
        equal:
          (generator?.customs ?? $generator.customs)?.string?.([
            {
              name: "MinLength<10>",
              kind: "minLength",
              value: 10,
            },
            {
              name: "MaxLength<19>",
              kind: "maxLength",
              value: 19,
            },
          ]) ??
          (generator?.string ?? $generator.string)(
            (generator?.integer ?? $generator.integer)(10, 19),
          ),
      });
      return $ro0();
    })((CommentTagLength as any).RANDOM),
  assert: (input: any): CommentTagLength => {
    const __is = (input: any): input is CommentTagLength => {
      const $io0 = (input: any): boolean =>
        Array.isArray(input.value) &&
        input.value.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io1(elem),
        );
      const $io1 = (input: any): boolean =>
        "string" === typeof input.fixed &&
        5 <= input.fixed.length &&
        input.fixed.length <= 5 &&
        "string" === typeof input.minimum &&
        3 <= input.minimum.length &&
        "string" === typeof input.maximum &&
        input.maximum.length <= 7 &&
        "string" === typeof input.minimum_and_maximum &&
        3 <= input.minimum_and_maximum.length &&
        input.minimum_and_maximum.length <= 7 &&
        "string" === typeof input.equal &&
        10 <= input.equal.length &&
        input.equal.length <= 19;
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is CommentTagLength => {
        const $guard = (typia.createAssert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ((Array.isArray(input.value) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "Array<CommentTagLength.Type>",
              value: input.value,
            })) &&
            input.value.every(
              (elem: any, _index1: number) =>
                ((("object" === typeof elem && null !== elem) ||
                  $guard(_exceptionable, {
                    path: _path + ".value[" + _index1 + "]",
                    expected: "CommentTagLength.Type",
                    value: elem,
                  })) &&
                  $ao1(
                    elem,
                    _path + ".value[" + _index1 + "]",
                    true && _exceptionable,
                  )) ||
                $guard(_exceptionable, {
                  path: _path + ".value[" + _index1 + "]",
                  expected: "CommentTagLength.Type",
                  value: elem,
                }),
            )) ||
          $guard(_exceptionable, {
            path: _path + ".value",
            expected: "Array<CommentTagLength.Type>",
            value: input.value,
          });
        const $ao1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (("string" === typeof input.fixed &&
            (5 <= input.fixed.length ||
              $guard(_exceptionable, {
                path: _path + ".fixed",
                expected: "string & MinLength<5>",
                value: input.fixed,
              })) &&
            (input.fixed.length <= 5 ||
              $guard(_exceptionable, {
                path: _path + ".fixed",
                expected: "string & MaxLength<5>",
                value: input.fixed,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".fixed",
              expected: "(string & MinLength<5> & MaxLength<5>)",
              value: input.fixed,
            })) &&
          (("string" === typeof input.minimum &&
            (3 <= input.minimum.length ||
              $guard(_exceptionable, {
                path: _path + ".minimum",
                expected: "string & MinLength<3>",
                value: input.minimum,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".minimum",
              expected: "(string & MinLength<3>)",
              value: input.minimum,
            })) &&
          (("string" === typeof input.maximum &&
            (input.maximum.length <= 7 ||
              $guard(_exceptionable, {
                path: _path + ".maximum",
                expected: "string & MaxLength<7>",
                value: input.maximum,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".maximum",
              expected: "(string & MaxLength<7>)",
              value: input.maximum,
            })) &&
          (("string" === typeof input.minimum_and_maximum &&
            (3 <= input.minimum_and_maximum.length ||
              $guard(_exceptionable, {
                path: _path + ".minimum_and_maximum",
                expected: "string & MinLength<3>",
                value: input.minimum_and_maximum,
              })) &&
            (input.minimum_and_maximum.length <= 7 ||
              $guard(_exceptionable, {
                path: _path + ".minimum_and_maximum",
                expected: "string & MaxLength<7>",
                value: input.minimum_and_maximum,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".minimum_and_maximum",
              expected: "(string & MinLength<3> & MaxLength<7>)",
              value: input.minimum_and_maximum,
            })) &&
          (("string" === typeof input.equal &&
            (10 <= input.equal.length ||
              $guard(_exceptionable, {
                path: _path + ".equal",
                expected: "string & MinLength<10>",
                value: input.equal,
              })) &&
            (input.equal.length <= 19 ||
              $guard(_exceptionable, {
                path: _path + ".equal",
                expected: "string & MaxLength<19>",
                value: input.equal,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".equal",
              expected: "(string & MinLength<10> & MaxLength<19>)",
              value: input.equal,
            }));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(true, {
              path: _path + "",
              expected: "CommentTagLength",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "CommentTagLength",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  },
});
