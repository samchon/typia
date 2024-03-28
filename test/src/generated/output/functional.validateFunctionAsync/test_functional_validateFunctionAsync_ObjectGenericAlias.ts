import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../../internal/_test_functional_validateFunctionAsync";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_functional_validateFunctionAsync_ObjectGenericAlias =
  _test_functional_validateFunctionAsync("ObjectGenericAlias")(
    ObjectGenericAlias,
  )(
    (p: (input: ObjectGenericAlias) => Promise<ObjectGenericAlias>) =>
      async (
        input: ObjectGenericAlias,
      ): Promise<import("typia").IValidation<ObjectGenericAlias>> => {
        const paramResults = [
          ((input: any): typia.IValidation<ObjectGenericAlias.Alias> => {
            const errors = [] as any[];
            const __is = (input: any): input is ObjectGenericAlias.Alias => {
              return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof (input as any).value
              );
            };
            if (false === __is(input)) {
              const $report = (typia.functional.validateFunction as any).report(
                errors,
              );
              ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): input is ObjectGenericAlias.Alias => {
                const $vo0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    "string" === typeof input.value ||
                      $report(_exceptionable, {
                        path: _path + ".value",
                        expected: "string",
                        value: input.value,
                      }),
                  ].every((flag: boolean) => flag);
                return (
                  ((("object" === typeof input && null !== input) ||
                    $report(true, {
                      path: _path + "",
                      expected: "ObjectGenericAlias.Alias",
                      value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectGenericAlias.Alias",
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
        const result = ((
          input: any,
        ): typia.IValidation<ObjectGenericAlias.Alias> => {
          const errors = [] as any[];
          const __is = (input: any): input is ObjectGenericAlias.Alias => {
            return (
              "object" === typeof input &&
              null !== input &&
              "string" === typeof (input as any).value
            );
          };
          if (false === __is(input)) {
            const $report = (typia.functional.validateFunction as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectGenericAlias.Alias => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  "string" === typeof input.value ||
                    $report(_exceptionable, {
                      path: _path + ".value",
                      expected: "string",
                      value: input.value,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectGenericAlias.Alias",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectGenericAlias.Alias",
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
        })(await p(input));
        if (!result.success)
          result.errors = result.errors.map((error: any) => ({
            ...error,
            path: error.path.replace("$input", "$input.return"),
          }));
        return result;
      },
  );
