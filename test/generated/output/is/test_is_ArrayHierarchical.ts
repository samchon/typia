import typia from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_is } from "../internal/_test_is";
export const test_is_ArrayHierarchical = _test_is("ArrayHierarchical", ArrayHierarchical.generate, (input) => ((input: any): input is ArrayHierarchical => {
    const $io0 = (input: any) => "number" === typeof input.id && "number" === typeof input.serial && "string" === typeof input.name && ("object" === typeof input.established_at && null !== input.established_at && ("number" === typeof input.established_at.time && "number" === typeof input.established_at.zone)) && (Array.isArray(input.departments) && input.departments.every((elem: any) => "object" === typeof elem && null !== elem && $io2(elem)));
    const $io2 = (input: any) => "number" === typeof input.id && "string" === typeof input.code && "number" === typeof input.sales && ("object" === typeof input.created_at && null !== input.created_at && ("number" === typeof input.created_at.time && "number" === typeof input.created_at.zone)) && (Array.isArray(input.employees) && input.employees.every((elem: any) => "object" === typeof elem && null !== elem && $io3(elem)));
    const $io3 = (input: any) => "number" === typeof input.id && "string" === typeof input.name && "number" === typeof input.age && "number" === typeof input.grade && ("object" === typeof input.employeed_at && null !== input.employeed_at && ("number" === typeof input.employeed_at.time && "number" === typeof input.employeed_at.zone));
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
})(input), ArrayHierarchical.SPOILERS);
