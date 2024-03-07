import typia from "typia";
import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
import { TypeGuardError } from "typia";
export const test_createAssertGuardEquals_ArrayMatrix = _test_assertGuardEquals(
  TypeGuardError,
)("ArrayMatrix")<ArrayMatrix>(ArrayMatrix)(
  (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): asserts input is ArrayMatrix => {
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is ArrayMatrix => {
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any, _index1: number) =>
            Array.isArray(elem) &&
            elem.every(
              (elem: any, _index2: number) =>
                Array.isArray(elem) &&
                elem.every(
                  (elem: any, _index3: number) =>
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
        const $guard = (typia.createAssertGuardEquals as any).guard;
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
                            path: _path + "[" + _index1 + "][" + _index2 + "]",
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
  },
);
