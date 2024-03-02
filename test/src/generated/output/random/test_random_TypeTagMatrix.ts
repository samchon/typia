import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";

export const test_random_TypeTagMatrix = _test_random(
  "TypeTagMatrix",
)<TypeTagMatrix>(TypeTagMatrix)({
  random: () =>
    ((
      generator?: Partial<typia.IRandomGenerator>,
    ): typia.Resolved<TypeTagMatrix> => {
      const $generator = (typia.random as any).generator;
      const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
        matrix: (generator?.array ?? $generator.array)(
          () =>
            (generator?.array ?? $generator.array)(
              () =>
                (generator?.customs ?? $generator.customs)?.string?.([
                  {
                    name: 'Format<"uuid">',
                    kind: "format",
                    value: "uuid",
                  },
                ]) ?? (generator?.uuid ?? $generator.uuid)(),
              (generator?.integer ?? $generator.integer)(4, 4),
            ),
          (generator?.integer ?? $generator.integer)(3, 3),
        ),
      });
      return $ro0();
    })((TypeTagMatrix as any).RANDOM),
  assert: (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): TypeTagMatrix => {
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
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is TypeTagMatrix => {
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
                            _path + ".matrix[" + _index1 + "][" + _index2 + "]",
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
