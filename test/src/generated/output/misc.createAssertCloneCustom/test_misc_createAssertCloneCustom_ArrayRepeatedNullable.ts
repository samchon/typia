import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_misc_createAssertCloneCustom_ArrayRepeatedNullable =
  _test_misc_assertClone(CustomGuardError)(
    "ArrayRepeatedNullable",
  )<ArrayRepeatedNullable>(ArrayRepeatedNullable)(
    (
      input: any,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): typia.Resolved<ArrayRepeatedNullable> => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ArrayRepeatedNullable => {
        const __is = (input: any): input is ArrayRepeatedNullable => {
          const $ia0 = (input: any): any =>
            input.every(
              (elem: any) =>
                undefined !== elem &&
                (null === elem ||
                  "string" === typeof elem ||
                  ("number" === typeof elem && Number.isFinite(elem)) ||
                  (Array.isArray(elem) && ($ia0(elem) || false))),
            );
          return (
            undefined !== input &&
            (null === input ||
              "string" === typeof input ||
              ("number" === typeof input && Number.isFinite(input)) ||
              (Array.isArray(input) && ($ia0(input) || false)))
          );
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ArrayRepeatedNullable => {
            const $guard = (typia.misc.createAssertClone as any).guard;
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
                          "(Array<ArrayRepeatedNullable> | null | number | string)",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                  (null === elem ||
                    "string" === typeof elem ||
                    ("number" === typeof elem && Number.isFinite(elem)) ||
                    ((Array.isArray(elem) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "(Array<ArrayRepeatedNullable> | null | number | string)",
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
                            expected: "Array<ArrayRepeatedNullable>",
                            value: elem,
                          },
                          errorFactory,
                        ))) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + "[" + _index1 + "]",
                        expected:
                          "(Array<ArrayRepeatedNullable> | null | number | string)",
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
                      "(Array<ArrayRepeatedNullable> | null | number | string)",
                    value: input,
                  },
                  errorFactory,
                )) &&
              (null === input ||
                "string" === typeof input ||
                ("number" === typeof input && Number.isFinite(input)) ||
                ((Array.isArray(input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected:
                        "(Array<ArrayRepeatedNullable> | null | number | string)",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  ($aa0(input, _path + "", true && _exceptionable) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + "",
                        expected: "Array<ArrayRepeatedNullable>",
                        value: input,
                      },
                      errorFactory,
                    ))) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected:
                      "(Array<ArrayRepeatedNullable> | null | number | string)",
                    value: input,
                  },
                  errorFactory,
                ))
            );
          })(input, "$input", true);
        return input;
      };
      const clone = (
        input: ArrayRepeatedNullable,
      ): typia.Resolved<ArrayRepeatedNullable> => {
        const $ia0 = (input: any): any =>
          input.every(
            (elem: any) =>
              undefined !== elem &&
              (null === elem ||
                "string" === typeof elem ||
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
