import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../../internal/_test_functional_assertReturn";
import { DynamicComposite } from "../../../structures/DynamicComposite";

export const test_functional_assertReturn_DynamicComposite =
  _test_functional_assertReturn(TypeGuardError)("DynamicComposite")(
    DynamicComposite,
  )(
    (p: (input: DynamicComposite) => DynamicComposite) =>
      (input: DynamicComposite): DynamicComposite => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertReturn as any).errorFactory;
        return ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.return")
                : undefined,
            }),
        ): DynamicComposite => {
          const __is = (input: any): input is DynamicComposite => {
            const $io0 = (input: any): boolean =>
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
                if ("string" === typeof key && RegExp(/^prefix_(.*)/).test(key))
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
              const $guard = (typia.functional.assertReturn as any).guard;
              const $join = (typia.functional.assertReturn as any).join;
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
                      RegExp(
                        /^value_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                      ).test(key)
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
        })(p(input));
      },
  );
