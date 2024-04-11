import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../../internal/_test_functional_validateEqualsParametersAsync";
import { ObjectHttpConstant } from "../../../structures/ObjectHttpConstant";

export const test_functional_validateEqualsParametersAsync_ObjectHttpConstant =
  _test_functional_validateEqualsParametersAsync("ObjectHttpConstant")(
    ObjectHttpConstant,
  )(
    (p: (input: ObjectHttpConstant) => Promise<ObjectHttpConstant>) =>
      async (
        input: ObjectHttpConstant,
      ): Promise<import("typia").IValidation<ObjectHttpConstant>> => {
        const paramResults = [
          ((input: any): typia.IValidation<ObjectHttpConstant> => {
            const errors = [] as any[];
            const __is = (
              input: any,
              _exceptionable: boolean = true,
            ): input is ObjectHttpConstant => {
              const $io0 = (
                input: any,
                _exceptionable: boolean = true,
              ): boolean =>
                false === input.boolean &&
                (BigInt(1) === input.bigint || BigInt(99) === input.bigint) &&
                (2 === input.number || 98 === input.number) &&
                ("something" === input.string ||
                  "three" === input.string ||
                  "ninety-seven" === input.string) &&
                "string" === typeof input.template &&
                RegExp(/^abcd_(.*)/).test(input.template) &&
                (5 === Object.keys(input).length ||
                  Object.keys(input).every((key: any) => {
                    if (
                      [
                        "boolean",
                        "bigint",
                        "number",
                        "string",
                        "template",
                      ].some((prop: any) => key === prop)
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
              ): input is ObjectHttpConstant => {
                const $join = (typia.functional.validateEqualsParameters as any)
                  .join;
                const $vo0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    false === input.boolean ||
                      $report(_exceptionable, {
                        path: _path + ".boolean",
                        expected: "false",
                        value: input.boolean,
                      }),
                    BigInt(1) === input.bigint ||
                      BigInt(99) === input.bigint ||
                      $report(_exceptionable, {
                        path: _path + ".bigint",
                        expected: "(1 | 99)",
                        value: input.bigint,
                      }),
                    2 === input.number ||
                      98 === input.number ||
                      $report(_exceptionable, {
                        path: _path + ".number",
                        expected: "(2 | 98)",
                        value: input.number,
                      }),
                    "something" === input.string ||
                      "three" === input.string ||
                      "ninety-seven" === input.string ||
                      $report(_exceptionable, {
                        path: _path + ".string",
                        expected: '("ninety-seven" | "something" | "three")',
                        value: input.string,
                      }),
                    ("string" === typeof input.template &&
                      RegExp(/^abcd_(.*)/).test(input.template)) ||
                      $report(_exceptionable, {
                        path: _path + ".template",
                        expected: "`[object Object]${string}`",
                        value: input.template,
                      }),
                    5 === Object.keys(input).length ||
                      false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          if (
                            [
                              "boolean",
                              "bigint",
                              "number",
                              "string",
                              "template",
                            ].some((prop: any) => key === prop)
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
                      expected: "ObjectHttpConstant",
                      value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectHttpConstant",
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
          data: await p(input),
          errors: [],
        };
      },
  );
