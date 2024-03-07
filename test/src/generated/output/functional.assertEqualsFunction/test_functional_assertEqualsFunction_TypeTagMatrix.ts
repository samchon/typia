import typia from "typia";
import { _test_functional_assertEqualsFunction } from "../../../internal/_test_functional_assertEqualsFunction";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";
import { TypeGuardError } from "typia";
export const test_functional_assertEqualsFunction_TypeTagMatrix =
  _test_functional_assertEqualsFunction(TypeGuardError)("TypeTagMatrix")(
    TypeTagMatrix,
  )(
    (p: (input: TypeTagMatrix) => TypeTagMatrix) =>
      (input: TypeTagMatrix): TypeTagMatrix => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertEqualsFunction as any)
          .errorFactory;
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
        ): TypeTagMatrix => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is TypeTagMatrix => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              Array.isArray(input.matrix) &&
              3 <= input.matrix.length &&
              input.matrix.length <= 3 &&
              input.matrix.every(
                (elem: any, _index1: number) =>
                  Array.isArray(elem) &&
                  4 <= elem.length &&
                  elem.length <= 4 &&
                  elem.every(
                    (elem: any, _index2: number) =>
                      "string" === typeof elem &&
                      /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                        elem,
                      ),
                  ),
              ) &&
              (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["matrix"].some((prop: any) => key === prop)) return true;
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
            ): input is TypeTagMatrix => {
              const $guard = (typia.functional.assertEqualsFunction as any)
                .guard;
              const $join = (typia.functional.assertEqualsFunction as any).join;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (((Array.isArray(input.matrix) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".matrix",
                      expected:
                        '(Array<(string & Format<"uuid">)[] & MinItems<4> & MaxItems<4>> & MinItems<3> & MaxItems<3>)',
                      value: input.matrix,
                    },
                    errorFactory,
                  )) &&
                  (3 <= input.matrix.length ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".matrix",
                        expected: "Array<> & MinItems<3>",
                        value: input.matrix,
                      },
                      errorFactory,
                    )) &&
                  (input.matrix.length <= 3 ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".matrix",
                        expected: "Array<> & MaxItems<3>",
                        value: input.matrix,
                      },
                      errorFactory,
                    )) &&
                  input.matrix.every(
                    (elem: any, _index1: number) =>
                      ((Array.isArray(elem) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".matrix[" + _index1 + "]",
                            expected:
                              '(Array<string & Format<"uuid">> & MinItems<4> & MaxItems<4>)',
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        (4 <= elem.length ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".matrix[" + _index1 + "]",
                              expected: "Array<> & MinItems<4>",
                              value: elem,
                            },
                            errorFactory,
                          )) &&
                        (elem.length <= 4 ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".matrix[" + _index1 + "]",
                              expected: "Array<> & MaxItems<4>",
                              value: elem,
                            },
                            errorFactory,
                          )) &&
                        elem.every(
                          (elem: any, _index2: number) =>
                            ("string" === typeof elem &&
                              (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                                elem,
                              ) ||
                                $guard(
                                  _exceptionable,
                                  {
                                    path:
                                      _path +
                                      ".matrix[" +
                                      _index1 +
                                      "][" +
                                      _index2 +
                                      "]",
                                    expected: 'string & Format<"uuid">',
                                    value: elem,
                                  },
                                  errorFactory,
                                ))) ||
                            $guard(
                              _exceptionable,
                              {
                                path:
                                  _path +
                                  ".matrix[" +
                                  _index1 +
                                  "][" +
                                  _index2 +
                                  "]",
                                expected: '(string & Format<"uuid">)',
                                value: elem,
                              },
                              errorFactory,
                            ),
                        )) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".matrix[" + _index1 + "]",
                          expected:
                            '(Array<string & Format<"uuid">> & MinItems<4> & MaxItems<4>)',
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".matrix",
                      expected:
                        '(Array<(string & Format<"uuid">)[] & MinItems<4> & MaxItems<4>> & MinItems<3> & MaxItems<3>)',
                      value: input.matrix,
                    },
                    errorFactory,
                  )) &&
                (1 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (["matrix"].some((prop: any) => key === prop))
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
                      expected: "TypeTagMatrix",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "TypeTagMatrix",
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
        ): TypeTagMatrix => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is TypeTagMatrix => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              Array.isArray(input.matrix) &&
              3 <= input.matrix.length &&
              input.matrix.length <= 3 &&
              input.matrix.every(
                (elem: any, _index1: number) =>
                  Array.isArray(elem) &&
                  4 <= elem.length &&
                  elem.length <= 4 &&
                  elem.every(
                    (elem: any, _index2: number) =>
                      "string" === typeof elem &&
                      /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                        elem,
                      ),
                  ),
              ) &&
              (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["matrix"].some((prop: any) => key === prop)) return true;
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
            ): input is TypeTagMatrix => {
              const $guard = (typia.functional.assertEqualsFunction as any)
                .guard;
              const $join = (typia.functional.assertEqualsFunction as any).join;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (((Array.isArray(input.matrix) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".matrix",
                      expected:
                        '(Array<(string & Format<"uuid">)[] & MinItems<4> & MaxItems<4>> & MinItems<3> & MaxItems<3>)',
                      value: input.matrix,
                    },
                    errorFactory,
                  )) &&
                  (3 <= input.matrix.length ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".matrix",
                        expected: "Array<> & MinItems<3>",
                        value: input.matrix,
                      },
                      errorFactory,
                    )) &&
                  (input.matrix.length <= 3 ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".matrix",
                        expected: "Array<> & MaxItems<3>",
                        value: input.matrix,
                      },
                      errorFactory,
                    )) &&
                  input.matrix.every(
                    (elem: any, _index1: number) =>
                      ((Array.isArray(elem) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".matrix[" + _index1 + "]",
                            expected:
                              '(Array<string & Format<"uuid">> & MinItems<4> & MaxItems<4>)',
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        (4 <= elem.length ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".matrix[" + _index1 + "]",
                              expected: "Array<> & MinItems<4>",
                              value: elem,
                            },
                            errorFactory,
                          )) &&
                        (elem.length <= 4 ||
                          $guard(
                            _exceptionable,
                            {
                              path: _path + ".matrix[" + _index1 + "]",
                              expected: "Array<> & MaxItems<4>",
                              value: elem,
                            },
                            errorFactory,
                          )) &&
                        elem.every(
                          (elem: any, _index2: number) =>
                            ("string" === typeof elem &&
                              (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                                elem,
                              ) ||
                                $guard(
                                  _exceptionable,
                                  {
                                    path:
                                      _path +
                                      ".matrix[" +
                                      _index1 +
                                      "][" +
                                      _index2 +
                                      "]",
                                    expected: 'string & Format<"uuid">',
                                    value: elem,
                                  },
                                  errorFactory,
                                ))) ||
                            $guard(
                              _exceptionable,
                              {
                                path:
                                  _path +
                                  ".matrix[" +
                                  _index1 +
                                  "][" +
                                  _index2 +
                                  "]",
                                expected: '(string & Format<"uuid">)',
                                value: elem,
                              },
                              errorFactory,
                            ),
                        )) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".matrix[" + _index1 + "]",
                          expected:
                            '(Array<string & Format<"uuid">> & MinItems<4> & MaxItems<4>)',
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".matrix",
                      expected:
                        '(Array<(string & Format<"uuid">)[] & MinItems<4> & MaxItems<4>> & MinItems<3> & MaxItems<3>)',
                      value: input.matrix,
                    },
                    errorFactory,
                  )) &&
                (1 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (["matrix"].some((prop: any) => key === prop))
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
                      expected: "TypeTagMatrix",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "TypeTagMatrix",
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
