import typia from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_isStringify_ObjectGenericArray = _test_isStringify("ObjectGenericArray", ObjectGenericArray.generate, (input) => ((input: ObjectGenericArray): string | null => { const is = (input: any): input is ObjectGenericArray => {
    const $io0 = (input: any) => "object" === typeof input.pagination && null !== input.pagination && $io1(input.pagination) && (Array.isArray(input.data) && input.data.every((elem: any) => "object" === typeof elem && null !== elem && $io2(elem)));
    const $io1 = (input: any) => "number" === typeof input.page && !Number.isNaN(input.page) && ("number" === typeof input.limit && !Number.isNaN(input.limit)) && ("number" === typeof input.total_count && !Number.isNaN(input.total_count)) && ("number" === typeof input.total_pages && !Number.isNaN(input.total_pages));
    const $io2 = (input: any) => "string" === typeof input.name && ("number" === typeof input.age && !Number.isNaN(input.age));
    return "object" === typeof input && null !== input && $io0(input);
}; const stringify = (input: ObjectGenericArray): string => {
    const $string = (typia.isStringify as any).string;
    const $io1 = (input: any) => "number" === typeof input.page && "number" === typeof input.limit && "number" === typeof input.total_count && "number" === typeof input.total_pages;
    const $io2 = (input: any) => "string" === typeof input.name && "number" === typeof input.age;
    const $so0 = (input: any) => `{"pagination":${$so1(input.pagination)},"data":${`[${input.data.map((elem: any) => `{"name":${$string(elem.name)},"age":${elem.age}}`).join(",")}]`}}`;
    const $so1 = (input: any) => `{"page":${input.page},"limit":${input.limit},"total_count":${input.total_count},"total_pages":${input.total_pages}}`;
    return $so0(input);
}; return is(input) ? stringify(input) : null; })(input), ObjectGenericArray.SPOILERS);
