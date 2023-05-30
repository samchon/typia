import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { ObjectOptional } from "../../../structures/ObjectOptional";
export const test_validateClone_ObjectOptional = _test_validateClone("ObjectOptional", ObjectOptional.generate, (input) => ((input: any): typia.IValidation<typia.Primitive<ObjectOptional>> => { const validate = (input: any): typia.IValidation<ObjectOptional> => {
    const __is = (input: any): input is ObjectOptional => {
        const $io0 = (input: any): boolean => (undefined === input.id || "string" === typeof input.id) && (undefined === input.name || "string" === typeof input.name) && (undefined === input.email || "string" === typeof input.email) && (undefined === input.sequence || "number" === typeof input.sequence && Number.isFinite(input.sequence));
        return "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input);
    };
    const errors = [] as any[];
    const $report = (typia.validateClone as any).report(errors);
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ObjectOptional => {
            const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => [undefined === input.id || "string" === typeof input.id || $report(_exceptionable, {
                    path: _path + ".id",
                    expected: "(string | undefined)",
                    value: input.id
                }), undefined === input.name || "string" === typeof input.name || $report(_exceptionable, {
                    path: _path + ".name",
                    expected: "(string | undefined)",
                    value: input.name
                }), undefined === input.email || "string" === typeof input.email || $report(_exceptionable, {
                    path: _path + ".email",
                    expected: "(string | undefined)",
                    value: input.email
                }), undefined === input.sequence || "number" === typeof input.sequence && Number.isFinite(input.sequence) || $report(_exceptionable, {
                    path: _path + ".sequence",
                    expected: "(number | undefined)",
                    value: input.sequence
                })].every((flag: boolean) => flag);
            return ("object" === typeof input && null !== input && false === Array.isArray(input) || $report(true, {
                path: _path + "",
                expected: "ObjectOptional",
                value: input
            })) && $vo0(input, _path + "", true) || $report(true, {
                path: _path + "",
                expected: "ObjectOptional",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
}; const clone = (input: ObjectOptional): typia.Primitive<ObjectOptional> => {
    const $co0 = (input: any): any => ({
        id: input.id as any,
        name: input.name as any,
        email: input.email as any,
        sequence: input.sequence as any
    });
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; })(input), ObjectOptional.SPOILERS);
