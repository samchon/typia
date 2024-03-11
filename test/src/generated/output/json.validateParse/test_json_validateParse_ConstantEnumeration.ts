import typia from "typia";
import { _test_json_validateParse } from "../../../internal/_test_json_validateParse";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";
export const test_json_validateParse_ConstantEnumeration =
  _test_json_validateParse("ConstantEnumeration")<ConstantEnumeration>(
    ConstantEnumeration,
  )((input) =>
    ((
      input: string,
    ): typia.IValidation<typia.Primitive<ConstantEnumeration>> => {
      const validate = (input: any): typia.IValidation<ConstantEnumeration> => {
        const errors = [] as any[];
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
        if (false === __is(input)) {
          const $report = (typia.json.validateParse as any).report(errors);
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ConstantEnumeration => {
            return (
              ((Array.isArray(input) ||
                $report(true, {
                  path: _path + "",
                  expected: "ConstantEnumeration",
                  value: input,
                })) &&
                input
                  .map(
                    (elem: any, _index1: number) =>
                      0 === elem ||
                      1 === elem ||
                      2 === elem ||
                      "Four" === elem ||
                      "Three" === elem ||
                      $report(true, {
                        path: _path + "[" + _index1 + "]",
                        expected: '("Four" | "Three" | 0 | 1 | 2)',
                        value: elem,
                      }),
                  )
                  .every((flag: boolean) => flag)) ||
              $report(true, {
                path: _path + "",
                expected: "ConstantEnumeration",
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
      const output = JSON.parse(input);
      return validate(output) as any;
    })(input),
  );
