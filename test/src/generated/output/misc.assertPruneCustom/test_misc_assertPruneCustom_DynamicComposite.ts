import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { DynamicComposite } from "../../../structures/DynamicComposite";

export const test_misc_assertPruneCustom_DynamicComposite =
  _test_misc_assertPrune(CustomGuardError)(
    "DynamicComposite",
  )<DynamicComposite>(DynamicComposite)((input) =>
    ((
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): DynamicComposite => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): DynamicComposite => {
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
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is DynamicComposite => {
            const $guard = (typia.misc.assertPrune as any).guard;
            const $join = (typia.misc.assertPrune as any).join;
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
                  if (
                    "string" === typeof key &&
                    RegExp(/^prefix_(.*)/).test(key)
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
      };
      const prune = (input: DynamicComposite): void => {
        const $po0 = (input: any): any => {
          Object.entries(input).forEach(([key, value]: any) => {
            if (undefined === value) return;
            if ("id" === key) return;
            if ("name" === key) return;
            if (RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(key)) {
            }
            if (RegExp(/^(prefix_(.*))/).test(key)) {
            }
            if (RegExp(/((.*)_postfix)$/).test(key)) {
            }
            if (
              RegExp(/^(value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/).test(key)
            ) {
            }
            if (
              RegExp(
                /^(between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
              ).test(key)
            ) {
            }
          });
          for (const key of Object.keys(input)) {
            if (
              "id" === key ||
              "name" === key ||
              RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(key) ||
              RegExp(/^(prefix_(.*))/).test(key) ||
              RegExp(/((.*)_postfix)$/).test(key) ||
              RegExp(/^(value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/).test(
                key,
              ) ||
              RegExp(
                /^(between_(.*)_and_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)$/,
              ).test(key)
            )
              continue;
            delete input[key];
          }
        };
        if ("object" === typeof input && null !== input) $po0(input);
      };
      assert(input, errorFactory);
      prune(input);
      return input;
    })(input, (p) => new CustomGuardError(p)),
  );
