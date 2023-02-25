import typia from "../../../src";
import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_validateStringify } from "../internal/_test_validateStringify";
export const test_createValidateStringify_ToJsonDouble = _test_validateStringify("ToJsonDouble", ToJsonDouble.generate, (input: Parent): typia.IValidation<string> => { const validate = (input: any): typia.IValidation<Parent> => {
    const errors = [] as any[];
    const $report = (typia.createValidateStringify as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is Parent => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => true;
        return ("object" === typeof input && null !== input && false === Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Resolve<ToJsonDouble.Parent>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<ToJsonDouble.Parent>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<Parent>;
}; const stringify = (input: Parent): string => {
    const $so0 = (input: any) => `{"id":${input.id},"flag":${input.flag}}`;
    return $so0(input.toJSON());
}; const output = validate(input) as any; if (output.success)
    output.data = stringify(input); return output; });
