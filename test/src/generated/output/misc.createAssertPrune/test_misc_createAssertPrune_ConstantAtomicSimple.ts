import typia from "typia";

import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";

export const test_misc_createAssertPrune_ConstantAtomicSimple =
  _test_misc_assertPrune("ConstantAtomicSimple")<ConstantAtomicSimple>(
    ConstantAtomicSimple,
  )((input: any): ConstantAtomicSimple => {
    const assert = (input: any): ConstantAtomicSimple => {
      const __is = (input: any): input is ConstantAtomicSimple => {
        return (
          Array.isArray(input) &&
          input.length === 4 &&
          false === input[0] &&
          true === input[1] &&
          2 === input[2] &&
          "three" === input[3]
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is ConstantAtomicSimple => {
          // @ts-ignore;
          declare const require: (lib: string) => any;
          const $guard = require("typia/lib/functional/$guard").$guard(
            "typia.misc.createAssertPrune",
          );
          return (
            ((Array.isArray(input) ||
              $guard(true, {
                path: _path + "",
                expected: "ConstantAtomicSimple",
                value: input,
              })) &&
              (input.length === 4 ||
                $guard(true, {
                  path: _path + "",
                  expected: '[false, true, 2, "three"]',
                  value: input,
                })) &&
              (false === input[0] ||
                $guard(true, {
                  path: _path + "[0]",
                  expected: "false",
                  value: input[0],
                })) &&
              (true === input[1] ||
                $guard(true, {
                  path: _path + "[1]",
                  expected: "true",
                  value: input[1],
                })) &&
              (2 === input[2] ||
                $guard(true, {
                  path: _path + "[2]",
                  expected: "2",
                  value: input[2],
                })) &&
              ("three" === input[3] ||
                $guard(true, {
                  path: _path + "[3]",
                  expected: '"three"',
                  value: input[3],
                }))) ||
            $guard(true, {
              path: _path + "",
              expected: "ConstantAtomicSimple",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    };
    const prune = (input: ConstantAtomicSimple): void => {};
    assert(input);
    prune(input);
    return input;
  });
