import typia from "../../../../src";
import { TagArray } from "../../../structures/TagArray";
import { _test_assertClone } from "../../../internal/_test_assertClone";
export const test_assertClone_TagArray = _test_assertClone("TagArray", TagArray.generate, (input) => ((input: any): typia.Primitive<Array<TagArray.Type>> => { const assert = (input: any): Array<TagArray.Type> => {
    const __is = (input: any): input is Array<TagArray.Type> => {
        const $is_uuid = (typia.assertClone as any).is_uuid;
        const $io0 = (input: any): boolean => Array.isArray(input.items) && 3 === input.items.length && input.items.every((elem: any) => "string" === typeof elem && $is_uuid(elem)) && (Array.isArray(input.minItems) && 3 <= input.minItems.length && input.minItems.every((elem: any) => "number" === typeof elem && Number.isFinite(elem) && 3 <= elem)) && (Array.isArray(input.maxItems) && 7 >= input.maxItems.length && input.maxItems.every((elem: any) => "string" === typeof elem && 7 >= elem.length || "number" === typeof elem && Number.isFinite(elem) && 7 >= elem)) && (Array.isArray(input.both) && 3 <= input.both.length && 7 >= input.both.length && input.both.every((elem: any) => "string" === typeof elem && $is_uuid(elem)));
        return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is Array<TagArray.Type> => {
            const $guard = (typia.assertClone as any).guard;
            const $is_uuid = (typia.assertClone as any).is_uuid;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ((Array.isArray(input.items) && (3 === input.items.length || $guard(_exceptionable, {
                path: _path + ".items",
                expected: "Array.length (@items 3)",
                value: input.items
            })) || $guard(_exceptionable, {
                path: _path + ".items",
                expected: "Array<string>",
                value: input.items
            })) && input.items.every((elem: any, _index2: number) => "string" === typeof elem && ($is_uuid(elem) || $guard(_exceptionable, {
                path: _path + ".items[" + _index2 + "]",
                expected: "string (@format uuid)",
                value: elem
            })) || $guard(_exceptionable, {
                path: _path + ".items[" + _index2 + "]",
                expected: "string",
                value: elem
            })) || $guard(_exceptionable, {
                path: _path + ".items",
                expected: "Array<string>",
                value: input.items
            })) && ((Array.isArray(input.minItems) && (3 <= input.minItems.length || $guard(_exceptionable, {
                path: _path + ".minItems",
                expected: "Array.length (@minItems 3)",
                value: input.minItems
            })) || $guard(_exceptionable, {
                path: _path + ".minItems",
                expected: "Array<number>",
                value: input.minItems
            })) && input.minItems.every((elem: any, _index3: number) => "number" === typeof elem && Number.isFinite(elem) && (3 <= elem || $guard(_exceptionable, {
                path: _path + ".minItems[" + _index3 + "]",
                expected: "number (@minimum 3)",
                value: elem
            })) || $guard(_exceptionable, {
                path: _path + ".minItems[" + _index3 + "]",
                expected: "number",
                value: elem
            })) || $guard(_exceptionable, {
                path: _path + ".minItems",
                expected: "Array<number>",
                value: input.minItems
            })) && ((Array.isArray(input.maxItems) && (7 >= input.maxItems.length || $guard(_exceptionable, {
                path: _path + ".maxItems",
                expected: "Array.length (@maxItems 7)",
                value: input.maxItems
            })) || $guard(_exceptionable, {
                path: _path + ".maxItems",
                expected: "Array<string | number>",
                value: input.maxItems
            })) && input.maxItems.every((elem: any, _index4: number) => "string" === typeof elem && (7 >= elem.length || $guard(_exceptionable, {
                path: _path + ".maxItems[" + _index4 + "]",
                expected: "string (@maxLength 7)",
                value: elem
            })) || "number" === typeof elem && Number.isFinite(elem) && (7 >= elem || $guard(_exceptionable, {
                path: _path + ".maxItems[" + _index4 + "]",
                expected: "number (@maximum 7)",
                value: elem
            })) || $guard(_exceptionable, {
                path: _path + ".maxItems[" + _index4 + "]",
                expected: "(number | string)",
                value: elem
            })) || $guard(_exceptionable, {
                path: _path + ".maxItems",
                expected: "Array<string | number>",
                value: input.maxItems
            })) && ((Array.isArray(input.both) && (3 <= input.both.length || $guard(_exceptionable, {
                path: _path + ".both",
                expected: "Array.length (@minItems 3)",
                value: input.both
            })) && (7 >= input.both.length || $guard(_exceptionable, {
                path: _path + ".both",
                expected: "Array.length (@maxItems 7)",
                value: input.both
            })) || $guard(_exceptionable, {
                path: _path + ".both",
                expected: "Array<string>",
                value: input.both
            })) && input.both.every((elem: any, _index5: number) => "string" === typeof elem && ($is_uuid(elem) || $guard(_exceptionable, {
                path: _path + ".both[" + _index5 + "]",
                expected: "string (@format uuid)",
                value: elem
            })) || $guard(_exceptionable, {
                path: _path + ".both[" + _index5 + "]",
                expected: "string",
                value: elem
            })) || $guard(_exceptionable, {
                path: _path + ".both",
                expected: "Array<string>",
                value: input.both
            }));
            return (Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "Array<TagArray.Type>",
                value: input
            })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "TagArray.Type",
                value: elem
            })) && $ao0(elem, _path + "[" + _index1 + "]", true) || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "TagArray.Type",
                value: elem
            })) || $guard(true, {
                path: _path + "",
                expected: "Array<TagArray.Type>",
                value: input
            });
        })(input, "$input", true);
    return input;
}; const clone = (input: Array<TagArray.Type>): typia.Primitive<Array<TagArray.Type>> => {
    const $is_uuid = (typia.assertClone as any).is_uuid;
    const $cp0 = (input: any) => input.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem as any);
    const $cp1 = (input: any) => input.map((elem: any) => elem as any);
    const $cp2 = (input: any) => input.map((elem: any) => elem as any);
    const $cp3 = (input: any) => input.map((elem: any) => elem as any);
    const $co0 = (input: any): any => ({
        items: Array.isArray(input.items) ? $cp1(input.items) : input.items as any,
        minItems: Array.isArray(input.minItems) ? $cp2(input.minItems) : input.minItems as any,
        maxItems: Array.isArray(input.maxItems) ? $cp3(input.maxItems) : input.maxItems as any,
        both: Array.isArray(input.both) ? $cp1(input.both) : input.both as any
    });
    return Array.isArray(input) ? $cp0(input) : input as any;
}; assert(input); const output = clone(input); return output; })(input), TagArray.SPOILERS);
