import typia from "typia";
import { _test_functional_validateFunctionAsync } from "../../../internal/_test_functional_validateFunctionAsync";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";
export const test_functional_validateFunctionAsync_ObjectRecursive =
  _test_functional_validateFunctionAsync("ObjectRecursive")(ObjectRecursive)(
    (p: (input: ObjectRecursive) => Promise<ObjectRecursive>) =>
      async (
        input: ObjectRecursive,
      ): Promise<import("typia").IValidation<ObjectRecursive>> => {
        const paramResults = [
          ((input: any): typia.IValidation<ObjectRecursive.IDepartment> => {
            const errors = [] as any[];
            const __is = (input: any): input is ObjectRecursive.IDepartment => {
              const $io0 = (input: any): boolean =>
                (null === input.parent ||
                  ("object" === typeof input.parent &&
                    null !== input.parent &&
                    $io0(input.parent))) &&
                "number" === typeof input.id &&
                Number.isFinite(input.id) &&
                "string" === typeof input.code &&
                "string" === typeof input.name &&
                "number" === typeof input.sequence &&
                Number.isFinite(input.sequence) &&
                "object" === typeof input.created_at &&
                null !== input.created_at &&
                "number" === typeof (input.created_at as any).time &&
                Number.isFinite((input.created_at as any).time) &&
                "number" === typeof (input.created_at as any).zone &&
                Number.isFinite((input.created_at as any).zone);
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
              ): input is ObjectRecursive.IDepartment => {
                const $vo0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    null === input.parent ||
                      ((("object" === typeof input.parent &&
                        null !== input.parent) ||
                        $report(_exceptionable, {
                          path: _path + ".parent",
                          expected: "(ObjectRecursive.IDepartment | null)",
                          value: input.parent,
                        })) &&
                        $vo0(
                          input.parent,
                          _path + ".parent",
                          true && _exceptionable,
                        )) ||
                      $report(_exceptionable, {
                        path: _path + ".parent",
                        expected: "(ObjectRecursive.IDepartment | null)",
                        value: input.parent,
                      }),
                    ("number" === typeof input.id &&
                      Number.isFinite(input.id)) ||
                      $report(_exceptionable, {
                        path: _path + ".id",
                        expected: "number",
                        value: input.id,
                      }),
                    "string" === typeof input.code ||
                      $report(_exceptionable, {
                        path: _path + ".code",
                        expected: "string",
                        value: input.code,
                      }),
                    "string" === typeof input.name ||
                      $report(_exceptionable, {
                        path: _path + ".name",
                        expected: "string",
                        value: input.name,
                      }),
                    ("number" === typeof input.sequence &&
                      Number.isFinite(input.sequence)) ||
                      $report(_exceptionable, {
                        path: _path + ".sequence",
                        expected: "number",
                        value: input.sequence,
                      }),
                    ((("object" === typeof input.created_at &&
                      null !== input.created_at) ||
                      $report(_exceptionable, {
                        path: _path + ".created_at",
                        expected: "ObjectRecursive.ITimestamp",
                        value: input.created_at,
                      })) &&
                      $vo1(
                        input.created_at,
                        _path + ".created_at",
                        true && _exceptionable,
                      )) ||
                      $report(_exceptionable, {
                        path: _path + ".created_at",
                        expected: "ObjectRecursive.ITimestamp",
                        value: input.created_at,
                      }),
                  ].every((flag: boolean) => flag);
                const $vo1 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    ("number" === typeof input.time &&
                      Number.isFinite(input.time)) ||
                      $report(_exceptionable, {
                        path: _path + ".time",
                        expected: "number",
                        value: input.time,
                      }),
                    ("number" === typeof input.zone &&
                      Number.isFinite(input.zone)) ||
                      $report(_exceptionable, {
                        path: _path + ".zone",
                        expected: "number",
                        value: input.zone,
                      }),
                  ].every((flag: boolean) => flag);
                return (
                  ((("object" === typeof input && null !== input) ||
                    $report(true, {
                      path: _path + "",
                      expected: "ObjectRecursive.IDepartment",
                      value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectRecursive.IDepartment",
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
        ): typia.IValidation<ObjectRecursive.IDepartment> => {
          const errors = [] as any[];
          const __is = (input: any): input is ObjectRecursive.IDepartment => {
            const $io0 = (input: any): boolean =>
              (null === input.parent ||
                ("object" === typeof input.parent &&
                  null !== input.parent &&
                  $io0(input.parent))) &&
              "number" === typeof input.id &&
              Number.isFinite(input.id) &&
              "string" === typeof input.code &&
              "string" === typeof input.name &&
              "number" === typeof input.sequence &&
              Number.isFinite(input.sequence) &&
              "object" === typeof input.created_at &&
              null !== input.created_at &&
              "number" === typeof (input.created_at as any).time &&
              Number.isFinite((input.created_at as any).time) &&
              "number" === typeof (input.created_at as any).zone &&
              Number.isFinite((input.created_at as any).zone);
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
            ): input is ObjectRecursive.IDepartment => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  null === input.parent ||
                    ((("object" === typeof input.parent &&
                      null !== input.parent) ||
                      $report(_exceptionable, {
                        path: _path + ".parent",
                        expected: "(ObjectRecursive.IDepartment | null)",
                        value: input.parent,
                      })) &&
                      $vo0(
                        input.parent,
                        _path + ".parent",
                        true && _exceptionable,
                      )) ||
                    $report(_exceptionable, {
                      path: _path + ".parent",
                      expected: "(ObjectRecursive.IDepartment | null)",
                      value: input.parent,
                    }),
                  ("number" === typeof input.id && Number.isFinite(input.id)) ||
                    $report(_exceptionable, {
                      path: _path + ".id",
                      expected: "number",
                      value: input.id,
                    }),
                  "string" === typeof input.code ||
                    $report(_exceptionable, {
                      path: _path + ".code",
                      expected: "string",
                      value: input.code,
                    }),
                  "string" === typeof input.name ||
                    $report(_exceptionable, {
                      path: _path + ".name",
                      expected: "string",
                      value: input.name,
                    }),
                  ("number" === typeof input.sequence &&
                    Number.isFinite(input.sequence)) ||
                    $report(_exceptionable, {
                      path: _path + ".sequence",
                      expected: "number",
                      value: input.sequence,
                    }),
                  ((("object" === typeof input.created_at &&
                    null !== input.created_at) ||
                    $report(_exceptionable, {
                      path: _path + ".created_at",
                      expected: "ObjectRecursive.ITimestamp",
                      value: input.created_at,
                    })) &&
                    $vo1(
                      input.created_at,
                      _path + ".created_at",
                      true && _exceptionable,
                    )) ||
                    $report(_exceptionable, {
                      path: _path + ".created_at",
                      expected: "ObjectRecursive.ITimestamp",
                      value: input.created_at,
                    }),
                ].every((flag: boolean) => flag);
              const $vo1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ("number" === typeof input.time &&
                    Number.isFinite(input.time)) ||
                    $report(_exceptionable, {
                      path: _path + ".time",
                      expected: "number",
                      value: input.time,
                    }),
                  ("number" === typeof input.zone &&
                    Number.isFinite(input.zone)) ||
                    $report(_exceptionable, {
                      path: _path + ".zone",
                      expected: "number",
                      value: input.zone,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectRecursive.IDepartment",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectRecursive.IDepartment",
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
