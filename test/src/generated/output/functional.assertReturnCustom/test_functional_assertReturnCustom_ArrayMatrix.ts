import typia from "typia";
import { _test_functional_assertReturn } from "../../../internal/_test_functional_assertReturn";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_functional_assertReturnCustom_ArrayMatrix =
  _test_functional_assertReturn(CustomGuardError)("ArrayMatrix")(ArrayMatrix)(
    (p: (input: ArrayMatrix) => ArrayMatrix) =>
      (input: ArrayMatrix): ArrayMatrix => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (p) => new CustomGuardError(p);
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
              const $guard = (typia.functional.assertReturn as any).guard;
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
                                    _path +
                                    "[" +
                                    _index1 +
                                    "][" +
                                    _index2 +
                                    "]",
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
        })(p(input));
      },
  );
