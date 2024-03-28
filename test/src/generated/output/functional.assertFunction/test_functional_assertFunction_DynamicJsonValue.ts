import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../../internal/_test_functional_assertFunction";
import { DynamicJsonValue } from "../../../structures/DynamicJsonValue";

export const test_functional_assertFunction_DynamicJsonValue =
  _test_functional_assertFunction(TypeGuardError)("DynamicJsonValue")(
    DynamicJsonValue,
  )(
    (p: (input: DynamicJsonValue) => DynamicJsonValue) =>
      (input: DynamicJsonValue): DynamicJsonValue => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertFunction as any).errorFactory;
        ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.parameters[0]")
                : undefined,
            }),
        ): DynamicJsonValue.JsonValue => {
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
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is DynamicJsonValue.JsonValue => {
              const $guard = (typia.functional.assertFunction as any).guard;
              const $join = (typia.functional.assertFunction as any).join;
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
                      ($aa0(
                        value,
                        _path + $join(key),
                        true && _exceptionable,
                      ) ||
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
                      $ao0(
                        value,
                        _path + $join(key),
                        true && _exceptionable,
                      )) ||
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
        })(input);
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
        ): DynamicJsonValue.JsonValue => {
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
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is DynamicJsonValue.JsonValue => {
              const $guard = (typia.functional.assertFunction as any).guard;
              const $join = (typia.functional.assertFunction as any).join;
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
                      ($aa0(
                        value,
                        _path + $join(key),
                        true && _exceptionable,
                      ) ||
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
                      $ao0(
                        value,
                        _path + $join(key),
                        true && _exceptionable,
                      )) ||
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
        })(p(input));
      },
  );
