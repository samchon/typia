import typia from "../../../../src";
import { TagArray } from "../../../structures/TagArray";
import { _test_validateClone } from "../../../internal/_test_validateClone";
export const test_createValidateClone_TagArray = _test_validateClone("TagArray", TagArray.generate, (input: any): typia.IValidation<typia.Primitive<TagArray>> => { const validate = (input: any): typia.IValidation<TagArray> => {
    const errors = [] as any[];
    const $report = (typia.createValidateClone as any).report(errors);
    const __is = (input: any): input is TagArray => {
        const $is_uuid = (typia.createValidateClone as any).is_uuid;
        const $io0 = (input: any): boolean => Array.isArray(input.items) && 3 === input.items.length && input.items.every((elem: any) => "string" === typeof elem && $is_uuid(elem)) && (Array.isArray(input.minItems) && 3 <= input.minItems.length && input.minItems.every((elem: any) => "number" === typeof elem && Number.isFinite(elem) && 3 <= elem)) && (Array.isArray(input.maxItems) && 7 >= input.maxItems.length && input.maxItems.every((elem: any) => "string" === typeof elem && 7 >= elem.length || "number" === typeof elem && Number.isFinite(elem) && 7 >= elem)) && (Array.isArray(input.both) && 3 <= input.both.length && 7 >= input.both.length && input.both.every((elem: any) => "string" === typeof elem && $is_uuid(elem)));
        return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is TagArray => {
            const $is_uuid = (typia.createValidateClone as any).is_uuid;
            const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [(Array.isArray(input.items) && (3 === input.items.length || $report(_exceptionable, {
                    path: _path + ".items",
                    expected: "Array.length (@items 3)",
                    value: input.items
                })) || $report(_exceptionable, {
                    path: _path + ".items",
                    expected: "Array<string>",
                    value: input.items
                })) && input.items.map((elem: any, _index2: number) => "string" === typeof elem && ($is_uuid(elem) || $report(_exceptionable, {
                    path: _path + ".items[" + _index2 + "]",
                    expected: "string (@format uuid)",
                    value: elem
                })) || $report(_exceptionable, {
                    path: _path + ".items[" + _index2 + "]",
                    expected: "string",
                    value: elem
                })).every((flag: boolean) => flag) || $report(_exceptionable, {
                    path: _path + ".items",
                    expected: "Array<string>",
                    value: input.items
                }), (Array.isArray(input.minItems) && (3 <= input.minItems.length || $report(_exceptionable, {
                    path: _path + ".minItems",
                    expected: "Array.length (@minItems 3)",
                    value: input.minItems
                })) || $report(_exceptionable, {
                    path: _path + ".minItems",
                    expected: "Array<number>",
                    value: input.minItems
                })) && input.minItems.map((elem: any, _index3: number) => "number" === typeof elem && Number.isFinite(elem) && (3 <= elem || $report(_exceptionable, {
                    path: _path + ".minItems[" + _index3 + "]",
                    expected: "number (@minimum 3)",
                    value: elem
                })) || $report(_exceptionable, {
                    path: _path + ".minItems[" + _index3 + "]",
                    expected: "number",
                    value: elem
                })).every((flag: boolean) => flag) || $report(_exceptionable, {
                    path: _path + ".minItems",
                    expected: "Array<number>",
                    value: input.minItems
                }), (Array.isArray(input.maxItems) && (7 >= input.maxItems.length || $report(_exceptionable, {
                    path: _path + ".maxItems",
                    expected: "Array.length (@maxItems 7)",
                    value: input.maxItems
                })) || $report(_exceptionable, {
                    path: _path + ".maxItems",
                    expected: "Array<string | number>",
                    value: input.maxItems
                })) && input.maxItems.map((elem: any, _index4: number) => "string" === typeof elem && (7 >= elem.length || $report(_exceptionable, {
                    path: _path + ".maxItems[" + _index4 + "]",
                    expected: "string (@maxLength 7)",
                    value: elem
                })) || "number" === typeof elem && Number.isFinite(elem) && (7 >= elem || $report(_exceptionable, {
                    path: _path + ".maxItems[" + _index4 + "]",
                    expected: "number (@maximum 7)",
                    value: elem
                })) || $report(_exceptionable, {
                    path: _path + ".maxItems[" + _index4 + "]",
                    expected: "(number | string)",
                    value: elem
                })).every((flag: boolean) => flag) || $report(_exceptionable, {
                    path: _path + ".maxItems",
                    expected: "Array<string | number>",
                    value: input.maxItems
                }), (Array.isArray(input.both) && (3 <= input.both.length || $report(_exceptionable, {
                    path: _path + ".both",
                    expected: "Array.length (@minItems 3)",
                    value: input.both
                })) && (7 >= input.both.length || $report(_exceptionable, {
                    path: _path + ".both",
                    expected: "Array.length (@maxItems 7)",
                    value: input.both
                })) || $report(_exceptionable, {
                    path: _path + ".both",
                    expected: "Array<string>",
                    value: input.both
                })) && input.both.map((elem: any, _index5: number) => "string" === typeof elem && ($is_uuid(elem) || $report(_exceptionable, {
                    path: _path + ".both[" + _index5 + "]",
                    expected: "string (@format uuid)",
                    value: elem
                })) || $report(_exceptionable, {
                    path: _path + ".both[" + _index5 + "]",
                    expected: "string",
                    value: elem
                })).every((flag: boolean) => flag) || $report(_exceptionable, {
                    path: _path + ".both",
                    expected: "Array<string>",
                    value: input.both
                })].every((flag: boolean) => flag);
            return (Array.isArray(input) || $report(true, {
                path: _path + "",
                expected: "TagArray",
                value: input
            })) && input.map((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $report(true, {
                path: _path + "[" + _index1 + "]",
                expected: "TagArray.Type",
                value: elem
            })) && $vo0(elem, _path + "[" + _index1 + "]", true) || $report(true, {
                path: _path + "[" + _index1 + "]",
                expected: "TagArray.Type",
                value: elem
            })).every((flag: boolean) => flag) || $report(true, {
                path: _path + "",
                expected: "TagArray",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
}; const clone = (input: TagArray): typia.Primitive<TagArray> => {
    const $is_uuid = (typia.createValidateClone as any).is_uuid;
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
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; }, TagArray.SPOILERS);
