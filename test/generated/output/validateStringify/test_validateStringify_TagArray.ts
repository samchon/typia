import typia from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_validateStringify } from "../internal/_test_validateStringify";
export const test_validateStringify_TagArray = _test_validateStringify("TagArray", TagArray.generate, (input) => ((input: TagArray): typia.IValidation<string> => { const validate = (input: any): typia.IValidation<TagArray> => {
    const errors = [] as any[];
    const $report = (typia.validateStringify as any).report(errors);
    const $is_uuid = (typia.validateStringify as any).is_uuid;
    ((input: any, _path: string, _exceptionable: boolean): input is TagArray => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => [(Array.isArray(input.items) && 3 === input.items.length || $report(_exceptionable, {
                path: _path + ".items",
                expected: "Array<string>",
                value: input.items
            })) && input.items.map((elem: any, _index2: number) => "string" === typeof elem && true === $is_uuid(elem) || $report(_exceptionable, {
                path: _path + ".items[" + _index2 + "]",
                expected: "string",
                value: elem
            })).every((flag: boolean) => flag) || $report(_exceptionable, {
                path: _path + ".items",
                expected: "Array<string>",
                value: input.items
            }), (Array.isArray(input.minItems) && 3 <= input.minItems.length || $report(_exceptionable, {
                path: _path + ".minItems",
                expected: "Array<number>",
                value: input.minItems
            })) && input.minItems.map((elem: any, _index3: number) => "number" === typeof elem && !Number.isNaN(elem) && 3 <= elem || $report(_exceptionable, {
                path: _path + ".minItems[" + _index3 + "]",
                expected: "number",
                value: elem
            })).every((flag: boolean) => flag) || $report(_exceptionable, {
                path: _path + ".minItems",
                expected: "Array<number>",
                value: input.minItems
            }), (Array.isArray(input.maxItems) && 7 >= input.maxItems.length || $report(_exceptionable, {
                path: _path + ".maxItems",
                expected: "Array<(number | string)>",
                value: input.maxItems
            })) && input.maxItems.map((elem: any, _index4: number) => "string" === typeof elem && 7 >= elem.length || "number" === typeof elem && !Number.isNaN(elem) && 7 >= elem || $report(_exceptionable, {
                path: _path + ".maxItems[" + _index4 + "]",
                expected: "(number | string)",
                value: elem
            })).every((flag: boolean) => flag) || $report(_exceptionable, {
                path: _path + ".maxItems",
                expected: "Array<(number | string)>",
                value: input.maxItems
            }), (Array.isArray(input.both) && (3 <= input.both.length && 7 >= input.both.length) || $report(_exceptionable, {
                path: _path + ".both",
                expected: "Array<string>",
                value: input.both
            })) && input.both.map((elem: any, _index5: number) => "string" === typeof elem && true === $is_uuid(elem) || $report(_exceptionable, {
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
            expected: "Array<Resolve<TagArray.Type>>",
            value: input
        })) && input.map((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<TagArray.Type>",
            value: elem
        })) && $vo0(elem, _path + "[" + _index1 + "]", true) || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<TagArray.Type>",
            value: elem
        })).every((flag: boolean) => flag) || $report(true, {
            path: _path + "",
            expected: "Array<Resolve<TagArray.Type>>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<TagArray>;
}; const stringify = (input: TagArray): string => {
    const $string = (typia.validateStringify as any).string;
    const $throws = (typia.validateStringify as any).throws;
    const $is_uuid = (typia.validateStringify as any).is_uuid;
    const $so0 = (input: any) => `{"items":${`[${input.items.map((elem: any) => $string(elem)).join(",")}]`},"minItems":${`[${input.minItems.map((elem: any) => elem).join(",")}]`},"maxItems":${`[${input.maxItems.map((elem: any) => (() => {
        if ("string" === typeof elem)
            return $string(elem);
        if ("number" === typeof elem)
            return elem;
        $throws({
            expected: "(number | string)",
            value: elem
        });
    })()).join(",")}]`},"both":${`[${input.both.map((elem: any) => $string(elem)).join(",")}]`}}`;
    return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
}; const output = validate(input) as any; if (output.success)
    output.data = stringify(input); return output; })(input), TagArray.SPOILERS);
