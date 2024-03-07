import typia from "typia";
import { _test_functional_assertEqualsReturn } from "../../../internal/_test_functional_assertEqualsReturn";
import { TypeTagBigInt } from "../../../structures/TypeTagBigInt";
import { TypeGuardError } from "typia";
export const test_functional_assertEqualsReturn_TypeTagBigInt =
  _test_functional_assertEqualsReturn(TypeGuardError)("TypeTagBigInt")(
    TypeTagBigInt,
  )(
    (p: (input: TypeTagBigInt) => TypeTagBigInt) =>
      (input: TypeTagBigInt): TypeTagBigInt => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertEqualsReturn as any).errorFactory;
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
        ): TypeTagBigInt => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is TypeTagBigInt => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "bigint" === typeof input.value &&
              "bigint" === typeof input.ranged &&
              BigInt(0) <= input.ranged &&
              input.ranged <= BigInt(100) &&
              "bigint" === typeof input.minimum &&
              BigInt(0) <= input.minimum &&
              "bigint" === typeof input.maximum &&
              input.maximum <= BigInt(100) &&
              "bigint" === typeof input.multipleOf &&
              input.multipleOf % BigInt(3) === BigInt(0) &&
              (5 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    [
                      "value",
                      "ranged",
                      "minimum",
                      "maximum",
                      "multipleOf",
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
            ): input is TypeTagBigInt => {
              const $guard = (typia.functional.assertEqualsReturn as any).guard;
              const $join = (typia.functional.assertEqualsReturn as any).join;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ("bigint" === typeof input.value ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".value",
                      expected: "bigint",
                      value: input.value,
                    },
                    errorFactory,
                  )) &&
                (("bigint" === typeof input.ranged &&
                  (BigInt(0) <= input.ranged ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".ranged",
                        expected: "bigint & Minimum<0n>",
                        value: input.ranged,
                      },
                      errorFactory,
                    )) &&
                  (input.ranged <= BigInt(100) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".ranged",
                        expected: "bigint & Maximum<100n>",
                        value: input.ranged,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".ranged",
                      expected: "(bigint & Minimum<0n> & Maximum<100n>)",
                      value: input.ranged,
                    },
                    errorFactory,
                  )) &&
                (("bigint" === typeof input.minimum &&
                  (BigInt(0) <= input.minimum ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".minimum",
                        expected: "bigint & Minimum<0n>",
                        value: input.minimum,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".minimum",
                      expected: "(bigint & Minimum<0n>)",
                      value: input.minimum,
                    },
                    errorFactory,
                  )) &&
                (("bigint" === typeof input.maximum &&
                  (input.maximum <= BigInt(100) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".maximum",
                        expected: "bigint & Maximum<100n>",
                        value: input.maximum,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".maximum",
                      expected: "(bigint & Maximum<100n>)",
                      value: input.maximum,
                    },
                    errorFactory,
                  )) &&
                (("bigint" === typeof input.multipleOf &&
                  (input.multipleOf % BigInt(3) === BigInt(0) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".multipleOf",
                        expected: "bigint & MultipleOf<3n>",
                        value: input.multipleOf,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".multipleOf",
                      expected: "(bigint & MultipleOf<3n>)",
                      value: input.multipleOf,
                    },
                    errorFactory,
                  )) &&
                (5 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (
                      [
                        "value",
                        "ranged",
                        "minimum",
                        "maximum",
                        "multipleOf",
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
                      expected: "TypeTagBigInt",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "TypeTagBigInt",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(p(input));
      },
  );
