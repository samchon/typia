import typia from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_assertParse } from "../internal/_test_assertParse";
export const test_assertParse_ObjectGenericArray = _test_assertParse("ObjectGenericArray", ObjectGenericArray.generate, (input) => ((input: string): typia.Primitive<ObjectGenericArray> => { const assert = (input: any) => {
    const $guard = (typia.assertParse as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ObjectGenericArray => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.pagination && null !== input.pagination || $guard(_exceptionable, {
            path: _path + ".pagination",
            expected: "Resolve<ObjectGenericArray.IPagination>",
            value: input.pagination
        })) && $ao1(input.pagination, _path + ".pagination", true && _exceptionable) && ((Array.isArray(input.data) || $guard(_exceptionable, {
            path: _path + ".data",
            expected: "Array<Resolve<ObjectGenericArray.IPerson>>",
            value: input.data
        })) && input.data.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
            path: _path + ".data[" + _index1 + "]",
            expected: "Resolve<ObjectGenericArray.IPerson>",
            value: elem
        })) && $ao2(elem, _path + ".data[" + _index1 + "]", true && _exceptionable)));
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.page || $guard(_exceptionable, {
            path: _path + ".page",
            expected: "number",
            value: input.page
        })) && ("number" === typeof input.limit || $guard(_exceptionable, {
            path: _path + ".limit",
            expected: "number",
            value: input.limit
        })) && ("number" === typeof input.total_count || $guard(_exceptionable, {
            path: _path + ".total_count",
            expected: "number",
            value: input.total_count
        })) && ("number" === typeof input.total_pages || $guard(_exceptionable, {
            path: _path + ".total_pages",
            expected: "number",
            value: input.total_pages
        }));
        const $ao2 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && ("number" === typeof input.age || $guard(_exceptionable, {
            path: _path + ".age",
            expected: "number",
            value: input.age
        }));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<ObjectGenericArray>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as ObjectGenericArray;
}; input = JSON.parse(input); return assert(input); })(input), ObjectGenericArray.SPOILERS);
