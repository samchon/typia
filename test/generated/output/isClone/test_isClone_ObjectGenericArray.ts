import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";
export const test_isClone_ObjectGenericArray = _test_isClone("ObjectGenericArray", ObjectGenericArray.generate, (input) => ((input: any): typia.Primitive<ObjectGenericArray.IPage<ObjectGenericArray.IPerson>> | null => { const is = (input: any): input is ObjectGenericArray.IPage<ObjectGenericArray.IPerson> => {
    const $io0 = (input: any): boolean => "object" === typeof input.pagination && null !== input.pagination && $io1(input.pagination) && (Array.isArray(input.data) && input.data.every((elem: any) => "object" === typeof elem && null !== elem && $io2(elem)));
    const $io1 = (input: any): boolean => "number" === typeof input.page && Number.isFinite(input.page) && ("number" === typeof input.limit && Number.isFinite(input.limit)) && ("number" === typeof input.total_count && Number.isFinite(input.total_count)) && ("number" === typeof input.total_pages && Number.isFinite(input.total_pages));
    const $io2 = (input: any): boolean => "string" === typeof input.name && ("number" === typeof input.age && Number.isFinite(input.age));
    return "object" === typeof input && null !== input && $io0(input);
}; const clone = (input: ObjectGenericArray.IPage<ObjectGenericArray.IPerson>): typia.Primitive<ObjectGenericArray.IPage<ObjectGenericArray.IPerson>> => {
    const $io1 = (input: any): boolean => "number" === typeof input.page && "number" === typeof input.limit && "number" === typeof input.total_count && "number" === typeof input.total_pages;
    const $io2 = (input: any): boolean => "string" === typeof input.name && "number" === typeof input.age;
    const $co0 = (input: any): any => ({
        pagination: "object" === typeof input.pagination && null !== input.pagination ? $co1(input.pagination) : input.pagination as any,
        data: Array.isArray(input.data) ? input.data.map((elem: any) => "object" === typeof elem && null !== elem ? $co2(elem) : elem as any) : input.data as any
    });
    const $co1 = (input: any): any => ({
        page: input.page as any,
        limit: input.limit as any,
        total_count: input.total_count as any,
        total_pages: input.total_pages as any
    });
    const $co2 = (input: any): any => ({
        name: input.name as any,
        age: input.age as any
    });
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
}; if (!is(input))
    return null; const output = clone(input); return output; })(input), ObjectGenericArray.SPOILERS);
