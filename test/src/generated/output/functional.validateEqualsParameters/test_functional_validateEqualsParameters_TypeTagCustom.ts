import typia from "typia";
import { _test_functional_validateEqualsParameters } from "../../../internal/_test_functional_validateEqualsParameters";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";
export const test_functional_validateEqualsParameters_TypeTagCustom =
  _test_functional_validateEqualsParameters("TypeTagCustom")(TypeTagCustom)(
    (p: (input: TypeTagCustom) => TypeTagCustom) =>
      (input: TypeTagCustom): import("typia").IValidation<TypeTagCustom> => {
        const paramResults = [
          ((input: any): typia.IValidation<TypeTagCustom> => {
            const errors = [] as any[];
            const __is = (
              input: any,
              _exceptionable: boolean = true,
            ): input is TypeTagCustom => {
              const $io0 = (
                input: any,
                _exceptionable: boolean = true,
              ): boolean =>
                "string" === typeof input.id &&
                /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                  input.id,
                ) &&
                "string" === typeof input.dollar &&
                input.dollar[0] === "$" &&
                !isNaN(Number(input.dollar.substring(1).split(",").join(""))) &&
                "string" === typeof input.postfix &&
                input.postfix.endsWith("abcd") &&
                "number" === typeof input.powerOf &&
                Number.isFinite(input.powerOf) &&
                (() => {
                  const denominator: number = Math.log(2);
                  const value: number = Math.log(input.powerOf) / denominator;
                  return Math.abs(value - Math.round(value)) < 1e-8;
                })() &&
                (4 === Object.keys(input).length ||
                  Object.keys(input).every((key: any) => {
                    if (
                      ["id", "dollar", "postfix", "powerOf"].some(
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
                typia.functional.validateEqualsParameters as any
              ).report(errors);
              ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): input is TypeTagCustom => {
                const $join = (typia.functional.validateEqualsParameters as any)
                  .join;
                const $vo0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    ("string" === typeof input.id &&
                      (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                        input.id,
                      ) ||
                        $report(_exceptionable, {
                          path: _path + ".id",
                          expected: 'string & Format<"uuid">',
                          value: input.id,
                        }))) ||
                      $report(_exceptionable, {
                        path: _path + ".id",
                        expected: '(string & Format<"uuid">)',
                        value: input.id,
                      }),
                    ("string" === typeof input.dollar &&
                      ((input.dollar[0] === "$" &&
                        !isNaN(
                          Number(input.dollar.substring(1).split(",").join("")),
                        )) ||
                        $report(_exceptionable, {
                          path: _path + ".dollar",
                          expected: "string & Dollar",
                          value: input.dollar,
                        }))) ||
                      $report(_exceptionable, {
                        path: _path + ".dollar",
                        expected: "(string & Dollar)",
                        value: input.dollar,
                      }),
                    ("string" === typeof input.postfix &&
                      (input.postfix.endsWith("abcd") ||
                        $report(_exceptionable, {
                          path: _path + ".postfix",
                          expected: 'string & Postfix<"abcd">',
                          value: input.postfix,
                        }))) ||
                      $report(_exceptionable, {
                        path: _path + ".postfix",
                        expected: '(string & Postfix<"abcd">)',
                        value: input.postfix,
                      }),
                    ("number" === typeof input.powerOf &&
                      (Number.isFinite(input.powerOf) ||
                        $report(_exceptionable, {
                          path: _path + ".powerOf",
                          expected: "number",
                          value: input.powerOf,
                        })) &&
                      ((() => {
                        const denominator: number = Math.log(2);
                        const value: number =
                          Math.log(input.powerOf) / denominator;
                        return Math.abs(value - Math.round(value)) < 1e-8;
                      })() ||
                        $report(_exceptionable, {
                          path: _path + ".powerOf",
                          expected: "number & PowerOf<2>",
                          value: input.powerOf,
                        }))) ||
                      $report(_exceptionable, {
                        path: _path + ".powerOf",
                        expected: "(number & PowerOf<2>)",
                        value: input.powerOf,
                      }),
                    4 === Object.keys(input).length ||
                      false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          if (
                            ["id", "dollar", "postfix", "powerOf"].some(
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
                      expected: "TypeTagCustom",
                      value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "TypeTagCustom",
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
