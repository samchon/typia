import typia from "typia";
import { _test_functional_assertReturn } from "../../../internal/_test_functional_assertReturn";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_functional_assertReturnCustom_ObjectGenericAlias =
  _test_functional_assertReturn(CustomGuardError)("ObjectGenericAlias")(
    ObjectGenericAlias,
  )(
    (p: (input: ObjectGenericAlias) => ObjectGenericAlias) =>
      (input: ObjectGenericAlias): ObjectGenericAlias => {
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
          const __is = (input: any): input is ObjectGenericAlias.Alias => {
            return (
              "object" === typeof input &&
              null !== input &&
              "string" === typeof (input as any).value
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectGenericAlias.Alias => {
              const $guard = (typia.functional.assertReturn as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                "string" === typeof input.value ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".value",
                    expected: "string",
                    value: input.value,
                  },
                  errorFactory,
                );
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
        })(p(input));
      },
  );
