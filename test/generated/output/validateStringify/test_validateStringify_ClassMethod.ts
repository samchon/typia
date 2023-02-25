import typia from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_validateStringify } from "../internal/_test_validateStringify";
export const test_validateStringify_ClassMethod = _test_validateStringify("ClassMethod", ClassMethod.generate, (input) => ((input: Animal): typia.IValidation<string> => { const validate = (input: any): typia.IValidation<Animal> => {
    const errors = [] as any[];
    const $report = (typia.validateStringify as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is Animal => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            }), "number" === typeof input.age && !Number.isNaN(input.age) || $report(_exceptionable, {
                path: _path + ".age",
                expected: "number",
                value: input.age
            })].every((flag: boolean) => flag);
        return ("object" === typeof input && null !== input || $report(true, {
            path: _path + "",
            expected: "Resolve<ClassMethod.Animal>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<ClassMethod.Animal>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<Animal>;
}; const stringify = (input: Animal): string => {
    const $string = (typia.validateStringify as any).string;
    return `{"name":${$string(input.name)},"age":${input.age}}`;
}; const output = validate(input) as any; if (output.success)
    output.data = stringify(input); return output; })(input), ClassMethod.SPOILERS);
