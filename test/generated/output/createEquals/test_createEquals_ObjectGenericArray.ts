import typia from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_equals } from "../internal/_test_equals";
export const test_createEquals_ObjectGenericArray = _test_equals("ObjectGenericArray", ObjectGenericArray.generate, (input: any, _exceptionable: boolean): input is ObjectGenericArray => {
    const $io0 = (input: any, _exceptionable: boolean) => "object" === typeof input.pagination && null !== input.pagination && $io1(input.pagination, true && _exceptionable) && (Array.isArray(input.data) && input.data.every((elem: any, _index1: number) => "object" === typeof elem && null !== elem && $io2(elem, true && _exceptionable))) && (2 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["pagination", "data"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $io1 = (input: any, _exceptionable: boolean) => "number" === typeof input.page && "number" === typeof input.limit && "number" === typeof input.total_count && "number" === typeof input.total_pages && (4 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["page", "limit", "total_count", "total_pages"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    const $io2 = (input: any, _exceptionable: boolean) => "string" === typeof input.name && "number" === typeof input.age && (2 === Object.keys(input).length || Object.keys(input).every(key => {
        if (["name", "age"].some(prop => key === prop))
            return true;
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    }));
    return "object" === typeof input && null !== input && $io0(input, true);
});
