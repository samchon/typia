import typia from "typia";
import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";
export const test_notation_validateSnake_TypeTagMatrix =
  _test_notation_validateGeneral("TypeTagMatrix")<TypeTagMatrix>(TypeTagMatrix)<
    typia.SnakeCase<TypeTagMatrix>
  >({
    convert: (input) =>
      ((input: any): typia.IValidation<typia.SnakeCase<TypeTagMatrix>> => {
        const validate = (input: any): typia.IValidation<TypeTagMatrix> => {
          const errors = [] as any[];
          const __is = (input: any): input is TypeTagMatrix => {
            const $io0 = (input: any): boolean =>
              Array.isArray(input.matrix) &&
              3 <= input.matrix.length &&
              input.matrix.length <= 3 &&
              input.matrix.every(
                (elem: any) =>
                  Array.isArray(elem) &&
                  4 <= elem.length &&
                  elem.length <= 4 &&
                  elem.every(
                    (elem: any) =>
                      "string" === typeof elem &&
                      /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                        elem,
                      ),
                  ),
              );
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input)) {
            const $report = (typia.notations.validateSnake as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is TypeTagMatrix => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ((Array.isArray(input.matrix) ||
                    $report(_exceptionable, {
                      path: _path + ".matrix",
                      expected:
                        '(Array<(string & Format<"uuid">)[] & MinItems<4> & MaxItems<4>> & MinItems<3> & MaxItems<3>)',
                      value: input.matrix,
                    })) &&
                    (3 <= input.matrix.length ||
                      $report(_exceptionable, {
                        path: _path + ".matrix",
                        expected: "Array<> & MinItems<3>",
                        value: input.matrix,
                      })) &&
                    (input.matrix.length <= 3 ||
                      $report(_exceptionable, {
                        path: _path + ".matrix",
                        expected: "Array<> & MaxItems<3>",
                        value: input.matrix,
                      })) &&
                    input.matrix
                      .map(
                        (elem: any, _index1: number) =>
                          ((Array.isArray(elem) ||
                            $report(_exceptionable, {
                              path: _path + ".matrix[" + _index1 + "]",
                              expected:
                                '(Array<string & Format<"uuid">> & MinItems<4> & MaxItems<4>)',
                              value: elem,
                            })) &&
                            (4 <= elem.length ||
                              $report(_exceptionable, {
                                path: _path + ".matrix[" + _index1 + "]",
                                expected: "Array<> & MinItems<4>",
                                value: elem,
                              })) &&
                            (elem.length <= 4 ||
                              $report(_exceptionable, {
                                path: _path + ".matrix[" + _index1 + "]",
                                expected: "Array<> & MaxItems<4>",
                                value: elem,
                              })) &&
                            elem
                              .map(
                                (elem: any, _index2: number) =>
                                  ("string" === typeof elem &&
                                    (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                                      elem,
                                    ) ||
                                      $report(_exceptionable, {
                                        path:
                                          _path +
                                          ".matrix[" +
                                          _index1 +
                                          "][" +
                                          _index2 +
                                          "]",
                                        expected: 'string & Format<"uuid">',
                                        value: elem,
                                      }))) ||
                                  $report(_exceptionable, {
                                    path:
                                      _path +
                                      ".matrix[" +
                                      _index1 +
                                      "][" +
                                      _index2 +
                                      "]",
                                    expected: '(string & Format<"uuid">)',
                                    value: elem,
                                  }),
                              )
                              .every((flag: boolean) => flag)) ||
                          $report(_exceptionable, {
                            path: _path + ".matrix[" + _index1 + "]",
                            expected:
                              '(Array<string & Format<"uuid">> & MinItems<4> & MaxItems<4>)',
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".matrix",
                      expected:
                        '(Array<(string & Format<"uuid">)[] & MinItems<4> & MaxItems<4>> & MinItems<3> & MaxItems<3>)',
                      value: input.matrix,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "TypeTagMatrix",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "TypeTagMatrix",
                  value: input,
                })
              );
            })(input, "$input", true);
          }
          const success = 0 === errors.length;
          return {
            success,
            errors,
            data: success ? input : undefined,
          } as any;
        };
        const general = (
          input: TypeTagMatrix,
        ): typia.SnakeCase<TypeTagMatrix> => {
          const $cp0 = (input: any) => input.map((elem: any) => elem as any);
          const $cp1 = (input: any) =>
            input.map((elem: any) =>
              Array.isArray(elem) ? $cp0(elem) : (elem as any),
            );
          const $co0 = (input: any): any => ({
            matrix: Array.isArray(input.matrix)
              ? $cp1(input.matrix)
              : (input.matrix as any),
          });
          return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
        };
        const output = validate(input) as any;
        if (output.success) output.data = general(input);
        return output;
      })(input),
    assert: (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): typia.SnakeCase<TypeTagMatrix> => {
      const __is = (input: any): input is typia.SnakeCase<TypeTagMatrix> => {
        const $io0 = (input: any): boolean =>
          Array.isArray(input.matrix) &&
          3 <= input.matrix.length &&
          input.matrix.length <= 3 &&
          input.matrix.every(
            (elem: any) =>
              Array.isArray(elem) &&
              4 <= elem.length &&
              elem.length <= 4 &&
              elem.every(
                (elem: any) =>
                  "string" === typeof elem &&
                  /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                    elem,
                  ),
              ),
          );
        return "object" === typeof input && null !== input && $io0(input);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.SnakeCase<TypeTagMatrix> => {
          const $guard = (typia.createAssert as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ((Array.isArray(input.matrix) ||
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
            );
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
    },
  });
