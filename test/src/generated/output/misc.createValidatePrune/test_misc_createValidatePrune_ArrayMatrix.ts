import typia from "typia";
import { _test_misc_validatePrune } from "../../../internal/_test_misc_validatePrune";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
export const test_misc_createValidatePrune_ArrayMatrix =
  _test_misc_validatePrune("ArrayMatrix")<ArrayMatrix>(ArrayMatrix)(
    (input: any): typia.IValidation<ArrayMatrix> => {
      const validate = (input: any): typia.IValidation<ArrayMatrix> => {
        const errors = [] as any[];
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
        if (false === __is(input)) {
          const $report = (typia.misc.createValidatePrune as any).report(
            errors,
          );
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
                                  _path + "[" + _index1 + "][" + _index2 + "]",
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
      };
      const prune = (input: ArrayMatrix): void => {};
      const output = validate(input);
      if (output.success) prune(input);
      return output;
    },
  );
