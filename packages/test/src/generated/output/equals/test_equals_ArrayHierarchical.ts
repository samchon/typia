import typia from "typia";

import { _test_equals } from "../../../internal/_test_equals";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";

export const test_equals_ArrayHierarchical = _test_equals(
  "ArrayHierarchical",
)<ArrayHierarchical>(ArrayHierarchical)((input) =>
  ((input: any, _exceptionable: boolean = true): input is ArrayHierarchical => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
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
            ["id", "serial", "name", "established_at", "departments"].some(
              (prop: any) => key === prop,
            )
          )
            return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
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
    const $io2 = (input: any, _exceptionable: boolean = true): boolean =>
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
    const $io3 = (input: any, _exceptionable: boolean = true): boolean =>
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
  })(input),
);
