import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../../internal/_test_functional_validateParametersAsync";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_functional_validateParametersAsync_ObjectInternal =
  _test_functional_validateParametersAsync("ObjectInternal")(ObjectInternal)(
    (p: (input: ObjectInternal) => Promise<ObjectInternal>) =>
      async (
        input: ObjectInternal,
      ): Promise<import("typia").IValidation<ObjectInternal>> => {
        const paramResults = [
          ((input: any): typia.IValidation<ObjectInternal> => {
            const errors = [] as any[];
            const __is = (input: any): input is ObjectInternal => {
              return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof (input as any).id &&
                "string" === typeof (input as any).name
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
              ): input is ObjectInternal => {
                const $vo0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    "string" === typeof input.id ||
                      $report(_exceptionable, {
                        path: _path + ".id",
                        expected: "string",
                        value: input.id,
                      }),
                    "string" === typeof input.name ||
                      $report(_exceptionable, {
                        path: _path + ".name",
                        expected: "string",
                        value: input.name,
                      }),
                  ].every((flag: boolean) => flag);
                return (
                  ((("object" === typeof input && null !== input) ||
                    $report(true, {
                      path: _path + "",
                      expected: "ObjectInternal",
                      value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectInternal",
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
