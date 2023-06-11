import typia from "../../../../src";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";
import { _test_validateParse } from "../../../internal/_test_validateParse";
export const test_createValidateParse_ObjectGenericAlias = _test_validateParse("ObjectGenericAlias", ObjectGenericAlias.generate, (input: string): typia.IValidation<typia.Primitive<ObjectGenericAlias>> => { const validate = (input: any): typia.IValidation<ObjectGenericAlias> => {
    const errors = [] as any[];
    const $report = (typia.createValidateParse as any).report(errors);
    const __is = (input: any): input is ObjectGenericAlias => {
        return "object" === typeof input && null !== input && "string" === typeof (input as any).value;
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ObjectGenericAlias => {
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
}; input = JSON.parse(input); const output = validate(input); return output as any; }, ObjectGenericAlias.SPOILERS);
