import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";

export const test_json_assertStringifyCustom_ArrayHierarchical =
  _test_json_assertStringify(CustomGuardError)(
    "ArrayHierarchical",
  )<ArrayHierarchical>(ArrayHierarchical)((input) =>
    ((
      input: any,
      errorFactory?: import("typia").TypeGuardError.IProps,
    ): string => {
      const assert = (
        input: any,
        errorFactory?: import("typia").TypeGuardError.IProps,
      ): ArrayHierarchical => {
        const $guard = (typia.json.assertStringify as any).guard(errorFactory);
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
            const $ao0 = (
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
                  expected: "ArrayHierarchical.ITimestamp",
                  value: input.established_at,
                })) &&
                $ao1(
                  input.established_at,
                  _path + ".established_at",
                  true && _exceptionable,
                )) ||
                $guard(_exceptionable, {
                  path: _path + ".established_at",
                  expected: "ArrayHierarchical.ITimestamp",
                  value: input.established_at,
                })) &&
              (((Array.isArray(input.departments) ||
                $guard(_exceptionable, {
                  path: _path + ".departments",
                  expected: "Array<ArrayHierarchical.IDepartment>",
                  value: input.departments,
                })) &&
                input.departments.every(
                  (elem: any, _index2: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $guard(_exceptionable, {
                        path: _path + ".departments[" + _index2 + "]",
                        expected: "ArrayHierarchical.IDepartment",
                        value: elem,
                      })) &&
                      $ao2(
                        elem,
                        _path + ".departments[" + _index2 + "]",
                        true && _exceptionable,
                      )) ||
                    $guard(_exceptionable, {
                      path: _path + ".departments[" + _index2 + "]",
                      expected: "ArrayHierarchical.IDepartment",
                      value: elem,
                    }),
                )) ||
                $guard(_exceptionable, {
                  path: _path + ".departments",
                  expected: "Array<ArrayHierarchical.IDepartment>",
                  value: input.departments,
                }));
            const $ao1 = (
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
            const $ao2 = (
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
                  expected: "ArrayHierarchical.ITimestamp",
                  value: input.created_at,
                })) &&
                $ao1(
                  input.created_at,
                  _path + ".created_at",
                  true && _exceptionable,
                )) ||
                $guard(_exceptionable, {
                  path: _path + ".created_at",
                  expected: "ArrayHierarchical.ITimestamp",
                  value: input.created_at,
                })) &&
              (((Array.isArray(input.employees) ||
                $guard(_exceptionable, {
                  path: _path + ".employees",
                  expected: "Array<ArrayHierarchical.IEmployee>",
                  value: input.employees,
                })) &&
                input.employees.every(
                  (elem: any, _index3: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $guard(_exceptionable, {
                        path: _path + ".employees[" + _index3 + "]",
                        expected: "ArrayHierarchical.IEmployee",
                        value: elem,
                      })) &&
                      $ao3(
                        elem,
                        _path + ".employees[" + _index3 + "]",
                        true && _exceptionable,
                      )) ||
                    $guard(_exceptionable, {
                      path: _path + ".employees[" + _index3 + "]",
                      expected: "ArrayHierarchical.IEmployee",
                      value: elem,
                    }),
                )) ||
                $guard(_exceptionable, {
                  path: _path + ".employees",
                  expected: "Array<ArrayHierarchical.IEmployee>",
                  value: input.employees,
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
                  expected: "ArrayHierarchical.ITimestamp",
                  value: input.employeed_at,
                })) &&
                $ao1(
                  input.employeed_at,
                  _path + ".employeed_at",
                  true && _exceptionable,
                )) ||
                $guard(_exceptionable, {
                  path: _path + ".employeed_at",
                  expected: "ArrayHierarchical.ITimestamp",
                  value: input.employeed_at,
                }));
            return (
              ((Array.isArray(input) ||
                $guard(true, {
                  path: _path + "",
                  expected: "ArrayHierarchical",
                  value: input,
                })) &&
                input.every(
                  (elem: any, _index1: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $guard(true, {
                        path: _path + "[" + _index1 + "]",
                        expected: "ArrayHierarchical.ICompany",
                        value: elem,
                      })) &&
                      $ao0(elem, _path + "[" + _index1 + "]", true)) ||
                    $guard(true, {
                      path: _path + "[" + _index1 + "]",
                      expected: "ArrayHierarchical.ICompany",
                      value: elem,
                    }),
                )) ||
              $guard(true, {
                path: _path + "",
                expected: "ArrayHierarchical",
                value: input,
              })
            );
          })(input, "$input", true);
        return input;
      };
      const stringify = (input: ArrayHierarchical): string => {
        const $io1 = (input: any): boolean =>
          "number" === typeof input.time && "number" === typeof input.zone;
        const $io2 = (input: any): boolean =>
          "number" === typeof input.id &&
          "string" === typeof input.code &&
          "number" === typeof input.sales &&
          "object" === typeof input.created_at &&
          null !== input.created_at &&
          $io1(input.created_at) &&
          Array.isArray(input.employees) &&
          input.employees.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io3(elem),
          );
        const $io3 = (input: any): boolean =>
          "number" === typeof input.id &&
          "string" === typeof input.name &&
          "number" === typeof input.age &&
          "number" === typeof input.grade &&
          "object" === typeof input.employeed_at &&
          null !== input.employeed_at &&
          $io1(input.employeed_at);
        const $number = (typia.json.assertStringify as any).number;
        const $string = (typia.json.assertStringify as any).string;
        const $so0 = (input: any): any =>
          `{"id":${$number(input.id)},"serial":${$number(
            input.serial,
          )},"name":${$string(
            input.name,
          )},"established_at":${`{"time":${$number(
            (input.established_at as any).time,
          )},"zone":${$number(
            (input.established_at as any).zone,
          )}}`},"departments":${`[${input.departments
            .map((elem: any) => $so2(elem))
            .join(",")}]`}}`;
        const $so2 = (input: any): any =>
          `{"id":${$number(input.id)},"code":${$string(
            input.code,
          )},"sales":${$number(input.sales)},"created_at":${`{"time":${$number(
            (input.created_at as any).time,
          )},"zone":${$number(
            (input.created_at as any).zone,
          )}}`},"employees":${`[${input.employees
            .map((elem: any) => $so3(elem))
            .join(",")}]`}}`;
        const $so3 = (input: any): any =>
          `{"id":${$number(input.id)},"name":${$string(
            input.name,
          )},"age":${$number(input.age)},"grade":${$number(
            input.grade,
          )},"employeed_at":${`{"time":${$number(
            (input.employeed_at as any).time,
          )},"zone":${$number((input.employeed_at as any).zone)}}`}}`;
        return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
      };
      return stringify(assert(input, errorFactory));
    })(input, (p) => new CustomGuardError(p)),
  );
