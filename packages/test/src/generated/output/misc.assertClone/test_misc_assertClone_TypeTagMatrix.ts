import typia from "typia";

import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";

export const test_misc_assertClone_TypeTagMatrix = _test_misc_assertClone(
  "TypeTagMatrix",
)<TypeTagMatrix>(TypeTagMatrix)((input) =>
  ((input: any): typia.Resolved<TypeTagMatrix> => {
    const assert = (input: any): TypeTagMatrix => {
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
                  /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
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
        ): input is TypeTagMatrix => {
          const $guard = (typia.misc.assertClone as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ((Array.isArray(input.matrix) ||
              $guard(_exceptionable, {
                path: _path + ".matrix",
                expected:
                  '(Array<(string & Format<"uuid">)[] & MinItems<4> & MaxItems<4>> & MinItems<3> & MaxItems<3>)',
                value: input.matrix,
              })) &&
              (3 <= input.matrix.length ||
                $guard(_exceptionable, {
                  path: _path + ".matrix",
                  expected: "Array<> & MinItems<3>",
                  value: input.matrix,
                })) &&
              (input.matrix.length <= 3 ||
                $guard(_exceptionable, {
                  path: _path + ".matrix",
                  expected: "Array<> & MaxItems<3>",
                  value: input.matrix,
                })) &&
              input.matrix.every(
                (elem: any, _index1: number) =>
                  ((Array.isArray(elem) ||
                    $guard(_exceptionable, {
                      path: _path + ".matrix[" + _index1 + "]",
                      expected:
                        '(Array<string & Format<"uuid">> & MinItems<4> & MaxItems<4>)',
                      value: elem,
                    })) &&
                    (4 <= elem.length ||
                      $guard(_exceptionable, {
                        path: _path + ".matrix[" + _index1 + "]",
                        expected: "Array<> & MinItems<4>",
                        value: elem,
                      })) &&
                    (elem.length <= 4 ||
                      $guard(_exceptionable, {
                        path: _path + ".matrix[" + _index1 + "]",
                        expected: "Array<> & MaxItems<4>",
                        value: elem,
                      })) &&
                    elem.every(
                      (elem: any, _index2: number) =>
                        ("string" === typeof elem &&
                          (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                            elem,
                          ) ||
                            $guard(_exceptionable, {
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
                        $guard(_exceptionable, {
                          path:
                            _path + ".matrix[" + _index1 + "][" + _index2 + "]",
                          expected: '(string & Format<"uuid">)',
                          value: elem,
                        }),
                    )) ||
                  $guard(_exceptionable, {
                    path: _path + ".matrix[" + _index1 + "]",
                    expected:
                      '(Array<string & Format<"uuid">> & MinItems<4> & MaxItems<4>)',
                    value: elem,
                  }),
              )) ||
            $guard(_exceptionable, {
              path: _path + ".matrix",
              expected:
                '(Array<(string & Format<"uuid">)[] & MinItems<4> & MaxItems<4>> & MinItems<3> & MaxItems<3>)',
              value: input.matrix,
            });
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(true, {
                path: _path + "",
                expected: "TypeTagMatrix",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "TypeTagMatrix",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    };
    const clone = (input: TypeTagMatrix): typia.Resolved<TypeTagMatrix> => {
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
    assert(input);
    const output = clone(input);
    return output;
  })(input),
);
