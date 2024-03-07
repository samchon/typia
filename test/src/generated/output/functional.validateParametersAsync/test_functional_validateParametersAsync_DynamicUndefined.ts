import typia from "typia";
import { _test_functional_validateParametersAsync } from "../../../internal/_test_functional_validateParametersAsync";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";
export const test_functional_validateParametersAsync_DynamicUndefined =
  _test_functional_validateParametersAsync("DynamicUndefined")(
    DynamicUndefined,
  )(
    (p: (input: DynamicUndefined) => Promise<DynamicUndefined>) =>
      async (
        input: DynamicUndefined,
      ): Promise<import("typia").IValidation<DynamicUndefined>> => {
        const paramResults = [
          ((input: any): typia.IValidation<DynamicUndefined> => {
            const errors = [] as any[];
            const __is = (input: any): input is DynamicUndefined => {
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
            if (false === __is(input)) {
              const $report = (
                typia.functional.validateParameters as any
              ).report(errors);
              ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): input is DynamicUndefined => {
                const $join = (typia.functional.validateParameters as any).join;
                const $vo0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          const value = input[key];
                          if (undefined === value) return true;
                          return (
                            (null !== value ||
                              $report(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                              })) &&
                            (undefined === value ||
                              $report(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                              }))
                          );
                        })
                        .every((flag: boolean) => flag),
                  ].every((flag: boolean) => flag);
                return (
                  ((("object" === typeof input &&
                    null !== input &&
                    false === Array.isArray(input)) ||
                    $report(true, {
                      path: _path + "",
                      expected: "DynamicUndefined",
                      value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "DynamicUndefined",
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
