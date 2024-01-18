import typia from "typia";

import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_misc_assertPrune_ConstantEnumeration = _test_misc_assertPrune(
  "ConstantEnumeration",
)<ConstantEnumeration>(ConstantEnumeration)((input) =>
  ((input: any): ConstantEnumeration => {
    const assert = (input: any): ConstantEnumeration => {
      const __is = (input: any): input is ConstantEnumeration => {
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
        ): input is ConstantEnumeration => {
          // @ts-ignore;
          declare const require: (lib: string) => any;
          const $guard = require("typia/lib/functional/$guard").$guard(
            "typia.misc.assertPrune",
          );
          return (
            ((Array.isArray(input) ||
              $guard(true, {
                path: _path + "",
                expected: "ConstantEnumeration",
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
              expected: "ConstantEnumeration",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    };
    const prune = (input: ConstantEnumeration): void => {};
    assert(input);
    prune(input);
    return input;
  })(input),
);
