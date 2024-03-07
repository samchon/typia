import typia from "typia";
import { _test_functional_validateEqualsParameters } from "../../../internal/_test_functional_validateEqualsParameters";
import { DynamicComposite } from "../../../structures/DynamicComposite";
export const test_functional_validateEqualsParameters_DynamicComposite =
  _test_functional_validateEqualsParameters("DynamicComposite")(
    DynamicComposite,
  )(
    (p: (input: DynamicComposite) => DynamicComposite) =>
      (
        input: DynamicComposite,
      ): import("typia").IValidation<DynamicComposite> => {
        const paramResults = [
          ((input: any): typia.IValidation<DynamicComposite> => {
            const errors = [] as any[];
            const __is = (
              input: any,
              _exceptionable: boolean = true,
            ): input is DynamicComposite => {
              const $join = (typia.functional.validateEqualsParameters as any)
                .join;
              const $io0 = (
                input: any,
                _exceptionable: boolean = true,
              ): boolean =>
                "string" === typeof input.id &&
                "string" === typeof input.name &&
                Object.keys(input).every((key: any) => {
                  if (["id", "name"].some((prop: any) => key === prop))
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  if (
                    "number" === typeof Number(key) &&
                    Number.isFinite(Number(key))
                  )
                    return "number" === typeof value && Number.isFinite(value);
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
                    RegExp(/^value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(
                      key,
                    )
                  )
                    return (
                      "string" === typeof value ||
                      ("number" === typeof value && Number.isFinite(value)) ||
                      "boolean" === typeof value
                    );
                  if (
                    "string" === typeof key &&
                    RegExp(
                      /^between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                    ).test(key)
                  )
                    return "boolean" === typeof value;
                  return false;
                });
              return (
                "object" === typeof input && null !== input && $io0(input, true)
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
              ): input is DynamicComposite => {
                const $join = (typia.functional.validateEqualsParameters as any)
                  .join;
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
                    false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          if (["id", "name"].some((prop: any) => key === prop))
                            return true;
                          const value = input[key];
                          if (undefined === value) return true;
                          if (
                            "number" === typeof Number(key) &&
                            Number.isFinite(Number(key))
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
                              /^value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                            ).test(key)
                          )
                            return (
                              "string" === typeof value ||
                              ("number" === typeof value &&
                                Number.isFinite(value)) ||
                              "boolean" === typeof value ||
                              $report(_exceptionable, {
                                path: _path + $join(key),
                                expected: "(boolean | number | string)",
                                value: value,
                              })
                            );
                          if (
                            "string" === typeof key &&
                            RegExp(
                              /^between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                            ).test(key)
                          )
                            return (
                              "boolean" === typeof value ||
                              $report(_exceptionable, {
                                path: _path + $join(key),
                                expected: "boolean",
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
                  ((("object" === typeof input && null !== input) ||
                    $report(true, {
                      path: _path + "",
                      expected: "DynamicComposite",
                      value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "DynamicComposite",
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
