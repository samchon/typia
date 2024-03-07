import typia from "typia";
import { _test_functional_assertEqualsReturnAsync } from "../../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_functional_assertEqualsReturnAsyncCustom_ObjectGenericAlias =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)(
    "ObjectGenericAlias",
  )(ObjectGenericAlias)(
    (p: (input: ObjectGenericAlias) => Promise<ObjectGenericAlias>) =>
      async (input: ObjectGenericAlias): Promise<ObjectGenericAlias> => {
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
        ): ObjectGenericAlias.Alias => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ObjectGenericAlias.Alias => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "string" === typeof input.value &&
              (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["value"].some((prop: any) => key === prop)) return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            return (
              "object" === typeof input && null !== input && $io0(input, true)
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectGenericAlias.Alias => {
              const $guard = (typia.functional.assertEqualsReturn as any).guard;
              const $join = (typia.functional.assertEqualsReturn as any).join;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ("string" === typeof input.value ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".value",
                      expected: "string",
                      value: input.value,
                    },
                    errorFactory,
                  )) &&
                (1 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (["value"].some((prop: any) => key === prop))
                      return true;
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
                  }));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ObjectGenericAlias.Alias",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectGenericAlias.Alias",
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
