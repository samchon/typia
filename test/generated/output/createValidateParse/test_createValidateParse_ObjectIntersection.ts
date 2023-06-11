import typia from "../../../../src";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";
import { _test_validateParse } from "../../../internal/_test_validateParse";
export const test_createValidateParse_ObjectIntersection = _test_validateParse("ObjectIntersection", ObjectIntersection.generate, (input: string): typia.IValidation<typia.Primitive<ObjectIntersection>> => { const validate = (input: any): typia.IValidation<ObjectIntersection> => {
    const errors = [] as any[];
    const $report = (typia.createValidateParse as any).report(errors);
    const __is = (input: any): input is ObjectIntersection => {
        return "object" === typeof input && null !== input && ("string" === typeof (input as any).email && "string" === typeof (input as any).name && "boolean" === typeof (input as any).vulnerable);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ObjectIntersection => {
            const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.email || $report(_exceptionable, {
                    path: _path + ".email",
                    expected: "string",
                    value: input.email
                }), "string" === typeof input.name || $report(_exceptionable, {
                    path: _path + ".name",
                    expected: "string",
                    value: input.name
                }), "boolean" === typeof input.vulnerable || $report(_exceptionable, {
                    path: _path + ".vulnerable",
                    expected: "boolean",
                    value: input.vulnerable
                })].every((flag: boolean) => flag);
            return ("object" === typeof input && null !== input || $report(true, {
                path: _path + "",
                expected: "ObjectIntersection",
                value: input
            })) && $vo0(input, _path + "", true) || $report(true, {
                path: _path + "",
                expected: "ObjectIntersection",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
}; input = JSON.parse(input); const output = validate(input); return output as any; }, ObjectIntersection.SPOILERS);
