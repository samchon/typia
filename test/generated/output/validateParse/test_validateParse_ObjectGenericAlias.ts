import typia from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_validateParse } from "../internal/_test_validateParse";
export const test_validateParse_ObjectGenericAlias = _test_validateParse("ObjectGenericAlias", ObjectGenericAlias.generate, (input) => ((input: string): typia.IValidation<typia.Primitive<Alias>> => { const validate = (input: any): typia.IValidation<Alias> => {
    const errors = [] as any[];
    const $report = (typia.validateParse as any).report(errors);
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
}; input = JSON.parse(input); const output = validate(input); return output; })(input), ObjectGenericAlias.SPOILERS);
