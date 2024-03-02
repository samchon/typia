import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { DynamicComposite } from "../../../structures/DynamicComposite";

export const test_notation_createValidateCamel_DynamicComposite =
  _test_notation_validateGeneral("DynamicComposite")<DynamicComposite>(
    DynamicComposite,
  )<typia.CamelCase<DynamicComposite>>({
    convert: (
      input: any,
    ): typia.IValidation<typia.CamelCase<DynamicComposite>> => {
      const validate = (input: any): typia.IValidation<DynamicComposite> => {
        const errors = [] as any[];
        const __is = (input: any): input is DynamicComposite => {
          const $io0 = (input: any): boolean =>
            "string" === typeof input.id &&
            "string" === typeof input.name &&
            Object.keys(input).every((key: any) => {
              if (["id", "name"].some((prop: any) => key === prop)) return true;
              const value = input[key];
              if (undefined === value) return true;
              if (
                "number" === typeof Number(key) &&
                Number.isFinite(Number(key))
              )
                return "number" === typeof value && Number.isFinite(value);
              if ("string" === typeof key && RegExp(/^prefix_(.*)/).test(key))
                return "string" === typeof value;
              if ("string" === typeof key && RegExp(/(.*)_postfix$/).test(key))
                return "string" === typeof value;
              if (
                "string" === typeof key &&
                RegExp(/^value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(key)
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
              return true;
            });
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input)) {
          const $report = (typia.notations.createValidateCamel as any).report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is DynamicComposite => {
            const $join = (typia.notations.createValidateCamel as any).join;
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
                      return true;
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
      };
      const general = (
        input: DynamicComposite,
      ): typia.CamelCase<DynamicComposite> => {
        const $co0 = (input: any): any => {
          const output = {
            id: input.id as any,
            name: input.name as any,
          } as any;
          for (const [key, value] of Object.entries(input)) {
            if (["id", "name"].some((regular: any) => regular === key))
              continue;
            if (RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(key)) {
              output[key] = value as any;
              continue;
            }
            if (RegExp(/^(prefix_(.*))/).test(key)) {
              output[key] = value as any;
              continue;
            }
            if (RegExp(/((.*)_postfix)$/).test(key)) {
              output[key] = value as any;
              continue;
            }
            if (
              RegExp(/^(value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/).test(key)
            ) {
              output[key] = value as any;
              continue;
            }
            if (
              RegExp(
                /^(between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
              ).test(key)
            ) {
              output[key] = value as any;
              continue;
            }
          }
          return output;
        };
        return "object" === typeof input && null !== input
          ? $co0(input)
          : (input as any);
      };
      const output = validate(input) as any;
      if (output.success) output.data = general(input);
      return output;
    },
    assert: (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): typia.CamelCase<DynamicComposite> => {
      const __is = (input: any): input is typia.CamelCase<DynamicComposite> => {
        const $io0 = (input: any): boolean =>
          "string" === typeof input.id &&
          "string" === typeof input.name &&
          Object.keys(input).every((key: any) => {
            if (["id", "name"].some((prop: any) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            if ("number" === typeof Number(key) && Number.isFinite(Number(key)))
              return "number" === typeof value && Number.isFinite(value);
            if ("string" === typeof key && RegExp(/^prefix_(.*)/).test(key))
              return "string" === typeof value;
            if ("string" === typeof key && RegExp(/(.*)_postfix$/).test(key))
              return "string" === typeof value;
            if (
              "string" === typeof key &&
              RegExp(/^value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(key)
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
            return true;
          });
        return "object" === typeof input && null !== input && $io0(input);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.CamelCase<DynamicComposite> => {
          const $guard = (typia.createAssert as any).guard;
          const $join = (typia.createAssert as any).join;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("string" === typeof input.id ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".id",
                  expected: "string",
                  value: input.id,
                },
                errorFactory,
              )) &&
            ("string" === typeof input.name ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".name",
                  expected: "string",
                  value: input.name,
                },
                errorFactory,
              )) &&
            (false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (["id", "name"].some((prop: any) => key === prop))
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                if (
                  "number" === typeof Number(key) &&
                  Number.isFinite(Number(key))
                )
                  return (
                    ("number" === typeof value && Number.isFinite(value)) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "number",
                        value: value,
                      },
                      errorFactory,
                    )
                  );
                if ("string" === typeof key && RegExp(/^prefix_(.*)/).test(key))
                  return (
                    "string" === typeof value ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "string",
                        value: value,
                      },
                      errorFactory,
                    )
                  );
                if (
                  "string" === typeof key &&
                  RegExp(/(.*)_postfix$/).test(key)
                )
                  return (
                    "string" === typeof value ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "string",
                        value: value,
                      },
                      errorFactory,
                    )
                  );
                if (
                  "string" === typeof key &&
                  RegExp(/^value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(
                    key,
                  )
                )
                  return (
                    "string" === typeof value ||
                    ("number" === typeof value && Number.isFinite(value)) ||
                    "boolean" === typeof value ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "(boolean | number | string)",
                        value: value,
                      },
                      errorFactory,
                    )
                  );
                if (
                  "string" === typeof key &&
                  RegExp(
                    /^between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                  ).test(key)
                )
                  return (
                    "boolean" === typeof value ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "boolean",
                        value: value,
                      },
                      errorFactory,
                    )
                  );
                return true;
              }));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "DynamicComposite",
                  value: input,
                },
                errorFactory,
              )) &&
              $ao0(input, _path + "", true)) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "DynamicComposite",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
      return input;
    },
  });
