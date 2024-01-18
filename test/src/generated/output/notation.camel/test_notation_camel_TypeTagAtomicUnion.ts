import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { TypeTagAtomicUnion } from "../../../structures/TypeTagAtomicUnion";

export const test_notation_validateCamel_TypeTagAtomicUnion =
  _test_notation_validateGeneral("TypeTagAtomicUnion")<TypeTagAtomicUnion>(
    TypeTagAtomicUnion,
  )<typia.CamelCase<TypeTagAtomicUnion>>({
    convert: (input) =>
      ((input: any): typia.IValidation<typia.CamelCase<TypeTagAtomicUnion>> => {
        const validate = (
          input: any,
        ): typia.IValidation<TypeTagAtomicUnion> => {
          const errors = [] as any[];
          const __is = (input: any): input is TypeTagAtomicUnion => {
            const $io0 = (input: any): boolean =>
              Array.isArray(input.value) &&
              input.value.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io1(elem),
              );
            const $io1 = (input: any): boolean =>
              ("string" === typeof input.value &&
                3 <= input.value.length &&
                input.value.length <= 7) ||
              ("number" === typeof input.value &&
                Number.isFinite(input.value) &&
                3 <= input.value);
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input)) {
            const $report = require("typia/lib/functional/$report").$report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is TypeTagAtomicUnion => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ((Array.isArray(input.value) ||
                    $report(_exceptionable, {
                      path: _path + ".value",
                      expected: "Array<TypeTagAtomicUnion.Type>",
                      value: input.value,
                    })) &&
                    input.value
                      .map(
                        (elem: any, _index1: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path: _path + ".value[" + _index1 + "]",
                              expected: "TypeTagAtomicUnion.Type",
                              value: elem,
                            })) &&
                            $vo1(
                              elem,
                              _path + ".value[" + _index1 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path: _path + ".value[" + _index1 + "]",
                            expected: "TypeTagAtomicUnion.Type",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".value",
                      expected: "Array<TypeTagAtomicUnion.Type>",
                      value: input.value,
                    }),
                ].every((flag: boolean) => flag);
              const $vo1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ("string" === typeof input.value &&
                    (3 <= input.value.length ||
                      $report(_exceptionable, {
                        path: _path + ".value",
                        expected: "string & MinLength<3>",
                        value: input.value,
                      })) &&
                    (input.value.length <= 7 ||
                      $report(_exceptionable, {
                        path: _path + ".value",
                        expected: "string & MaxLength<7>",
                        value: input.value,
                      }))) ||
                    ("number" === typeof input.value &&
                      (Number.isFinite(input.value) ||
                        $report(_exceptionable, {
                          path: _path + ".value",
                          expected: "number",
                          value: input.value,
                        })) &&
                      (3 <= input.value ||
                        $report(_exceptionable, {
                          path: _path + ".value",
                          expected: "number & Minimum<3>",
                          value: input.value,
                        }))) ||
                    $report(_exceptionable, {
                      path: _path + ".value",
                      expected:
                        "((number & Minimum<3>) | (string & MinLength<3> & MaxLength<7>))",
                      value: input.value,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "TypeTagAtomicUnion",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "TypeTagAtomicUnion",
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
          input: TypeTagAtomicUnion,
        ): typia.CamelCase<TypeTagAtomicUnion> => {
          const $io1 = (input: any): boolean =>
            ("string" === typeof input.value &&
              3 <= input.value.length &&
              input.value.length <= 7) ||
            ("number" === typeof input.value && 3 <= input.value);
          const $cp0 = (input: any) =>
            input.map((elem: any) =>
              "object" === typeof elem && null !== elem
                ? $co1(elem)
                : (elem as any),
            );
          const $co0 = (input: any): any => ({
            value: Array.isArray(input.value)
              ? $cp0(input.value)
              : (input.value as any),
          });
          const $co1 = (input: any): any => ({
            value: input.value as any,
          });
          return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
        };
        const output = validate(input) as any;
        if (output.success) output.data = general(input);
        return output;
      })(input),
    assert: (input: any): typia.CamelCase<TypeTagAtomicUnion> => {
      const __is = (
        input: any,
      ): input is typia.CamelCase<TypeTagAtomicUnion> => {
        const $io0 = (input: any): boolean =>
          Array.isArray(input.value) &&
          input.value.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io1(elem),
          );
        const $io1 = (input: any): boolean =>
          ("string" === typeof input.value &&
            3 <= input.value.length &&
            input.value.length <= 7) ||
          ("number" === typeof input.value &&
            Number.isFinite(input.value) &&
            3 <= input.value);
        return "object" === typeof input && null !== input && $io0(input);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.CamelCase<TypeTagAtomicUnion> => {
          // @ts-ignore;
          declare const require: (lib: string) => any;
          const $guard = require("typia/lib/functional/$guard").$guard(
            "typia.createAssert",
          );
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ((Array.isArray(input.value) ||
              $guard(_exceptionable, {
                path: _path + ".value",
                expected: "Array<TypeTagAtomicUnion.Type>",
                value: input.value,
              })) &&
              input.value.every(
                (elem: any, _index1: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(_exceptionable, {
                      path: _path + ".value[" + _index1 + "]",
                      expected: "TypeTagAtomicUnion.Type",
                      value: elem,
                    })) &&
                    $ao1(
                      elem,
                      _path + ".value[" + _index1 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(_exceptionable, {
                    path: _path + ".value[" + _index1 + "]",
                    expected: "TypeTagAtomicUnion.Type",
                    value: elem,
                  }),
              )) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "Array<TypeTagAtomicUnion.Type>",
              value: input.value,
            });
          const $ao1 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("string" === typeof input.value &&
              (3 <= input.value.length ||
                $guard(_exceptionable, {
                  path: _path + ".value",
                  expected: "string & MinLength<3>",
                  value: input.value,
                })) &&
              (input.value.length <= 7 ||
                $guard(_exceptionable, {
                  path: _path + ".value",
                  expected: "string & MaxLength<7>",
                  value: input.value,
                }))) ||
            ("number" === typeof input.value &&
              (Number.isFinite(input.value) ||
                $guard(_exceptionable, {
                  path: _path + ".value",
                  expected: "number",
                  value: input.value,
                })) &&
              (3 <= input.value ||
                $guard(_exceptionable, {
                  path: _path + ".value",
                  expected: "number & Minimum<3>",
                  value: input.value,
                }))) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected:
                "((number & Minimum<3>) | (string & MinLength<3> & MaxLength<7>))",
              value: input.value,
            });
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(true, {
                path: _path + "",
                expected: "TypeTagAtomicUnion",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "TypeTagAtomicUnion",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    },
  });
