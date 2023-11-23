import typia from "typia";

import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";

export const test_misc_assertPrune_ArrayHierarchicalPointer =
  _test_misc_assertPrune("ArrayHierarchicalPointer")<ArrayHierarchicalPointer>(
    ArrayHierarchicalPointer,
  )((input) =>
    ((input: any): ArrayHierarchicalPointer => {
      const assert = (input: any): ArrayHierarchicalPointer => {
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
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ArrayHierarchicalPointer => {
            const $guard = (typia.misc.assertPrune as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ((Array.isArray(input.value) ||
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
              });
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
                }));
            const $ao2 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (("number" === typeof input.time &&
                Number.isFinite(input.time)) ||
                $guard(_exceptionable, {
                  path: _path + ".time",
                  expected: "number",
                  value: input.time,
                })) &&
              (("number" === typeof input.zone &&
                Number.isFinite(input.zone)) ||
                $guard(_exceptionable, {
                  path: _path + ".zone",
                  expected: "number",
                  value: input.zone,
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
              (("number" === typeof input.sales &&
                Number.isFinite(input.sales)) ||
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
              (("number" === typeof input.grade &&
                Number.isFinite(input.grade)) ||
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
      };
      const prune = (input: ArrayHierarchicalPointer): void => {
        const $io1 = (input: any): boolean =>
          "number" === typeof input.id &&
          "number" === typeof input.serial &&
          "string" === typeof input.name &&
          "object" === typeof input.established_at &&
          null !== input.established_at &&
          $io2(input.established_at) &&
          Array.isArray(input.departments) &&
          input.departments.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io3(elem),
          );
        const $io2 = (input: any): boolean =>
          "number" === typeof input.time && "number" === typeof input.zone;
        const $io3 = (input: any): boolean =>
          "number" === typeof input.id &&
          "string" === typeof input.code &&
          "number" === typeof input.sales &&
          "object" === typeof input.created_at &&
          null !== input.created_at &&
          $io2(input.created_at) &&
          Array.isArray(input.employees) &&
          input.employees.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io4(elem),
          );
        const $io4 = (input: any): boolean =>
          "number" === typeof input.id &&
          "string" === typeof input.name &&
          "number" === typeof input.age &&
          "number" === typeof input.grade &&
          "object" === typeof input.employeed_at &&
          null !== input.employeed_at &&
          $io2(input.employeed_at);
        const $pp0 = (input: any) =>
          input.forEach((elem: any) => {
            if ("object" === typeof elem && null !== elem) $po1(elem);
          });
        const $pp1 = (input: any) =>
          input.forEach((elem: any) => {
            if ("object" === typeof elem && null !== elem) $po3(elem);
          });
        const $pp2 = (input: any) =>
          input.forEach((elem: any) => {
            if ("object" === typeof elem && null !== elem) $po4(elem);
          });
        const $po0 = (input: any): any => {
          if (Array.isArray(input.value)) $pp0(input.value);
          for (const key of Object.keys(input)) {
            if ("value" === key) continue;
            delete input[key];
          }
        };
        const $po1 = (input: any): any => {
          if (
            "object" === typeof input.established_at &&
            null !== input.established_at
          )
            $po2(input.established_at);
          if (Array.isArray(input.departments)) $pp1(input.departments);
          for (const key of Object.keys(input)) {
            if (
              "id" === key ||
              "serial" === key ||
              "name" === key ||
              "established_at" === key ||
              "departments" === key
            )
              continue;
            delete input[key];
          }
        };
        const $po2 = (input: any): any => {
          for (const key of Object.keys(input)) {
            if ("time" === key || "zone" === key) continue;
            delete input[key];
          }
        };
        const $po3 = (input: any): any => {
          if ("object" === typeof input.created_at && null !== input.created_at)
            $po2(input.created_at);
          if (Array.isArray(input.employees)) $pp2(input.employees);
          for (const key of Object.keys(input)) {
            if (
              "id" === key ||
              "code" === key ||
              "sales" === key ||
              "created_at" === key ||
              "employees" === key
            )
              continue;
            delete input[key];
          }
        };
        const $po4 = (input: any): any => {
          if (
            "object" === typeof input.employeed_at &&
            null !== input.employeed_at
          )
            $po2(input.employeed_at);
          for (const key of Object.keys(input)) {
            if (
              "id" === key ||
              "name" === key ||
              "age" === key ||
              "grade" === key ||
              "employeed_at" === key
            )
              continue;
            delete input[key];
          }
        };
        if ("object" === typeof input && null !== input) $po0(input);
      };
      assert(input);
      prune(input);
      return input;
    })(input),
  );
