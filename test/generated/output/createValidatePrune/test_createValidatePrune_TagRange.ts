import typia from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_validatePrune } from "../internal/_test_validatePrune";
export const test_createValidatePrune_TagRange = _test_validatePrune("TagRange", TagRange.generate, (input: any): typia.IValidation<TagRange> => { const validate = (input: any): typia.IValidation<TagRange> => {
    const errors = [] as any[];
    const $report = (typia.createValidatePrune as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is TagRange => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.greater && !Number.isNaN(input.greater) && 3 < input.greater || $report(_exceptionable, {
                path: _path + ".greater",
                expected: "number",
                value: input.greater
            }), "number" === typeof input.greater_equal && !Number.isNaN(input.greater_equal) && 3 <= input.greater_equal || $report(_exceptionable, {
                path: _path + ".greater_equal",
                expected: "number",
                value: input.greater_equal
            }), "number" === typeof input.less && !Number.isNaN(input.less) && 7 > input.less || $report(_exceptionable, {
                path: _path + ".less",
                expected: "number",
                value: input.less
            }), "number" === typeof input.less_equal && !Number.isNaN(input.less_equal) && 7 >= input.less_equal || $report(_exceptionable, {
                path: _path + ".less_equal",
                expected: "number",
                value: input.less_equal
            }), "number" === typeof input.greater_less && 3 < input.greater_less && 7 > input.greater_less || $report(_exceptionable, {
                path: _path + ".greater_less",
                expected: "number",
                value: input.greater_less
            }), "number" === typeof input.greater_equal_less && 3 <= input.greater_equal_less && 7 > input.greater_equal_less || $report(_exceptionable, {
                path: _path + ".greater_equal_less",
                expected: "number",
                value: input.greater_equal_less
            }), "number" === typeof input.greater_less_equal && 3 < input.greater_less_equal && 7 >= input.greater_less_equal || $report(_exceptionable, {
                path: _path + ".greater_less_equal",
                expected: "number",
                value: input.greater_less_equal
            }), "number" === typeof input.greater_equal_less_equal && 3 <= input.greater_equal_less_equal && 7 >= input.greater_equal_less_equal || $report(_exceptionable, {
                path: _path + ".greater_equal_less_equal",
                expected: "number",
                value: input.greater_equal_less_equal
            })].every((flag: boolean) => flag);
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Array<Resolve<TagRange.Type>>",
            value: input
        })) && input.map((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<TagRange.Type>",
            value: elem
        })) && $vo0(elem, _path + "[" + _index1 + "]", true) || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<TagRange.Type>",
            value: elem
        })).every((flag: boolean) => flag) || $report(true, {
            path: _path + "",
            expected: "Array<Resolve<TagRange.Type>>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<TagRange>;
}; const prune = (input: TagRange): void => {
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("greater" === key || "greater_equal" === key || "less" === key || "less_equal" === key || "greater_less" === key || "greater_equal_less" === key || "greater_less_equal" === key || "greater_equal_less_equal" === key)
                continue;
            delete input[key];
        }
    };
    if (Array.isArray(input))
        input.forEach((elem: any) => {
            if ("object" === typeof elem && null !== elem)
                $po0(elem);
        });
}; const output = validate(input); if (output.success)
    prune(input); return output; }, TagRange.SPOILERS);
