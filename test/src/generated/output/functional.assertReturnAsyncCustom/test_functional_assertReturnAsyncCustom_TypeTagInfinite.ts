import typia from "typia";
import { _test_functional_assertReturnAsync } from "../../../internal/_test_functional_assertReturnAsync";
import { TypeTagInfinite } from "../../../structures/TypeTagInfinite";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_functional_assertReturnAsyncCustom_TypeTagInfinite =
  _test_functional_assertReturnAsync(CustomGuardError)("TypeTagInfinite")(
    TypeTagInfinite,
  )(
    (p: (input: TypeTagInfinite) => Promise<TypeTagInfinite>) =>
      async (input: TypeTagInfinite): Promise<TypeTagInfinite> => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (p) => new CustomGuardError(p);
        return ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.return")
                : undefined,
            }),
        ): TypeTagInfinite => {
          const __is = (input: any): input is TypeTagInfinite => {
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
            ): input is TypeTagInfinite => {
              const $guard = (typia.functional.assertReturn as any).guard;
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
                  ));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "TypeTagInfinite",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "TypeTagInfinite",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(await p(input));
      },
  );
