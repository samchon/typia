import typia from "../../../../src";
import { _test_validateParse } from "../../../internal/_test_validateParse";
import { DynamicConstant } from "../../../structures/DynamicConstant";
export const test_createValidateParse_DynamicConstant = _test_validateParse("DynamicConstant", DynamicConstant.generate, (input: string): typia.IValidation<typia.Primitive<DynamicConstant>> => { const validate = (input: any): typia.IValidation<DynamicConstant> => {
    const __is = (input: any): input is DynamicConstant => {
        const $io0 = (input: any): boolean => "number" === typeof input.a && Number.isFinite(input.a) && ("number" === typeof input.b && Number.isFinite(input.b)) && ("number" === typeof input.c && Number.isFinite(input.c)) && ("number" === typeof input.d && Number.isFinite(input.d));
        return "object" === typeof input && null !== input && $io0(input);
    };
    const errors = [] as any[];
    const $report = (typia.createValidateParse as any).report(errors);
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is DynamicConstant => {
            const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["number" === typeof input.a && Number.isFinite(input.a) || $report(_exceptionable, {
                    path: _path + ".a",
                    expected: "number",
                    value: input.a
                }), "number" === typeof input.b && Number.isFinite(input.b) || $report(_exceptionable, {
                    path: _path + ".b",
                    expected: "number",
                    value: input.b
                }), "number" === typeof input.c && Number.isFinite(input.c) || $report(_exceptionable, {
                    path: _path + ".c",
                    expected: "number",
                    value: input.c
                }), "number" === typeof input.d && Number.isFinite(input.d) || $report(_exceptionable, {
                    path: _path + ".d",
                    expected: "number",
                    value: input.d
                })].every((flag: boolean) => flag);
            return ("object" === typeof input && null !== input || $report(true, {
                path: _path + "",
                expected: "DynamicConstant",
                value: input
            })) && $vo0(input, _path + "", true) || $report(true, {
                path: _path + "",
                expected: "DynamicConstant",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
}; input = JSON.parse(input); const output = validate(input); return output as any; }, DynamicConstant.SPOILERS);
