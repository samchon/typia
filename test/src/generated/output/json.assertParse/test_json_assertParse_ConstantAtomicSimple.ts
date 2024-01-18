import typia from "typia";

import { _test_json_assertParse } from "../../../internal/_test_json_assertParse";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";

export const test_json_assertParse_ConstantAtomicSimple =
  _test_json_assertParse("ConstantAtomicSimple")<ConstantAtomicSimple>(
    ConstantAtomicSimple,
  )((input) =>
    ((input: string): typia.Primitive<ConstantAtomicSimple> => {
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
              "typia.json.assertParse",
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
      input = JSON.parse(input);
      return assert(input) as any;
    })(input),
  );
