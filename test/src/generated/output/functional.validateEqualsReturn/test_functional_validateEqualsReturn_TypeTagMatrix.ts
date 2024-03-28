import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../../internal/_test_functional_validateEqualsReturn";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";

export const test_functional_validateEqualsReturn_TypeTagMatrix =
  _test_functional_validateEqualsReturn("TypeTagMatrix")(TypeTagMatrix)(
    (p: (input: TypeTagMatrix) => TypeTagMatrix) =>
      (input: TypeTagMatrix): import("typia").IValidation<TypeTagMatrix> => {
        const result = ((input: any): typia.IValidation<TypeTagMatrix> => {
          const errors = [] as any[];
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
          if (false === __is(input)) {
            const $report = (
              typia.functional.validateEqualsReturn as any
            ).report(errors);
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is TypeTagMatrix => {
              const $join = (typia.functional.validateEqualsReturn as any).join;
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
                  1 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input)
                      .map((key: any) => {
                        if (["matrix"].some((prop: any) => key === prop))
                          return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return $report(_exceptionable, {
                          path: _path + $join(key),
                          expected: "undefined",
                          value: value,
                        });
                      })
                      .every((flag: boolean) => flag),
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
        })(p(input));
        if (!result.success)
          result.errors = result.errors.map((error: any) => ({
            ...error,
            path: error.path.replace("$input", "$input.return"),
          }));
        return result;
      },
  );
