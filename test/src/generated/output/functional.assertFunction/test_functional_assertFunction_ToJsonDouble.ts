import typia from "typia";
import { _test_functional_assertFunction } from "../../../internal/_test_functional_assertFunction";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";
import { TypeGuardError } from "typia";
export const test_functional_assertFunction_ToJsonDouble =
  _test_functional_assertFunction(TypeGuardError)("ToJsonDouble")(ToJsonDouble)(
    (p: (input: ToJsonDouble) => ToJsonDouble) =>
      (input: ToJsonDouble): ToJsonDouble => {
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
        ): ToJsonDouble.Parent => {
          const __is = (input: any): input is ToJsonDouble.Parent => {
            return "object" === typeof input && null !== input && true;
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ToJsonDouble.Parent => {
              const $guard = (typia.functional.assertFunction as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean => true;
              return (
                ((("object" === typeof input &&
                  null !== input &&
                  false === Array.isArray(input)) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ToJsonDouble.Parent",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ToJsonDouble.Parent",
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
        ): ToJsonDouble.Parent => {
          const __is = (input: any): input is ToJsonDouble.Parent => {
            return "object" === typeof input && null !== input && true;
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ToJsonDouble.Parent => {
              const $guard = (typia.functional.assertFunction as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean => true;
              return (
                ((("object" === typeof input &&
                  null !== input &&
                  false === Array.isArray(input)) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ToJsonDouble.Parent",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ToJsonDouble.Parent",
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
