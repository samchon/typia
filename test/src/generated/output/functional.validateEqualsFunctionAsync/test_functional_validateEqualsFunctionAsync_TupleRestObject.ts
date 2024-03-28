import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../../internal/_test_functional_validateEqualsFunctionAsync";
import { TupleRestObject } from "../../../structures/TupleRestObject";

export const test_functional_validateEqualsFunctionAsync_TupleRestObject =
  _test_functional_validateEqualsFunctionAsync("TupleRestObject")(
    TupleRestObject,
  )(
    (p: (input: TupleRestObject) => Promise<TupleRestObject>) =>
      async (
        input: TupleRestObject,
      ): Promise<import("typia").IValidation<TupleRestObject>> => {
        const paramResults = [
          ((input: any): typia.IValidation<TupleRestObject> => {
            const errors = [] as any[];
            const __is = (
              input: any,
              _exceptionable: boolean = true,
            ): input is TupleRestObject => {
              const $io0 = (
                input: any,
                _exceptionable: boolean = true,
              ): boolean =>
                "string" === typeof input.value &&
                (1 === Object.keys(input).length ||
                  Object.keys(input).every((key: any) => {
                    if (["value"].some((prop: any) => key === prop))
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                  }));
              return (
                Array.isArray(input) &&
                "boolean" === typeof input[0] &&
                "number" === typeof input[1] &&
                Number.isFinite(input[1]) &&
                Array.isArray(input.slice(2)) &&
                input
                  .slice(2)
                  .every(
                    (elem: any, _index1: number) =>
                      "object" === typeof elem &&
                      null !== elem &&
                      $io0(elem, true),
                  )
              );
            };
            if (false === __is(input)) {
              const $report = (
                typia.functional.validateEqualsFunction as any
              ).report(errors);
              ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): input is TupleRestObject => {
                const $join = (typia.functional.validateEqualsFunction as any)
                  .join;
                const $vo0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    "string" === typeof input.value ||
                      $report(_exceptionable, {
                        path: _path + ".value",
                        expected: "string",
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
                  ((Array.isArray(input) ||
                    $report(true, {
                      path: _path + "",
                      expected: "TupleRestObject",
                      value: input,
                    })) &&
                    [
                      "boolean" === typeof input[0] ||
                        $report(true, {
                          path: _path + "[0]",
                          expected: "boolean",
                          value: input[0],
                        }),
                      ("number" === typeof input[1] &&
                        Number.isFinite(input[1])) ||
                        $report(true, {
                          path: _path + "[1]",
                          expected: "number",
                          value: input[1],
                        }),
                    ].every((flag: boolean) => flag) &&
                    (((Array.isArray(input.slice(2)) ||
                      $report(true, {
                        path: _path + "",
                        expected: "...TupleRestObject.IObject",
                        value: input.slice(2),
                      })) &&
                      input
                        .slice(2)
                        .map(
                          (elem: any, _index1: number) =>
                            ((("object" === typeof elem && null !== elem) ||
                              $report(true, {
                                path: _path + "[" + (2 + _index1) + "]",
                                expected: "TupleRestObject.IObject",
                                value: elem,
                              })) &&
                              $vo0(
                                elem,
                                _path + "[" + (2 + _index1) + "]",
                                true,
                              )) ||
                            $report(true, {
                              path: _path + "[" + (2 + _index1) + "]",
                              expected: "TupleRestObject.IObject",
                              value: elem,
                            }),
                        )
                        .every((flag: boolean) => flag)) ||
                      $report(true, {
                        path: _path + "",
                        expected: "...TupleRestObject.IObject",
                        value: input.slice(2),
                      }))) ||
                  $report(true, {
                    path: _path + "",
                    expected: "TupleRestObject",
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
        const result = ((input: any): typia.IValidation<TupleRestObject> => {
          const errors = [] as any[];
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is TupleRestObject => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "string" === typeof input.value &&
              (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["value"].some((prop: any) => key === prop)) return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            return (
              Array.isArray(input) &&
              "boolean" === typeof input[0] &&
              "number" === typeof input[1] &&
              Number.isFinite(input[1]) &&
              Array.isArray(input.slice(2)) &&
              input
                .slice(2)
                .every(
                  (elem: any, _index1: number) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    $io0(elem, true),
                )
            );
          };
          if (false === __is(input)) {
            const $report = (
              typia.functional.validateEqualsFunction as any
            ).report(errors);
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is TupleRestObject => {
              const $join = (typia.functional.validateEqualsFunction as any)
                .join;
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  "string" === typeof input.value ||
                    $report(_exceptionable, {
                      path: _path + ".value",
                      expected: "string",
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
                ((Array.isArray(input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "TupleRestObject",
                    value: input,
                  })) &&
                  [
                    "boolean" === typeof input[0] ||
                      $report(true, {
                        path: _path + "[0]",
                        expected: "boolean",
                        value: input[0],
                      }),
                    ("number" === typeof input[1] &&
                      Number.isFinite(input[1])) ||
                      $report(true, {
                        path: _path + "[1]",
                        expected: "number",
                        value: input[1],
                      }),
                  ].every((flag: boolean) => flag) &&
                  (((Array.isArray(input.slice(2)) ||
                    $report(true, {
                      path: _path + "",
                      expected: "...TupleRestObject.IObject",
                      value: input.slice(2),
                    })) &&
                    input
                      .slice(2)
                      .map(
                        (elem: any, _index1: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(true, {
                              path: _path + "[" + (2 + _index1) + "]",
                              expected: "TupleRestObject.IObject",
                              value: elem,
                            })) &&
                            $vo0(
                              elem,
                              _path + "[" + (2 + _index1) + "]",
                              true,
                            )) ||
                          $report(true, {
                            path: _path + "[" + (2 + _index1) + "]",
                            expected: "TupleRestObject.IObject",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(true, {
                      path: _path + "",
                      expected: "...TupleRestObject.IObject",
                      value: input.slice(2),
                    }))) ||
                $report(true, {
                  path: _path + "",
                  expected: "TupleRestObject",
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
        })(await p(input));
        if (!result.success)
          result.errors = result.errors.map((error: any) => ({
            ...error,
            path: error.path.replace("$input", "$input.return"),
          }));
        return result;
      },
  );
