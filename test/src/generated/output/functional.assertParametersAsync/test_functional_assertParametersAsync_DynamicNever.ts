import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../../internal/_test_functional_assertParametersAsync";
import { DynamicNever } from "../../../structures/DynamicNever";

export const test_functional_assertParametersAsync_DynamicNever =
  _test_functional_assertParametersAsync(TypeGuardError)("DynamicNever")(
    DynamicNever,
  )(
    (p: (input: DynamicNever) => Promise<DynamicNever>) =>
      async (input: DynamicNever): Promise<DynamicNever> => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertParameters as any).errorFactory;
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
        ): DynamicNever => {
          const __is = (input: any): input is DynamicNever => {
            const $io0 = (input: any): boolean =>
              Object.keys(input).every((key: any) => {
                const value = input[key];
                if (undefined === value) return true;
                return null !== value && undefined === value;
              });
            return (
              "object" === typeof input &&
              null !== input &&
              false === Array.isArray(input) &&
              $io0(input)
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is DynamicNever => {
              const $guard = (typia.functional.assertParameters as any).guard;
              const $join = (typia.functional.assertParameters as any).join;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                false === _exceptionable ||
                Object.keys(input).every((key: any) => {
                  const value = input[key];
                  if (undefined === value) return true;
                  return (
                    (null !== value ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + $join(key),
                          expected: "undefined",
                          value: value,
                        },
                        errorFactory,
                      )) &&
                    (undefined === value ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + $join(key),
                          expected: "undefined",
                          value: value,
                        },
                        errorFactory,
                      ))
                  );
                });
              return (
                ((("object" === typeof input &&
                  null !== input &&
                  false === Array.isArray(input)) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "DynamicNever",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "DynamicNever",
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
