import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_json_createAssertStringify_ArrayMatrix =
  _test_json_assertStringify(TypeGuardError)("ArrayMatrix")<ArrayMatrix>(
    ArrayMatrix,
  )(
    (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): string => {
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
            const $guard = (typia.json.createAssertStringify as any).guard;
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
      const stringify = (input: ArrayMatrix): string => {
        const $number = (typia.json.createAssertStringify as any).number;
        return `[${input.map((elem: any) => `[${elem.map((elem: any) => `[${elem.map((elem: any) => $number(elem)).join(",")}]`).join(",")}]`).join(",")}]`;
      };
      return stringify(assert(input, errorFactory));
    },
  );
