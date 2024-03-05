import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";

export const test_misc_assertPruneCustom_TypeTagMatrix = _test_misc_assertPrune(
  CustomGuardError,
)("TypeTagMatrix")<TypeTagMatrix>(TypeTagMatrix)((input) =>
  ((
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): TypeTagMatrix => {
    const assert = (
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
          const $guard = (typia.misc.assertPrune as any).guard;
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
    };
    const prune = (input: TypeTagMatrix): void => {
      const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if ("matrix" === key) continue;
          delete input[key];
        }
      };
      if ("object" === typeof input && null !== input) $po0(input);
    };
    assert(input, errorFactory);
    prune(input);
    return input;
  })(input, (p) => new CustomGuardError(p)),
);
