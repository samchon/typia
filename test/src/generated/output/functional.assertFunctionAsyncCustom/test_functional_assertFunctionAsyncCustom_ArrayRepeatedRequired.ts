import typia from "typia";
import { _test_functional_assertFunctionAsync } from "../../../internal/_test_functional_assertFunctionAsync";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_functional_assertFunctionAsyncCustom_ArrayRepeatedRequired =
  _test_functional_assertFunctionAsync(CustomGuardError)(
    "ArrayRepeatedRequired",
  )(ArrayRepeatedRequired)(
    (p: (input: ArrayRepeatedRequired) => Promise<ArrayRepeatedRequired>) =>
      async (input: ArrayRepeatedRequired): Promise<ArrayRepeatedRequired> => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (p) => new CustomGuardError(p);
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
        ): ArrayRepeatedRequired => {
          const __is = (input: any): input is ArrayRepeatedRequired => {
            const $ia0 = (input: any): any =>
              input.every(
                (elem: any) =>
                  null !== elem &&
                  undefined !== elem &&
                  ("string" === typeof elem ||
                    ("number" === typeof elem && Number.isFinite(elem)) ||
                    (Array.isArray(elem) && ($ia0(elem) || false))),
              );
            return (
              null !== input &&
              undefined !== input &&
              ("string" === typeof input ||
                ("number" === typeof input && Number.isFinite(input)) ||
                (Array.isArray(input) && ($ia0(input) || false)))
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ArrayRepeatedRequired => {
              const $guard = (typia.functional.assertFunction as any).guard;
              const $aa0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): any =>
                input.every(
                  (elem: any, _index1: number) =>
                    (null !== elem ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "(Array<ArrayRepeatedRequired> | number | string)",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                    (undefined !== elem ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "(Array<ArrayRepeatedRequired> | number | string)",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                    ("string" === typeof elem ||
                      ("number" === typeof elem && Number.isFinite(elem)) ||
                      ((Array.isArray(elem) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + "[" + _index1 + "]",
                            expected:
                              "(Array<ArrayRepeatedRequired> | number | string)",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        ($aa0(
                          elem,
                          _path + "[" + _index1 + "]",
                          true && _exceptionable,
                        ) ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + "[" + _index1 + "]",
                              expected: "Array<ArrayRepeatedRequired>",
                              value: elem,
                            },
                            errorFactory,
                          ))) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "(Array<ArrayRepeatedRequired> | number | string)",
                          value: elem,
                        },
                        errorFactory,
                      )),
                );
              return (
                (null !== input ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected:
                        "(Array<ArrayRepeatedRequired> | number | string)",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                (undefined !== input ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected:
                        "(Array<ArrayRepeatedRequired> | number | string)",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                ("string" === typeof input ||
                  ("number" === typeof input && Number.isFinite(input)) ||
                  ((Array.isArray(input) ||
                    $guard(
                      true,
                      {
                        path: _path + "",
                        expected:
                          "(Array<ArrayRepeatedRequired> | number | string)",
                        value: input,
                      },
                      errorFactory,
                    )) &&
                    ($aa0(input, _path + "", true && _exceptionable) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + "",
                          expected: "Array<ArrayRepeatedRequired>",
                          value: input,
                        },
                        errorFactory,
                      ))) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected:
                        "(Array<ArrayRepeatedRequired> | number | string)",
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
        ): ArrayRepeatedRequired => {
          const __is = (input: any): input is ArrayRepeatedRequired => {
            const $ia0 = (input: any): any =>
              input.every(
                (elem: any) =>
                  null !== elem &&
                  undefined !== elem &&
                  ("string" === typeof elem ||
                    ("number" === typeof elem && Number.isFinite(elem)) ||
                    (Array.isArray(elem) && ($ia0(elem) || false))),
              );
            return (
              null !== input &&
              undefined !== input &&
              ("string" === typeof input ||
                ("number" === typeof input && Number.isFinite(input)) ||
                (Array.isArray(input) && ($ia0(input) || false)))
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ArrayRepeatedRequired => {
              const $guard = (typia.functional.assertFunction as any).guard;
              const $aa0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): any =>
                input.every(
                  (elem: any, _index1: number) =>
                    (null !== elem ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "(Array<ArrayRepeatedRequired> | number | string)",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                    (undefined !== elem ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "(Array<ArrayRepeatedRequired> | number | string)",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                    ("string" === typeof elem ||
                      ("number" === typeof elem && Number.isFinite(elem)) ||
                      ((Array.isArray(elem) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + "[" + _index1 + "]",
                            expected:
                              "(Array<ArrayRepeatedRequired> | number | string)",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        ($aa0(
                          elem,
                          _path + "[" + _index1 + "]",
                          true && _exceptionable,
                        ) ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + "[" + _index1 + "]",
                              expected: "Array<ArrayRepeatedRequired>",
                              value: elem,
                            },
                            errorFactory,
                          ))) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "(Array<ArrayRepeatedRequired> | number | string)",
                          value: elem,
                        },
                        errorFactory,
                      )),
                );
              return (
                (null !== input ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected:
                        "(Array<ArrayRepeatedRequired> | number | string)",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                (undefined !== input ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected:
                        "(Array<ArrayRepeatedRequired> | number | string)",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                ("string" === typeof input ||
                  ("number" === typeof input && Number.isFinite(input)) ||
                  ((Array.isArray(input) ||
                    $guard(
                      true,
                      {
                        path: _path + "",
                        expected:
                          "(Array<ArrayRepeatedRequired> | number | string)",
                        value: input,
                      },
                      errorFactory,
                    )) &&
                    ($aa0(input, _path + "", true && _exceptionable) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + "",
                          expected: "Array<ArrayRepeatedRequired>",
                          value: input,
                        },
                        errorFactory,
                      ))) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected:
                        "(Array<ArrayRepeatedRequired> | number | string)",
                      value: input,
                    },
                    errorFactory,
                  ))
              );
            })(input, "$input", true);
          return input;
        })(await p(input));
      },
  );
