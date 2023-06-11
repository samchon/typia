import typia from "../../../../src";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";
import { _test_assertParse } from "../../../internal/_test_assertParse";
export const test_createAssertParse_ObjectIntersection = _test_assertParse("ObjectIntersection", ObjectIntersection.generate, (input: string): typia.Primitive<ObjectIntersection> => { const assert = (input: any): ObjectIntersection => {
    const __is = (input: any): input is ObjectIntersection => {
        return "object" === typeof input && null !== input && ("string" === typeof (input as any).email && "string" === typeof (input as any).name && "boolean" === typeof (input as any).vulnerable);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is ObjectIntersection => {
            const $guard = (typia.createAssertParse as any).guard;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("string" === typeof input.email || $guard(_exceptionable, {
                path: _path + ".email",
                expected: "string",
                value: input.email
            })) && ("string" === typeof input.name || $guard(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            })) && ("boolean" === typeof input.vulnerable || $guard(_exceptionable, {
                path: _path + ".vulnerable",
                expected: "boolean",
                value: input.vulnerable
            }));
            return ("object" === typeof input && null !== input || $guard(true, {
                path: _path + "",
                expected: "ObjectIntersection",
                value: input
            })) && $ao0(input, _path + "", true) || $guard(true, {
                path: _path + "",
                expected: "ObjectIntersection",
                value: input
            });
        })(input, "$input", true);
    return input;
}; input = JSON.parse(input); return assert(input) as any; }, ObjectIntersection.SPOILERS);
