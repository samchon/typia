import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { ObjectInternal } from "../../../structures/ObjectInternal";
export const test_createValidate_ObjectInternal = _test_validate("ObjectInternal", ObjectInternal.generate, (input: any): typia.IValidation<ObjectInternal> => {
    const __is = (input: any): input is ObjectInternal => {
        return "object" === typeof input && null !== input && ("string" === typeof input.id && "string" === typeof input.name);
    };
    const errors = [] as any[];
    const $report = (typia.createValidate as any).report(errors);
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ObjectInternal => {
            const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.id || $report(_exceptionable, {
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
                expected: "ObjectInternal",
                value: input
            })) && $vo0(input, _path + "", true) || $report(true, {
                path: _path + "",
                expected: "ObjectInternal",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
}, ObjectInternal.SPOILERS);
