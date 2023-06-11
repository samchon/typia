import typia from "../../../../src";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";
import { _test_assertPrune } from "../../../internal/_test_assertPrune";
export const test_assertPrune_ObjectGenericArray = _test_assertPrune("ObjectGenericArray", ObjectGenericArray.generate, (input) => ((input: any): ObjectGenericArray.IPage<ObjectGenericArray.IPerson> => { const assert = (input: any): ObjectGenericArray.IPage<ObjectGenericArray.IPerson> => {
    const __is = (input: any): input is ObjectGenericArray.IPage<ObjectGenericArray.IPerson> => {
        const $io0 = (input: any): boolean => "object" === typeof input.pagination && null !== input.pagination && $io1(input.pagination) && (Array.isArray(input.data) && input.data.every((elem: any) => "object" === typeof elem && null !== elem && $io2(elem)));
        const $io1 = (input: any): boolean => "number" === typeof input.page && Number.isFinite(input.page) && ("number" === typeof input.limit && Number.isFinite(input.limit)) && ("number" === typeof input.total_count && Number.isFinite(input.total_count)) && ("number" === typeof input.total_pages && Number.isFinite(input.total_pages));
        const $io2 = (input: any): boolean => "string" === typeof input.name && ("number" === typeof input.age && Number.isFinite(input.age));
        return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ObjectGenericArray.IPage<ObjectGenericArray.IPerson> => {
            const $guard = (typia.assertPrune as any).guard;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => (("object" === typeof input.pagination && null !== input.pagination || $guard(_exceptionable, {
                path: _path + ".pagination",
                expected: "ObjectGenericArray.IPagination",
                value: input.pagination
            })) && $ao1(input.pagination, _path + ".pagination", true && _exceptionable) || $guard(_exceptionable, {
                path: _path + ".pagination",
                expected: "ObjectGenericArray.IPagination",
                value: input.pagination
            })) && ((Array.isArray(input.data) || $guard(_exceptionable, {
                path: _path + ".data",
                expected: "Array<ObjectGenericArray.IPerson>",
                value: input.data
            })) && input.data.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
                path: _path + ".data[" + _index1 + "]",
                expected: "ObjectGenericArray.IPerson",
                value: elem
            })) && $ao2(elem, _path + ".data[" + _index1 + "]", true && _exceptionable) || $guard(_exceptionable, {
                path: _path + ".data[" + _index1 + "]",
                expected: "ObjectGenericArray.IPerson",
                value: elem
            })) || $guard(_exceptionable, {
                path: _path + ".data",
                expected: "Array<ObjectGenericArray.IPerson>",
                value: input.data
            }));
            const $ao1 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("number" === typeof input.page && Number.isFinite(input.page) || $guard(_exceptionable, {
                path: _path + ".page",
                expected: "number",
                value: input.page
            })) && ("number" === typeof input.limit && Number.isFinite(input.limit) || $guard(_exceptionable, {
                path: _path + ".limit",
                expected: "number",
                value: input.limit
            })) && ("number" === typeof input.total_count && Number.isFinite(input.total_count) || $guard(_exceptionable, {
                path: _path + ".total_count",
                expected: "number",
                value: input.total_count
            })) && ("number" === typeof input.total_pages && Number.isFinite(input.total_pages) || $guard(_exceptionable, {
                path: _path + ".total_pages",
                expected: "number",
                value: input.total_pages
            }));
            const $ao2 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("string" === typeof input.name || $guard(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            })) && ("number" === typeof input.age && Number.isFinite(input.age) || $guard(_exceptionable, {
                path: _path + ".age",
                expected: "number",
                value: input.age
            }));
            return ("object" === typeof input && null !== input || $guard(true, {
                path: _path + "",
                expected: "ObjectGenericArray",
                value: input
            })) && $ao0(input, _path + "", true) || $guard(true, {
                path: _path + "",
                expected: "ObjectGenericArray",
                value: input
            });
        })(input, "$input", true);
    return input;
}; const prune = (input: ObjectGenericArray.IPage<ObjectGenericArray.IPerson>): void => {
    const $io1 = (input: any): boolean => "number" === typeof input.page && "number" === typeof input.limit && "number" === typeof input.total_count && "number" === typeof input.total_pages;
    const $io2 = (input: any): boolean => "string" === typeof input.name && "number" === typeof input.age;
    const $pp0 = (input: any) => input.forEach((elem: any) => {
        if ("object" === typeof elem && null !== elem)
            $po2(elem);
    });
    const $po0 = (input: any): any => {
        if ("object" === typeof input.pagination && null !== input.pagination)
            $po1(input.pagination);
        if (Array.isArray(input.data))
            $pp0(input.data);
        for (const key of Object.keys(input)) {
            if ("pagination" === key || "data" === key)
                continue;
            delete input[key];
        }
    };
    const $po1 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("page" === key || "limit" === key || "total_count" === key || "total_pages" === key)
                continue;
            delete input[key];
        }
    };
    const $po2 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("name" === key || "age" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
}; assert(input); prune(input); return input; })(input), ObjectGenericArray.SPOILERS);
