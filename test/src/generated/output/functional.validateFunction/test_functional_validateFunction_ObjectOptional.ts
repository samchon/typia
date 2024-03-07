import typia from "typia";
import { _test_functional_validateFunction } from "../../../internal/_test_functional_validateFunction";
import { ObjectOptional } from "../../../structures/ObjectOptional";
export const test_functional_validateFunction_ObjectOptional =
  _test_functional_validateFunction("ObjectOptional")(ObjectOptional)(
    (p: (input: ObjectOptional) => ObjectOptional) =>
      (input: ObjectOptional): import("typia").IValidation<ObjectOptional> => {
        const paramResults = [
          ((input: any): typia.IValidation<ObjectOptional> => {
            const errors = [] as any[];
            const __is = (input: any): input is ObjectOptional => {
              const $io0 = (input: any): boolean =>
                (undefined === input.id || "string" === typeof input.id) &&
                (undefined === input.name || "string" === typeof input.name) &&
                (undefined === input.email ||
                  "string" === typeof input.email) &&
                (undefined === input.sequence ||
                  ("number" === typeof input.sequence &&
                    Number.isFinite(input.sequence)));
              return (
                "object" === typeof input &&
                null !== input &&
                false === Array.isArray(input) &&
                $io0(input)
              );
            };
            if (false === __is(input)) {
              const $report = (typia.functional.validateFunction as any).report(
                errors,
              );
              ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): input is ObjectOptional => {
                const $vo0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    undefined === input.id ||
                      "string" === typeof input.id ||
                      $report(_exceptionable, {
                        path: _path + ".id",
                        expected: "(string | undefined)",
                        value: input.id,
                      }),
                    undefined === input.name ||
                      "string" === typeof input.name ||
                      $report(_exceptionable, {
                        path: _path + ".name",
                        expected: "(string | undefined)",
                        value: input.name,
                      }),
                    undefined === input.email ||
                      "string" === typeof input.email ||
                      $report(_exceptionable, {
                        path: _path + ".email",
                        expected: "(string | undefined)",
                        value: input.email,
                      }),
                    undefined === input.sequence ||
                      ("number" === typeof input.sequence &&
                        Number.isFinite(input.sequence)) ||
                      $report(_exceptionable, {
                        path: _path + ".sequence",
                        expected: "(number | undefined)",
                        value: input.sequence,
                      }),
                  ].every((flag: boolean) => flag);
                return (
                  ((("object" === typeof input &&
                    null !== input &&
                    false === Array.isArray(input)) ||
                    $report(true, {
                      path: _path + "",
                      expected: "ObjectOptional",
                      value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectOptional",
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
        const result = ((input: any): typia.IValidation<ObjectOptional> => {
          const errors = [] as any[];
          const __is = (input: any): input is ObjectOptional => {
            const $io0 = (input: any): boolean =>
              (undefined === input.id || "string" === typeof input.id) &&
              (undefined === input.name || "string" === typeof input.name) &&
              (undefined === input.email || "string" === typeof input.email) &&
              (undefined === input.sequence ||
                ("number" === typeof input.sequence &&
                  Number.isFinite(input.sequence)));
            return (
              "object" === typeof input &&
              null !== input &&
              false === Array.isArray(input) &&
              $io0(input)
            );
          };
          if (false === __is(input)) {
            const $report = (typia.functional.validateFunction as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectOptional => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  undefined === input.id ||
                    "string" === typeof input.id ||
                    $report(_exceptionable, {
                      path: _path + ".id",
                      expected: "(string | undefined)",
                      value: input.id,
                    }),
                  undefined === input.name ||
                    "string" === typeof input.name ||
                    $report(_exceptionable, {
                      path: _path + ".name",
                      expected: "(string | undefined)",
                      value: input.name,
                    }),
                  undefined === input.email ||
                    "string" === typeof input.email ||
                    $report(_exceptionable, {
                      path: _path + ".email",
                      expected: "(string | undefined)",
                      value: input.email,
                    }),
                  undefined === input.sequence ||
                    ("number" === typeof input.sequence &&
                      Number.isFinite(input.sequence)) ||
                    $report(_exceptionable, {
                      path: _path + ".sequence",
                      expected: "(number | undefined)",
                      value: input.sequence,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input &&
                  null !== input &&
                  false === Array.isArray(input)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectOptional",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectOptional",
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
