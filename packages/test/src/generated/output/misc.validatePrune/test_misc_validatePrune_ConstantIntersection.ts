import typia from "typia";

import { _test_misc_validatePrune } from "../../../internal/_test_misc_validatePrune";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_misc_validatePrune_ConstantIntersection =
  _test_misc_validatePrune("ConstantIntersection")<ConstantIntersection>(
    ConstantIntersection,
  )((input) =>
    ((input: any): typia.IValidation<ConstantIntersection> => {
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
          const $report = (typia.misc.validatePrune as any).report(errors);
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
      const prune = (input: ConstantIntersection): void => {};
      const output = validate(input);
      if (output.success) prune(input);
      return output;
    })(input),
  );
