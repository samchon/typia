import typia from "typia";

import { _test_validate } from "../../../internal/_test_validate";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_validate_ConstantConstEnumeration = _test_validate(
  "ConstantConstEnumeration",
)<ConstantConstEnumeration>(ConstantConstEnumeration)((input) =>
  ((input: any): typia.IValidation<ConstantConstEnumeration> => {
    const errors = [] as any[];
    const __is = (input: any): input is ConstantConstEnumeration => {
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any) =>
            0 === elem ||
            1 === elem ||
            2 === elem ||
            "Three" === elem ||
            "Four" === elem,
        )
      );
    };
    if (false === __is(input)) {
      const $report = (typia.validate as any).report(errors);
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ConstantConstEnumeration => {
        return (
          ((Array.isArray(input) ||
            $report(true, {
              path: _path + "",
              expected: "ConstantConstEnumeration",
              value: input,
            })) &&
            input
              .map(
                (elem: any, _index1: number) =>
                  0 === elem ||
                  1 === elem ||
                  2 === elem ||
                  "Three" === elem ||
                  "Four" === elem ||
                  $report(true, {
                    path: _path + "[" + _index1 + "]",
                    expected: '("Four" | "Three" | 0 | 1 | 2)',
                    value: elem,
                  }),
              )
              .every((flag: boolean) => flag)) ||
          $report(true, {
            path: _path + "",
            expected: "ConstantConstEnumeration",
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
  })(input),
);
