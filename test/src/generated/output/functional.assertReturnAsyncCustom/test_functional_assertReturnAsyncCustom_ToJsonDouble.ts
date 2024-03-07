import typia from "typia";
import { _test_functional_assertReturnAsync } from "../../../internal/_test_functional_assertReturnAsync";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_functional_assertReturnAsyncCustom_ToJsonDouble =
  _test_functional_assertReturnAsync(CustomGuardError)("ToJsonDouble")(
    ToJsonDouble,
  )(
    (p: (input: ToJsonDouble) => Promise<ToJsonDouble>) =>
      async (input: ToJsonDouble): Promise<ToJsonDouble> => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (p) => new CustomGuardError(p);
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
              const $guard = (typia.functional.assertReturn as any).guard;
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
        })(await p(input));
      },
  );
