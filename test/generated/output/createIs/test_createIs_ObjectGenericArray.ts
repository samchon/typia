import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";
export const test_createIs_ObjectGenericArray = _test_is("ObjectGenericArray", ObjectGenericArray.generate, (input: any): input is ObjectGenericArray => {
    const $io0 = (input: any): boolean => "object" === typeof input.pagination && null !== input.pagination && $io1(input.pagination) && (Array.isArray(input.data) && input.data.every((elem: any) => "object" === typeof elem && null !== elem && $io2(elem)));
    const $io1 = (input: any): boolean => "number" === typeof input.page && Number.isFinite(input.page) && ("number" === typeof input.limit && Number.isFinite(input.limit)) && ("number" === typeof input.total_count && Number.isFinite(input.total_count)) && ("number" === typeof input.total_pages && Number.isFinite(input.total_pages));
    const $io2 = (input: any): boolean => "string" === typeof input.name && ("number" === typeof input.age && Number.isFinite(input.age));
    return "object" === typeof input && null !== input && $io0(input);
}, ObjectGenericArray.SPOILERS);
