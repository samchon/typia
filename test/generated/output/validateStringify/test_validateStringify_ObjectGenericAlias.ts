import typia from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_validateStringify } from "../internal/_test_validateStringify";
export const test_validateStringify_ObjectGenericAlias = _test_validateStringify("ObjectGenericAlias", ObjectGenericAlias.generate, (input) => ((input: Alias): typia.IValidation<string> => { const validate = (input: any): typia.IValidation<Alias> => {
    const errors = [] as any[];
    const $report = (typia.validateStringify as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is Alias => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input.value || $report(_exceptionable, {
                path: _path + ".value",
                expected: "string",
                value: input.value
            })].every((flag: boolean) => flag);
        return ("object" === typeof input && null !== input || $report(true, {
            path: _path + "",
            expected: "Resolve<ObjectGenericAlias.Alias>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<ObjectGenericAlias.Alias>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<Alias>;
}; const stringify = (input: Alias): string => {
    const $string = (typia.validateStringify as any).string;
    return `{"value":${$string(input.value)}}`;
}; const output = validate(input) as any; if (output.success)
    output.data = stringify(input); return output; })(input), ObjectGenericAlias.SPOILERS);
