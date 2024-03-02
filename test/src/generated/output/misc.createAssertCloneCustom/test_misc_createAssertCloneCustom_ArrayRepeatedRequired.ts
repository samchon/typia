import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";

export const test_misc_createAssertCloneCustom_ArrayRepeatedRequired =
  _test_misc_assertClone(CustomGuardError)(
    "ArrayRepeatedRequired",
  )<ArrayRepeatedRequired>(ArrayRepeatedRequired)(
    (
      input: any,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): typia.Resolved<ArrayRepeatedRequired> => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
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
            const $guard = (typia.misc.createAssertClone as any).guard;
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
      };
      const clone = (
        input: ArrayRepeatedRequired,
      ): typia.Resolved<ArrayRepeatedRequired> => {
        const $ia0 = (input: any): any =>
          input.every(
            (elem: any) =>
              null !== elem &&
              undefined !== elem &&
              ("string" === typeof elem ||
                "number" === typeof elem ||
                (Array.isArray(elem) && ($ia0(elem) || false))),
          );
        const $cp0 = (input: any) => $ca0(input);
        const $ca0 = (input: any): any =>
          input.map((elem: any) =>
            Array.isArray(elem) ? $cp0(elem) : (elem as any),
          );
        return Array.isArray(input) ? $cp0(input) : (input as any);
      };
      assert(input, errorFactory);
      const output = clone(input);
      return output;
    },
  );
