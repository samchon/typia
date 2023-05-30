import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";
export const test_validateClone_ObjectGenericAlias = _test_validateClone("ObjectGenericAlias", ObjectGenericAlias.generate, (input) => ((input: any): typia.IValidation<typia.Primitive<ObjectGenericAlias.ISomething<string>>> => { const validate = (input: any): typia.IValidation<ObjectGenericAlias.ISomething<string>> => {
    const __is = (input: any): input is ObjectGenericAlias.ISomething<string> => {
        return "object" === typeof input && null !== input && "string" === typeof input.value;
    };
    const errors = [] as any[];
    const $report = (typia.validateClone as any).report(errors);
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ObjectGenericAlias.ISomething<string> => {
            const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.value || $report(_exceptionable, {
                    path: _path + ".value",
                    expected: "string",
                    value: input.value
                })].every((flag: boolean) => flag);
            return ("object" === typeof input && null !== input || $report(true, {
                path: _path + "",
                expected: "ObjectGenericAlias.Alias",
                value: input
            })) && $vo0(input, _path + "", true) || $report(true, {
                path: _path + "",
                expected: "ObjectGenericAlias.Alias",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
}; const clone = (input: ObjectGenericAlias.ISomething<string>): typia.Primitive<ObjectGenericAlias.ISomething<string>> => {
    const $co0 = (input: any): any => ({
        value: input.value as any
    });
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; })(input), ObjectGenericAlias.SPOILERS);
