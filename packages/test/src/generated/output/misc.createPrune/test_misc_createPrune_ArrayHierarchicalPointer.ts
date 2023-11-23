import typia from "typia";

import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";

export const test_misc_createPrune_ArrayHierarchicalPointer = _test_misc_prune(
  "ArrayHierarchicalPointer",
)<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)(
  (input: ArrayHierarchicalPointer): void => {
    const $io1 = (input: any): boolean =>
      "number" === typeof input.id &&
      "number" === typeof input.serial &&
      "string" === typeof input.name &&
      "object" === typeof input.established_at &&
      null !== input.established_at &&
      $io2(input.established_at) &&
      Array.isArray(input.departments) &&
      input.departments.every(
        (elem: any) => "object" === typeof elem && null !== elem && $io3(elem),
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
        (elem: any) => "object" === typeof elem && null !== elem && $io4(elem),
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
      if ("object" === typeof input.employeed_at && null !== input.employeed_at)
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
  },
);
