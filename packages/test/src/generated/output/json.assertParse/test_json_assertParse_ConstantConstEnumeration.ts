import typia from "typia";

import { _test_json_assertParse } from "../../../internal/_test_json_assertParse";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_json_assertParse_ConstantConstEnumeration =
  _test_json_assertParse("ConstantConstEnumeration")<ConstantConstEnumeration>(
    ConstantConstEnumeration,
  )((input) =>
    ((input: string): typia.Primitive<ConstantConstEnumeration> => {
      const assert = (input: any): ConstantConstEnumeration => {
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
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ConstantConstEnumeration => {
            const $guard = (typia.json.assertParse as any).guard;
            return (
              ((Array.isArray(input) ||
                $guard(true, {
                  path: _path + "",
                  expected: "ConstantConstEnumeration",
                  value: input,
                })) &&
                input.every(
                  (elem: any, _index1: number) =>
                    0 === elem ||
                    1 === elem ||
                    2 === elem ||
                    "Three" === elem ||
                    "Four" === elem ||
                    $guard(true, {
                      path: _path + "[" + _index1 + "]",
                      expected: '("Four" | "Three" | 0 | 1 | 2)',
                      value: elem,
                    }),
                )) ||
              $guard(true, {
                path: _path + "",
                expected: "ConstantConstEnumeration",
                value: input,
              })
            );
          })(input, "$input", true);
        return input;
      };
      input = JSON.parse(input);
      return assert(input) as any;
    })(input),
  );
