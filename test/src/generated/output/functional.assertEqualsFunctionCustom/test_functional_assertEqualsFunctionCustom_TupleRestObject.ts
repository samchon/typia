import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../../internal/_test_functional_assertEqualsFunction";
import { TupleRestObject } from "../../../structures/TupleRestObject";

export const test_functional_assertEqualsFunctionCustom_TupleRestObject =
  _test_functional_assertEqualsFunction(CustomGuardError)("TupleRestObject")(
    TupleRestObject,
  )(
    (p: (input: TupleRestObject) => TupleRestObject) =>
      (input: TupleRestObject): TupleRestObject => {
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
        ): TupleRestObject => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is TupleRestObject => {
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
              Array.isArray(input) &&
              "boolean" === typeof input[0] &&
              "number" === typeof input[1] &&
              Number.isFinite(input[1]) &&
              Array.isArray(input.slice(2)) &&
              input
                .slice(2)
                .every(
                  (elem: any, _index1: number) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    $io0(elem, true),
                )
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is TupleRestObject => {
              const $guard = (typia.functional.assertEqualsFunction as any)
                .guard;
              const $join = (typia.functional.assertEqualsFunction as any).join;
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
                ((Array.isArray(input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "TupleRestObject",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  ("boolean" === typeof input[0] ||
                    $guard(
                      true,
                      {
                        path: _path + "[0]",
                        expected: "boolean",
                        value: input[0],
                      },
                      errorFactory,
                    )) &&
                  (("number" === typeof input[1] &&
                    Number.isFinite(input[1])) ||
                    $guard(
                      true,
                      {
                        path: _path + "[1]",
                        expected: "number",
                        value: input[1],
                      },
                      errorFactory,
                    )) &&
                  (((Array.isArray(input.slice(2)) ||
                    $guard(
                      true,
                      {
                        path: _path + "",
                        expected: "...TupleRestObject.IObject",
                        value: input.slice(2),
                      },
                      errorFactory,
                    )) &&
                    input.slice(2).every(
                      (elem: any, _index1: number) =>
                        ((("object" === typeof elem && null !== elem) ||
                          $guard(
                            true,
                            {
                              path: _path + "[" + (2 + _index1) + "]",
                              expected: "TupleRestObject.IObject",
                              value: elem,
                            },
                            errorFactory,
                          )) &&
                          $ao0(
                            elem,
                            _path + "[" + (2 + _index1) + "]",
                            true,
                          )) ||
                        $guard(
                          true,
                          {
                            path: _path + "[" + (2 + _index1) + "]",
                            expected: "TupleRestObject.IObject",
                            value: elem,
                          },
                          errorFactory,
                        ),
                    )) ||
                    $guard(
                      true,
                      {
                        path: _path + "",
                        expected: "...TupleRestObject.IObject",
                        value: input.slice(2),
                      },
                      errorFactory,
                    ))) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "TupleRestObject",
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
        ): TupleRestObject => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is TupleRestObject => {
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
              Array.isArray(input) &&
              "boolean" === typeof input[0] &&
              "number" === typeof input[1] &&
              Number.isFinite(input[1]) &&
              Array.isArray(input.slice(2)) &&
              input
                .slice(2)
                .every(
                  (elem: any, _index1: number) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    $io0(elem, true),
                )
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is TupleRestObject => {
              const $guard = (typia.functional.assertEqualsFunction as any)
                .guard;
              const $join = (typia.functional.assertEqualsFunction as any).join;
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
                ((Array.isArray(input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "TupleRestObject",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  ("boolean" === typeof input[0] ||
                    $guard(
                      true,
                      {
                        path: _path + "[0]",
                        expected: "boolean",
                        value: input[0],
                      },
                      errorFactory,
                    )) &&
                  (("number" === typeof input[1] &&
                    Number.isFinite(input[1])) ||
                    $guard(
                      true,
                      {
                        path: _path + "[1]",
                        expected: "number",
                        value: input[1],
                      },
                      errorFactory,
                    )) &&
                  (((Array.isArray(input.slice(2)) ||
                    $guard(
                      true,
                      {
                        path: _path + "",
                        expected: "...TupleRestObject.IObject",
                        value: input.slice(2),
                      },
                      errorFactory,
                    )) &&
                    input.slice(2).every(
                      (elem: any, _index1: number) =>
                        ((("object" === typeof elem && null !== elem) ||
                          $guard(
                            true,
                            {
                              path: _path + "[" + (2 + _index1) + "]",
                              expected: "TupleRestObject.IObject",
                              value: elem,
                            },
                            errorFactory,
                          )) &&
                          $ao0(
                            elem,
                            _path + "[" + (2 + _index1) + "]",
                            true,
                          )) ||
                        $guard(
                          true,
                          {
                            path: _path + "[" + (2 + _index1) + "]",
                            expected: "TupleRestObject.IObject",
                            value: elem,
                          },
                          errorFactory,
                        ),
                    )) ||
                    $guard(
                      true,
                      {
                        path: _path + "",
                        expected: "...TupleRestObject.IObject",
                        value: input.slice(2),
                      },
                      errorFactory,
                    ))) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "TupleRestObject",
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
