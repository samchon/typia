import typia from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_ObjectGenericArray = _test_clone("ObjectGenericArray", ObjectGenericArray.generate, (input) => ((input: ObjectGenericArray): typia.Primitive<ObjectGenericArray> => {
    const $io1 = (input: any) => "number" === typeof input.page && "number" === typeof input.limit && "number" === typeof input.total_count && "number" === typeof input.total_pages;
    const $io2 = (input: any) => "string" === typeof input.name && "number" === typeof input.age;
    const $co0 = (input: any) => ({
        pagination: "object" === typeof input.pagination && null !== input.pagination ? $co1(input.pagination) : input.pagination,
        data: Array.isArray(input.data) ? input.data.map((elem: any) => "object" === typeof elem && null !== elem ? $co2(elem) : elem) : input.data
    });
    const $co1 = (input: any) => ({
        page: input.page,
        limit: input.limit,
        total_count: input.total_count,
        total_pages: input.total_pages
    });
    const $co2 = (input: any) => ({
        name: input.name,
        age: input.age
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
})(input));
