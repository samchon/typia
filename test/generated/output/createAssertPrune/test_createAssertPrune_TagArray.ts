import typia from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_assertPrune } from "../internal/_test_assertPrune";
export const test_createAssertPrune_TagArray = _test_assertPrune("TagArray", TagArray.generate, (input: any): TagArray => { const assert = (input: any) => {
    const $guard = (typia.createAssertPrune as any).guard;
    const $is_uuid = (typia.createAssertPrune as any).is_uuid;
    ((input: any, _path: string, _exceptionable: boolean): input is TagArray => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => (Array.isArray(input.items) && 3 === input.items.length || $guard(_exceptionable, {
            path: _path + ".items",
            expected: "Array<string>",
            value: input.items
        })) && input.items.every((elem: any, _index2: number) => "string" === typeof elem && true === $is_uuid(elem) || $guard(_exceptionable, {
            path: _path + ".items[" + _index2 + "]",
            expected: "string",
            value: elem
        })) && ((Array.isArray(input.minItems) && 3 <= input.minItems.length || $guard(_exceptionable, {
            path: _path + ".minItems",
            expected: "Array<number>",
            value: input.minItems
        })) && input.minItems.every((elem: any, _index3: number) => "number" === typeof elem && 3 <= elem || $guard(_exceptionable, {
            path: _path + ".minItems[" + _index3 + "]",
            expected: "number",
            value: elem
        }))) && ((Array.isArray(input.maxItems) && 7 >= input.maxItems.length || $guard(_exceptionable, {
            path: _path + ".maxItems",
            expected: "Array<(number | string)>",
            value: input.maxItems
        })) && input.maxItems.every((elem: any, _index4: number) => "string" === typeof elem && 7 >= elem.length || "number" === typeof elem && 7 >= elem || $guard(_exceptionable, {
            path: _path + ".maxItems[" + _index4 + "]",
            expected: "(number | string)",
            value: elem
        }))) && ((Array.isArray(input.both) && (3 <= input.both.length && 7 >= input.both.length) || $guard(_exceptionable, {
            path: _path + ".both",
            expected: "Array<string>",
            value: input.both
        })) && input.both.every((elem: any, _index5: number) => "string" === typeof elem && true === $is_uuid(elem) || $guard(_exceptionable, {
            path: _path + ".both[" + _index5 + "]",
            expected: "string",
            value: elem
        })));
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<Resolve<TagArray.Type>>",
            value: input
        })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<TagArray.Type>",
            value: elem
        })) && $ao0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as TagArray;
}; const prune = (input: TagArray): void => {
    const $is_uuid = (typia.createAssertPrune as any).is_uuid;
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("items" === key || "minItems" === key || "maxItems" === key || "both" === key)
                continue;
            delete input[key];
        }
    };
    if (Array.isArray(input))
        input.forEach((elem: any) => {
            if ("object" === typeof elem && null !== elem)
                $po0(elem);
        });
}; assert(input); prune(input); return input; }, TagArray.SPOILERS);
