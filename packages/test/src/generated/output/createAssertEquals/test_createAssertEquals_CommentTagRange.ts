import typia from "typia";

import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { CommentTagRange } from "../../../structures/CommentTagRange";

export const test_createAssertEquals_CommentTagRange = _test_assertEquals(
  "CommentTagRange",
)<CommentTagRange>(CommentTagRange)((input: any): CommentTagRange => {
  const __is = (
    input: any,
    _exceptionable: boolean = true,
  ): input is CommentTagRange => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
      Array.isArray(input.value) &&
      input.value.every(
        (elem: any, _index1: number) =>
          "object" === typeof elem &&
          null !== elem &&
          $io1(elem, true && _exceptionable),
      ) &&
      (1 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (["value"].some((prop: any) => key === prop)) return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
      "number" === typeof input.greater &&
      Math.floor(input.greater) === input.greater &&
      -2147483648 <= input.greater &&
      input.greater <= 2147483647 &&
      3 < input.greater &&
      "number" === typeof input.greater_equal &&
      Math.floor(input.greater_equal) === input.greater_equal &&
      -2147483648 <= input.greater_equal &&
      input.greater_equal <= 2147483647 &&
      3 <= input.greater_equal &&
      "number" === typeof input.less &&
      Math.floor(input.less) === input.less &&
      -2147483648 <= input.less &&
      input.less <= 2147483647 &&
      input.less < 7 &&
      "number" === typeof input.less_equal &&
      Math.floor(input.less_equal) === input.less_equal &&
      -2147483648 <= input.less_equal &&
      input.less_equal <= 2147483647 &&
      input.less_equal <= 7 &&
      "number" === typeof input.greater_less &&
      Math.floor(input.greater_less) === input.greater_less &&
      -2147483648 <= input.greater_less &&
      input.greater_less <= 2147483647 &&
      3 < input.greater_less &&
      input.greater_less < 7 &&
      "number" === typeof input.greater_equal_less &&
      Math.floor(input.greater_equal_less) === input.greater_equal_less &&
      -2147483648 <= input.greater_equal_less &&
      input.greater_equal_less <= 2147483647 &&
      3 <= input.greater_equal_less &&
      input.greater_equal_less < 7 &&
      "number" === typeof input.greater_less_equal &&
      Math.floor(input.greater_less_equal) === input.greater_less_equal &&
      -2147483648 <= input.greater_less_equal &&
      input.greater_less_equal <= 2147483647 &&
      3 < input.greater_less_equal &&
      input.greater_less_equal <= 7 &&
      "number" === typeof input.greater_equal_less_equal &&
      Math.floor(input.greater_equal_less_equal) ===
        input.greater_equal_less_equal &&
      -2147483648 <= input.greater_equal_less_equal &&
      input.greater_equal_less_equal <= 2147483647 &&
      3 <= input.greater_equal_less_equal &&
      input.greater_equal_less_equal <= 7 &&
      "number" === typeof input.equal &&
      Math.floor(input.equal) === input.equal &&
      -2147483648 <= input.equal &&
      input.equal <= 2147483647 &&
      10 <= input.equal &&
      input.equal <= 10 &&
      (9 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (
            [
              "greater",
              "greater_equal",
              "less",
              "less_equal",
              "greater_less",
              "greater_equal_less",
              "greater_less_equal",
              "greater_equal_less_equal",
              "equal",
            ].some((prop: any) => key === prop)
          )
            return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    return "object" === typeof input && null !== input && $io0(input, true);
  };
  if (false === __is(input))
    ((
      input: any,
      _path: string,
      _exceptionable: boolean = true,
    ): input is CommentTagRange => {
      const $guard = (typia.createAssertEquals as any).guard;
      const $join = (typia.createAssertEquals as any).join;
      const $ao0 = (
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): boolean =>
        (((Array.isArray(input.value) ||
          $guard(_exceptionable, {
            path: _path + ".value",
            expected: "Array<CommentTagRange.Type>",
            value: input.value,
          })) &&
          input.value.every(
            (elem: any, _index1: number) =>
              ((("object" === typeof elem && null !== elem) ||
                $guard(_exceptionable, {
                  path: _path + ".value[" + _index1 + "]",
                  expected: "CommentTagRange.Type",
                  value: elem,
                })) &&
                $ao1(
                  elem,
                  _path + ".value[" + _index1 + "]",
                  true && _exceptionable,
                )) ||
              $guard(_exceptionable, {
                path: _path + ".value[" + _index1 + "]",
                expected: "CommentTagRange.Type",
                value: elem,
              }),
          )) ||
          $guard(_exceptionable, {
            path: _path + ".value",
            expected: "Array<CommentTagRange.Type>",
            value: input.value,
          })) &&
        (1 === Object.keys(input).length ||
          false === _exceptionable ||
          Object.keys(input).every((key: any) => {
            if (["value"].some((prop: any) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return $guard(_exceptionable, {
              path: _path + $join(key),
              expected: "undefined",
              value: value,
            });
          }));
      const $ao1 = (
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): boolean =>
        (("number" === typeof input.greater &&
          ((Math.floor(input.greater) === input.greater &&
            -2147483648 <= input.greater &&
            input.greater <= 2147483647) ||
            $guard(_exceptionable, {
              path: _path + ".greater",
              expected: 'number & Type<"int32">',
              value: input.greater,
            })) &&
          (3 < input.greater ||
            $guard(_exceptionable, {
              path: _path + ".greater",
              expected: "number & ExclusiveMinimum<3>",
              value: input.greater,
            }))) ||
          $guard(_exceptionable, {
            path: _path + ".greater",
            expected: '(number & Type<"int32"> & ExclusiveMinimum<3>)',
            value: input.greater,
          })) &&
        (("number" === typeof input.greater_equal &&
          ((Math.floor(input.greater_equal) === input.greater_equal &&
            -2147483648 <= input.greater_equal &&
            input.greater_equal <= 2147483647) ||
            $guard(_exceptionable, {
              path: _path + ".greater_equal",
              expected: 'number & Type<"int32">',
              value: input.greater_equal,
            })) &&
          (3 <= input.greater_equal ||
            $guard(_exceptionable, {
              path: _path + ".greater_equal",
              expected: "number & Minimum<3>",
              value: input.greater_equal,
            }))) ||
          $guard(_exceptionable, {
            path: _path + ".greater_equal",
            expected: '(number & Type<"int32"> & Minimum<3>)',
            value: input.greater_equal,
          })) &&
        (("number" === typeof input.less &&
          ((Math.floor(input.less) === input.less &&
            -2147483648 <= input.less &&
            input.less <= 2147483647) ||
            $guard(_exceptionable, {
              path: _path + ".less",
              expected: 'number & Type<"int32">',
              value: input.less,
            })) &&
          (input.less < 7 ||
            $guard(_exceptionable, {
              path: _path + ".less",
              expected: "number & ExclusiveMaximum<7>",
              value: input.less,
            }))) ||
          $guard(_exceptionable, {
            path: _path + ".less",
            expected: '(number & Type<"int32"> & ExclusiveMaximum<7>)',
            value: input.less,
          })) &&
        (("number" === typeof input.less_equal &&
          ((Math.floor(input.less_equal) === input.less_equal &&
            -2147483648 <= input.less_equal &&
            input.less_equal <= 2147483647) ||
            $guard(_exceptionable, {
              path: _path + ".less_equal",
              expected: 'number & Type<"int32">',
              value: input.less_equal,
            })) &&
          (input.less_equal <= 7 ||
            $guard(_exceptionable, {
              path: _path + ".less_equal",
              expected: "number & Maximum<7>",
              value: input.less_equal,
            }))) ||
          $guard(_exceptionable, {
            path: _path + ".less_equal",
            expected: '(number & Type<"int32"> & Maximum<7>)',
            value: input.less_equal,
          })) &&
        (("number" === typeof input.greater_less &&
          ((Math.floor(input.greater_less) === input.greater_less &&
            -2147483648 <= input.greater_less &&
            input.greater_less <= 2147483647) ||
            $guard(_exceptionable, {
              path: _path + ".greater_less",
              expected: 'number & Type<"int32">',
              value: input.greater_less,
            })) &&
          (3 < input.greater_less ||
            $guard(_exceptionable, {
              path: _path + ".greater_less",
              expected: "number & ExclusiveMinimum<3>",
              value: input.greater_less,
            })) &&
          (input.greater_less < 7 ||
            $guard(_exceptionable, {
              path: _path + ".greater_less",
              expected: "number & ExclusiveMaximum<7>",
              value: input.greater_less,
            }))) ||
          $guard(_exceptionable, {
            path: _path + ".greater_less",
            expected:
              '(number & Type<"int32"> & ExclusiveMinimum<3> & ExclusiveMaximum<7>)',
            value: input.greater_less,
          })) &&
        (("number" === typeof input.greater_equal_less &&
          ((Math.floor(input.greater_equal_less) === input.greater_equal_less &&
            -2147483648 <= input.greater_equal_less &&
            input.greater_equal_less <= 2147483647) ||
            $guard(_exceptionable, {
              path: _path + ".greater_equal_less",
              expected: 'number & Type<"int32">',
              value: input.greater_equal_less,
            })) &&
          (3 <= input.greater_equal_less ||
            $guard(_exceptionable, {
              path: _path + ".greater_equal_less",
              expected: "number & Minimum<3>",
              value: input.greater_equal_less,
            })) &&
          (input.greater_equal_less < 7 ||
            $guard(_exceptionable, {
              path: _path + ".greater_equal_less",
              expected: "number & ExclusiveMaximum<7>",
              value: input.greater_equal_less,
            }))) ||
          $guard(_exceptionable, {
            path: _path + ".greater_equal_less",
            expected:
              '(number & Type<"int32"> & Minimum<3> & ExclusiveMaximum<7>)',
            value: input.greater_equal_less,
          })) &&
        (("number" === typeof input.greater_less_equal &&
          ((Math.floor(input.greater_less_equal) === input.greater_less_equal &&
            -2147483648 <= input.greater_less_equal &&
            input.greater_less_equal <= 2147483647) ||
            $guard(_exceptionable, {
              path: _path + ".greater_less_equal",
              expected: 'number & Type<"int32">',
              value: input.greater_less_equal,
            })) &&
          (3 < input.greater_less_equal ||
            $guard(_exceptionable, {
              path: _path + ".greater_less_equal",
              expected: "number & ExclusiveMinimum<3>",
              value: input.greater_less_equal,
            })) &&
          (input.greater_less_equal <= 7 ||
            $guard(_exceptionable, {
              path: _path + ".greater_less_equal",
              expected: "number & Maximum<7>",
              value: input.greater_less_equal,
            }))) ||
          $guard(_exceptionable, {
            path: _path + ".greater_less_equal",
            expected:
              '(number & Type<"int32"> & ExclusiveMinimum<3> & Maximum<7>)',
            value: input.greater_less_equal,
          })) &&
        (("number" === typeof input.greater_equal_less_equal &&
          ((Math.floor(input.greater_equal_less_equal) ===
            input.greater_equal_less_equal &&
            -2147483648 <= input.greater_equal_less_equal &&
            input.greater_equal_less_equal <= 2147483647) ||
            $guard(_exceptionable, {
              path: _path + ".greater_equal_less_equal",
              expected: 'number & Type<"int32">',
              value: input.greater_equal_less_equal,
            })) &&
          (3 <= input.greater_equal_less_equal ||
            $guard(_exceptionable, {
              path: _path + ".greater_equal_less_equal",
              expected: "number & Minimum<3>",
              value: input.greater_equal_less_equal,
            })) &&
          (input.greater_equal_less_equal <= 7 ||
            $guard(_exceptionable, {
              path: _path + ".greater_equal_less_equal",
              expected: "number & Maximum<7>",
              value: input.greater_equal_less_equal,
            }))) ||
          $guard(_exceptionable, {
            path: _path + ".greater_equal_less_equal",
            expected: '(number & Type<"int32"> & Minimum<3> & Maximum<7>)',
            value: input.greater_equal_less_equal,
          })) &&
        (("number" === typeof input.equal &&
          ((Math.floor(input.equal) === input.equal &&
            -2147483648 <= input.equal &&
            input.equal <= 2147483647) ||
            $guard(_exceptionable, {
              path: _path + ".equal",
              expected: 'number & Type<"int32">',
              value: input.equal,
            })) &&
          (10 <= input.equal ||
            $guard(_exceptionable, {
              path: _path + ".equal",
              expected: "number & Minimum<10>",
              value: input.equal,
            })) &&
          (input.equal <= 10 ||
            $guard(_exceptionable, {
              path: _path + ".equal",
              expected: "number & Maximum<10>",
              value: input.equal,
            }))) ||
          $guard(_exceptionable, {
            path: _path + ".equal",
            expected: '(number & Type<"int32"> & Minimum<10> & Maximum<10>)',
            value: input.equal,
          })) &&
        (9 === Object.keys(input).length ||
          false === _exceptionable ||
          Object.keys(input).every((key: any) => {
            if (
              [
                "greater",
                "greater_equal",
                "less",
                "less_equal",
                "greater_less",
                "greater_equal_less",
                "greater_less_equal",
                "greater_equal_less_equal",
                "equal",
              ].some((prop: any) => key === prop)
            )
              return true;
            const value = input[key];
            if (undefined === value) return true;
            return $guard(_exceptionable, {
              path: _path + $join(key),
              expected: "undefined",
              value: value,
            });
          }));
      return (
        ((("object" === typeof input && null !== input) ||
          $guard(true, {
            path: _path + "",
            expected: "CommentTagRange",
            value: input,
          })) &&
          $ao0(input, _path + "", true)) ||
        $guard(true, {
          path: _path + "",
          expected: "CommentTagRange",
          value: input,
        })
      );
    })(input, "$input", true);
  return input;
});
