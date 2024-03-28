import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../../internal/_test_functional_validateFunctionAsync";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_functional_validateFunctionAsync_ObjectIntersection =
  _test_functional_validateFunctionAsync("ObjectIntersection")(
    ObjectIntersection,
  )(
    (p: (input: ObjectIntersection) => Promise<ObjectIntersection>) =>
      async (
        input: ObjectIntersection,
      ): Promise<import("typia").IValidation<ObjectIntersection>> => {
        const paramResults = [
          ((input: any): typia.IValidation<ObjectIntersection> => {
            const errors = [] as any[];
            const __is = (input: any): input is ObjectIntersection => {
              return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof (input as any).email &&
                "string" === typeof (input as any).name &&
                "boolean" === typeof (input as any).vulnerable
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
              ): input is ObjectIntersection => {
                const $vo0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    "string" === typeof input.email ||
                      $report(_exceptionable, {
                        path: _path + ".email",
                        expected: "string",
                        value: input.email,
                      }),
                    "string" === typeof input.name ||
                      $report(_exceptionable, {
                        path: _path + ".name",
                        expected: "string",
                        value: input.name,
                      }),
                    "boolean" === typeof input.vulnerable ||
                      $report(_exceptionable, {
                        path: _path + ".vulnerable",
                        expected: "boolean",
                        value: input.vulnerable,
                      }),
                  ].every((flag: boolean) => flag);
                return (
                  ((("object" === typeof input && null !== input) ||
                    $report(true, {
                      path: _path + "",
                      expected: "ObjectIntersection",
                      value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectIntersection",
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
        const result = ((input: any): typia.IValidation<ObjectIntersection> => {
          const errors = [] as any[];
          const __is = (input: any): input is ObjectIntersection => {
            return (
              "object" === typeof input &&
              null !== input &&
              "string" === typeof (input as any).email &&
              "string" === typeof (input as any).name &&
              "boolean" === typeof (input as any).vulnerable
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
            ): input is ObjectIntersection => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  "string" === typeof input.email ||
                    $report(_exceptionable, {
                      path: _path + ".email",
                      expected: "string",
                      value: input.email,
                    }),
                  "string" === typeof input.name ||
                    $report(_exceptionable, {
                      path: _path + ".name",
                      expected: "string",
                      value: input.name,
                    }),
                  "boolean" === typeof input.vulnerable ||
                    $report(_exceptionable, {
                      path: _path + ".vulnerable",
                      expected: "boolean",
                      value: input.vulnerable,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectIntersection",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectIntersection",
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
