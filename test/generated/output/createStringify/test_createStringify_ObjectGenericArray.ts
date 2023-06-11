import typia from "../../../../src";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";
import { _test_stringify } from "../../../internal/_test_stringify";
export const test_createStringify_ObjectGenericArray = _test_stringify("ObjectGenericArray", ObjectGenericArray.generate, (input: ObjectGenericArray): string => {
    const $io1 = (input: any): boolean => "number" === typeof input.page && "number" === typeof input.limit && "number" === typeof input.total_count && "number" === typeof input.total_pages;
    const $io2 = (input: any): boolean => "string" === typeof input.name && "number" === typeof input.age;
    const $string = (typia.createStringify as any).string;
    const $number = (typia.createStringify as any).number;
    const $so0 = (input: any): any => `{"pagination":${$so1(input.pagination)},"data":${`[${input.data.map((elem: any) => `{"name":${$string((elem as any).name)},"age":${$number((elem as any).age)}}`).join(",")}]`}}`;
    const $so1 = (input: any): any => `{"page":${$number(input.page)},"limit":${$number(input.limit)},"total_count":${$number(input.total_count)},"total_pages":${$number(input.total_pages)}}`;
    return $so0(input);
});
