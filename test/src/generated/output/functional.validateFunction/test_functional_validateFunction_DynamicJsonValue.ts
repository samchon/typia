import typia from "typia";

import { _test_functional_validateFunction } from "../../../internal/_test_functional_validateFunction";
import { DynamicJsonValue } from "../../../structures/DynamicJsonValue";

export const test_functional_validateFunction_DynamicJsonValue =
  _test_functional_validateFunction("DynamicJsonValue")(DynamicJsonValue)(
    (p: (input: DynamicJsonValue) => DynamicJsonValue) =>
      (
        input: DynamicJsonValue,
      ): import("typia").IValidation<DynamicJsonValue> => {
        const paramResults = [
          ((input: any): typia.IValidation<DynamicJsonValue.JsonValue> => {
            const errors = [] as any[];
            const __is = (input: any): input is DynamicJsonValue.JsonValue => {
              const $io0 = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                  const value = input[key];
                  if (undefined === value) return true;
                  return (
                    null === value ||
                    undefined === value ||
                    "string" === typeof value ||
                    ("number" === typeof value && Number.isFinite(value)) ||
                    "boolean" === typeof value ||
                    (Array.isArray(value) && ($ia0(value) || false)) ||
                    ("object" === typeof value &&
                      null !== value &&
                      false === Array.isArray(value) &&
                      $io0(value))
                  );
                });
              const $ia0 = (input: any): any =>
                input.every(
                  (elem: any) =>
                    undefined !== elem &&
                    (null === elem ||
                      "string" === typeof elem ||
                      ("number" === typeof elem && Number.isFinite(elem)) ||
                      "boolean" === typeof elem ||
                      (Array.isArray(elem) && ($ia0(elem) || false)) ||
                      ("object" === typeof elem &&
                        null !== elem &&
                        false === Array.isArray(elem) &&
                        $io0(elem))),
                );
              return (
                undefined !== input &&
                (null === input ||
                  "string" === typeof input ||
                  ("number" === typeof input && Number.isFinite(input)) ||
                  "boolean" === typeof input ||
                  (Array.isArray(input) && ($ia0(input) || false)) ||
                  ("object" === typeof input &&
                    null !== input &&
                    false === Array.isArray(input) &&
                    $io0(input)))
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
              ): input is DynamicJsonValue.JsonValue => {
                const $join = (typia.functional.validateFunction as any).join;
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
                            null === value ||
                            undefined === value ||
                            "string" === typeof value ||
                            ("number" === typeof value &&
                              Number.isFinite(value)) ||
                            "boolean" === typeof value ||
                            (Array.isArray(value) &&
                              ($va0(
                                value,
                                _path + $join(key),
                                true && _exceptionable,
                              ) ||
                                $report(_exceptionable, {
                                  path: _path + $join(key),
                                  expected: "Array<DynamicJsonValue.JsonValue>",
                                  value: value,
                                }))) ||
                            ("object" === typeof value &&
                              null !== value &&
                              false === Array.isArray(value) &&
                              $vo0(
                                value,
                                _path + $join(key),
                                true && _exceptionable,
                              )) ||
                            $report(_exceptionable, {
                              path: _path + $join(key),
                              expected:
                                "(Array<DynamicJsonValue.JsonValue> | DynamicJsonValue.JsonObject | boolean | null | number | string | undefined)",
                              value: value,
                            }) ||
                            $report(_exceptionable, {
                              path: _path + $join(key),
                              expected:
                                "(Array<DynamicJsonValue.JsonValue> | DynamicJsonValue.JsonObject | boolean | null | number | string | undefined)",
                              value: value,
                            })
                          );
                        })
                        .every((flag: boolean) => flag),
                  ].every((flag: boolean) => flag);
                const $va0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): any =>
                  input
                    .map(
                      (elem: any, _index1: number) =>
                        (undefined !== elem ||
                          $report(_exceptionable, {
                            path: _path + "[" + _index1 + "]",
                            expected:
                              "(Array<DynamicJsonValue.JsonValue> | DynamicJsonValue.JsonObject | boolean | null | number | string)",
                            value: elem,
                          })) &&
                        (null === elem ||
                          "string" === typeof elem ||
                          ("number" === typeof elem && Number.isFinite(elem)) ||
                          "boolean" === typeof elem ||
                          (Array.isArray(elem) &&
                            ($va0(
                              elem,
                              _path + "[" + _index1 + "]",
                              true && _exceptionable,
                            ) ||
                              $report(_exceptionable, {
                                path: _path + "[" + _index1 + "]",
                                expected: "Array<DynamicJsonValue.JsonValue>",
                                value: elem,
                              }))) ||
                          ("object" === typeof elem &&
                            null !== elem &&
                            false === Array.isArray(elem) &&
                            $vo0(
                              elem,
                              _path + "[" + _index1 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path: _path + "[" + _index1 + "]",
                            expected:
                              "(Array<DynamicJsonValue.JsonValue> | DynamicJsonValue.JsonObject | boolean | null | number | string)",
                            value: elem,
                          }) ||
                          $report(_exceptionable, {
                            path: _path + "[" + _index1 + "]",
                            expected:
                              "(Array<DynamicJsonValue.JsonValue> | DynamicJsonValue.JsonObject | boolean | null | number | string)",
                            value: elem,
                          })),
                    )
                    .every((flag: boolean) => flag);
                return (
                  (undefined !== input ||
                    $report(true, {
                      path: _path + "",
                      expected:
                        "(Array<DynamicJsonValue.JsonValue> | DynamicJsonValue.JsonObject | boolean | null | number | string)",
                      value: input,
                    })) &&
                  (null === input ||
                    "string" === typeof input ||
                    ("number" === typeof input && Number.isFinite(input)) ||
                    "boolean" === typeof input ||
                    (Array.isArray(input) &&
                      ($va0(input, _path + "", true && _exceptionable) ||
                        $report(_exceptionable, {
                          path: _path + "",
                          expected: "Array<DynamicJsonValue.JsonValue>",
                          value: input,
                        }))) ||
                    ("object" === typeof input &&
                      null !== input &&
                      false === Array.isArray(input) &&
                      $vo0(input, _path + "", true)) ||
                    $report(true, {
                      path: _path + "",
                      expected:
                        "(Array<DynamicJsonValue.JsonValue> | DynamicJsonValue.JsonObject | boolean | null | number | string)",
                      value: input,
                    }) ||
                    $report(true, {
                      path: _path + "",
                      expected:
                        "(Array<DynamicJsonValue.JsonValue> | DynamicJsonValue.JsonObject | boolean | null | number | string)",
                      value: input,
                    }))
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
        ): typia.IValidation<DynamicJsonValue.JsonValue> => {
          const errors = [] as any[];
          const __is = (input: any): input is DynamicJsonValue.JsonValue => {
            const $io0 = (input: any): boolean =>
              Object.keys(input).every((key: any) => {
                const value = input[key];
                if (undefined === value) return true;
                return (
                  null === value ||
                  undefined === value ||
                  "string" === typeof value ||
                  ("number" === typeof value && Number.isFinite(value)) ||
                  "boolean" === typeof value ||
                  (Array.isArray(value) && ($ia0(value) || false)) ||
                  ("object" === typeof value &&
                    null !== value &&
                    false === Array.isArray(value) &&
                    $io0(value))
                );
              });
            const $ia0 = (input: any): any =>
              input.every(
                (elem: any) =>
                  undefined !== elem &&
                  (null === elem ||
                    "string" === typeof elem ||
                    ("number" === typeof elem && Number.isFinite(elem)) ||
                    "boolean" === typeof elem ||
                    (Array.isArray(elem) && ($ia0(elem) || false)) ||
                    ("object" === typeof elem &&
                      null !== elem &&
                      false === Array.isArray(elem) &&
                      $io0(elem))),
              );
            return (
              undefined !== input &&
              (null === input ||
                "string" === typeof input ||
                ("number" === typeof input && Number.isFinite(input)) ||
                "boolean" === typeof input ||
                (Array.isArray(input) && ($ia0(input) || false)) ||
                ("object" === typeof input &&
                  null !== input &&
                  false === Array.isArray(input) &&
                  $io0(input)))
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
            ): input is DynamicJsonValue.JsonValue => {
              const $join = (typia.functional.validateFunction as any).join;
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
                          null === value ||
                          undefined === value ||
                          "string" === typeof value ||
                          ("number" === typeof value &&
                            Number.isFinite(value)) ||
                          "boolean" === typeof value ||
                          (Array.isArray(value) &&
                            ($va0(
                              value,
                              _path + $join(key),
                              true && _exceptionable,
                            ) ||
                              $report(_exceptionable, {
                                path: _path + $join(key),
                                expected: "Array<DynamicJsonValue.JsonValue>",
                                value: value,
                              }))) ||
                          ("object" === typeof value &&
                            null !== value &&
                            false === Array.isArray(value) &&
                            $vo0(
                              value,
                              _path + $join(key),
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path: _path + $join(key),
                            expected:
                              "(Array<DynamicJsonValue.JsonValue> | DynamicJsonValue.JsonObject | boolean | null | number | string | undefined)",
                            value: value,
                          }) ||
                          $report(_exceptionable, {
                            path: _path + $join(key),
                            expected:
                              "(Array<DynamicJsonValue.JsonValue> | DynamicJsonValue.JsonObject | boolean | null | number | string | undefined)",
                            value: value,
                          })
                        );
                      })
                      .every((flag: boolean) => flag),
                ].every((flag: boolean) => flag);
              const $va0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): any =>
                input
                  .map(
                    (elem: any, _index1: number) =>
                      (undefined !== elem ||
                        $report(_exceptionable, {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "(Array<DynamicJsonValue.JsonValue> | DynamicJsonValue.JsonObject | boolean | null | number | string)",
                          value: elem,
                        })) &&
                      (null === elem ||
                        "string" === typeof elem ||
                        ("number" === typeof elem && Number.isFinite(elem)) ||
                        "boolean" === typeof elem ||
                        (Array.isArray(elem) &&
                          ($va0(
                            elem,
                            _path + "[" + _index1 + "]",
                            true && _exceptionable,
                          ) ||
                            $report(_exceptionable, {
                              path: _path + "[" + _index1 + "]",
                              expected: "Array<DynamicJsonValue.JsonValue>",
                              value: elem,
                            }))) ||
                        ("object" === typeof elem &&
                          null !== elem &&
                          false === Array.isArray(elem) &&
                          $vo0(
                            elem,
                            _path + "[" + _index1 + "]",
                            true && _exceptionable,
                          )) ||
                        $report(_exceptionable, {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "(Array<DynamicJsonValue.JsonValue> | DynamicJsonValue.JsonObject | boolean | null | number | string)",
                          value: elem,
                        }) ||
                        $report(_exceptionable, {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "(Array<DynamicJsonValue.JsonValue> | DynamicJsonValue.JsonObject | boolean | null | number | string)",
                          value: elem,
                        })),
                  )
                  .every((flag: boolean) => flag);
              return (
                (undefined !== input ||
                  $report(true, {
                    path: _path + "",
                    expected:
                      "(Array<DynamicJsonValue.JsonValue> | DynamicJsonValue.JsonObject | boolean | null | number | string)",
                    value: input,
                  })) &&
                (null === input ||
                  "string" === typeof input ||
                  ("number" === typeof input && Number.isFinite(input)) ||
                  "boolean" === typeof input ||
                  (Array.isArray(input) &&
                    ($va0(input, _path + "", true && _exceptionable) ||
                      $report(_exceptionable, {
                        path: _path + "",
                        expected: "Array<DynamicJsonValue.JsonValue>",
                        value: input,
                      }))) ||
                  ("object" === typeof input &&
                    null !== input &&
                    false === Array.isArray(input) &&
                    $vo0(input, _path + "", true)) ||
                  $report(true, {
                    path: _path + "",
                    expected:
                      "(Array<DynamicJsonValue.JsonValue> | DynamicJsonValue.JsonObject | boolean | null | number | string)",
                    value: input,
                  }) ||
                  $report(true, {
                    path: _path + "",
                    expected:
                      "(Array<DynamicJsonValue.JsonValue> | DynamicJsonValue.JsonObject | boolean | null | number | string)",
                    value: input,
                  }))
              );
            })(input, "$input", true);
          }
          const success = 0 === errors.length;
          return {
            success,
            errors,
            data: success ? input : undefined,
          } as any;
        })(p(input));
        if (!result.success)
          result.errors = result.errors.map((error: any) => ({
            ...error,
            path: error.path.replace("$input", "$input.return"),
          }));
        return result;
      },
  );
