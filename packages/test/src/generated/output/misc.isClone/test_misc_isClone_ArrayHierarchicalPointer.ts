import typia from "typia";

import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";

export const test_misc_isClone_ArrayHierarchicalPointer = _test_misc_isClone(
  "ArrayHierarchicalPointer",
)<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)((input) =>
  ((input: any): typia.Resolved<ArrayHierarchicalPointer> | null => {
    const is = (input: any): input is ArrayHierarchicalPointer => {
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
    const clone = (
      input: ArrayHierarchicalPointer,
    ): typia.Resolved<ArrayHierarchicalPointer> => {
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
      const $cp0 = (input: any) =>
        input.map((elem: any) =>
          "object" === typeof elem && null !== elem
            ? $co1(elem)
            : (elem as any),
        );
      const $cp1 = (input: any) =>
        input.map((elem: any) =>
          "object" === typeof elem && null !== elem
            ? $co3(elem)
            : (elem as any),
        );
      const $cp2 = (input: any) =>
        input.map((elem: any) =>
          "object" === typeof elem && null !== elem
            ? $co4(elem)
            : (elem as any),
        );
      const $co0 = (input: any): any => ({
        value: Array.isArray(input.value)
          ? $cp0(input.value)
          : (input.value as any),
      });
      const $co1 = (input: any): any => ({
        id: input.id as any,
        serial: input.serial as any,
        name: input.name as any,
        established_at:
          "object" === typeof input.established_at &&
          null !== input.established_at
            ? $co2(input.established_at)
            : (input.established_at as any),
        departments: Array.isArray(input.departments)
          ? $cp1(input.departments)
          : (input.departments as any),
      });
      const $co2 = (input: any): any => ({
        time: input.time as any,
        zone: input.zone as any,
      });
      const $co3 = (input: any): any => ({
        id: input.id as any,
        code: input.code as any,
        sales: input.sales as any,
        created_at:
          "object" === typeof input.created_at && null !== input.created_at
            ? $co2(input.created_at)
            : (input.created_at as any),
        employees: Array.isArray(input.employees)
          ? $cp2(input.employees)
          : (input.employees as any),
      });
      const $co4 = (input: any): any => ({
        id: input.id as any,
        name: input.name as any,
        age: input.age as any,
        grade: input.grade as any,
        employeed_at:
          "object" === typeof input.employeed_at && null !== input.employeed_at
            ? $co2(input.employeed_at)
            : (input.employeed_at as any),
      });
      return "object" === typeof input && null !== input
        ? $co0(input)
        : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  })(input),
);
