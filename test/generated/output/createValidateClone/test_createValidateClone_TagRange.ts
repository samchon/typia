import typia from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_validateClone } from "../internal/_test_validateClone";
export const test_createValidateClone_TagRange = _test_validateClone("TagRange", TagRange.generate, (input: any): typia.IValidation<typia.Primitive<TagRange>> => { const validate = (input: any): typia.IValidation<TagRange> => {
    const errors = [] as any[];
    const $report = (typia.createValidateClone as any).report(errors);
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
}; const clone = (input: TagRange): typia.Primitive<TagRange> => {
    const $co0 = (input: any) => ({
        greater: input.greater,
        greater_equal: input.greater_equal,
        less: input.less,
        less_equal: input.less_equal,
        greater_less: input.greater_less,
        greater_equal_less: input.greater_equal_less,
        greater_less_equal: input.greater_less_equal,
        greater_equal_less_equal: input.greater_equal_less_equal
    });
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem) : input;
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; }, TagRange.SPOILERS);
