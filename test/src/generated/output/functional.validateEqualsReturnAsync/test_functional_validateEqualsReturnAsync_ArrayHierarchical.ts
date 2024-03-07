import typia from "typia";
import { _test_functional_validateEqualsReturnAsync } from "../../../internal/_test_functional_validateEqualsReturnAsync";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";
export const test_functional_validateEqualsReturnAsync_ArrayHierarchical =
  _test_functional_validateEqualsReturnAsync("ArrayHierarchical")(
    ArrayHierarchical,
  )(
    (p: (input: ArrayHierarchical) => Promise<ArrayHierarchical>) =>
      async (
        input: ArrayHierarchical,
      ): Promise<import("typia").IValidation<ArrayHierarchical>> => {
        const result = ((input: any): typia.IValidation<ArrayHierarchical> => {
          const errors = [] as any[];
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ArrayHierarchical => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "number" === typeof input.id &&
              Number.isFinite(input.id) &&
              "number" === typeof input.serial &&
              Number.isFinite(input.serial) &&
              "string" === typeof input.name &&
              "object" === typeof input.established_at &&
              null !== input.established_at &&
              $io1(input.established_at, true && _exceptionable) &&
              Array.isArray(input.departments) &&
              input.departments.every(
                (elem: any, _index2: number) =>
                  "object" === typeof elem &&
                  null !== elem &&
                  $io2(elem, true && _exceptionable),
              ) &&
              (5 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    [
                      "id",
                      "serial",
                      "name",
                      "established_at",
                      "departments",
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
            const $io2 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "number" === typeof input.id &&
              Number.isFinite(input.id) &&
              "string" === typeof input.code &&
              "number" === typeof input.sales &&
              Number.isFinite(input.sales) &&
              "object" === typeof input.created_at &&
              null !== input.created_at &&
              $io1(input.created_at, true && _exceptionable) &&
              Array.isArray(input.employees) &&
              input.employees.every(
                (elem: any, _index3: number) =>
                  "object" === typeof elem &&
                  null !== elem &&
                  $io3(elem, true && _exceptionable),
              ) &&
              (5 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    ["id", "code", "sales", "created_at", "employees"].some(
                      (prop: any) => key === prop,
                    )
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io3 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "number" === typeof input.id &&
              Number.isFinite(input.id) &&
              "string" === typeof input.name &&
              "number" === typeof input.age &&
              Number.isFinite(input.age) &&
              "number" === typeof input.grade &&
              Number.isFinite(input.grade) &&
              "object" === typeof input.employeed_at &&
              null !== input.employeed_at &&
              $io1(input.employeed_at, true && _exceptionable) &&
              (5 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    ["id", "name", "age", "grade", "employeed_at"].some(
                      (prop: any) => key === prop,
                    )
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any, _index1: number) =>
                  "object" === typeof elem && null !== elem && $io0(elem, true),
              )
            );
          };
          if (false === __is(input)) {
            const $report = (
              typia.functional.validateEqualsReturn as any
            ).report(errors);
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ArrayHierarchical => {
              const $join = (typia.functional.validateEqualsReturn as any).join;
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ("number" === typeof input.id && Number.isFinite(input.id)) ||
                    $report(_exceptionable, {
                      path: _path + ".id",
                      expected: "number",
                      value: input.id,
                    }),
                  ("number" === typeof input.serial &&
                    Number.isFinite(input.serial)) ||
                    $report(_exceptionable, {
                      path: _path + ".serial",
                      expected: "number",
                      value: input.serial,
                    }),
                  "string" === typeof input.name ||
                    $report(_exceptionable, {
                      path: _path + ".name",
                      expected: "string",
                      value: input.name,
                    }),
                  ((("object" === typeof input.established_at &&
                    null !== input.established_at) ||
                    $report(_exceptionable, {
                      path: _path + ".established_at",
                      expected: "ArrayHierarchical.ITimestamp",
                      value: input.established_at,
                    })) &&
                    $vo1(
                      input.established_at,
                      _path + ".established_at",
                      true && _exceptionable,
                    )) ||
                    $report(_exceptionable, {
                      path: _path + ".established_at",
                      expected: "ArrayHierarchical.ITimestamp",
                      value: input.established_at,
                    }),
                  ((Array.isArray(input.departments) ||
                    $report(_exceptionable, {
                      path: _path + ".departments",
                      expected: "Array<ArrayHierarchical.IDepartment>",
                      value: input.departments,
                    })) &&
                    input.departments
                      .map(
                        (elem: any, _index2: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path: _path + ".departments[" + _index2 + "]",
                              expected: "ArrayHierarchical.IDepartment",
                              value: elem,
                            })) &&
                            $vo2(
                              elem,
                              _path + ".departments[" + _index2 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path: _path + ".departments[" + _index2 + "]",
                            expected: "ArrayHierarchical.IDepartment",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".departments",
                      expected: "Array<ArrayHierarchical.IDepartment>",
                      value: input.departments,
                    }),
                  5 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input)
                      .map((key: any) => {
                        if (
                          [
                            "id",
                            "serial",
                            "name",
                            "established_at",
                            "departments",
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
                        if (["time", "zone"].some((prop: any) => key === prop))
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
              const $vo2 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
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
                  ("number" === typeof input.sales &&
                    Number.isFinite(input.sales)) ||
                    $report(_exceptionable, {
                      path: _path + ".sales",
                      expected: "number",
                      value: input.sales,
                    }),
                  ((("object" === typeof input.created_at &&
                    null !== input.created_at) ||
                    $report(_exceptionable, {
                      path: _path + ".created_at",
                      expected: "ArrayHierarchical.ITimestamp",
                      value: input.created_at,
                    })) &&
                    $vo1(
                      input.created_at,
                      _path + ".created_at",
                      true && _exceptionable,
                    )) ||
                    $report(_exceptionable, {
                      path: _path + ".created_at",
                      expected: "ArrayHierarchical.ITimestamp",
                      value: input.created_at,
                    }),
                  ((Array.isArray(input.employees) ||
                    $report(_exceptionable, {
                      path: _path + ".employees",
                      expected: "Array<ArrayHierarchical.IEmployee>",
                      value: input.employees,
                    })) &&
                    input.employees
                      .map(
                        (elem: any, _index3: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path: _path + ".employees[" + _index3 + "]",
                              expected: "ArrayHierarchical.IEmployee",
                              value: elem,
                            })) &&
                            $vo3(
                              elem,
                              _path + ".employees[" + _index3 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path: _path + ".employees[" + _index3 + "]",
                            expected: "ArrayHierarchical.IEmployee",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".employees",
                      expected: "Array<ArrayHierarchical.IEmployee>",
                      value: input.employees,
                    }),
                  5 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input)
                      .map((key: any) => {
                        if (
                          [
                            "id",
                            "code",
                            "sales",
                            "created_at",
                            "employees",
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
              const $vo3 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ("number" === typeof input.id && Number.isFinite(input.id)) ||
                    $report(_exceptionable, {
                      path: _path + ".id",
                      expected: "number",
                      value: input.id,
                    }),
                  "string" === typeof input.name ||
                    $report(_exceptionable, {
                      path: _path + ".name",
                      expected: "string",
                      value: input.name,
                    }),
                  ("number" === typeof input.age &&
                    Number.isFinite(input.age)) ||
                    $report(_exceptionable, {
                      path: _path + ".age",
                      expected: "number",
                      value: input.age,
                    }),
                  ("number" === typeof input.grade &&
                    Number.isFinite(input.grade)) ||
                    $report(_exceptionable, {
                      path: _path + ".grade",
                      expected: "number",
                      value: input.grade,
                    }),
                  ((("object" === typeof input.employeed_at &&
                    null !== input.employeed_at) ||
                    $report(_exceptionable, {
                      path: _path + ".employeed_at",
                      expected: "ArrayHierarchical.ITimestamp",
                      value: input.employeed_at,
                    })) &&
                    $vo1(
                      input.employeed_at,
                      _path + ".employeed_at",
                      true && _exceptionable,
                    )) ||
                    $report(_exceptionable, {
                      path: _path + ".employeed_at",
                      expected: "ArrayHierarchical.ITimestamp",
                      value: input.employeed_at,
                    }),
                  5 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input)
                      .map((key: any) => {
                        if (
                          ["id", "name", "age", "grade", "employeed_at"].some(
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
                ((Array.isArray(input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ArrayHierarchical",
                    value: input,
                  })) &&
                  input
                    .map(
                      (elem: any, _index1: number) =>
                        ((("object" === typeof elem && null !== elem) ||
                          $report(true, {
                            path: _path + "[" + _index1 + "]",
                            expected: "ArrayHierarchical.ICompany",
                            value: elem,
                          })) &&
                          $vo0(elem, _path + "[" + _index1 + "]", true)) ||
                        $report(true, {
                          path: _path + "[" + _index1 + "]",
                          expected: "ArrayHierarchical.ICompany",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ArrayHierarchical",
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
