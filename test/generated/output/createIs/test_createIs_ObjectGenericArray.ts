import typia from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_is } from "../internal/_test_is";
export const test_createIs_ObjectGenericArray = _test_is("ObjectGenericArray", ObjectGenericArray.generate, (input: any): input is ObjectGenericArray => {
    const $io0 = (input: any) => "object" === typeof input.pagination && null !== input.pagination && $io1(input.pagination) && (Array.isArray(input.data) && input.data.every((elem: any) => "object" === typeof elem && null !== elem && $io2(elem)));
    const $io1 = (input: any) => "number" === typeof input.page && "number" === typeof input.limit && "number" === typeof input.total_count && "number" === typeof input.total_pages;
    const $io2 = (input: any) => "string" === typeof input.name && "number" === typeof input.age;
    return "object" === typeof input && null !== input && $io0(input);
}, ObjectGenericArray.SPOILERS);
