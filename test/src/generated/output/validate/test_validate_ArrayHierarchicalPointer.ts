import typia from "typia";

import { _test_validate } from "../../../internal/_test_validate";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";

export const test_validate_ArrayHierarchicalPointer = _test_validate(
  "ArrayHierarchicalPointer",
)<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)((input) =>
  ((input: any): typia.IValidation<ArrayHierarchicalPointer> => {
    const errors = [] as any[];
    const __is = (input: any): input is ArrayHierarchicalPointer => {
      const $io0 = (input: any): boolean =>
        Array.isArray(input.value) &&
        input.value.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io1(elem),
        );
      const $io1 = (input: any): boolean =>
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
            "object" === typeof elem && null !== elem && $io3(elem),
        );
      const $io3 = (input: any): boolean =>
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
            "object" === typeof elem && null !== elem && $io4(elem),
        );
      const $io4 = (input: any): boolean =>
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
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input)) {
      const $report = require("typia/lib/functional/$report").$report(errors);
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ArrayHierarchicalPointer => {
        const $vo0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            ((Array.isArray(input.value) ||
              $report(_exceptionable, {
                path: _path + ".value",
                expected: "Array<ArrayHierarchicalPointer.ICompany>",
                value: input.value,
              })) &&
              input.value
                .map(
                  (elem: any, _index1: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $report(_exceptionable, {
                        path: _path + ".value[" + _index1 + "]",
                        expected: "ArrayHierarchicalPointer.ICompany",
                        value: elem,
                      })) &&
                      $vo1(
                        elem,
                        _path + ".value[" + _index1 + "]",
                        true && _exceptionable,
                      )) ||
                    $report(_exceptionable, {
                      path: _path + ".value[" + _index1 + "]",
                      expected: "ArrayHierarchicalPointer.ICompany",
                      value: elem,
                    }),
                )
                .every((flag: boolean) => flag)) ||
              $report(_exceptionable, {
                path: _path + ".value",
                expected: "Array<ArrayHierarchicalPointer.ICompany>",
                value: input.value,
              }),
          ].every((flag: boolean) => flag);
        const $vo1 = (
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
                expected: "ArrayHierarchicalPointer.ITimestamp",
                value: input.established_at,
              })) &&
              $vo2(
                input.established_at,
                _path + ".established_at",
                true && _exceptionable,
              )) ||
              $report(_exceptionable, {
                path: _path + ".established_at",
                expected: "ArrayHierarchicalPointer.ITimestamp",
                value: input.established_at,
              }),
            ((Array.isArray(input.departments) ||
              $report(_exceptionable, {
                path: _path + ".departments",
                expected: "Array<ArrayHierarchicalPointer.IDepartment>",
                value: input.departments,
              })) &&
              input.departments
                .map(
                  (elem: any, _index2: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $report(_exceptionable, {
                        path: _path + ".departments[" + _index2 + "]",
                        expected: "ArrayHierarchicalPointer.IDepartment",
                        value: elem,
                      })) &&
                      $vo3(
                        elem,
                        _path + ".departments[" + _index2 + "]",
                        true && _exceptionable,
                      )) ||
                    $report(_exceptionable, {
                      path: _path + ".departments[" + _index2 + "]",
                      expected: "ArrayHierarchicalPointer.IDepartment",
                      value: elem,
                    }),
                )
                .every((flag: boolean) => flag)) ||
              $report(_exceptionable, {
                path: _path + ".departments",
                expected: "Array<ArrayHierarchicalPointer.IDepartment>",
                value: input.departments,
              }),
          ].every((flag: boolean) => flag);
        const $vo2 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            ("number" === typeof input.time && Number.isFinite(input.time)) ||
              $report(_exceptionable, {
                path: _path + ".time",
                expected: "number",
                value: input.time,
              }),
            ("number" === typeof input.zone && Number.isFinite(input.zone)) ||
              $report(_exceptionable, {
                path: _path + ".zone",
                expected: "number",
                value: input.zone,
              }),
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
            "string" === typeof input.code ||
              $report(_exceptionable, {
                path: _path + ".code",
                expected: "string",
                value: input.code,
              }),
            ("number" === typeof input.sales && Number.isFinite(input.sales)) ||
              $report(_exceptionable, {
                path: _path + ".sales",
                expected: "number",
                value: input.sales,
              }),
            ((("object" === typeof input.created_at &&
              null !== input.created_at) ||
              $report(_exceptionable, {
                path: _path + ".created_at",
                expected: "ArrayHierarchicalPointer.ITimestamp",
                value: input.created_at,
              })) &&
              $vo2(
                input.created_at,
                _path + ".created_at",
                true && _exceptionable,
              )) ||
              $report(_exceptionable, {
                path: _path + ".created_at",
                expected: "ArrayHierarchicalPointer.ITimestamp",
                value: input.created_at,
              }),
            ((Array.isArray(input.employees) ||
              $report(_exceptionable, {
                path: _path + ".employees",
                expected: "Array<ArrayHierarchicalPointer.IEmployee>",
                value: input.employees,
              })) &&
              input.employees
                .map(
                  (elem: any, _index3: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $report(_exceptionable, {
                        path: _path + ".employees[" + _index3 + "]",
                        expected: "ArrayHierarchicalPointer.IEmployee",
                        value: elem,
                      })) &&
                      $vo4(
                        elem,
                        _path + ".employees[" + _index3 + "]",
                        true && _exceptionable,
                      )) ||
                    $report(_exceptionable, {
                      path: _path + ".employees[" + _index3 + "]",
                      expected: "ArrayHierarchicalPointer.IEmployee",
                      value: elem,
                    }),
                )
                .every((flag: boolean) => flag)) ||
              $report(_exceptionable, {
                path: _path + ".employees",
                expected: "Array<ArrayHierarchicalPointer.IEmployee>",
                value: input.employees,
              }),
          ].every((flag: boolean) => flag);
        const $vo4 = (
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
            ("number" === typeof input.age && Number.isFinite(input.age)) ||
              $report(_exceptionable, {
                path: _path + ".age",
                expected: "number",
                value: input.age,
              }),
            ("number" === typeof input.grade && Number.isFinite(input.grade)) ||
              $report(_exceptionable, {
                path: _path + ".grade",
                expected: "number",
                value: input.grade,
              }),
            ((("object" === typeof input.employeed_at &&
              null !== input.employeed_at) ||
              $report(_exceptionable, {
                path: _path + ".employeed_at",
                expected: "ArrayHierarchicalPointer.ITimestamp",
                value: input.employeed_at,
              })) &&
              $vo2(
                input.employeed_at,
                _path + ".employeed_at",
                true && _exceptionable,
              )) ||
              $report(_exceptionable, {
                path: _path + ".employeed_at",
                expected: "ArrayHierarchicalPointer.ITimestamp",
                value: input.employeed_at,
              }),
          ].every((flag: boolean) => flag);
        return (
          ((("object" === typeof input && null !== input) ||
            $report(true, {
              path: _path + "",
              expected: "ArrayHierarchicalPointer",
              value: input,
            })) &&
            $vo0(input, _path + "", true)) ||
          $report(true, {
            path: _path + "",
            expected: "ArrayHierarchicalPointer",
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
  })(input),
);
