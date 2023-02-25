import typia from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_validatePrune } from "../internal/_test_validatePrune";
export const test_validatePrune_DynamicConstant = _test_validatePrune("DynamicConstant", DynamicConstant.generate, (input) => ((input: any): typia.IValidation<DynamicConstant> => { const validate = (input: any): typia.IValidation<DynamicConstant> => {
    const errors = [] as any[];
    const $report = (typia.validatePrune as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is DynamicConstant => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.a && !Number.isNaN(input.a) || $report(_exceptionable, {
                path: _path + ".a",
                expected: "number",
                value: input.a
            }), "number" === typeof input.b && !Number.isNaN(input.b) || $report(_exceptionable, {
                path: _path + ".b",
                expected: "number",
                value: input.b
            }), "number" === typeof input.c && !Number.isNaN(input.c) || $report(_exceptionable, {
                path: _path + ".c",
                expected: "number",
                value: input.c
            }), "number" === typeof input.d && !Number.isNaN(input.d) || $report(_exceptionable, {
                path: _path + ".d",
                expected: "number",
                value: input.d
            })].every((flag: boolean) => flag);
        return ("object" === typeof input && null !== input || $report(true, {
            path: _path + "",
            expected: "Resolve<DynamicConstant>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<DynamicConstant>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<DynamicConstant>;
}; const prune = (input: DynamicConstant): void => {
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("a" === key || "b" === key || "c" === key || "d" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
}; const output = validate(input); if (output.success)
    prune(input); return output; })(input), DynamicConstant.SPOILERS);
