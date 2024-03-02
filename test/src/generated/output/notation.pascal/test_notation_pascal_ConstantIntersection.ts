import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_notation_validatePascal_ConstantIntersection =
  _test_notation_validateGeneral("ConstantIntersection")<ConstantIntersection>(
    ConstantIntersection,
  )<typia.PascalCase<ConstantIntersection>>({
    convert: (input) =>
      ((
        input: any,
      ): typia.IValidation<typia.PascalCase<ConstantIntersection>> => {
        const validate = (
          input: any,
        ): typia.IValidation<ConstantIntersection> => {
          const errors = [] as any[];
          const __is = (input: any): input is ConstantIntersection => {
            return (
              Array.isArray(input) &&
              input.length === 3 &&
              false === input[0] &&
              1 === input[1] &&
              "two" === input[2]
            );
          };
          if (false === __is(input)) {
            const $report = (typia.notations.validatePascal as any).report(
              errors,
            );
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
        };
        const general = (
          input: ConstantIntersection,
        ): typia.PascalCase<ConstantIntersection> => {
          return Array.isArray(input) &&
            input.length === 3 &&
            false === input[0] &&
            1 === input[1] &&
            "two" === input[2]
            ? ([input[0] as any, input[1] as any, input[2] as any] as any)
            : (input as any);
        };
        const output = validate(input) as any;
        if (output.success) output.data = general(input);
        return output;
      })(input),
    assert: (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): typia.PascalCase<ConstantIntersection> => {
      const __is = (
        input: any,
      ): input is typia.PascalCase<ConstantIntersection> => {
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
        ): input is typia.PascalCase<ConstantIntersection> => {
          const $guard = (typia.createAssert as any).guard;
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
    },
  });
