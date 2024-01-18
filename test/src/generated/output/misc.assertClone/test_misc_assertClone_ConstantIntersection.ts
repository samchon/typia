import typia from "typia";

import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_misc_assertClone_ConstantIntersection =
  _test_misc_assertClone("ConstantIntersection")<ConstantIntersection>(
    ConstantIntersection,
  )((input) =>
    ((input: any): typia.Resolved<ConstantIntersection> => {
      const assert = (input: any): ConstantIntersection => {
        const __is = (input: any): input is ConstantIntersection => {
          return (
            Array.isArray(input) &&
            input.length === 3 &&
            false === input[0] &&
            1 === input[1] &&
            "two" === input[2]
          );
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ConstantIntersection => {
            const $guard = require("typia/lib/functional/$guard").$guard(
              "typia.misc.assertClone",
            );
            return (
              ((Array.isArray(input) ||
                $guard(true, {
                  path: _path + "",
                  expected: "ConstantIntersection",
                  value: input,
                })) &&
                (input.length === 3 ||
                  $guard(true, {
                    path: _path + "",
                    expected: '[false, 1, "two"]',
                    value: input,
                  })) &&
                (false === input[0] ||
                  $guard(true, {
                    path: _path + "[0]",
                    expected: "false",
                    value: input[0],
                  })) &&
                (1 === input[1] ||
                  $guard(true, {
                    path: _path + "[1]",
                    expected: "1",
                    value: input[1],
                  })) &&
                ("two" === input[2] ||
                  $guard(true, {
                    path: _path + "[2]",
                    expected: '"two"',
                    value: input[2],
                  }))) ||
              $guard(true, {
                path: _path + "",
                expected: "ConstantIntersection",
                value: input,
              })
            );
          })(input, "$input", true);
        return input;
      };
      const clone = (
        input: ConstantIntersection,
      ): typia.Resolved<ConstantIntersection> => {
        return Array.isArray(input) &&
          input.length === 3 &&
          false === input[0] &&
          1 === input[1] &&
          "two" === input[2]
          ? ([input[0] as any, input[1] as any, input[2] as any] as any)
          : (input as any);
      };
      assert(input);
      const output = clone(input);
      return output;
    })(input),
  );
