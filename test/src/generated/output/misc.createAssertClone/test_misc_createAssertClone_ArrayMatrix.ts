import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_misc_createAssertClone_ArrayMatrix = _test_misc_assertClone(
  TypeGuardError,
)("ArrayMatrix")<ArrayMatrix>(ArrayMatrix)(
  (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): import("typia").Resolved<ArrayMatrix> => {
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
          const $guard = (typia.misc.createAssertClone as any).guard;
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
                            path: _path + "[" + _index1 + "][" + _index2 + "]",
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
    const clone = (
      input: ArrayMatrix,
    ): import("typia").Resolved<ArrayMatrix> => {
      const $cp0 = (input: any) => input.map((elem: any) => elem as any);
      const $cp1 = (input: any) =>
        input.map((elem: any) =>
          Array.isArray(elem) ? $cp0(elem) : (elem as any),
        );
      const $cp2 = (input: any) =>
        input.map((elem: any) =>
          Array.isArray(elem) ? $cp1(elem) : (elem as any),
        );
      return Array.isArray(input) ? $cp2(input) : (input as any);
    };
    assert(input, errorFactory);
    const output = clone(input);
    return output;
  },
);
