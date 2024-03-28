import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../../internal/_test_functional_assertEqualsParametersAsync";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_functional_assertEqualsParametersAsyncCustom_ToJsonUnion =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)("ToJsonUnion")(
    ToJsonUnion,
  )(
    (p: (input: ToJsonUnion) => Promise<ToJsonUnion>) =>
      async (input: ToJsonUnion): Promise<ToJsonUnion> => {
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
        ): ToJsonUnion => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ToJsonUnion => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "number" === typeof input.id &&
              Number.isFinite(input.id) &&
              "string" === typeof input.mobile &&
              "string" === typeof input.name &&
              (3 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    ["id", "mobile", "name"].some((prop: any) => key === prop)
                  )
                    return true;
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
            const $iu0 = (input: any, _exceptionable: boolean = true): any =>
              (() => {
                if (undefined !== input.id)
                  return $io0(input, true && _exceptionable);
                else
                  return (() => {
                    if ($io3(input, false && _exceptionable))
                      return $io3(input, true && _exceptionable);
                    if ($io2(input, false && _exceptionable))
                      return $io2(input, true && _exceptionable);
                    if ($io1(input, false && _exceptionable))
                      return $io1(input, true && _exceptionable);
                    return false;
                  })();
              })();
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any, _index1: number) =>
                  null !== elem &&
                  undefined !== elem &&
                  ("string" === typeof elem ||
                    ("number" === typeof elem && Number.isFinite(elem)) ||
                    ("object" === typeof elem &&
                      null !== elem &&
                      $iu0(elem, true))),
              )
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ToJsonUnion => {
              const $guard = (typia.functional.assertEqualsParameters as any)
                .guard;
              const $join = (typia.functional.assertEqualsParameters as any)
                .join;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (("number" === typeof input.id && Number.isFinite(input.id)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".id",
                      expected: "number",
                      value: input.id,
                    },
                    errorFactory,
                  )) &&
                ("string" === typeof input.mobile ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".mobile",
                      expected: "string",
                      value: input.mobile,
                    },
                    errorFactory,
                  )) &&
                ("string" === typeof input.name ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".name",
                      expected: "string",
                      value: input.name,
                    },
                    errorFactory,
                  )) &&
                (3 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (
                      ["id", "mobile", "name"].some((prop: any) => key === prop)
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
              const $au0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): any =>
                (() => {
                  if (undefined !== input.id)
                    return $ao0(input, _path, true && _exceptionable);
                  else
                    return (() => {
                      if ($ao3(input, _path, false && _exceptionable))
                        return $ao3(input, _path, true && _exceptionable);
                      if ($ao2(input, _path, false && _exceptionable))
                        return $ao2(input, _path, true && _exceptionable);
                      if ($ao1(input, _path, false && _exceptionable))
                        return $ao1(input, _path, true && _exceptionable);
                      return $guard(
                        _exceptionable,
                        {
                          path: _path,
                          expected:
                            "(ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<boolean>)",
                          value: input,
                        },
                        errorFactory,
                      );
                    })();
                })();
              return (
                ((Array.isArray(input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ToJsonUnion",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  input.every(
                    (elem: any, _index1: number) =>
                      (null !== elem ||
                        $guard(
                          true,
                          {
                            path: _path + "[" + _index1 + "]",
                            expected:
                              "(ToJsonUnion.ICitizen | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<boolean> | number | string)",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                      (undefined !== elem ||
                        $guard(
                          true,
                          {
                            path: _path + "[" + _index1 + "]",
                            expected:
                              "(ToJsonUnion.ICitizen | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<boolean> | number | string)",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                      ("string" === typeof elem ||
                        ("number" === typeof elem && Number.isFinite(elem)) ||
                        ((("object" === typeof elem && null !== elem) ||
                          $guard(
                            true,
                            {
                              path: _path + "[" + _index1 + "]",
                              expected:
                                "(ToJsonUnion.ICitizen | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<boolean> | number | string)",
                              value: elem,
                            },
                            errorFactory,
                          )) &&
                          $au0(elem, _path + "[" + _index1 + "]", true)) ||
                        $guard(
                          true,
                          {
                            path: _path + "[" + _index1 + "]",
                            expected:
                              "(ToJsonUnion.ICitizen | ToJsonUnion.IWrapper<ToJsonUnion.ICitizen> | ToJsonUnion.IWrapper<ToJsonUnion.IProduct> | ToJsonUnion.IWrapper<boolean> | number | string)",
                            value: elem,
                          },
                          errorFactory,
                        )),
                  )) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ToJsonUnion",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(input);
        return p(input);
      },
  );
