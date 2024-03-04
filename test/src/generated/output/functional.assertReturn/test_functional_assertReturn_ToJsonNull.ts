import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../../internal/_test_functional_assertReturn";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_functional_assertReturn_ToJsonNull =
  _test_functional_assertReturn(TypeGuardError)("ToJsonNull")(ToJsonNull)(
    (p: (input: ToJsonNull) => ToJsonNull) =>
      (input: ToJsonNull): ToJsonNull => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertReturn as any).errorFactory;
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
        ): ToJsonNull => {
          const __is = (input: any): input is ToJsonNull => {
            const $io0 = (input: any): boolean =>
              "function" === typeof input.toJSON;
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ToJsonNull => {
              const $guard = (typia.functional.assertReturn as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                "function" === typeof input.toJSON ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".toJSON",
                    expected: "unknown",
                    value: input.toJSON,
                  },
                  errorFactory,
                );
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ToJsonNull",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ToJsonNull",
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
