import typia from "typia";

import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";

export const test_createAssertEquals_ArrayHierarchicalPointer =
  _test_assertEquals("ArrayHierarchicalPointer")<ArrayHierarchicalPointer>(
    ArrayHierarchicalPointer,
  )((input: any): ArrayHierarchicalPointer => {
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is ArrayHierarchicalPointer => {
      const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
        Array.isArray(input.value) &&
        input.value.every(
          (elem: any, _index1: number) =>
            "object" === typeof elem &&
            null !== elem &&
            $io1(elem, true && _exceptionable),
        ) &&
        (1 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["value"].some((prop: any) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
        "number" === typeof input.id &&
        Number.isFinite(input.id) &&
        "number" === typeof input.serial &&
        Number.isFinite(input.serial) &&
        "string" === typeof input.name &&
        "object" === typeof input.established_at &&
        null !== input.established_at &&
        $io2(input.established_at, true && _exceptionable) &&
        Array.isArray(input.departments) &&
        input.departments.every(
          (elem: any, _index2: number) =>
            "object" === typeof elem &&
            null !== elem &&
            $io3(elem, true && _exceptionable),
        ) &&
        (5 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (
              ["id", "serial", "name", "established_at", "departments"].some(
                (prop: any) => key === prop,
              )
            )
              return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      const $io2 = (input: any, _exceptionable: boolean = true): boolean =>
        "number" === typeof input.time &&
        Number.isFinite(input.time) &&
        "number" === typeof input.zone &&
        Number.isFinite(input.zone) &&
        (2 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (["time", "zone"].some((prop: any) => key === prop)) return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      const $io3 = (input: any, _exceptionable: boolean = true): boolean =>
        "number" === typeof input.id &&
        Number.isFinite(input.id) &&
        "string" === typeof input.code &&
        "number" === typeof input.sales &&
        Number.isFinite(input.sales) &&
        "object" === typeof input.created_at &&
        null !== input.created_at &&
        $io2(input.created_at, true && _exceptionable) &&
        Array.isArray(input.employees) &&
        input.employees.every(
          (elem: any, _index3: number) =>
            "object" === typeof elem &&
            null !== elem &&
            $io4(elem, true && _exceptionable),
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
      const $io4 = (input: any, _exceptionable: boolean = true): boolean =>
        "number" === typeof input.id &&
        Number.isFinite(input.id) &&
        "string" === typeof input.name &&
        "number" === typeof input.age &&
        Number.isFinite(input.age) &&
        "number" === typeof input.grade &&
        Number.isFinite(input.grade) &&
        "object" === typeof input.employeed_at &&
        null !== input.employeed_at &&
        $io2(input.employeed_at, true && _exceptionable) &&
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
      return "object" === typeof input && null !== input && $io0(input, true);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ArrayHierarchicalPointer => {
        // @ts-ignore;
        declare const require: (lib: string) => any;
        const $guard = require("typia/lib/functional/$guard").$guard(
          "typia.createAssertEquals",
        );
        const $join = require("typia/lib/functional/$join").$join;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (((Array.isArray(input.value) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "Array<ArrayHierarchicalPointer.ICompany>",
              value: input.value,
            })) &&
            input.value.every(
              (elem: any, _index1: number) =>
                ((("object" === typeof elem && null !== elem) ||
                  $guard(_exceptionable, {
                    path: _path + ".value[" + _index1 + "]",
                    expected: "ArrayHierarchicalPointer.ICompany",
                    value: elem,
                  })) &&
                  $ao1(
                    elem,
                    _path + ".value[" + _index1 + "]",
                    true && _exceptionable,
                  )) ||
                $guard(_exceptionable, {
                  path: _path + ".value[" + _index1 + "]",
                  expected: "ArrayHierarchicalPointer.ICompany",
                  value: elem,
                }),
            )) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "Array<ArrayHierarchicalPointer.ICompany>",
              value: input.value,
            })) &&
          (1 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["value"].some((prop: any) => key === prop)) return true;
              const value = input[key];
              if (undefined === value) return true;
              return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value,
              });
            }));
        const $ao1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (("number" === typeof input.id && Number.isFinite(input.id)) ||
            $guard(_exceptionable, {
              path: _path + ".id",
              expected: "number",
              value: input.id,
            })) &&
          (("number" === typeof input.serial &&
            Number.isFinite(input.serial)) ||
            $guard(_exceptionable, {
              path: _path + ".serial",
              expected: "number",
              value: input.serial,
            })) &&
          ("string" === typeof input.name ||
            $guard(_exceptionable, {
              path: _path + ".name",
              expected: "string",
              value: input.name,
            })) &&
          (((("object" === typeof input.established_at &&
            null !== input.established_at) ||
            $guard(_exceptionable, {
              path: _path + ".established_at",
              expected: "ArrayHierarchicalPointer.ITimestamp",
              value: input.established_at,
            })) &&
            $ao2(
              input.established_at,
              _path + ".established_at",
              true && _exceptionable,
            )) ||
            $guard(_exceptionable, {
              path: _path + ".established_at",
              expected: "ArrayHierarchicalPointer.ITimestamp",
              value: input.established_at,
            })) &&
          (((Array.isArray(input.departments) ||
            $guard(_exceptionable, {
              path: _path + ".departments",
              expected: "Array<ArrayHierarchicalPointer.IDepartment>",
              value: input.departments,
            })) &&
            input.departments.every(
              (elem: any, _index2: number) =>
                ((("object" === typeof elem && null !== elem) ||
                  $guard(_exceptionable, {
                    path: _path + ".departments[" + _index2 + "]",
                    expected: "ArrayHierarchicalPointer.IDepartment",
                    value: elem,
                  })) &&
                  $ao3(
                    elem,
                    _path + ".departments[" + _index2 + "]",
                    true && _exceptionable,
                  )) ||
                $guard(_exceptionable, {
                  path: _path + ".departments[" + _index2 + "]",
                  expected: "ArrayHierarchicalPointer.IDepartment",
                  value: elem,
                }),
            )) ||
            $guard(_exceptionable, {
              path: _path + ".departments",
              expected: "Array<ArrayHierarchicalPointer.IDepartment>",
              value: input.departments,
            })) &&
          (5 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (
                ["id", "serial", "name", "established_at", "departments"].some(
                  (prop: any) => key === prop,
                )
              )
                return true;
              const value = input[key];
              if (undefined === value) return true;
              return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value,
              });
            }));
        const $ao2 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (("number" === typeof input.time && Number.isFinite(input.time)) ||
            $guard(_exceptionable, {
              path: _path + ".time",
              expected: "number",
              value: input.time,
            })) &&
          (("number" === typeof input.zone && Number.isFinite(input.zone)) ||
            $guard(_exceptionable, {
              path: _path + ".zone",
              expected: "number",
              value: input.zone,
            })) &&
          (2 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (["time", "zone"].some((prop: any) => key === prop))
                return true;
              const value = input[key];
              if (undefined === value) return true;
              return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value,
              });
            }));
        const $ao3 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (("number" === typeof input.id && Number.isFinite(input.id)) ||
            $guard(_exceptionable, {
              path: _path + ".id",
              expected: "number",
              value: input.id,
            })) &&
          ("string" === typeof input.code ||
            $guard(_exceptionable, {
              path: _path + ".code",
              expected: "string",
              value: input.code,
            })) &&
          (("number" === typeof input.sales && Number.isFinite(input.sales)) ||
            $guard(_exceptionable, {
              path: _path + ".sales",
              expected: "number",
              value: input.sales,
            })) &&
          (((("object" === typeof input.created_at &&
            null !== input.created_at) ||
            $guard(_exceptionable, {
              path: _path + ".created_at",
              expected: "ArrayHierarchicalPointer.ITimestamp",
              value: input.created_at,
            })) &&
            $ao2(
              input.created_at,
              _path + ".created_at",
              true && _exceptionable,
            )) ||
            $guard(_exceptionable, {
              path: _path + ".created_at",
              expected: "ArrayHierarchicalPointer.ITimestamp",
              value: input.created_at,
            })) &&
          (((Array.isArray(input.employees) ||
            $guard(_exceptionable, {
              path: _path + ".employees",
              expected: "Array<ArrayHierarchicalPointer.IEmployee>",
              value: input.employees,
            })) &&
            input.employees.every(
              (elem: any, _index3: number) =>
                ((("object" === typeof elem && null !== elem) ||
                  $guard(_exceptionable, {
                    path: _path + ".employees[" + _index3 + "]",
                    expected: "ArrayHierarchicalPointer.IEmployee",
                    value: elem,
                  })) &&
                  $ao4(
                    elem,
                    _path + ".employees[" + _index3 + "]",
                    true && _exceptionable,
                  )) ||
                $guard(_exceptionable, {
                  path: _path + ".employees[" + _index3 + "]",
                  expected: "ArrayHierarchicalPointer.IEmployee",
                  value: elem,
                }),
            )) ||
            $guard(_exceptionable, {
              path: _path + ".employees",
              expected: "Array<ArrayHierarchicalPointer.IEmployee>",
              value: input.employees,
            })) &&
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
              return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value,
              });
            }));
        const $ao4 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (("number" === typeof input.id && Number.isFinite(input.id)) ||
            $guard(_exceptionable, {
              path: _path + ".id",
              expected: "number",
              value: input.id,
            })) &&
          ("string" === typeof input.name ||
            $guard(_exceptionable, {
              path: _path + ".name",
              expected: "string",
              value: input.name,
            })) &&
          (("number" === typeof input.age && Number.isFinite(input.age)) ||
            $guard(_exceptionable, {
              path: _path + ".age",
              expected: "number",
              value: input.age,
            })) &&
          (("number" === typeof input.grade && Number.isFinite(input.grade)) ||
            $guard(_exceptionable, {
              path: _path + ".grade",
              expected: "number",
              value: input.grade,
            })) &&
          (((("object" === typeof input.employeed_at &&
            null !== input.employeed_at) ||
            $guard(_exceptionable, {
              path: _path + ".employeed_at",
              expected: "ArrayHierarchicalPointer.ITimestamp",
              value: input.employeed_at,
            })) &&
            $ao2(
              input.employeed_at,
              _path + ".employeed_at",
              true && _exceptionable,
            )) ||
            $guard(_exceptionable, {
              path: _path + ".employeed_at",
              expected: "ArrayHierarchicalPointer.ITimestamp",
              value: input.employeed_at,
            })) &&
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
              return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value,
              });
            }));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(true, {
              path: _path + "",
              expected: "ArrayHierarchicalPointer",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "ArrayHierarchicalPointer",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  });
