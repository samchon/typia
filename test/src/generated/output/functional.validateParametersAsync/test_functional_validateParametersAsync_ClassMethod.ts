import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../../internal/_test_functional_validateParametersAsync";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_functional_validateParametersAsync_ClassMethod =
  _test_functional_validateParametersAsync("ClassMethod")(ClassMethod)(
    (p: (input: ClassMethod) => Promise<ClassMethod>) =>
      async (
        input: ClassMethod,
      ): Promise<import("typia").IValidation<ClassMethod>> => {
        const paramResults = [
          ((input: any): typia.IValidation<ClassMethod.Animal> => {
            const errors = [] as any[];
            const __is = (input: any): input is ClassMethod.Animal => {
              return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof (input as any).name &&
                "number" === typeof (input as any).age &&
                Number.isFinite((input as any).age)
              );
            };
            if (false === __is(input)) {
              const $report = (
                typia.functional.validateParameters as any
              ).report(errors);
              ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): input is ClassMethod.Animal => {
                const $vo0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    "string" === typeof input.name ||
                      $report(_exceptionable, {
                        path: _path + ".name",
                        expected: "string",
                        value: input.name,
                      }),
                    ("number" === typeof input.age &&
                      Number.isFinite(input.age)) ||
                      $report(_exceptionable, {
                        path: _path + ".age",
                        expected: "number",
                        value: input.age,
                      }),
                  ].every((flag: boolean) => flag);
                return (
                  ((("object" === typeof input && null !== input) ||
                    $report(true, {
                      path: _path + "",
                      expected: "ClassMethod.Animal",
                      value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ClassMethod.Animal",
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
