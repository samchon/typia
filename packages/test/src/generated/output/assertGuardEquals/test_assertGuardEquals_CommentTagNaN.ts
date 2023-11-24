import typia from "typia";

import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { CommentTagNaN } from "../../../structures/CommentTagNaN";

export const test_assertGuardEquals_CommentTagNaN = _test_assertGuardEquals(
  "CommentTagNaN",
)<CommentTagNaN>(CommentTagNaN)((input) =>
  ((input: any): asserts input is CommentTagNaN => {
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is CommentTagNaN => {
      const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
        "number" === typeof input.value &&
        Number.isFinite(input.value) &&
        "number" === typeof input.ranged &&
        0 <= input.ranged &&
        input.ranged <= 100 &&
        "number" === typeof input.minimum &&
        Number.isFinite(input.minimum) &&
        0 <= input.minimum &&
        "number" === typeof input.maximum &&
        Number.isFinite(input.maximum) &&
        input.maximum <= 100 &&
        "number" === typeof input.multipleOf &&
        input.multipleOf % 3 === 0 &&
        "number" === typeof input.typed &&
        Math.floor(input.typed) === input.typed &&
        -2147483648 <= input.typed &&
        input.typed <= 2147483647 &&
        (6 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (
              [
                "value",
                "ranged",
                "minimum",
                "maximum",
                "multipleOf",
                "typed",
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
      ): input is CommentTagNaN => {
        const $guard = (typia.assertGuardEquals as any).guard;
        const $join = (typia.assertGuardEquals as any).join;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (("number" === typeof input.value && Number.isFinite(input.value)) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "number",
              value: input.value,
            })) &&
          (("number" === typeof input.ranged &&
            (0 <= input.ranged ||
              $guard(_exceptionable, {
                path: _path + ".ranged",
                expected: "number & Minimum<0>",
                value: input.ranged,
              })) &&
            (input.ranged <= 100 ||
              $guard(_exceptionable, {
                path: _path + ".ranged",
                expected: "number & Maximum<100>",
                value: input.ranged,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".ranged",
              expected: "(number & Minimum<0> & Maximum<100>)",
              value: input.ranged,
            })) &&
          (("number" === typeof input.minimum &&
            (Number.isFinite(input.minimum) ||
              $guard(_exceptionable, {
                path: _path + ".minimum",
                expected: "number",
                value: input.minimum,
              })) &&
            (0 <= input.minimum ||
              $guard(_exceptionable, {
                path: _path + ".minimum",
                expected: "number & Minimum<0>",
                value: input.minimum,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".minimum",
              expected: "(number & Minimum<0>)",
              value: input.minimum,
            })) &&
          (("number" === typeof input.maximum &&
            (Number.isFinite(input.maximum) ||
              $guard(_exceptionable, {
                path: _path + ".maximum",
                expected: "number",
                value: input.maximum,
              })) &&
            (input.maximum <= 100 ||
              $guard(_exceptionable, {
                path: _path + ".maximum",
                expected: "number & Maximum<100>",
                value: input.maximum,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".maximum",
              expected: "(number & Maximum<100>)",
              value: input.maximum,
            })) &&
          (("number" === typeof input.multipleOf &&
            (input.multipleOf % 3 === 0 ||
              $guard(_exceptionable, {
                path: _path + ".multipleOf",
                expected: "number & MultipleOf<3>",
                value: input.multipleOf,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".multipleOf",
              expected: "(number & MultipleOf<3>)",
              value: input.multipleOf,
            })) &&
          (("number" === typeof input.typed &&
            ((Math.floor(input.typed) === input.typed &&
              -2147483648 <= input.typed &&
              input.typed <= 2147483647) ||
              $guard(_exceptionable, {
                path: _path + ".typed",
                expected: 'number & Type<"int32">',
                value: input.typed,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".typed",
              expected: '(number & Type<"int32">)',
              value: input.typed,
            })) &&
          (6 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (
                [
                  "value",
                  "ranged",
                  "minimum",
                  "maximum",
                  "multipleOf",
                  "typed",
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
              expected: "CommentTagNaN",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "CommentTagNaN",
            value: input,
          })
        );
      })(input, "$input", true);
  })(input),
);
