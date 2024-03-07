import typia from "typia";
import { _test_functional_validateFunction } from "../../../internal/_test_functional_validateFunction";
import { TypeTagAtomicUnion } from "../../../structures/TypeTagAtomicUnion";
export const test_functional_validateFunction_TypeTagAtomicUnion =
  _test_functional_validateFunction("TypeTagAtomicUnion")(TypeTagAtomicUnion)(
    (p: (input: TypeTagAtomicUnion) => TypeTagAtomicUnion) =>
      (
        input: TypeTagAtomicUnion,
      ): import("typia").IValidation<TypeTagAtomicUnion> => {
        const paramResults = [
          ((input: any): typia.IValidation<TypeTagAtomicUnion> => {
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
              const $report = (typia.functional.validateFunction as any).report(
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
          })(input) as import("typia").IValidation.IFailure,
        ].filter((r: any) => false === r.success);
        if (paramResults.length > 0)
          return {
            success: false,
            errors: paramResults
              .map((r: any, i: any) =>
                r.errors.map((error: any) => ({
                  ...error,
                  path: error.path.replace("$input", `$input.parameters[${i}]`),
                })),
              )
              .flat(),
          };
        const result = ((input: any): typia.IValidation<TypeTagAtomicUnion> => {
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
            const $report = (typia.functional.validateFunction as any).report(
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
        })(p(input));
        if (!result.success)
          result.errors = result.errors.map((error: any) => ({
            ...error,
            path: error.path.replace("$input", "$input.return"),
          }));
        return result;
      },
  );
