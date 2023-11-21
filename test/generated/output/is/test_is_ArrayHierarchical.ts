import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";

export const test_is_ArrayHierarchical = _test_is(
  "ArrayHierarchical",
)<ArrayHierarchical>(ArrayHierarchical)((input) =>
  ((input: any): input is ArrayHierarchical => {
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
        (elem: any) => "object" === typeof elem && null !== elem && $io2(elem),
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
        (elem: any) => "object" === typeof elem && null !== elem && $io3(elem),
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
        (elem: any) => "object" === typeof elem && null !== elem && $io0(elem),
      )
    );
  })(input),
);
