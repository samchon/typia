import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../../internal/_test_functional_assertEqualsParametersAsync";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";

export const test_functional_assertEqualsParametersAsync_ArrayHierarchical =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "ArrayHierarchical",
  )(ArrayHierarchical)(
    (p: (input: ArrayHierarchical) => Promise<ArrayHierarchical>) =>
      async (input: ArrayHierarchical): Promise<ArrayHierarchical> => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertEqualsParameters as any)
          .errorFactory;
        ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.parameters[0]")
                : undefined,
            }),
        ): ArrayHierarchical => {
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
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ArrayHierarchical => {
              const $guard = (typia.functional.assertEqualsParameters as any)
                .guard;
              const $join = (typia.functional.assertEqualsParameters as any)
                .join;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (("number" === typeof input.id && Number.isFinite(input.id)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".id",
                      expected: "number",
                      value: input.id,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.serial &&
                  Number.isFinite(input.serial)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".serial",
                      expected: "number",
                      value: input.serial,
                    },
                    errorFactory,
                  )) &&
                ("string" === typeof input.name ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".name",
                      expected: "string",
                      value: input.name,
                    },
                    errorFactory,
                  )) &&
                (((("object" === typeof input.established_at &&
                  null !== input.established_at) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".established_at",
                      expected: "ArrayHierarchical.ITimestamp",
                      value: input.established_at,
                    },
                    errorFactory,
                  )) &&
                  $ao1(
                    input.established_at,
                    _path + ".established_at",
                    true && _exceptionable,
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".established_at",
                      expected: "ArrayHierarchical.ITimestamp",
                      value: input.established_at,
                    },
                    errorFactory,
                  )) &&
                (((Array.isArray(input.departments) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".departments",
                      expected: "Array<ArrayHierarchical.IDepartment>",
                      value: input.departments,
                    },
                    errorFactory,
                  )) &&
                  input.departments.every(
                    (elem: any, _index2: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".departments[" + _index2 + "]",
                            expected: "ArrayHierarchical.IDepartment",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        $ao2(
                          elem,
                          _path + ".departments[" + _index2 + "]",
                          true && _exceptionable,
                        )) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".departments[" + _index2 + "]",
                          expected: "ArrayHierarchical.IDepartment",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".departments",
                      expected: "Array<ArrayHierarchical.IDepartment>",
                      value: input.departments,
                    },
                    errorFactory,
                  )) &&
                (5 === Object.keys(input).length ||
                  false === _exceptionable ||
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
                    return $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value,
                      },
                      errorFactory,
                    );
                  }));
              const $ao1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (("number" === typeof input.time &&
                  Number.isFinite(input.time)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".time",
                      expected: "number",
                      value: input.time,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.zone &&
                  Number.isFinite(input.zone)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".zone",
                      expected: "number",
                      value: input.zone,
                    },
                    errorFactory,
                  )) &&
                (2 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (["time", "zone"].some((prop: any) => key === prop))
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value,
                      },
                      errorFactory,
                    );
                  }));
              const $ao2 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (("number" === typeof input.id && Number.isFinite(input.id)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".id",
                      expected: "number",
                      value: input.id,
                    },
                    errorFactory,
                  )) &&
                ("string" === typeof input.code ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".code",
                      expected: "string",
                      value: input.code,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.sales &&
                  Number.isFinite(input.sales)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".sales",
                      expected: "number",
                      value: input.sales,
                    },
                    errorFactory,
                  )) &&
                (((("object" === typeof input.created_at &&
                  null !== input.created_at) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".created_at",
                      expected: "ArrayHierarchical.ITimestamp",
                      value: input.created_at,
                    },
                    errorFactory,
                  )) &&
                  $ao1(
                    input.created_at,
                    _path + ".created_at",
                    true && _exceptionable,
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".created_at",
                      expected: "ArrayHierarchical.ITimestamp",
                      value: input.created_at,
                    },
                    errorFactory,
                  )) &&
                (((Array.isArray(input.employees) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".employees",
                      expected: "Array<ArrayHierarchical.IEmployee>",
                      value: input.employees,
                    },
                    errorFactory,
                  )) &&
                  input.employees.every(
                    (elem: any, _index3: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".employees[" + _index3 + "]",
                            expected: "ArrayHierarchical.IEmployee",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        $ao3(
                          elem,
                          _path + ".employees[" + _index3 + "]",
                          true && _exceptionable,
                        )) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".employees[" + _index3 + "]",
                          expected: "ArrayHierarchical.IEmployee",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".employees",
                      expected: "Array<ArrayHierarchical.IEmployee>",
                      value: input.employees,
                    },
                    errorFactory,
                  )) &&
                (5 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (
                      ["id", "code", "sales", "created_at", "employees"].some(
                        (prop: any) => key === prop,
                      )
                    )
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value,
                      },
                      errorFactory,
                    );
                  }));
              const $ao3 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (("number" === typeof input.id && Number.isFinite(input.id)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".id",
                      expected: "number",
                      value: input.id,
                    },
                    errorFactory,
                  )) &&
                ("string" === typeof input.name ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".name",
                      expected: "string",
                      value: input.name,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.age &&
                  Number.isFinite(input.age)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".age",
                      expected: "number",
                      value: input.age,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.grade &&
                  Number.isFinite(input.grade)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".grade",
                      expected: "number",
                      value: input.grade,
                    },
                    errorFactory,
                  )) &&
                (((("object" === typeof input.employeed_at &&
                  null !== input.employeed_at) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".employeed_at",
                      expected: "ArrayHierarchical.ITimestamp",
                      value: input.employeed_at,
                    },
                    errorFactory,
                  )) &&
                  $ao1(
                    input.employeed_at,
                    _path + ".employeed_at",
                    true && _exceptionable,
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".employeed_at",
                      expected: "ArrayHierarchical.ITimestamp",
                      value: input.employeed_at,
                    },
                    errorFactory,
                  )) &&
                (5 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (
                      ["id", "name", "age", "grade", "employeed_at"].some(
                        (prop: any) => key === prop,
                      )
                    )
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value,
                      },
                      errorFactory,
                    );
                  }));
              return (
                ((Array.isArray(input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ArrayHierarchical",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  input.every(
                    (elem: any, _index1: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(
                          true,
                          {
                            path: _path + "[" + _index1 + "]",
                            expected: "ArrayHierarchical.ICompany",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        $ao0(elem, _path + "[" + _index1 + "]", true)) ||
                      $guard(
                        true,
                        {
                          path: _path + "[" + _index1 + "]",
                          expected: "ArrayHierarchical.ICompany",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ArrayHierarchical",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(input);
        return p(input);
      },
  );
