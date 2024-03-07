import typia from "typia";
import { _test_functional_assertEqualsFunction } from "../../../internal/_test_functional_assertEqualsFunction";
import { ClassClosure } from "../../../structures/ClassClosure";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_functional_assertEqualsFunctionCustom_ClassClosure =
  _test_functional_assertEqualsFunction(CustomGuardError)("ClassClosure")(
    ClassClosure,
  )(
    (p: (input: ClassClosure) => ClassClosure) =>
      (input: ClassClosure): ClassClosure => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (p) => new CustomGuardError(p);
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
        ): ClassClosure.Something => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ClassClosure.Something => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "string" === typeof input.id &&
              "something" === input.type &&
              "function" === typeof input.closure &&
              (3 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    ["id", "type", "closure"].some((prop: any) => key === prop)
                  )
                    return true;
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
            ): input is ClassClosure.Something => {
              const $guard = (typia.functional.assertEqualsFunction as any)
                .guard;
              const $join = (typia.functional.assertEqualsFunction as any).join;
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
                  )) &&
                (3 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (
                      ["id", "type", "closure"].some(
                        (prop: any) => key === prop,
                      )
                    )
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
        ): ClassClosure.Something => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ClassClosure.Something => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "string" === typeof input.id &&
              "something" === input.type &&
              "function" === typeof input.closure &&
              (3 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    ["id", "type", "closure"].some((prop: any) => key === prop)
                  )
                    return true;
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
            ): input is ClassClosure.Something => {
              const $guard = (typia.functional.assertEqualsFunction as any)
                .guard;
              const $join = (typia.functional.assertEqualsFunction as any).join;
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
                  )) &&
                (3 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (
                      ["id", "type", "closure"].some(
                        (prop: any) => key === prop,
                      )
                    )
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
