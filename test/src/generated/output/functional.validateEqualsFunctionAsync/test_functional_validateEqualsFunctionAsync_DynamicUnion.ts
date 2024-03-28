import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../../internal/_test_functional_validateEqualsFunctionAsync";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_functional_validateEqualsFunctionAsync_DynamicUnion =
  _test_functional_validateEqualsFunctionAsync("DynamicUnion")(DynamicUnion)(
    (p: (input: DynamicUnion) => Promise<DynamicUnion>) =>
      async (
        input: DynamicUnion,
      ): Promise<import("typia").IValidation<DynamicUnion>> => {
        const paramResults = [
          ((input: any): typia.IValidation<DynamicUnion> => {
            const errors = [] as any[];
            const __is = (
              input: any,
              _exceptionable: boolean = true,
            ): input is DynamicUnion => {
              const $join = (typia.functional.validateEqualsFunction as any)
                .join;
              const $io0 = (
                input: any,
                _exceptionable: boolean = true,
              ): boolean =>
                Object.keys(input).every((key: any) => {
                  const value = input[key];
                  if (undefined === value) return true;
                  if (
                    "number" === typeof Number(key) &&
                    Number.isFinite(Number(key))
                  )
                    return "string" === typeof value;
                  if (
                    "string" === typeof key &&
                    RegExp(/^prefix_(.*)/).test(key)
                  )
                    return "string" === typeof value;
                  if (
                    "string" === typeof key &&
                    RegExp(/(.*)_postfix$/).test(key)
                  )
                    return "string" === typeof value;
                  if (
                    "string" === typeof key &&
                    RegExp(
                      /^value_between_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                    ).test(key)
                  )
                    return "number" === typeof value && Number.isFinite(value);
                  return false;
                });
              return (
                "object" === typeof input &&
                null !== input &&
                false === Array.isArray(input) &&
                $io0(input, true)
              );
            };
            if (false === __is(input)) {
              const $report = (
                typia.functional.validateEqualsFunction as any
              ).report(errors);
              ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): input is DynamicUnion => {
                const $join = (typia.functional.validateEqualsFunction as any)
                  .join;
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
                          if (
                            "number" === typeof Number(key) &&
                            Number.isFinite(Number(key))
                          )
                            return (
                              "string" === typeof value ||
                              $report(_exceptionable, {
                                path: _path + $join(key),
                                expected: "string",
                                value: value,
                              })
                            );
                          if (
                            "string" === typeof key &&
                            RegExp(/^prefix_(.*)/).test(key)
                          )
                            return (
                              "string" === typeof value ||
                              $report(_exceptionable, {
                                path: _path + $join(key),
                                expected: "string",
                                value: value,
                              })
                            );
                          if (
                            "string" === typeof key &&
                            RegExp(/(.*)_postfix$/).test(key)
                          )
                            return (
                              "string" === typeof value ||
                              $report(_exceptionable, {
                                path: _path + $join(key),
                                expected: "string",
                                value: value,
                              })
                            );
                          if (
                            "string" === typeof key &&
                            RegExp(
                              /^value_between_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                            ).test(key)
                          )
                            return (
                              ("number" === typeof value &&
                                Number.isFinite(value)) ||
                              $report(_exceptionable, {
                                path: _path + $join(key),
                                expected: "number",
                                value: value,
                              })
                            );
                          return $report(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                          });
                        })
                        .every((flag: boolean) => flag),
                  ].every((flag: boolean) => flag);
                return (
                  ((("object" === typeof input &&
                    null !== input &&
                    false === Array.isArray(input)) ||
                    $report(true, {
                      path: _path + "",
                      expected: "DynamicUnion",
                      value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "DynamicUnion",
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
        const result = ((input: any): typia.IValidation<DynamicUnion> => {
          const errors = [] as any[];
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is DynamicUnion => {
            const $join = (typia.functional.validateEqualsFunction as any).join;
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              Object.keys(input).every((key: any) => {
                const value = input[key];
                if (undefined === value) return true;
                if (
                  "number" === typeof Number(key) &&
                  Number.isFinite(Number(key))
                )
                  return "string" === typeof value;
                if ("string" === typeof key && RegExp(/^prefix_(.*)/).test(key))
                  return "string" === typeof value;
                if (
                  "string" === typeof key &&
                  RegExp(/(.*)_postfix$/).test(key)
                )
                  return "string" === typeof value;
                if (
                  "string" === typeof key &&
                  RegExp(
                    /^value_between_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                  ).test(key)
                )
                  return "number" === typeof value && Number.isFinite(value);
                return false;
              });
            return (
              "object" === typeof input &&
              null !== input &&
              false === Array.isArray(input) &&
              $io0(input, true)
            );
          };
          if (false === __is(input)) {
            const $report = (
              typia.functional.validateEqualsFunction as any
            ).report(errors);
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is DynamicUnion => {
              const $join = (typia.functional.validateEqualsFunction as any)
                .join;
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
                        if (
                          "number" === typeof Number(key) &&
                          Number.isFinite(Number(key))
                        )
                          return (
                            "string" === typeof value ||
                            $report(_exceptionable, {
                              path: _path + $join(key),
                              expected: "string",
                              value: value,
                            })
                          );
                        if (
                          "string" === typeof key &&
                          RegExp(/^prefix_(.*)/).test(key)
                        )
                          return (
                            "string" === typeof value ||
                            $report(_exceptionable, {
                              path: _path + $join(key),
                              expected: "string",
                              value: value,
                            })
                          );
                        if (
                          "string" === typeof key &&
                          RegExp(/(.*)_postfix$/).test(key)
                        )
                          return (
                            "string" === typeof value ||
                            $report(_exceptionable, {
                              path: _path + $join(key),
                              expected: "string",
                              value: value,
                            })
                          );
                        if (
                          "string" === typeof key &&
                          RegExp(
                            /^value_between_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                          ).test(key)
                        )
                          return (
                            ("number" === typeof value &&
                              Number.isFinite(value)) ||
                            $report(_exceptionable, {
                              path: _path + $join(key),
                              expected: "number",
                              value: value,
                            })
                          );
                        return $report(_exceptionable, {
                          path: _path + $join(key),
                          expected: "undefined",
                          value: value,
                        });
                      })
                      .every((flag: boolean) => flag),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input &&
                  null !== input &&
                  false === Array.isArray(input)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "DynamicUnion",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "DynamicUnion",
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
