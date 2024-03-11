import typia from "typia";
import { _test_functional_validateEqualsReturn } from "../../../internal/_test_functional_validateEqualsReturn";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";
export const test_functional_validateEqualsReturn_ConstantEnumeration =
  _test_functional_validateEqualsReturn("ConstantEnumeration")(
    ConstantEnumeration,
  )(
    (p: (input: ConstantEnumeration) => ConstantEnumeration) =>
      (
        input: ConstantEnumeration,
      ): import("typia").IValidation<ConstantEnumeration> => {
        const result = ((
          input: any,
        ): typia.IValidation<ConstantEnumeration> => {
          const errors = [] as any[];
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ConstantEnumeration => {
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any, _index1: number) =>
                  0 === elem ||
                  1 === elem ||
                  2 === elem ||
                  "Four" === elem ||
                  "Three" === elem,
              )
            );
          };
          if (false === __is(input)) {
            const $report = (
              typia.functional.validateEqualsReturn as any
            ).report(errors);
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
        })(p(input));
        if (!result.success)
          result.errors = result.errors.map((error: any) => ({
            ...error,
            path: error.path.replace("$input", "$input.return"),
          }));
        return result;
      },
  );
