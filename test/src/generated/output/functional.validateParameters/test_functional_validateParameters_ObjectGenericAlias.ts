import typia from "typia";
import { _test_functional_validateParameters } from "../../../internal/_test_functional_validateParameters";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";
export const test_functional_validateParameters_ObjectGenericAlias =
  _test_functional_validateParameters("ObjectGenericAlias")(ObjectGenericAlias)(
    (p: (input: ObjectGenericAlias) => ObjectGenericAlias) =>
      (
        input: ObjectGenericAlias,
      ): import("typia").IValidation<ObjectGenericAlias> => {
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
              const $report = (
                typia.functional.validateParameters as any
              ).report(errors);
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
        return {
          success: true,
          data: p(input),
          errors: [],
        };
      },
  );
