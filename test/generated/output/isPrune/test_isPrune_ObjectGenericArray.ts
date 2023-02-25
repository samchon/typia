import typia from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_isPrune } from "../internal/_test_isPrune";
export const test_isPrune_ObjectGenericArray = _test_isPrune("ObjectGenericArray", ObjectGenericArray.generate, (input) => ((input: any): input is ObjectGenericArray => { const is = (input: any): input is ObjectGenericArray => {
    const $io0 = (input: any) => "object" === typeof input.pagination && null !== input.pagination && $io1(input.pagination) && (Array.isArray(input.data) && input.data.every((elem: any) => "object" === typeof elem && null !== elem && $io2(elem)));
    const $io1 = (input: any) => "number" === typeof input.page && "number" === typeof input.limit && "number" === typeof input.total_count && "number" === typeof input.total_pages;
    const $io2 = (input: any) => "string" === typeof input.name && "number" === typeof input.age;
    return "object" === typeof input && null !== input && $io0(input);
}; const prune = (input: ObjectGenericArray): void => {
    const $io1 = (input: any) => "number" === typeof input.page && "number" === typeof input.limit && "number" === typeof input.total_count && "number" === typeof input.total_pages;
    const $io2 = (input: any) => "string" === typeof input.name && "number" === typeof input.age;
    const $po0 = (input: any) => {
        if ("object" === typeof input.pagination && null !== input.pagination)
            $po1(input.pagination);
        if (Array.isArray(input.data))
            input.data.forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem)
                    $po2(elem);
            });
        for (const key of Object.keys(input)) {
            if ("pagination" === key || "data" === key)
                continue;
            delete input[key];
        }
    };
    const $po1 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("page" === key || "limit" === key || "total_count" === key || "total_pages" === key)
                continue;
            delete input[key];
        }
    };
    const $po2 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("name" === key || "age" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
}; if (!is(input))
    return false; prune(input); return true; })(input), ObjectGenericArray.SPOILERS);
