import typia from "typia";
import { _test_functional_assertEqualsReturnAsync } from "../../../internal/_test_functional_assertEqualsReturnAsync";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_functional_assertEqualsReturnAsyncCustom_ToJsonDouble =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)("ToJsonDouble")(
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
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ToJsonDouble.Parent => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              0 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                const value = input[key];
                if (undefined === value) return true;
                return false;
              });
            return (
              "object" === typeof input &&
              null !== input &&
              false === Array.isArray(input) &&
              $io0(input, true)
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ToJsonDouble.Parent => {
              const $guard = (typia.functional.assertEqualsReturn as any).guard;
              const $join = (typia.functional.assertEqualsReturn as any).join;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                0 === Object.keys(input).length ||
                false === _exceptionable ||
                Object.keys(input).every((key: any) => {
                  const value = input[key];
                  if (undefined === value) return true;
                  return $guard(
                    _exceptionable,
                    {
                      path: _path + $join(key),
                      expected: "undefined",
                      value: value,
                    },
                    errorFactory,
                  );
                });
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
