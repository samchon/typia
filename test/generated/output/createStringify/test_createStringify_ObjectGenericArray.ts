import typia from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_stringify } from "../internal/_test_stringify";
export const test_createStringify_ObjectGenericArray = _test_stringify("ObjectGenericArray", ObjectGenericArray.generate, (input: ObjectGenericArray): string => {
    const $string = (typia.createStringify as any).string;
    const $io1 = (input: any) => "number" === typeof input.page && "number" === typeof input.limit && "number" === typeof input.total_count && "number" === typeof input.total_pages;
    const $io2 = (input: any) => "string" === typeof input.name && "number" === typeof input.age;
    const $so0 = (input: any) => `{"pagination":${$so1(input.pagination)},"data":${`[${input.data.map((elem: any) => `{"name":${$string(elem.name)},"age":${elem.age}}`).join(",")}]`}}`;
    const $so1 = (input: any) => `{"page":${input.page},"limit":${input.limit},"total_count":${input.total_count},"total_pages":${input.total_pages}}`;
    return $so0(input);
});
