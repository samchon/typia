import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../../internal/_test_functional_assertEqualsParametersAsync";
import { CommentTagInfinite } from "../../../structures/CommentTagInfinite";

export const test_functional_assertEqualsParametersAsyncCustom_CommentTagInfinite =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "CommentTagInfinite",
  )(CommentTagInfinite)(
    (p: (input: CommentTagInfinite) => Promise<CommentTagInfinite>) =>
      async (input: CommentTagInfinite): Promise<CommentTagInfinite> => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (p) => new CustomGuardError(p);
        ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.parameters[0]")
                : undefined,
            }),
        ): CommentTagInfinite => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is CommentTagInfinite => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
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
            return (
              "object" === typeof input && null !== input && $io0(input, true)
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is CommentTagInfinite => {
              const $guard = (typia.functional.assertEqualsParameters as any)
                .guard;
              const $join = (typia.functional.assertEqualsParameters as any)
                .join;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (("number" === typeof input.value &&
                  Number.isFinite(input.value)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".value",
                      expected: "number",
                      value: input.value,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.ranged &&
                  (0 <= input.ranged ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".ranged",
                        expected: "number & Minimum<0>",
                        value: input.ranged,
                      },
                      errorFactory,
                    )) &&
                  (input.ranged <= 100 ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".ranged",
                        expected: "number & Maximum<100>",
                        value: input.ranged,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".ranged",
                      expected: "(number & Minimum<0> & Maximum<100>)",
                      value: input.ranged,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.minimum &&
                  (Number.isFinite(input.minimum) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".minimum",
                        expected: "number",
                        value: input.minimum,
                      },
                      errorFactory,
                    )) &&
                  (0 <= input.minimum ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".minimum",
                        expected: "number & Minimum<0>",
                        value: input.minimum,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".minimum",
                      expected: "(number & Minimum<0>)",
                      value: input.minimum,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.maximum &&
                  (Number.isFinite(input.maximum) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".maximum",
                        expected: "number",
                        value: input.maximum,
                      },
                      errorFactory,
                    )) &&
                  (input.maximum <= 100 ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".maximum",
                        expected: "number & Maximum<100>",
                        value: input.maximum,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".maximum",
                      expected: "(number & Maximum<100>)",
                      value: input.maximum,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.multipleOf &&
                  (input.multipleOf % 3 === 0 ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".multipleOf",
                        expected: "number & MultipleOf<3>",
                        value: input.multipleOf,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".multipleOf",
                      expected: "(number & MultipleOf<3>)",
                      value: input.multipleOf,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.typed &&
                  ((Math.floor(input.typed) === input.typed &&
                    -2147483648 <= input.typed &&
                    input.typed <= 2147483647) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".typed",
                        expected: 'number & Type<"int32">',
                        value: input.typed,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".typed",
                      expected: '(number & Type<"int32">)',
                      value: input.typed,
                    },
                    errorFactory,
                  )) &&
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
                    return $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value,
                      },
                      errorFactory,
                    );
                  }));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "CommentTagInfinite",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "CommentTagInfinite",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(input);
        return p(input);
      },
  );
