import typia from "typia";
import { _test_functional_validateEqualsFunction } from "../../../internal/_test_functional_validateEqualsFunction";
import { ClassClosure } from "../../../structures/ClassClosure";
export const test_functional_validateEqualsFunction_ClassClosure =
  _test_functional_validateEqualsFunction("ClassClosure")(ClassClosure)(
    (p: (input: ClassClosure) => ClassClosure) =>
      (input: ClassClosure): import("typia").IValidation<ClassClosure> => {
        const paramResults = [
          ((input: any): typia.IValidation<ClassClosure.Something> => {
            const errors = [] as any[];
            const __is = (
              input: any,
              _exceptionable: boolean = true,
            ): input is ClassClosure.Something => {
              const $io0 = (
                input: any,
                _exceptionable: boolean = true,
              ): boolean =>
                "string" === typeof input.id &&
                "something" === input.type &&
                "function" === typeof input.closure &&
                (3 === Object.keys(input).length ||
                  Object.keys(input).every((key: any) => {
                    if (
                      ["id", "type", "closure"].some(
                        (prop: any) => key === prop,
                      )
                    )
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
                typia.functional.validateEqualsFunction as any
              ).report(errors);
              ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): input is ClassClosure.Something => {
                const $join = (typia.functional.validateEqualsFunction as any)
                  .join;
                const $vo0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    "string" === typeof input.id ||
                      $report(_exceptionable, {
                        path: _path + ".id",
                        expected: "string",
                        value: input.id,
                      }),
                    "something" === input.type ||
                      $report(_exceptionable, {
                        path: _path + ".type",
                        expected: '"something"',
                        value: input.type,
                      }),
                    "function" === typeof input.closure ||
                      $report(_exceptionable, {
                        path: _path + ".closure",
                        expected: "unknown",
                        value: input.closure,
                      }),
                    3 === Object.keys(input).length ||
                      false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          if (
                            ["id", "type", "closure"].some(
                              (prop: any) => key === prop,
                            )
                          )
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
                      expected: "ClassClosure.Something",
                      value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ClassClosure.Something",
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
        const result = ((
          input: any,
        ): typia.IValidation<ClassClosure.Something> => {
          const errors = [] as any[];
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ClassClosure.Something => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "string" === typeof input.id &&
              "something" === input.type &&
              "function" === typeof input.closure &&
              (3 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    ["id", "type", "closure"].some((prop: any) => key === prop)
                  )
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
              typia.functional.validateEqualsFunction as any
            ).report(errors);
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ClassClosure.Something => {
              const $join = (typia.functional.validateEqualsFunction as any)
                .join;
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  "string" === typeof input.id ||
                    $report(_exceptionable, {
                      path: _path + ".id",
                      expected: "string",
                      value: input.id,
                    }),
                  "something" === input.type ||
                    $report(_exceptionable, {
                      path: _path + ".type",
                      expected: '"something"',
                      value: input.type,
                    }),
                  "function" === typeof input.closure ||
                    $report(_exceptionable, {
                      path: _path + ".closure",
                      expected: "unknown",
                      value: input.closure,
                    }),
                  3 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input)
                      .map((key: any) => {
                        if (
                          ["id", "type", "closure"].some(
                            (prop: any) => key === prop,
                          )
                        )
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
                    expected: "ClassClosure.Something",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ClassClosure.Something",
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
