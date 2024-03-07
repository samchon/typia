import typia from "typia";
import { _test_functional_assertEqualsReturnAsync } from "../../../internal/_test_functional_assertEqualsReturnAsync";
import { ToJsonTuple } from "../../../structures/ToJsonTuple";
import { TypeGuardError } from "typia";
export const test_functional_assertEqualsReturnAsync_ToJsonTuple =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("ToJsonTuple")(
    ToJsonTuple,
  )(
    (p: (input: ToJsonTuple) => Promise<ToJsonTuple>) =>
      async (input: ToJsonTuple): Promise<ToJsonTuple> => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertEqualsReturn as any).errorFactory;
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
        ): ToJsonTuple => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ToJsonTuple => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "function" === typeof input.toJSON &&
              (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["toJSON"].some((prop: any) => key === prop)) return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io1 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "function" === typeof input.toJSON &&
              (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["toJSON"].some((prop: any) => key === prop)) return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io2 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "function" === typeof input.toJSON &&
              (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["toJSON"].some((prop: any) => key === prop)) return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io3 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "function" === typeof input.toJSON &&
              (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["toJSON"].some((prop: any) => key === prop)) return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            return (
              Array.isArray(input) &&
              input.length === 4 &&
              "object" === typeof input[0] &&
              null !== input[0] &&
              $io0(input[0], true) &&
              "object" === typeof input[1] &&
              null !== input[1] &&
              $io1(input[1], true) &&
              "object" === typeof input[2] &&
              null !== input[2] &&
              $io2(input[2], true) &&
              "object" === typeof input[3] &&
              null !== input[3] &&
              $io3(input[3], true)
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ToJsonTuple => {
              const $guard = (typia.functional.assertEqualsReturn as any).guard;
              const $join = (typia.functional.assertEqualsReturn as any).join;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ("function" === typeof input.toJSON ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".toJSON",
                      expected: "unknown",
                      value: input.toJSON,
                    },
                    errorFactory,
                  )) &&
                (1 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (["toJSON"].some((prop: any) => key === prop))
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
              const $ao1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ("function" === typeof input.toJSON ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".toJSON",
                      expected: "unknown",
                      value: input.toJSON,
                    },
                    errorFactory,
                  )) &&
                (1 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (["toJSON"].some((prop: any) => key === prop))
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
              const $ao2 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ("function" === typeof input.toJSON ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".toJSON",
                      expected: "unknown",
                      value: input.toJSON,
                    },
                    errorFactory,
                  )) &&
                (1 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (["toJSON"].some((prop: any) => key === prop))
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
              const $ao3 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ("function" === typeof input.toJSON ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".toJSON",
                      expected: "unknown",
                      value: input.toJSON,
                    },
                    errorFactory,
                  )) &&
                (1 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (["toJSON"].some((prop: any) => key === prop))
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
                ((Array.isArray(input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ToJsonTuple",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  (input.length === 4 ||
                    $guard(
                      true,
                      {
                        path: _path + "",
                        expected:
                          "[ToJsonTuple.IToJson<string>, ToJsonTuple.IToJson<number>, ToJsonTuple.IToJson<boolean>, ToJsonTuple.IObject]",
                        value: input,
                      },
                      errorFactory,
                    )) &&
                  (((("object" === typeof input[0] && null !== input[0]) ||
                    $guard(
                      true,
                      {
                        path: _path + "[0]",
                        expected: "ToJsonTuple.IToJson<string>",
                        value: input[0],
                      },
                      errorFactory,
                    )) &&
                    $ao0(input[0], _path + "[0]", true)) ||
                    $guard(
                      true,
                      {
                        path: _path + "[0]",
                        expected: "ToJsonTuple.IToJson<string>",
                        value: input[0],
                      },
                      errorFactory,
                    )) &&
                  (((("object" === typeof input[1] && null !== input[1]) ||
                    $guard(
                      true,
                      {
                        path: _path + "[1]",
                        expected: "ToJsonTuple.IToJson<number>",
                        value: input[1],
                      },
                      errorFactory,
                    )) &&
                    $ao1(input[1], _path + "[1]", true)) ||
                    $guard(
                      true,
                      {
                        path: _path + "[1]",
                        expected: "ToJsonTuple.IToJson<number>",
                        value: input[1],
                      },
                      errorFactory,
                    )) &&
                  (((("object" === typeof input[2] && null !== input[2]) ||
                    $guard(
                      true,
                      {
                        path: _path + "[2]",
                        expected: "ToJsonTuple.IToJson<boolean>",
                        value: input[2],
                      },
                      errorFactory,
                    )) &&
                    $ao2(input[2], _path + "[2]", true)) ||
                    $guard(
                      true,
                      {
                        path: _path + "[2]",
                        expected: "ToJsonTuple.IToJson<boolean>",
                        value: input[2],
                      },
                      errorFactory,
                    )) &&
                  (((("object" === typeof input[3] && null !== input[3]) ||
                    $guard(
                      true,
                      {
                        path: _path + "[3]",
                        expected: "ToJsonTuple.IObject",
                        value: input[3],
                      },
                      errorFactory,
                    )) &&
                    $ao3(input[3], _path + "[3]", true)) ||
                    $guard(
                      true,
                      {
                        path: _path + "[3]",
                        expected: "ToJsonTuple.IObject",
                        value: input[3],
                      },
                      errorFactory,
                    ))) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ToJsonTuple",
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
