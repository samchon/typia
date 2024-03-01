import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";

export const test_createAssertEqualsCustom_TypeTagMatrix = _test_assertEquals(
  CustomGuardError,
)("TypeTagMatrix")<TypeTagMatrix>(TypeTagMatrix)(
  (
    input: any,
    errorFactory: import("typia").TypeGuardError.IProps = (p) =>
      new CustomGuardError(p),
  ): TypeTagMatrix => {
    const $guard = (typia.createAssertEquals as any).guard(errorFactory);
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is TypeTagMatrix => {
      const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
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
      return "object" === typeof input && null !== input && $io0(input, true);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is TypeTagMatrix => {
        const $join = (typia.createAssertEquals as any).join;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((Array.isArray(input.matrix) ||
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
                        (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
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
            })) &&
          (1 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["matrix"].some((prop: any) => key === prop)) return true;
              const value = input[key];
              if (undefined === value) return true;
              return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value,
              });
            }));
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
  },
);
