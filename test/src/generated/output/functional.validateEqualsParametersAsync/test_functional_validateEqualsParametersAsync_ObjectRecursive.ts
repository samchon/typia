import typia from "typia";
import { _test_functional_validateEqualsParametersAsync } from "../../../internal/_test_functional_validateEqualsParametersAsync";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";
export const test_functional_validateEqualsParametersAsync_ObjectRecursive =
  _test_functional_validateEqualsParametersAsync("ObjectRecursive")(
    ObjectRecursive,
  )(
    (p: (input: ObjectRecursive) => Promise<ObjectRecursive>) =>
      async (
        input: ObjectRecursive,
      ): Promise<import("typia").IValidation<ObjectRecursive>> => {
        const paramResults = [
          ((input: any): typia.IValidation<ObjectRecursive.IDepartment> => {
            const errors = [] as any[];
            const __is = (
              input: any,
              _exceptionable: boolean = true,
            ): input is ObjectRecursive.IDepartment => {
              const $io0 = (
                input: any,
                _exceptionable: boolean = true,
              ): boolean =>
                (null === input.parent ||
                  ("object" === typeof input.parent &&
                    null !== input.parent &&
                    $io0(input.parent, true && _exceptionable))) &&
                "number" === typeof input.id &&
                Number.isFinite(input.id) &&
                "string" === typeof input.code &&
                "string" === typeof input.name &&
                "number" === typeof input.sequence &&
                Number.isFinite(input.sequence) &&
                "object" === typeof input.created_at &&
                null !== input.created_at &&
                $io1(input.created_at, true && _exceptionable) &&
                (6 === Object.keys(input).length ||
                  Object.keys(input).every((key: any) => {
                    if (
                      [
                        "parent",
                        "id",
                        "code",
                        "name",
                        "sequence",
                        "created_at",
                      ].some((prop: any) => key === prop)
                    )
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                  }));
              const $io1 = (
                input: any,
                _exceptionable: boolean = true,
              ): boolean =>
                "number" === typeof input.time &&
                Number.isFinite(input.time) &&
                "number" === typeof input.zone &&
                Number.isFinite(input.zone) &&
                (2 === Object.keys(input).length ||
                  Object.keys(input).every((key: any) => {
                    if (["time", "zone"].some((prop: any) => key === prop))
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
              ): input is ObjectRecursive.IDepartment => {
                const $join = (typia.functional.validateEqualsParameters as any)
                  .join;
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
                    6 === Object.keys(input).length ||
                      false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          if (
                            [
                              "parent",
                              "id",
                              "code",
                              "name",
                              "sequence",
                              "created_at",
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
                    2 === Object.keys(input).length ||
                      false === _exceptionable ||
                      Object.keys(input)
                        .map((key: any) => {
                          if (
                            ["time", "zone"].some((prop: any) => key === prop)
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
        return {
          success: true,
          data: await p(input),
          errors: [],
        };
      },
  );
