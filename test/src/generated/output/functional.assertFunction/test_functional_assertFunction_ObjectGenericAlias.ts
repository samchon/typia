import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../../internal/_test_functional_assertFunction";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_functional_assertFunction_ObjectGenericAlias =
  _test_functional_assertFunction(TypeGuardError)("ObjectGenericAlias")(
    ObjectGenericAlias,
  )(
    (p: (input: ObjectGenericAlias) => ObjectGenericAlias) =>
      (input: ObjectGenericAlias): ObjectGenericAlias => {
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
              const $guard = (typia.functional.assertFunction as any).guard;
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
              const $guard = (typia.functional.assertFunction as any).guard;
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
