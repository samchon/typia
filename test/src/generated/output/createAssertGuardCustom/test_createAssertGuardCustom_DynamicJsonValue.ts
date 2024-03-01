import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { DynamicJsonValue } from "../../../structures/DynamicJsonValue";

export const test_createAssertGuardCustom_DynamicJsonValue = _test_assertGuard(
  CustomGuardError,
)("DynamicJsonValue")<DynamicJsonValue>(DynamicJsonValue)(
  (
    input: any,
    errorFactory: import("typia").TypeGuardError.IProps = (p) =>
      new CustomGuardError(p),
  ): asserts input is DynamicJsonValue => {
    const $guard = (typia.createAssertGuard as any).guard(errorFactory);
    const __is = (input: any): input is DynamicJsonValue => {
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
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is DynamicJsonValue => {
        const $join = (typia.createAssertGuard as any).join;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          false === _exceptionable ||
          Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value) return true;
            return (
              null === value ||
              undefined === value ||
              "string" === typeof value ||
              ("number" === typeof value && Number.isFinite(value)) ||
              "boolean" === typeof value ||
              (Array.isArray(value) &&
                ($aa0(value, _path + $join(key), true && _exceptionable) ||
                  $guard(_exceptionable, {
                    path: _path + $join(key),
                    expected: "DynamicJsonValue.JsonArray",
                    value: value,
                  }))) ||
              ("object" === typeof value &&
                null !== value &&
                false === Array.isArray(value) &&
                $ao0(value, _path + $join(key), true && _exceptionable)) ||
              $guard(_exceptionable, {
                path: _path + $join(key),
                expected:
                  "(DynamicJsonValue.JsonArray | DynamicJsonValue.JsonObject | boolean | null | number | string | undefined)",
                value: value,
              }) ||
              $guard(_exceptionable, {
                path: _path + $join(key),
                expected:
                  "(DynamicJsonValue.JsonArray | DynamicJsonValue.JsonObject | boolean | null | number | string | undefined)",
                value: value,
              })
            );
          });
        const $aa0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): any =>
          input.every(
            (elem: any, _index1: number) =>
              (undefined !== elem ||
                $guard(_exceptionable, {
                  path: _path + "[" + _index1 + "]",
                  expected:
                    "(DynamicJsonValue.JsonArray | DynamicJsonValue.JsonObject | boolean | null | number | string)",
                  value: elem,
                })) &&
              (null === elem ||
                "string" === typeof elem ||
                ("number" === typeof elem && Number.isFinite(elem)) ||
                "boolean" === typeof elem ||
                (Array.isArray(elem) &&
                  ($aa0(
                    elem,
                    _path + "[" + _index1 + "]",
                    true && _exceptionable,
                  ) ||
                    $guard(_exceptionable, {
                      path: _path + "[" + _index1 + "]",
                      expected: "DynamicJsonValue.JsonArray",
                      value: elem,
                    }))) ||
                ("object" === typeof elem &&
                  null !== elem &&
                  false === Array.isArray(elem) &&
                  $ao0(
                    elem,
                    _path + "[" + _index1 + "]",
                    true && _exceptionable,
                  )) ||
                $guard(_exceptionable, {
                  path: _path + "[" + _index1 + "]",
                  expected:
                    "(DynamicJsonValue.JsonArray | DynamicJsonValue.JsonObject | boolean | null | number | string)",
                  value: elem,
                }) ||
                $guard(_exceptionable, {
                  path: _path + "[" + _index1 + "]",
                  expected:
                    "(DynamicJsonValue.JsonArray | DynamicJsonValue.JsonObject | boolean | null | number | string)",
                  value: elem,
                })),
          );
        return (
          (undefined !== input ||
            $guard(true, {
              path: _path + "",
              expected:
                "(DynamicJsonValue.JsonArray | DynamicJsonValue.JsonObject | boolean | null | number | string)",
              value: input,
            })) &&
          (null === input ||
            "string" === typeof input ||
            ("number" === typeof input && Number.isFinite(input)) ||
            "boolean" === typeof input ||
            (Array.isArray(input) &&
              ($aa0(input, _path + "", true && _exceptionable) ||
                $guard(_exceptionable, {
                  path: _path + "",
                  expected: "DynamicJsonValue.JsonArray",
                  value: input,
                }))) ||
            ("object" === typeof input &&
              null !== input &&
              false === Array.isArray(input) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected:
                "(DynamicJsonValue.JsonArray | DynamicJsonValue.JsonObject | boolean | null | number | string)",
              value: input,
            }) ||
            $guard(true, {
              path: _path + "",
              expected:
                "(DynamicJsonValue.JsonArray | DynamicJsonValue.JsonObject | boolean | null | number | string)",
              value: input,
            }))
        );
      })(input, "$input", true);
  },
);
