import typia from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_validateClone } from "../internal/_test_validateClone";
export const test_validateClone_ObjectGenericArray = _test_validateClone("ObjectGenericArray", ObjectGenericArray.generate, (input) => ((input: any): typia.IValidation<typia.Primitive<ObjectGenericArray>> => { const validate = (input: any): typia.IValidation<ObjectGenericArray> => {
    const errors = [] as any[];
    const $report = (typia.validateClone as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is ObjectGenericArray => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => [("object" === typeof input.pagination && null !== input.pagination || $report(_exceptionable, {
                path: _path + ".pagination",
                expected: "Resolve<ObjectGenericArray.IPagination>",
                value: input.pagination
            })) && $vo1(input.pagination, _path + ".pagination", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".pagination",
                expected: "Resolve<ObjectGenericArray.IPagination>",
                value: input.pagination
            }), (Array.isArray(input.data) || $report(_exceptionable, {
                path: _path + ".data",
                expected: "Array<Resolve<ObjectGenericArray.IPerson>>",
                value: input.data
            })) && input.data.map((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
                path: _path + ".data[" + _index1 + "]",
                expected: "Resolve<ObjectGenericArray.IPerson>",
                value: elem
            })) && $vo2(elem, _path + ".data[" + _index1 + "]", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".data[" + _index1 + "]",
                expected: "Resolve<ObjectGenericArray.IPerson>",
                value: elem
            })).every((flag: boolean) => flag) || $report(_exceptionable, {
                path: _path + ".data",
                expected: "Array<Resolve<ObjectGenericArray.IPerson>>",
                value: input.data
            })].every((flag: boolean) => flag);
        const $vo1 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.page && !Number.isNaN(input.page) || $report(_exceptionable, {
                path: _path + ".page",
                expected: "number",
                value: input.page
            }), "number" === typeof input.limit && !Number.isNaN(input.limit) || $report(_exceptionable, {
                path: _path + ".limit",
                expected: "number",
                value: input.limit
            }), "number" === typeof input.total_count && !Number.isNaN(input.total_count) || $report(_exceptionable, {
                path: _path + ".total_count",
                expected: "number",
                value: input.total_count
            }), "number" === typeof input.total_pages && !Number.isNaN(input.total_pages) || $report(_exceptionable, {
                path: _path + ".total_pages",
                expected: "number",
                value: input.total_pages
            })].every((flag: boolean) => flag);
        const $vo2 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            }), "number" === typeof input.age && !Number.isNaN(input.age) || $report(_exceptionable, {
                path: _path + ".age",
                expected: "number",
                value: input.age
            })].every((flag: boolean) => flag);
        return ("object" === typeof input && null !== input || $report(true, {
            path: _path + "",
            expected: "Resolve<ObjectGenericArray>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<ObjectGenericArray>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<ObjectGenericArray>;
}; const clone = (input: ObjectGenericArray): typia.Primitive<ObjectGenericArray> => {
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
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; })(input), ObjectGenericArray.SPOILERS);
