import typia from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_validatePrune } from "../internal/_test_validatePrune";
export const test_validatePrune_ObjectGenericAlias = _test_validatePrune("ObjectGenericAlias", ObjectGenericAlias.generate, (input) => ((input: any): typia.IValidation<Alias> => { const validate = (input: any): typia.IValidation<Alias> => {
    const errors = [] as any[];
    const $report = (typia.validatePrune as any).report(errors);
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
}; const prune = (input: Alias): void => {
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("value" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
}; const output = validate(input); if (output.success)
    prune(input); return output; })(input), ObjectGenericAlias.SPOILERS);
