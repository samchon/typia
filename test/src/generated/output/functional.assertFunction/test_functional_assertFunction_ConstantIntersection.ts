import typia from "typia";
import { _test_functional_assertFunction } from "../../../internal/_test_functional_assertFunction";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";
import { TypeGuardError } from "typia";
export const test_functional_assertFunction_ConstantIntersection =
  _test_functional_assertFunction(TypeGuardError)("ConstantIntersection")(
    ConstantIntersection,
  )(
    (p: (input: ConstantIntersection) => ConstantIntersection) =>
      (input: ConstantIntersection): ConstantIntersection => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertFunction as any).errorFactory;
        ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.parameters[0]")
                : undefined,
            }),
        ): ConstantIntersection => {
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
              const $guard = (typia.functional.assertFunction as any).guard;
              return (
                ((Array.isArray(input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ConstantIntersection",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  (input.length === 3 ||
                    $guard(
                      true,
                      {
                        path: _path + "",
                        expected: '[false, 1, "two"]',
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
                  (1 === input[1] ||
                    $guard(
                      true,
                      {
                        path: _path + "[1]",
                        expected: "1",
                        value: input[1],
                      },
                      errorFactory,
                    )) &&
                  ("two" === input[2] ||
                    $guard(
                      true,
                      {
                        path: _path + "[2]",
                        expected: '"two"',
                        value: input[2],
                      },
                      errorFactory,
                    ))) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ConstantIntersection",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(input);
        return ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.return")
                : undefined,
            }),
        ): ConstantIntersection => {
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
              const $guard = (typia.functional.assertFunction as any).guard;
              return (
                ((Array.isArray(input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ConstantIntersection",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  (input.length === 3 ||
                    $guard(
                      true,
                      {
                        path: _path + "",
                        expected: '[false, 1, "two"]',
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
                  (1 === input[1] ||
                    $guard(
                      true,
                      {
                        path: _path + "[1]",
                        expected: "1",
                        value: input[1],
                      },
                      errorFactory,
                    )) &&
                  ("two" === input[2] ||
                    $guard(
                      true,
                      {
                        path: _path + "[2]",
                        expected: '"two"',
                        value: input[2],
                      },
                      errorFactory,
                    ))) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ConstantIntersection",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(p(input));
      },
  );
