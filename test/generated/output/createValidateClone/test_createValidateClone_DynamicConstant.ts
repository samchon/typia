import typia from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_validateClone } from "../internal/_test_validateClone";
export const test_createValidateClone_DynamicConstant = _test_validateClone("DynamicConstant", DynamicConstant.generate, (input: any): typia.IValidation<typia.Primitive<DynamicConstant>> => { const validate = (input: any): typia.IValidation<DynamicConstant> => {
    const errors = [] as any[];
    const $report = (typia.createValidateClone as any).report(errors);
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
}; const clone = (input: DynamicConstant): typia.Primitive<DynamicConstant> => {
    const $co0 = (input: any) => ({
        a: input.a,
        b: input.b,
        c: input.c,
        d: input.d
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; }, DynamicConstant.SPOILERS);
