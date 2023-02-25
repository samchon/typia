import typia from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_validatePrune } from "../internal/_test_validatePrune";
export const test_validatePrune_TagStep = _test_validatePrune("TagStep", TagStep.generate, (input) => ((input: any): typia.IValidation<TagStep> => { const validate = (input: any): typia.IValidation<TagStep> => {
    const errors = [] as any[];
    const $report = (typia.validatePrune as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is TagStep => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.exclusiveMinimum && 0 === input.exclusiveMinimum % 5 - 3 && 3 < input.exclusiveMinimum || $report(_exceptionable, {
                path: _path + ".exclusiveMinimum",
                expected: "number",
                value: input.exclusiveMinimum
            }), "number" === typeof input.minimum && 0 === input.minimum % 5 - 3 && 3 <= input.minimum || $report(_exceptionable, {
                path: _path + ".minimum",
                expected: "number",
                value: input.minimum
            }), "number" === typeof input.range && 0 === input.range % 5 - 0 && 0 < input.range && 100 > input.range || $report(_exceptionable, {
                path: _path + ".range",
                expected: "number",
                value: input.range
            }), "number" === typeof input.multipleOf && 0 === input.multipleOf % 5 && 3 <= input.multipleOf && 99 >= input.multipleOf || $report(_exceptionable, {
                path: _path + ".multipleOf",
                expected: "number",
                value: input.multipleOf
            })].every((flag: boolean) => flag);
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Array<Resolve<TagStep.Type>>",
            value: input
        })) && input.map((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<TagStep.Type>",
            value: elem
        })) && $vo0(elem, _path + "[" + _index1 + "]", true) || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<TagStep.Type>",
            value: elem
        })).every((flag: boolean) => flag) || $report(true, {
            path: _path + "",
            expected: "Array<Resolve<TagStep.Type>>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<TagStep>;
}; const prune = (input: TagStep): void => {
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("exclusiveMinimum" === key || "minimum" === key || "range" === key || "multipleOf" === key)
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
    prune(input); return output; })(input), TagStep.SPOILERS);
