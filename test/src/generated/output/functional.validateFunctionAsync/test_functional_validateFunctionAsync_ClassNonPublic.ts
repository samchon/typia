import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../../internal/_test_functional_validateFunctionAsync";
import { ClassNonPublic } from "../../../structures/ClassNonPublic";

export const test_functional_validateFunctionAsync_ClassNonPublic =
  _test_functional_validateFunctionAsync("ClassNonPublic")(ClassNonPublic)(
    (p: (input: ClassNonPublic) => Promise<ClassNonPublic>) =>
      async (
        input: ClassNonPublic,
      ): Promise<import("typia").IValidation<ClassNonPublic>> => {
        const paramResults = [
          ((input: any): typia.IValidation<ClassNonPublic.Accessor> => {
            const errors = [] as any[];
            const __is = (input: any): input is ClassNonPublic.Accessor => {
              return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof (input as any).implicit &&
                "string" === typeof (input as any).shown
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
              ): input is ClassNonPublic.Accessor => {
                const $vo0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    "string" === typeof input.implicit ||
                      $report(_exceptionable, {
                        path: _path + ".implicit",
                        expected: "string",
                        value: input.implicit,
                      }),
                    "string" === typeof input.shown ||
                      $report(_exceptionable, {
                        path: _path + ".shown",
                        expected: "string",
                        value: input.shown,
                      }),
                  ].every((flag: boolean) => flag);
                return (
                  ((("object" === typeof input && null !== input) ||
                    $report(true, {
                      path: _path + "",
                      expected: "ClassNonPublic.Accessor",
                      value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ClassNonPublic.Accessor",
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
        ): typia.IValidation<ClassNonPublic.Accessor> => {
          const errors = [] as any[];
          const __is = (input: any): input is ClassNonPublic.Accessor => {
            return (
              "object" === typeof input &&
              null !== input &&
              "string" === typeof (input as any).implicit &&
              "string" === typeof (input as any).shown
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
            ): input is ClassNonPublic.Accessor => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  "string" === typeof input.implicit ||
                    $report(_exceptionable, {
                      path: _path + ".implicit",
                      expected: "string",
                      value: input.implicit,
                    }),
                  "string" === typeof input.shown ||
                    $report(_exceptionable, {
                      path: _path + ".shown",
                      expected: "string",
                      value: input.shown,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ClassNonPublic.Accessor",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ClassNonPublic.Accessor",
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
