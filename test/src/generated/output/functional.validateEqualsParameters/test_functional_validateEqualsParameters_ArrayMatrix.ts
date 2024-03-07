import typia from "typia";
import { _test_functional_validateEqualsParameters } from "../../../internal/_test_functional_validateEqualsParameters";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
export const test_functional_validateEqualsParameters_ArrayMatrix =
  _test_functional_validateEqualsParameters("ArrayMatrix")(ArrayMatrix)(
    (p: (input: ArrayMatrix) => ArrayMatrix) =>
      (input: ArrayMatrix): import("typia").IValidation<ArrayMatrix> => {
        const paramResults = [
          ((input: any): typia.IValidation<ArrayMatrix> => {
            const errors = [] as any[];
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
            if (false === __is(input)) {
              const $report = (
                typia.functional.validateEqualsParameters as any
              ).report(errors);
              ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): input is ArrayMatrix => {
                return (
                  ((Array.isArray(input) ||
                    $report(true, {
                      path: _path + "",
                      expected: "ArrayMatrix",
                      value: input,
                    })) &&
                    input
                      .map(
                        (elem: any, _index1: number) =>
                          ((Array.isArray(elem) ||
                            $report(true, {
                              path: _path + "[" + _index1 + "]",
                              expected: "Array<Array<number>>",
                              value: elem,
                            })) &&
                            elem
                              .map(
                                (elem: any, _index2: number) =>
                                  ((Array.isArray(elem) ||
                                    $report(true, {
                                      path:
                                        _path +
                                        "[" +
                                        _index1 +
                                        "][" +
                                        _index2 +
                                        "]",
                                      expected: "Array<number>",
                                      value: elem,
                                    })) &&
                                    elem
                                      .map(
                                        (elem: any, _index3: number) =>
                                          ("number" === typeof elem &&
                                            Number.isFinite(elem)) ||
                                          $report(true, {
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
                                      )
                                      .every((flag: boolean) => flag)) ||
                                  $report(true, {
                                    path:
                                      _path +
                                      "[" +
                                      _index1 +
                                      "][" +
                                      _index2 +
                                      "]",
                                    expected: "Array<number>",
                                    value: elem,
                                  }),
                              )
                              .every((flag: boolean) => flag)) ||
                          $report(true, {
                            path: _path + "[" + _index1 + "]",
                            expected: "Array<Array<number>>",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ArrayMatrix",
                    value: input,
                  })
                );
              })(input, "$input", true);
            }
            const success = 0 === errors.length;
            return {
              success,
              errors,
              data: success ? input : undefined,
            } as any;
          })(input) as import("typia").IValidation.IFailure,
        ].filter((r: any) => false === r.success);
        if (paramResults.length > 0)
          return {
            success: false,
            errors: paramResults
              .map((r: any, i: any) =>
                r.errors.map((error: any) => ({
                  ...error,
                  path: error.path.replace("$input", `$input.parameters[${i}]`),
                })),
              )
              .flat(),
          };
        return {
          success: true,
          data: p(input),
          errors: [],
        };
      },
  );
