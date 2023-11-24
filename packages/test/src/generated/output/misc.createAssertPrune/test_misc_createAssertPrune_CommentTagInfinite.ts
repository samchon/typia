import typia from "typia";

import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { CommentTagInfinite } from "../../../structures/CommentTagInfinite";

export const test_misc_createAssertPrune_CommentTagInfinite =
  _test_misc_assertPrune("CommentTagInfinite")<CommentTagInfinite>(
    CommentTagInfinite,
  )((input: any): CommentTagInfinite => {
    const assert = (input: any): CommentTagInfinite => {
      const __is = (input: any): input is CommentTagInfinite => {
        return (
          "object" === typeof input &&
          null !== input &&
          "number" === typeof (input as any).value &&
          Number.isFinite((input as any).value) &&
          "number" === typeof (input as any).ranged &&
          0 <= (input as any).ranged &&
          (input as any).ranged <= 100 &&
          "number" === typeof (input as any).minimum &&
          Number.isFinite((input as any).minimum) &&
          0 <= (input as any).minimum &&
          "number" === typeof (input as any).maximum &&
          Number.isFinite((input as any).maximum) &&
          (input as any).maximum <= 100 &&
          "number" === typeof (input as any).multipleOf &&
          (input as any).multipleOf % 3 === 0 &&
          "number" === typeof (input as any).typed &&
          Math.floor((input as any).typed) === (input as any).typed &&
          -2147483648 <= (input as any).typed &&
          (input as any).typed <= 2147483647
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is CommentTagInfinite => {
          const $guard = (typia.misc.createAssertPrune as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (("number" === typeof input.value &&
              Number.isFinite(input.value)) ||
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
              }));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(true, {
                path: _path + "",
                expected: "CommentTagInfinite",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "CommentTagInfinite",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    };
    const prune = (input: CommentTagInfinite): void => {
      const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if (
            "value" === key ||
            "ranged" === key ||
            "minimum" === key ||
            "maximum" === key ||
            "multipleOf" === key ||
            "typed" === key
          )
            continue;
          delete input[key];
        }
      };
      if ("object" === typeof input && null !== input) $po0(input);
    };
    assert(input);
    prune(input);
    return input;
  });
