import typia from "typia";
import { _test_functional_assertEqualsFunctionAsync } from "../../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagLength } from "../../../structures/TypeTagLength";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_functional_assertEqualsFunctionAsyncCustom_TypeTagLength =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)("TypeTagLength")(
    TypeTagLength,
  )(
    (p: (input: TypeTagLength) => Promise<TypeTagLength>) =>
      async (input: TypeTagLength): Promise<TypeTagLength> => {
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
        ): TypeTagLength => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is TypeTagLength => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              Array.isArray(input.value) &&
              input.value.every(
                (elem: any, _index1: number) =>
                  "object" === typeof elem &&
                  null !== elem &&
                  $io1(elem, true && _exceptionable),
              ) &&
              (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["value"].some((prop: any) => key === prop)) return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io1 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "string" === typeof input.fixed &&
              5 <= input.fixed.length &&
              input.fixed.length <= 5 &&
              "string" === typeof input.minimum &&
              3 <= input.minimum.length &&
              "string" === typeof input.maximum &&
              input.maximum.length <= 7 &&
              "string" === typeof input.minimum_and_maximum &&
              3 <= input.minimum_and_maximum.length &&
              input.minimum_and_maximum.length <= 7 &&
              "string" === typeof input.equal &&
              10 <= input.equal.length &&
              input.equal.length <= 19 &&
              (5 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    [
                      "fixed",
                      "minimum",
                      "maximum",
                      "minimum_and_maximum",
                      "equal",
                    ].some((prop: any) => key === prop)
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
            ): input is TypeTagLength => {
              const $guard = (typia.functional.assertEqualsFunction as any)
                .guard;
              const $join = (typia.functional.assertEqualsFunction as any).join;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (((Array.isArray(input.value) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".value",
                      expected: "Array<TypeTagLength.Type>",
                      value: input.value,
                    },
                    errorFactory,
                  )) &&
                  input.value.every(
                    (elem: any, _index1: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".value[" + _index1 + "]",
                            expected: "TypeTagLength.Type",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        $ao1(
                          elem,
                          _path + ".value[" + _index1 + "]",
                          true && _exceptionable,
                        )) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".value[" + _index1 + "]",
                          expected: "TypeTagLength.Type",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".value",
                      expected: "Array<TypeTagLength.Type>",
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
              const $ao1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (("string" === typeof input.fixed &&
                  (5 <= input.fixed.length ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".fixed",
                        expected: "string & MinLength<5>",
                        value: input.fixed,
                      },
                      errorFactory,
                    )) &&
                  (input.fixed.length <= 5 ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".fixed",
                        expected: "string & MaxLength<5>",
                        value: input.fixed,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".fixed",
                      expected: "(string & MinLength<5> & MaxLength<5>)",
                      value: input.fixed,
                    },
                    errorFactory,
                  )) &&
                (("string" === typeof input.minimum &&
                  (3 <= input.minimum.length ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".minimum",
                        expected: "string & MinLength<3>",
                        value: input.minimum,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".minimum",
                      expected: "(string & MinLength<3>)",
                      value: input.minimum,
                    },
                    errorFactory,
                  )) &&
                (("string" === typeof input.maximum &&
                  (input.maximum.length <= 7 ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".maximum",
                        expected: "string & MaxLength<7>",
                        value: input.maximum,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".maximum",
                      expected: "(string & MaxLength<7>)",
                      value: input.maximum,
                    },
                    errorFactory,
                  )) &&
                (("string" === typeof input.minimum_and_maximum &&
                  (3 <= input.minimum_and_maximum.length ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".minimum_and_maximum",
                        expected: "string & MinLength<3>",
                        value: input.minimum_and_maximum,
                      },
                      errorFactory,
                    )) &&
                  (input.minimum_and_maximum.length <= 7 ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".minimum_and_maximum",
                        expected: "string & MaxLength<7>",
                        value: input.minimum_and_maximum,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".minimum_and_maximum",
                      expected: "(string & MinLength<3> & MaxLength<7>)",
                      value: input.minimum_and_maximum,
                    },
                    errorFactory,
                  )) &&
                (("string" === typeof input.equal &&
                  (10 <= input.equal.length ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".equal",
                        expected: "string & MinLength<10>",
                        value: input.equal,
                      },
                      errorFactory,
                    )) &&
                  (input.equal.length <= 19 ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".equal",
                        expected: "string & MaxLength<19>",
                        value: input.equal,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".equal",
                      expected: "(string & MinLength<10> & MaxLength<19>)",
                      value: input.equal,
                    },
                    errorFactory,
                  )) &&
                (5 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (
                      [
                        "fixed",
                        "minimum",
                        "maximum",
                        "minimum_and_maximum",
                        "equal",
                      ].some((prop: any) => key === prop)
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
                      expected: "TypeTagLength",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "TypeTagLength",
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
        ): TypeTagLength => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is TypeTagLength => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              Array.isArray(input.value) &&
              input.value.every(
                (elem: any, _index1: number) =>
                  "object" === typeof elem &&
                  null !== elem &&
                  $io1(elem, true && _exceptionable),
              ) &&
              (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["value"].some((prop: any) => key === prop)) return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io1 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "string" === typeof input.fixed &&
              5 <= input.fixed.length &&
              input.fixed.length <= 5 &&
              "string" === typeof input.minimum &&
              3 <= input.minimum.length &&
              "string" === typeof input.maximum &&
              input.maximum.length <= 7 &&
              "string" === typeof input.minimum_and_maximum &&
              3 <= input.minimum_and_maximum.length &&
              input.minimum_and_maximum.length <= 7 &&
              "string" === typeof input.equal &&
              10 <= input.equal.length &&
              input.equal.length <= 19 &&
              (5 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    [
                      "fixed",
                      "minimum",
                      "maximum",
                      "minimum_and_maximum",
                      "equal",
                    ].some((prop: any) => key === prop)
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
            ): input is TypeTagLength => {
              const $guard = (typia.functional.assertEqualsFunction as any)
                .guard;
              const $join = (typia.functional.assertEqualsFunction as any).join;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (((Array.isArray(input.value) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".value",
                      expected: "Array<TypeTagLength.Type>",
                      value: input.value,
                    },
                    errorFactory,
                  )) &&
                  input.value.every(
                    (elem: any, _index1: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".value[" + _index1 + "]",
                            expected: "TypeTagLength.Type",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        $ao1(
                          elem,
                          _path + ".value[" + _index1 + "]",
                          true && _exceptionable,
                        )) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".value[" + _index1 + "]",
                          expected: "TypeTagLength.Type",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".value",
                      expected: "Array<TypeTagLength.Type>",
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
              const $ao1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (("string" === typeof input.fixed &&
                  (5 <= input.fixed.length ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".fixed",
                        expected: "string & MinLength<5>",
                        value: input.fixed,
                      },
                      errorFactory,
                    )) &&
                  (input.fixed.length <= 5 ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".fixed",
                        expected: "string & MaxLength<5>",
                        value: input.fixed,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".fixed",
                      expected: "(string & MinLength<5> & MaxLength<5>)",
                      value: input.fixed,
                    },
                    errorFactory,
                  )) &&
                (("string" === typeof input.minimum &&
                  (3 <= input.minimum.length ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".minimum",
                        expected: "string & MinLength<3>",
                        value: input.minimum,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".minimum",
                      expected: "(string & MinLength<3>)",
                      value: input.minimum,
                    },
                    errorFactory,
                  )) &&
                (("string" === typeof input.maximum &&
                  (input.maximum.length <= 7 ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".maximum",
                        expected: "string & MaxLength<7>",
                        value: input.maximum,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".maximum",
                      expected: "(string & MaxLength<7>)",
                      value: input.maximum,
                    },
                    errorFactory,
                  )) &&
                (("string" === typeof input.minimum_and_maximum &&
                  (3 <= input.minimum_and_maximum.length ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".minimum_and_maximum",
                        expected: "string & MinLength<3>",
                        value: input.minimum_and_maximum,
                      },
                      errorFactory,
                    )) &&
                  (input.minimum_and_maximum.length <= 7 ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".minimum_and_maximum",
                        expected: "string & MaxLength<7>",
                        value: input.minimum_and_maximum,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".minimum_and_maximum",
                      expected: "(string & MinLength<3> & MaxLength<7>)",
                      value: input.minimum_and_maximum,
                    },
                    errorFactory,
                  )) &&
                (("string" === typeof input.equal &&
                  (10 <= input.equal.length ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".equal",
                        expected: "string & MinLength<10>",
                        value: input.equal,
                      },
                      errorFactory,
                    )) &&
                  (input.equal.length <= 19 ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".equal",
                        expected: "string & MaxLength<19>",
                        value: input.equal,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".equal",
                      expected: "(string & MinLength<10> & MaxLength<19>)",
                      value: input.equal,
                    },
                    errorFactory,
                  )) &&
                (5 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (
                      [
                        "fixed",
                        "minimum",
                        "maximum",
                        "minimum_and_maximum",
                        "equal",
                      ].some((prop: any) => key === prop)
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
                      expected: "TypeTagLength",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "TypeTagLength",
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
