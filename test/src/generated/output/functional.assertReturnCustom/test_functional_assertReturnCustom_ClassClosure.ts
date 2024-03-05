import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../../internal/_test_functional_assertReturn";
import { ClassClosure } from "../../../structures/ClassClosure";

export const test_functional_assertReturnCustom_ClassClosure =
  _test_functional_assertReturn(CustomGuardError)("ClassClosure")(ClassClosure)(
    (p: (input: ClassClosure) => ClassClosure) =>
      (input: ClassClosure): ClassClosure => {
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
        ): ClassClosure.Something => {
          const __is = (input: any): input is ClassClosure.Something => {
            const $io0 = (input: any): boolean =>
              "string" === typeof input.id &&
              "something" === input.type &&
              "function" === typeof input.closure;
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ClassClosure.Something => {
              const $guard = (typia.functional.assertReturn as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ("string" === typeof input.id ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".id",
                      expected: "string",
                      value: input.id,
                    },
                    errorFactory,
                  )) &&
                ("something" === input.type ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".type",
                      expected: '"something"',
                      value: input.type,
                    },
                    errorFactory,
                  )) &&
                ("function" === typeof input.closure ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".closure",
                      expected: "unknown",
                      value: input.closure,
                    },
                    errorFactory,
                  ));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ClassClosure.Something",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ClassClosure.Something",
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
