import typia from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_validateClone } from "../internal/_test_validateClone";
export const test_validateClone_ObjectInternal = _test_validateClone("ObjectInternal", ObjectInternal.generate, (input) => ((input: any): typia.IValidation<typia.Primitive<ObjectInternal>> => { const validate = (input: any): typia.IValidation<ObjectInternal> => {
    const errors = [] as any[];
    const $report = (typia.validateClone as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is ObjectInternal => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input.id || $report(_exceptionable, {
                path: _path + ".id",
                expected: "string",
                value: input.id
            }), "string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            })].every((flag: boolean) => flag);
        return ("object" === typeof input && null !== input || $report(true, {
            path: _path + "",
            expected: "Resolve<ObjectInternal>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<ObjectInternal>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<ObjectInternal>;
}; const clone = (input: ObjectInternal): typia.Primitive<ObjectInternal> => {
    const $co0 = (input: any) => ({
        id: input.id,
        name: input.name
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; })(input), ObjectInternal.SPOILERS);
