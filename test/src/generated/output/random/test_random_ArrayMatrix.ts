import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_random_ArrayMatrix = _test_random("ArrayMatrix")<ArrayMatrix>(
  ArrayMatrix,
)({
  random: () =>
    ((
      generator?: Partial<typia.IRandomGenerator>,
    ): import("typia").Resolved<ArrayMatrix> => {
      const $generator = (typia.random as any).generator;
      return (generator?.array ?? $generator.array)(() =>
        (generator?.array ?? $generator.array)(() =>
          (generator?.array ?? $generator.array)(
            () =>
              (generator?.customs ?? $generator.customs)?.number?.([]) ??
              (generator?.number ?? $generator.number)(0, 100),
          ),
        ),
      );
    })((ArrayMatrix as any).RANDOM),
  assert: (
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
        const $guard = (typia.createAssert as any).guard;
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
    return input;
  },
});
