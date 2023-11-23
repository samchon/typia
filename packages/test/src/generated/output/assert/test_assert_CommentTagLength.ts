import typia from "typia";

import { _test_assert } from "../../../internal/_test_assert";
import { CommentTagLength } from "../../../structures/CommentTagLength";

export const test_assert_CommentTagLength = _test_assert(
  "CommentTagLength",
)<CommentTagLength>(CommentTagLength)((input) =>
  ((input: any): CommentTagLength => {
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
        const $guard = (typia.assert as any).guard;
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
  })(input),
);
