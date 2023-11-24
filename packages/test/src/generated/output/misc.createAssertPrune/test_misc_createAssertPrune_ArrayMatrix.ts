import typia from "typia";

import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_misc_createAssertPrune_ArrayMatrix = _test_misc_assertPrune(
  "ArrayMatrix",
)<ArrayMatrix>(ArrayMatrix)((input: any): ArrayMatrix => {
  const assert = (input: any): ArrayMatrix => {
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
            $guard(true, {
              path: _path + "",
              expected: "ArrayMatrix",
              value: input,
            })) &&
            input.every(
              (elem: any, _index1: number) =>
                ((Array.isArray(elem) ||
                  $guard(true, {
                    path: _path + "[" + _index1 + "]",
                    expected: "Array<Array<number>>",
                    value: elem,
                  })) &&
                  elem.every(
                    (elem: any, _index2: number) =>
                      ((Array.isArray(elem) ||
                        $guard(true, {
                          path: _path + "[" + _index1 + "][" + _index2 + "]",
                          expected: "Array<number>",
                          value: elem,
                        })) &&
                        elem.every(
                          (elem: any, _index3: number) =>
                            ("number" === typeof elem &&
                              Number.isFinite(elem)) ||
                            $guard(true, {
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
                            }),
                        )) ||
                      $guard(true, {
                        path: _path + "[" + _index1 + "][" + _index2 + "]",
                        expected: "Array<number>",
                        value: elem,
                      }),
                  )) ||
                $guard(true, {
                  path: _path + "[" + _index1 + "]",
                  expected: "Array<Array<number>>",
                  value: elem,
                }),
            )) ||
          $guard(true, {
            path: _path + "",
            expected: "ArrayMatrix",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  };
  const prune = (input: ArrayMatrix): void => {};
  assert(input);
  prune(input);
  return input;
});
