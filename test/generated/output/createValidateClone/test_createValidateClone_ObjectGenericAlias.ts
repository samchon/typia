import typia from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_validateClone } from "../internal/_test_validateClone";
export const test_createValidateClone_ObjectGenericAlias = _test_validateClone("ObjectGenericAlias", ObjectGenericAlias.generate, (input: any): typia.IValidation<typia.Primitive<Alias>> => { const validate = (input: any): typia.IValidation<Alias> => {
    const errors = [] as any[];
    const $report = (typia.createValidateClone as any).report(errors);
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
}; const clone = (input: Alias): typia.Primitive<Alias> => {
    const $co0 = (input: any) => ({
        value: input.value
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; }, ObjectGenericAlias.SPOILERS);
