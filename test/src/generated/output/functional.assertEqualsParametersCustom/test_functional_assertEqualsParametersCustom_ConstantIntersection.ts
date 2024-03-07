import typia from "typia";
import { _test_functional_assertEqualsParameters } from "../../../internal/_test_functional_assertEqualsParameters";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_functional_assertEqualsParametersCustom_ConstantIntersection =
  _test_functional_assertEqualsParameters(CustomGuardError)(
    "ConstantIntersection",
  )(ConstantIntersection)(
    (p: (input: ConstantIntersection) => ConstantIntersection) =>
      (input: ConstantIntersection): ConstantIntersection => {
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
        ): ConstantIntersection => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ConstantIntersection => {
            return (
              Array.isArray(input) &&
              input.length === 3 &&
              false === input[0] &&
              1 === input[1] &&
              "two" === input[2]
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ConstantIntersection => {
              const $guard = (typia.functional.assertEqualsParameters as any)
                .guard;
              return (
                ((Array.isArray(input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ConstantIntersection",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  (input.length === 3 ||
                    $guard(
                      true,
                      {
                        path: _path + "",
                        expected: '[false, 1, "two"]',
                        value: input,
                      },
                      errorFactory,
                    )) &&
                  (false === input[0] ||
                    $guard(
                      true,
                      {
                        path: _path + "[0]",
                        expected: "false",
                        value: input[0],
                      },
                      errorFactory,
                    )) &&
                  (1 === input[1] ||
                    $guard(
                      true,
                      {
                        path: _path + "[1]",
                        expected: "1",
                        value: input[1],
                      },
                      errorFactory,
                    )) &&
                  ("two" === input[2] ||
                    $guard(
                      true,
                      {
                        path: _path + "[2]",
                        expected: '"two"',
                        value: input[2],
                      },
                      errorFactory,
                    ))) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ConstantIntersection",
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
