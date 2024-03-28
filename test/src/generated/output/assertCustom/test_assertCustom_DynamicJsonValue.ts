import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_assert } from "../../../internal/_test_assert";
import { DynamicJsonValue } from "../../../structures/DynamicJsonValue";

export const test_assertCustom_DynamicJsonValue = _test_assert(
  CustomGuardError,
)("DynamicJsonValue")<DynamicJsonValue>(DynamicJsonValue)((input) =>
  ((
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): DynamicJsonValue => {
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
        const $guard = (typia.assert as any).guard;
        const $join = (typia.assert as any).join;
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
                  $guard(
                    _exceptionable,
                    {
                      path: _path + $join(key),
                      expected: "Array<DynamicJsonValue.JsonValue>",
                      value: value,
                    },
                    errorFactory,
                  ))) ||
              ("object" === typeof value &&
                null !== value &&
                false === Array.isArray(value) &&
                $ao0(value, _path + $join(key), true && _exceptionable)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + $join(key),
                  expected:
                    "(Array<DynamicJsonValue.JsonValue> | DynamicJsonValue.JsonObject | boolean | null | number | string | undefined)",
                  value: value,
                },
                errorFactory,
              ) ||
              $guard(
                _exceptionable,
                {
                  path: _path + $join(key),
                  expected:
                    "(Array<DynamicJsonValue.JsonValue> | DynamicJsonValue.JsonObject | boolean | null | number | string | undefined)",
                  value: value,
                },
                errorFactory,
              )
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
                $guard(
                  _exceptionable,
                  {
                    path: _path + "[" + _index1 + "]",
                    expected:
                      "(Array<DynamicJsonValue.JsonValue> | DynamicJsonValue.JsonObject | boolean | null | number | string)",
                    value: elem,
                  },
                  errorFactory,
                )) &&
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
                    $guard(
                      _exceptionable,
                      {
                        path: _path + "[" + _index1 + "]",
                        expected: "Array<DynamicJsonValue.JsonValue>",
                        value: elem,
                      },
                      errorFactory,
                    ))) ||
                ("object" === typeof elem &&
                  null !== elem &&
                  false === Array.isArray(elem) &&
                  $ao0(
                    elem,
                    _path + "[" + _index1 + "]",
                    true && _exceptionable,
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + "[" + _index1 + "]",
                    expected:
                      "(Array<DynamicJsonValue.JsonValue> | DynamicJsonValue.JsonObject | boolean | null | number | string)",
                    value: elem,
                  },
                  errorFactory,
                ) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + "[" + _index1 + "]",
                    expected:
                      "(Array<DynamicJsonValue.JsonValue> | DynamicJsonValue.JsonObject | boolean | null | number | string)",
                    value: elem,
                  },
                  errorFactory,
                )),
          );
        return (
          (undefined !== input ||
            $guard(
              true,
              {
                path: _path + "",
                expected:
                  "(Array<DynamicJsonValue.JsonValue> | DynamicJsonValue.JsonObject | boolean | null | number | string)",
                value: input,
              },
              errorFactory,
            )) &&
          (null === input ||
            "string" === typeof input ||
            ("number" === typeof input && Number.isFinite(input)) ||
            "boolean" === typeof input ||
            (Array.isArray(input) &&
              ($aa0(input, _path + "", true && _exceptionable) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + "",
                    expected: "Array<DynamicJsonValue.JsonValue>",
                    value: input,
                  },
                  errorFactory,
                ))) ||
            ("object" === typeof input &&
              null !== input &&
              false === Array.isArray(input) &&
              $ao0(input, _path + "", true)) ||
            $guard(
              true,
              {
                path: _path + "",
                expected:
                  "(Array<DynamicJsonValue.JsonValue> | DynamicJsonValue.JsonObject | boolean | null | number | string)",
                value: input,
              },
              errorFactory,
            ) ||
            $guard(
              true,
              {
                path: _path + "",
                expected:
                  "(Array<DynamicJsonValue.JsonValue> | DynamicJsonValue.JsonObject | boolean | null | number | string)",
                value: input,
              },
              errorFactory,
            ))
        );
      })(input, "$input", true);
    return input;
  })(input, (p) => new CustomGuardError(p)),
);
