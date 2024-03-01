import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_json_createAssertStringify_ConstantIntersection =
  _test_json_assertStringify(TypeGuardError)(
    "ConstantIntersection",
  )<ConstantIntersection>(ConstantIntersection)(
    (
      input: any,
      errorFactory?: import("typia").TypeGuardError.IProps,
    ): string => {
      const assert = (
        input: any,
        errorFactory?: import("typia").TypeGuardError.IProps,
      ): ConstantIntersection => {
        const $guard = (typia.json.createAssertStringify as any).guard(
          errorFactory,
        );
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
      const stringify = (input: ConstantIntersection): string => {
        const $number = (typia.json.createAssertStringify as any).number;
        const $string = (typia.json.createAssertStringify as any).string;
        const $throws = (typia.json.createAssertStringify as any).throws;
        return `[${input[0]},${$number(input[1])},${(() => {
          if ("string" === typeof input[2]) return $string(input[2]);
          if ("string" === typeof input[2]) return '"' + input[2] + '"';
          $throws({
            expected: '"two"',
            value: input[2],
          });
        })()}]`;
      };
      return stringify(assert(input, errorFactory));
    },
  );
