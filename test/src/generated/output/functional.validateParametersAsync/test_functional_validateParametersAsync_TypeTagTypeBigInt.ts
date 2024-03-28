import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../../internal/_test_functional_validateParametersAsync";
import { TypeTagTypeBigInt } from "../../../structures/TypeTagTypeBigInt";

export const test_functional_validateParametersAsync_TypeTagTypeBigInt =
  _test_functional_validateParametersAsync("TypeTagTypeBigInt")(
    TypeTagTypeBigInt,
  )(
    (p: (input: TypeTagTypeBigInt) => Promise<TypeTagTypeBigInt>) =>
      async (
        input: TypeTagTypeBigInt,
      ): Promise<import("typia").IValidation<TypeTagTypeBigInt>> => {
        const paramResults = [
          ((input: any): typia.IValidation<TypeTagTypeBigInt> => {
            const errors = [] as any[];
            const __is = (input: any): input is TypeTagTypeBigInt => {
              return (
                "object" === typeof input &&
                null !== input &&
                "bigint" === typeof (input as any).in64 &&
                "bigint" === typeof (input as any).uint64 &&
                BigInt(0) <= (input as any).uint64
              );
            };
            if (false === __is(input)) {
              const $report = (
                typia.functional.validateParameters as any
              ).report(errors);
              ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): input is TypeTagTypeBigInt => {
                const $vo0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    "bigint" === typeof input.in64 ||
                      $report(_exceptionable, {
                        path: _path + ".in64",
                        expected: "bigint",
                        value: input.in64,
                      }),
                    ("bigint" === typeof input.uint64 &&
                      (BigInt(0) <= input.uint64 ||
                        $report(_exceptionable, {
                          path: _path + ".uint64",
                          expected: 'bigint & Type<"uint64">',
                          value: input.uint64,
                        }))) ||
                      $report(_exceptionable, {
                        path: _path + ".uint64",
                        expected: '(bigint & Type<"uint64">)',
                        value: input.uint64,
                      }),
                  ].every((flag: boolean) => flag);
                return (
                  ((("object" === typeof input && null !== input) ||
                    $report(true, {
                      path: _path + "",
                      expected: "TypeTagTypeBigInt",
                      value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "TypeTagTypeBigInt",
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
