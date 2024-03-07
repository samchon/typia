import typia from "typia";
import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_json_createAssertStringifyCustom_ConstantAtomicSimple =
  _test_json_assertStringify(CustomGuardError)(
    "ConstantAtomicSimple",
  )<ConstantAtomicSimple>(ConstantAtomicSimple)(
    (
      input: any,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): string => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ConstantAtomicSimple => {
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
            const $guard = (typia.json.createAssertStringify as any).guard;
            return (
              ((Array.isArray(input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ConstantAtomicSimple",
                    value: input,
                  },
                  errorFactory,
                )) &&
                (input.length === 4 ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: '[false, true, 2, "three"]',
                      value: input,
                    },
                    errorFactory,
                  )) &&
                (false === input[0] ||
                  $guard(
                    true,
                    {
                      path: _path + "[0]",
                      expected: "false",
                      value: input[0],
                    },
                    errorFactory,
                  )) &&
                (true === input[1] ||
                  $guard(
                    true,
                    {
                      path: _path + "[1]",
                      expected: "true",
                      value: input[1],
                    },
                    errorFactory,
                  )) &&
                (2 === input[2] ||
                  $guard(
                    true,
                    {
                      path: _path + "[2]",
                      expected: "2",
                      value: input[2],
                    },
                    errorFactory,
                  )) &&
                ("three" === input[3] ||
                  $guard(
                    true,
                    {
                      path: _path + "[3]",
                      expected: '"three"',
                      value: input[3],
                    },
                    errorFactory,
                  ))) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ConstantAtomicSimple",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const stringify = (input: ConstantAtomicSimple): string => {
        const $number = (typia.json.createAssertStringify as any).number;
        const $string = (typia.json.createAssertStringify as any).string;
        const $throws = (typia.json.createAssertStringify as any).throws;
        return `[${input[0]},${input[1]},${$number(input[2])},${(() => {
          if ("string" === typeof input[3]) return $string(input[3]);
          if ("string" === typeof input[3]) return '"' + input[3] + '"';
          $throws({
            expected: '"three"',
            value: input[3],
          });
        })()}]`;
      };
      return stringify(assert(input, errorFactory));
    },
  );
