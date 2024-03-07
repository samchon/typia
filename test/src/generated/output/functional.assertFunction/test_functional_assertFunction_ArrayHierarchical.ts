import typia from "typia";
import { _test_functional_assertFunction } from "../../../internal/_test_functional_assertFunction";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";
import { TypeGuardError } from "typia";
export const test_functional_assertFunction_ArrayHierarchical =
  _test_functional_assertFunction(TypeGuardError)("ArrayHierarchical")(
    ArrayHierarchical,
  )(
    (p: (input: ArrayHierarchical) => ArrayHierarchical) =>
      (input: ArrayHierarchical): ArrayHierarchical => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertFunction as any).errorFactory;
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
          const __is = (input: any): input is ArrayHierarchical => {
            const $io0 = (input: any): boolean =>
              "number" === typeof input.id &&
              Number.isFinite(input.id) &&
              "number" === typeof input.serial &&
              Number.isFinite(input.serial) &&
              "string" === typeof input.name &&
              "object" === typeof input.established_at &&
              null !== input.established_at &&
              "number" === typeof (input.established_at as any).time &&
              Number.isFinite((input.established_at as any).time) &&
              "number" === typeof (input.established_at as any).zone &&
              Number.isFinite((input.established_at as any).zone) &&
              Array.isArray(input.departments) &&
              input.departments.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io2(elem),
              );
            const $io2 = (input: any): boolean =>
              "number" === typeof input.id &&
              Number.isFinite(input.id) &&
              "string" === typeof input.code &&
              "number" === typeof input.sales &&
              Number.isFinite(input.sales) &&
              "object" === typeof input.created_at &&
              null !== input.created_at &&
              "number" === typeof (input.created_at as any).time &&
              Number.isFinite((input.created_at as any).time) &&
              "number" === typeof (input.created_at as any).zone &&
              Number.isFinite((input.created_at as any).zone) &&
              Array.isArray(input.employees) &&
              input.employees.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io3(elem),
              );
            const $io3 = (input: any): boolean =>
              "number" === typeof input.id &&
              Number.isFinite(input.id) &&
              "string" === typeof input.name &&
              "number" === typeof input.age &&
              Number.isFinite(input.age) &&
              "number" === typeof input.grade &&
              Number.isFinite(input.grade) &&
              "object" === typeof input.employeed_at &&
              null !== input.employeed_at &&
              "number" === typeof (input.employeed_at as any).time &&
              Number.isFinite((input.employeed_at as any).time) &&
              "number" === typeof (input.employeed_at as any).zone &&
              Number.isFinite((input.employeed_at as any).zone);
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io0(elem),
              )
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ArrayHierarchical => {
              const $guard = (typia.functional.assertFunction as any).guard;
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
                  ));
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
                  ));
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
                  ));
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
                  ));
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
        return ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.return")
                : undefined,
            }),
        ): ArrayHierarchical => {
          const __is = (input: any): input is ArrayHierarchical => {
            const $io0 = (input: any): boolean =>
              "number" === typeof input.id &&
              Number.isFinite(input.id) &&
              "number" === typeof input.serial &&
              Number.isFinite(input.serial) &&
              "string" === typeof input.name &&
              "object" === typeof input.established_at &&
              null !== input.established_at &&
              "number" === typeof (input.established_at as any).time &&
              Number.isFinite((input.established_at as any).time) &&
              "number" === typeof (input.established_at as any).zone &&
              Number.isFinite((input.established_at as any).zone) &&
              Array.isArray(input.departments) &&
              input.departments.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io2(elem),
              );
            const $io2 = (input: any): boolean =>
              "number" === typeof input.id &&
              Number.isFinite(input.id) &&
              "string" === typeof input.code &&
              "number" === typeof input.sales &&
              Number.isFinite(input.sales) &&
              "object" === typeof input.created_at &&
              null !== input.created_at &&
              "number" === typeof (input.created_at as any).time &&
              Number.isFinite((input.created_at as any).time) &&
              "number" === typeof (input.created_at as any).zone &&
              Number.isFinite((input.created_at as any).zone) &&
              Array.isArray(input.employees) &&
              input.employees.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io3(elem),
              );
            const $io3 = (input: any): boolean =>
              "number" === typeof input.id &&
              Number.isFinite(input.id) &&
              "string" === typeof input.name &&
              "number" === typeof input.age &&
              Number.isFinite(input.age) &&
              "number" === typeof input.grade &&
              Number.isFinite(input.grade) &&
              "object" === typeof input.employeed_at &&
              null !== input.employeed_at &&
              "number" === typeof (input.employeed_at as any).time &&
              Number.isFinite((input.employeed_at as any).time) &&
              "number" === typeof (input.employeed_at as any).zone &&
              Number.isFinite((input.employeed_at as any).zone);
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io0(elem),
              )
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ArrayHierarchical => {
              const $guard = (typia.functional.assertFunction as any).guard;
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
                  ));
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
                  ));
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
                  ));
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
                  ));
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
        })(p(input));
      },
  );
