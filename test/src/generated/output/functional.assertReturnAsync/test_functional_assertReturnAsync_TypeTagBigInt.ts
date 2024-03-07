import typia from "typia";
import { _test_functional_assertReturnAsync } from "../../../internal/_test_functional_assertReturnAsync";
import { TypeTagBigInt } from "../../../structures/TypeTagBigInt";
import { TypeGuardError } from "typia";
export const test_functional_assertReturnAsync_TypeTagBigInt =
  _test_functional_assertReturnAsync(TypeGuardError)("TypeTagBigInt")(
    TypeTagBigInt,
  )(
    (p: (input: TypeTagBigInt) => Promise<TypeTagBigInt>) =>
      async (input: TypeTagBigInt): Promise<TypeTagBigInt> => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertReturn as any).errorFactory;
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
          const __is = (input: any): input is TypeTagBigInt => {
            return (
              "object" === typeof input &&
              null !== input &&
              "bigint" === typeof (input as any).value &&
              "bigint" === typeof (input as any).ranged &&
              BigInt(0) <= (input as any).ranged &&
              (input as any).ranged <= BigInt(100) &&
              "bigint" === typeof (input as any).minimum &&
              BigInt(0) <= (input as any).minimum &&
              "bigint" === typeof (input as any).maximum &&
              (input as any).maximum <= BigInt(100) &&
              "bigint" === typeof (input as any).multipleOf &&
              (input as any).multipleOf % BigInt(3) === BigInt(0)
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is TypeTagBigInt => {
              const $guard = (typia.functional.assertReturn as any).guard;
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
                  ));
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
        })(await p(input));
      },
  );
