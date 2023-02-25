import typia from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_clone } from "../internal/_test_clone";
export const test_createClone_ArrayHierarchical = _test_clone("ArrayHierarchical", ArrayHierarchical.generate, (input: ArrayHierarchical): typia.Primitive<ArrayHierarchical> => {
    const $io1 = (input: any) => "number" === typeof input.time && "number" === typeof input.zone;
    const $io2 = (input: any) => "number" === typeof input.id && "string" === typeof input.code && "number" === typeof input.sales && ("object" === typeof input.created_at && null !== input.created_at && $io1(input.created_at)) && (Array.isArray(input.employees) && input.employees.every((elem: any) => "object" === typeof elem && null !== elem && $io3(elem)));
    const $io3 = (input: any) => "number" === typeof input.id && "string" === typeof input.name && "number" === typeof input.age && "number" === typeof input.grade && ("object" === typeof input.employeed_at && null !== input.employeed_at && $io1(input.employeed_at));
    const $co0 = (input: any) => ({
        id: input.id,
        serial: input.serial,
        name: input.name,
        established_at: "object" === typeof input.established_at && null !== input.established_at ? $co1(input.established_at) : input.established_at,
        departments: Array.isArray(input.departments) ? input.departments.map((elem: any) => "object" === typeof elem && null !== elem ? $co2(elem) : elem) : input.departments
    });
    const $co1 = (input: any) => ({
        time: input.time,
        zone: input.zone
    });
    const $co2 = (input: any) => ({
        id: input.id,
        code: input.code,
        sales: input.sales,
        created_at: "object" === typeof input.created_at && null !== input.created_at ? $co1(input.created_at) : input.created_at,
        employees: Array.isArray(input.employees) ? input.employees.map((elem: any) => "object" === typeof elem && null !== elem ? $co3(elem) : elem) : input.employees
    });
    const $co3 = (input: any) => ({
        id: input.id,
        name: input.name,
        age: input.age,
        grade: input.grade,
        employeed_at: "object" === typeof input.employeed_at && null !== input.employeed_at ? $co1(input.employeed_at) : input.employeed_at
    });
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem) : input;
});
