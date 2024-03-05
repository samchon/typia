import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../../internal/_test_functional_validateEqualsParameters";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";

export const test_functional_validateEqualsParameters_CommentTagAtomicUnion =
  _test_functional_validateEqualsParameters("CommentTagAtomicUnion")(
    CommentTagAtomicUnion,
  )(
    (p: (input: CommentTagAtomicUnion) => CommentTagAtomicUnion) =>
      (
        input: CommentTagAtomicUnion,
      ): import("typia").IValidation<CommentTagAtomicUnion> => {
        const paramResults = [
          ((input: any): typia.IValidation<CommentTagAtomicUnion> => {
            const errors = [] as any[];
            const __is = (
              input: any,
              _exceptionable: boolean = true,
            ): input is CommentTagAtomicUnion => {
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
                    if (["value"].some((prop: any) => key === prop))
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                  }));
              const $io1 = (
                input: any,
                _exceptionable: boolean = true,
              ): boolean =>
                (("string" === typeof input.value &&
                  3 <= input.value.length &&
                  input.value.length <= 7) ||
                  ("number" === typeof input.value &&
                    Number.isFinite(input.value) &&
                    3 <= input.value)) &&
                (1 === Object.keys(input).length ||
                  Object.keys(input).every((key: any) => {
                    if (["value"].some((prop: any) => key === prop))
                      return true;
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
                typia.functional.validateEqualsParameters as any
              ).report(errors);
              ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): input is CommentTagAtomicUnion => {
                const $join = (typia.functional.validateEqualsParameters as any)
                  .join;
                const $vo0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    ((Array.isArray(input.value) ||
                      $report(_exceptionable, {
                        path: _path + ".value",
                        expected: "Array<CommentTagAtomicUnion.Type>",
                        value: input.value,
                      })) &&
                      input.value
                        .map(
                          (elem: any, _index1: number) =>
                            ((("object" === typeof elem && null !== elem) ||
                              $report(_exceptionable, {
                                path: _path + ".value[" + _index1 + "]",
                                expected: "CommentTagAtomicUnion.Type",
                                value: elem,
                              })) &&
                              $vo1(
                                elem,
                                _path + ".value[" + _index1 + "]",
                                true && _exceptionable,
                              )) ||
                            $report(_exceptionable, {
                              path: _path + ".value[" + _index1 + "]",
                              expected: "CommentTagAtomicUnion.Type",
                              value: elem,
                            }),
                        )
                        .every((flag: boolean) => flag)) ||
                      $report(_exceptionable, {
                        path: _path + ".value",
                        expected: "Array<CommentTagAtomicUnion.Type>",
                        value: input.value,
                      }),
                    1 === Object.keys(input).length ||
                      false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          if (["value"].some((prop: any) => key === prop))
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
                    1 === Object.keys(input).length ||
                      false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          if (["value"].some((prop: any) => key === prop))
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
                      expected: "CommentTagAtomicUnion",
                      value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "CommentTagAtomicUnion",
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
        return {
          success: true,
          data: p(input),
          errors: [],
        };
      },
  );
