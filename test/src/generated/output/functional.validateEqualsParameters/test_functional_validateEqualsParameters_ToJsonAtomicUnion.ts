import typia from "typia";
import { _test_functional_validateEqualsParameters } from "../../../internal/_test_functional_validateEqualsParameters";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";
export const test_functional_validateEqualsParameters_ToJsonAtomicUnion =
  _test_functional_validateEqualsParameters("ToJsonAtomicUnion")(
    ToJsonAtomicUnion,
  )(
    (p: (input: ToJsonAtomicUnion) => ToJsonAtomicUnion) =>
      (
        input: ToJsonAtomicUnion,
      ): import("typia").IValidation<ToJsonAtomicUnion> => {
        const paramResults = [
          ((input: any): typia.IValidation<ToJsonAtomicUnion> => {
            const errors = [] as any[];
            const __is = (
              input: any,
              _exceptionable: boolean = true,
            ): input is ToJsonAtomicUnion => {
              const $io0 = (
                input: any,
                _exceptionable: boolean = true,
              ): boolean =>
                "function" === typeof input.toJSON &&
                (1 === Object.keys(input).length ||
                  Object.keys(input).every((key: any) => {
                    if (["toJSON"].some((prop: any) => key === prop))
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                  }));
              return (
                Array.isArray(input) &&
                input.every(
                  (elem: any, _index1: number) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    $io0(elem, true),
                )
              );
            };
            if (false === __is(input)) {
              const $report = (
                typia.functional.validateEqualsParameters as any
              ).report(errors);
              ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): input is ToJsonAtomicUnion => {
                const $join = (typia.functional.validateEqualsParameters as any)
                  .join;
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
                    1 === Object.keys(input).length ||
                      false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          if (["toJSON"].some((prop: any) => key === prop))
                            return true;
                          const value = input[key];
                          if (undefined === value) return true;
                          return $report(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                          });
                        })
                        .every((flag: boolean) => flag),
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
          data: p(input),
          errors: [],
        };
      },
  );
