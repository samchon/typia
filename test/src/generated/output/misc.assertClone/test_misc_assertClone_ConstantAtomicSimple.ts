import typia from "typia";
import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";
import { TypeGuardError } from "typia";
export const test_misc_assertClone_ConstantAtomicSimple =
  _test_misc_assertClone(TypeGuardError)(
    "ConstantAtomicSimple",
  )<ConstantAtomicSimple>(ConstantAtomicSimple)((input) =>
    ((
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): import("typia").Resolved<ConstantAtomicSimple> => {
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
            const $guard = (typia.misc.assertClone as any).guard;
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
      const clone = (
        input: ConstantAtomicSimple,
      ): import("typia").Resolved<ConstantAtomicSimple> => {
        return Array.isArray(input) &&
          input.length === 4 &&
          false === input[0] &&
          true === input[1] &&
          2 === input[2] &&
          "three" === input[3]
          ? ([
              input[0] as any,
              input[1] as any,
              input[2] as any,
              input[3] as any,
            ] as any)
          : (input as any);
      };
      assert(input, errorFactory);
      const output = clone(input);
      return output;
    })(input),
  );
