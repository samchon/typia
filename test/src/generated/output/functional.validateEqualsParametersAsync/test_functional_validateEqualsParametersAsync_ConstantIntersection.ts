import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../../internal/_test_functional_validateEqualsParametersAsync";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_functional_validateEqualsParametersAsync_ConstantIntersection =
  _test_functional_validateEqualsParametersAsync("ConstantIntersection")(
    ConstantIntersection,
  )(
    (p: (input: ConstantIntersection) => Promise<ConstantIntersection>) =>
      async (
        input: ConstantIntersection,
      ): Promise<import("typia").IValidation<ConstantIntersection>> => {
        const paramResults = [
          ((input: any): typia.IValidation<ConstantIntersection> => {
            const errors = [] as any[];
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
            if (false === __is(input)) {
              const $report = (
                typia.functional.validateEqualsParameters as any
              ).report(errors);
              ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): input is ConstantIntersection => {
                return (
                  ((Array.isArray(input) ||
                    $report(true, {
                      path: _path + "",
                      expected: "ConstantIntersection",
                      value: input,
                    })) &&
                    (input.length === 3 ||
                      $report(true, {
                        path: _path + "",
                        expected: '[false, 1, "two"]',
                        value: input,
                      })) &&
                    [
                      false === input[0] ||
                        $report(true, {
                          path: _path + "[0]",
                          expected: "false",
                          value: input[0],
                        }),
                      1 === input[1] ||
                        $report(true, {
                          path: _path + "[1]",
                          expected: "1",
                          value: input[1],
                        }),
                      "two" === input[2] ||
                        $report(true, {
                          path: _path + "[2]",
                          expected: '"two"',
                          value: input[2],
                        }),
                    ].every((flag: boolean) => flag)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ConstantIntersection",
                    value: input,
                  })
                );
              })(input, "$input", true);
            }
            const success = 0 === errors.length;
            return {
              success,
              errors,
              data: success ? input : undefined,
            } as any;
          })(input) as import("typia").IValidation.IFailure,
        ].filter((r: any) => false === r.success);
        if (paramResults.length > 0)
          return {
            success: false,
            errors: paramResults
              .map((r: any, i: any) =>
                r.errors.map((error: any) => ({
                  ...error,
                  path: error.path.replace("$input", `$input.parameters[${i}]`),
                })),
              )
              .flat(),
          };
        return {
          success: true,
          data: await p(input),
          errors: [],
        };
      },
  );
