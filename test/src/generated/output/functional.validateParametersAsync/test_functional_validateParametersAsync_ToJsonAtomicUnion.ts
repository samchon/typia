import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../../internal/_test_functional_validateParametersAsync";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";

export const test_functional_validateParametersAsync_ToJsonAtomicUnion =
  _test_functional_validateParametersAsync("ToJsonAtomicUnion")(
    ToJsonAtomicUnion,
  )(
    (p: (input: ToJsonAtomicUnion) => Promise<ToJsonAtomicUnion>) =>
      async (
        input: ToJsonAtomicUnion,
      ): Promise<import("typia").IValidation<ToJsonAtomicUnion>> => {
        const paramResults = [
          ((input: any): typia.IValidation<ToJsonAtomicUnion> => {
            const errors = [] as any[];
            const __is = (input: any): input is ToJsonAtomicUnion => {
              const $io0 = (input: any): boolean =>
                "function" === typeof input.toJSON;
              return (
                Array.isArray(input) &&
                input.every(
                  (elem: any) =>
                    "object" === typeof elem && null !== elem && $io0(elem),
                )
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
              ): input is ToJsonAtomicUnion => {
                const $vo0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    "function" === typeof input.toJSON ||
                      $report(_exceptionable, {
                        path: _path + ".toJSON",
                        expected: "unknown",
                        value: input.toJSON,
                      }),
                  ].every((flag: boolean) => flag);
                return (
                  ((Array.isArray(input) ||
                    $report(true, {
                      path: _path + "",
                      expected: "ToJsonAtomicUnion",
                      value: input,
                    })) &&
                    input
                      .map(
                        (elem: any, _index1: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(true, {
                              path: _path + "[" + _index1 + "]",
                              expected: "ToJsonAtomicUnion.IToJson",
                              value: elem,
                            })) &&
                            $vo0(elem, _path + "[" + _index1 + "]", true)) ||
                          $report(true, {
                            path: _path + "[" + _index1 + "]",
                            expected: "ToJsonAtomicUnion.IToJson",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ToJsonAtomicUnion",
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
