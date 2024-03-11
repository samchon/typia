import typia from "typia";
import { _test_functional_assertParametersAsync } from "../../../internal/_test_functional_assertParametersAsync";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_functional_assertParametersAsyncCustom_ConstantEnumeration =
  _test_functional_assertParametersAsync(CustomGuardError)(
    "ConstantEnumeration",
  )(ConstantEnumeration)(
    (p: (input: ConstantEnumeration) => Promise<ConstantEnumeration>) =>
      async (input: ConstantEnumeration): Promise<ConstantEnumeration> => {
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
        ): ConstantEnumeration => {
          const __is = (input: any): input is ConstantEnumeration => {
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any) =>
                  0 === elem ||
                  1 === elem ||
                  2 === elem ||
                  "Four" === elem ||
                  "Three" === elem,
              )
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ConstantEnumeration => {
              const $guard = (typia.functional.assertParameters as any).guard;
              return (
                ((Array.isArray(input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ConstantEnumeration",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  input.every(
                    (elem: any, _index1: number) =>
                      0 === elem ||
                      1 === elem ||
                      2 === elem ||
                      "Four" === elem ||
                      "Three" === elem ||
                      $guard(
                        true,
                        {
                          path: _path + "[" + _index1 + "]",
                          expected: '("Four" | "Three" | 0 | 1 | 2)',
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ConstantEnumeration",
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
