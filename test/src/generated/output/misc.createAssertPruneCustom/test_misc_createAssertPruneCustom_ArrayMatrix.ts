import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_misc_createAssertPruneCustom_ArrayMatrix =
  _test_misc_assertPrune(CustomGuardError)("ArrayMatrix")<ArrayMatrix>(
    ArrayMatrix,
  )(
    (
      input: any,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): ArrayMatrix => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ArrayMatrix => {
        const __is = (input: any): input is ArrayMatrix => {
          return (
            Array.isArray(input) &&
            input.every(
              (elem: any) =>
                Array.isArray(elem) &&
                elem.every(
                  (elem: any) =>
                    Array.isArray(elem) &&
                    elem.every(
                      (elem: any) =>
                        "number" === typeof elem && Number.isFinite(elem),
                    ),
                ),
            )
          );
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ArrayMatrix => {
            const $guard = (typia.misc.createAssertPrune as any).guard;
            return (
              ((Array.isArray(input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ArrayMatrix",
                    value: input,
                  },
                  errorFactory,
                )) &&
                input.every(
                  (elem: any, _index1: number) =>
                    ((Array.isArray(elem) ||
                      $guard(
                        true,
                        {
                          path: _path + "[" + _index1 + "]",
                          expected: "Array<Array<number>>",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                      elem.every(
                        (elem: any, _index2: number) =>
                          ((Array.isArray(elem) ||
                            $guard(
                              true,
                              {
                                path:
                                  _path + "[" + _index1 + "][" + _index2 + "]",
                                expected: "Array<number>",
                                value: elem,
                              },
                              errorFactory,
                            )) &&
                            elem.every(
                              (elem: any, _index3: number) =>
                                ("number" === typeof elem &&
                                  Number.isFinite(elem)) ||
                                $guard(
                                  true,
                                  {
                                    path:
                                      _path +
                                      "[" +
                                      _index1 +
                                      "][" +
                                      _index2 +
                                      "][" +
                                      _index3 +
                                      "]",
                                    expected: "number",
                                    value: elem,
                                  },
                                  errorFactory,
                                ),
                            )) ||
                          $guard(
                            true,
                            {
                              path:
                                _path + "[" + _index1 + "][" + _index2 + "]",
                              expected: "Array<number>",
                              value: elem,
                            },
                            errorFactory,
                          ),
                      )) ||
                    $guard(
                      true,
                      {
                        path: _path + "[" + _index1 + "]",
                        expected: "Array<Array<number>>",
                        value: elem,
                      },
                      errorFactory,
                    ),
                )) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ArrayMatrix",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const prune = (input: ArrayMatrix): void => {};
      assert(input, errorFactory);
      prune(input);
      return input;
    },
  );
